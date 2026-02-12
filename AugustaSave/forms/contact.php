<?php

// -----------------------------------------------------------------------------
// CONFIGURATION
// -----------------------------------------------------------------------------

$default_email  = 'info@augustadowntown.com'; // Contact form
$business_email = 'info@augustadowntown.com'; // Business request form

// Where to send a copy if sending FAILS
$fallback_error_email = 'info@augustadowntown.com';

// Load library
if (!file_exists($php_email_form = '../assets/vendor/php-email-form/php-email-form.php')) {
    die('Unable to load the "PHP Email Form" Library!');
}
include($php_email_form);

// -----------------------------------------------------------------------------
// DETECT FORM TYPE
// -----------------------------------------------------------------------------

$is_business_form =
    isset($_POST['business_name']) ||
    isset($_POST['business_type']) ||
    isset($_POST['square_footage']);


    // HONEYPOT CHECK
if (!empty($_POST['hp_field'])) {
    // Bot filled the field → block and stop
    http_response_code(400);
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid submission.'
    ]);
    exit;
}


// -----------------------------------------------------------------------------
// INITIALIZE EMAIL OBJECT
// -----------------------------------------------------------------------------

$contact = new PHP_Email_Form;
$contact->ajax = true;

$contact->to = $is_business_form ? $business_email : $default_email;

// Enable SMTP — recommended
$contact->smtp = array(
  'host' => 'mail.yourdomain.com',
  'username' => 'no-reply@yourdomain.com',
  'password' => 'YOUR_PASSWORD',
  'port' => '587'
);

// -----------------------------------------------------------------------------
// SANITIZE + NORMALIZE FIELDS
// -----------------------------------------------------------------------------

$name    = htmlspecialchars($_POST['name']    ?? 'Unknown');
$email   = htmlspecialchars($_POST['email']   ?? '');
$subject = htmlspecialchars($_POST['subject'] ?? ($_POST['sbject'] ?? 'Form Submission'));
$message = htmlspecialchars($_POST['message'] ?? '');

$contact->from_name  = $name;
$contact->from_email = $email;
$contact->subject    = $subject;

// -----------------------------------------------------------------------------
// BUILD HTML EMAIL BODY
// -----------------------------------------------------------------------------

$html = '
<table cellpadding="8" cellspacing="0" border="0" style="width:100%; font-family:Arial, sans-serif; font-size:14px;">
    <tr>
        <td colspan="2" style="background:#f5f5f5; font-weight:bold; font-size:16px;">
            '. ($is_business_form ? 'Business Information Request' : 'Website Contact Form Submission') .'
        </td>
    </tr>

    <tr><td><strong>Name:</strong></td><td>'. $name .'</td></tr>
    <tr><td><strong>Email:</strong></td><td>'. $email .'</td></tr>';

if (!empty($_POST['phone'])) {
    $html .= '<tr><td><strong>Phone:</strong></td><td>'. htmlspecialchars($_POST['phone']) .'</td></tr>';
}

$html .= '<tr><td><strong>Message:</strong></td><td>'. nl2br($message) .'</td></tr>';

if ($is_business_form) {
    if (!empty($_POST['business_name'])) {
        $html .= '<tr><td><strong>Business Name:</strong></td><td>' . htmlspecialchars($_POST['business_name']) . '</td></tr>';
    }
    if (!empty($_POST['business_type'])) {
        $html .= '<tr><td><strong>Business Type:</strong></td><td>' . htmlspecialchars($_POST['business_type']) . '</td></tr>';
    }
    if (!empty($_POST['square_footage'])) {
        $html .= '<tr><td><strong>Desired Sq. Ft.:</strong></td><td>' . htmlspecialchars($_POST['square_footage']) . '</td></tr>';
    }
    if (!empty($_POST['requirements'])) {
        $html .= '<tr><td><strong>Required Features:</strong></td><td>' . nl2br(htmlspecialchars($_POST['requirements'])) . '</td></tr>';
    }
}

$html .= '</table>';

$contact->message_html = $html;

// -----------------------------------------------------------------------------
// SEND + FAILURE HANDLING
// -----------------------------------------------------------------------------

$result = $contact->send();

if ($result !== 'OK') {

    // Build failure report
    $fail_subject = "Form Submission FAILED: " . $subject;
    $fail_body = "
        <h3>Form submission failed</h3>
        <p><strong>Error returned:</strong> $result</p>
        <p><strong>Sender:</strong> $name ($email)</p>
        <p><strong>Form Type:</strong> ". ($is_business_form ? 'Business Request' : 'Contact Form') ."</p>
        <h4>Original Submitted Content</h4>
        $html
    ";

    // Send emergency fallback email using PHP's mail() (not SMTP)
    $headers  = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: FormSystem@yourdomain.com\r\n";

    @mail($fallback_error_email, $fail_subject, $fail_body, $headers);
}

// Return result for AJAX handler
echo $result;

?>
