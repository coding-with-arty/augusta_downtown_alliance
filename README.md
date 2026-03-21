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

Contributions are welcome and encouraged, particularly improvements related to accessibility, performance, content clarity, and design consistency.

### Contribution Process

<!--  -->

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Clear description of changes"
   ```
4. Push your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a Pull Request

All pull requests are reviewed before being merged to protect the live site.

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
