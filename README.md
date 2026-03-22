# <center>Augusta Downtown Alliance</center>

<p align="center">
  <img src="/assets/images/media/logo.png" alt="ADA Logo" width="300"/>
</p>

The official website for the **Augusta Downtown Alliance**, designed to promote downtown Augusta, Maine’s businesses, events, culture, and community life.

This repository contains the full source code for the live website. It is publicly accessible and connected to GitHub—**any push to the main branch automatically deploys and updates the live site**.

Developed and maintained by **Arthur Belanger (coding-with-arty)** in partnership with the **Augusta Downtown Alliance**.

---

## 📘 Overview

This project is a modern, responsive front-end website built to support downtown engagement, tourism, and economic development. The site follows a clean, scalable structure where **each page lives in its own directory with an `index.html` file**, improving maintainability and future growth.

The site emphasizes accessibility, performance, and mobile-first design while remaining easy for contributors and future developers to understand.

---

## 🚀 Deployment & Workflow

- This repository is connected directly to the live production website
- **All approved pushes automatically deploy**
- No manual upload or FTP steps are required
- Changes should be tested locally before pushing

> ⚠️ Because this repository deploys directly to production, please follow contribution guidelines carefully.

---

## 🛠️ Tech Stack

- HTML5
- CSS3 / SCSS
- Bootstrap 5
- JavaScript
- Font Awesome
- Google Fonts & Icons
- Node.js (optional, for tooling and builds)
- Static hosting with CDN, caching, and security

---

## 📁 Project Structure

The site uses a **folder-per-page** structure. Each public page is served from its own directory with an `index.html` file.

```
/
├── index.html                  # Home page
├── /businesses-features/
│   └── index.html
├── /downtown-life/
│   └── index.html
├── /events-calendar/
│   └── index.html
├── /for-businesses/
│   └── index.html
├── /contact/
│   └── index.html
├── /error/
│   └── index.html
│
├── /assets/
│   ├── css/
│   ├── scss/
│   ├── js/
│   ├── images/
│   └── vendor/
│
|── README.md
|__ humans.txt
|__ manifest.json
|__ readme.txt
|__ sitemap.xml
```

### Assets Directory

- **assets/css** – Compiled CSS files
- **assets/scss** – Source SCSS files
- **assets/js** – JavaScript functionality
- **assets/images** – Images and media assets
- **assets/vendor** – Third-party libraries

This structure supports clean URLs (e.g. `/events-calendar/`) and simplifies long-term maintenance.

---

## ⚙️ Local Development

### 1. Clone the repository

```bash
git clone https://github.com/coding-with-arty/augusta_downtown_alliance.git
cd augusta_downtown_alliance
```

### 2. Install dependencies (optional)

If using Node.js tooling:

```bash
npm install
```

### 3. Run locally

A local server is recommended for development:

```bash
npx serve
```

<!--  -->

The site will typically be available at:

```
http://localhost:3000
```

---

## 🤝 Contributing

## 📥 Submitting Updates, Events, or Issues

This project is designed to accept contributions from both developers **and non-technical users**. If you are not comfortable working with code, you can still contribute easily.

### 🔹 Option 1: Submit an Issue (Recommended)

Use this for:
- Reporting bugs or broken pages
- Submitting new events
- Updating business listings
- General feedback

**Steps:**
1. Go to the Issues page:
   https://github.com/coding-with-arty/augusta_downtown_alliance/issues
2. Click **"New Issue"**
3. Select the appropriate template
4. Fill out the form and submit

> This is the fastest and easiest way to contribute. No coding required.

---

### 🔹 Option 2: Comment on Existing Issues

If someone has already submitted a similar request:

1. Open the issue
2. Scroll to the bottom
3. Add your comment or additional details

This helps improve accuracy and avoids duplicate submissions.

---

### 🔹 Option 3: Contribute Code or Content (Pull Requests)

For users comfortable editing files:

1. Fork the repository
2. Make your changes (fixes, updates, improvements)
3. Commit your changes
4. Open a Pull Request

Examples of contributions:
- Fixing typos or broken links
- Updating business or event information
- Improving layout or performance
- Enhancing accessibility

---

### ⚠️ Important Notes

- This repository deploys directly to the live site
- All changes are reviewed before being published
- Keep contributions focused and clearly described
- When possible, include screenshots or references

---

### 💡 Tip for Non-Developers

If you’re unsure what to do, **use the Issue system**.  
It’s specifically designed to guide you through submitting updates without needing technical knowledge.
---

## 🧾 License

This project is licensed under

#### Belanger Non-Commerrcial Open Licencse(BNOL)

You are free to use, modify, and distribute this code with proper attribution.

---

## 🧩 Credits

- **Developer:** Arthur Belanger (https://github.com/coding-with-arty)
- **Organization:** https://www.augustadowntown.com/
- Built as a volunteer initiative supporting downtown revitalization, local businesses, and community engagement.

---

## 🌱 Future Development

Potential enhancements include:

- Improved accessibility and SEO
- Expanded event listings and integrations
- Performance optimizations
- Optional CMS or admin-friendly content updates
- Continued design and UX refinements

---

## 📬 Contact

For questions, feedback, or collaboration:

- **GitHub:** https://github.com/coding-with-arty
- **Organization:** https://www.augustadowntown.com/
