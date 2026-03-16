# 🏋️ Fitness Sports Center

A fully responsive promotional website for Fitness Sports Center — a modern gym offering world-class training, nutrition coaching, and wellness services. Built as part of a Web Development Internship Evaluation.

---

## 🔗 Live Link

https://fitnesssports.free.nf/

> _Replace this with your actual deployed URL (Vercel / Netlify / GitHub Pages)_

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure & semantics |
| CSS3 | Custom styling & animations |
| Bootstrap 5.3 | Responsive grid & UI components |
| JavaScript (ES6+) | Form validation & interactivity |
| Google Fonts | Montserrat & Open Sans typography |
| Formspree | Contact form email delivery |

---

## 📁 Folder Structure

```
fitness-sports-center/
├── index.html          # Main HTML file
├── README.md           # Project documentation
└── assets/
    └── images/         # Trainer & service images
      ├── logo.jpg      # Brand Logo
      └── trainers
        ├── trainer-1.jfif
        ├── trainer-2.jfif
        ├── trainer-3.jfif
        └── trainer-4.avif
    └── script/         # scripts
      └── script.js/     # Javascript file
    └── style/         # scripts
      └── style.js/     # style file
```

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/theekshana-thennakoon/fitness-sports-center.git
cd fitness-sports-center
```

### 2. Add Your Logo

Place your logo file at:
```
assets/images/logo.jpg
```

### 3. Configure Formspree (Contact Form)

1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and set the email to your address
3. Copy your Form ID and open `assets/script/script.js`
4. Find this line and replace `YOUR_FORM_ID`:

```js
'https://formspree.io/f/YOUR_FORM_ID'
```

### 4. Open the Website

Simply open `index.html` in your browser:

```bash
# Option A — open directly
open index.html

# Option B — use Live Server (VS Code extension)
# Right-click index.html → "Open with Live Server"
```

No build tools or dependencies required — it's a pure HTML/CSS/JS project.

---

## 🚀 Deployment

### Deploy to Vercel
```bash
npm i -g vercel
vercel
```

### Deploy to GitHub Pages
1. Push your code to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch → `/ (root)`
4. Your site will be live at `https://your-username.github.io/fitness-sports-center`

---

## ✨ Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Bootstrap 5 grid system
- ✅ Smooth scroll reveal animations
- ✅ Contact form with validation + Formspree email delivery
- ✅ Brand color palette (`#D5A310`, `#292113`, `#040304`, `#2C2C2C`, `#F1F0EB`)
- ✅ Sections: Hero, About, Why Choose Us, Services, Pricing Plans, Trainers, Contact

---

## 📋 Sections

| Section | Description |
|---|---|
| Hero | Full-screen intro with logo, CTA buttons & stats |
| About | Brand story with key value points |
| Why Choose Us | 4 feature cards with icons |
| Services | 5 service cards with photo backgrounds |
| Pricing Plans | 4 membership packages with enroll buttons |
| Trainers | 4 coach profiles with photos |
| Contact | Inquiry form + location/hours info |

---

## 🎨 Design

- **Figma Design:** [View Figma File](https://figma.com/your-figma-link)
- **Color Palette:**

| Name | Hex |
|---|---|
| Gold | `#D5A310` |
| Brown | `#292113` |
| Black | `#040304` |
| Dark | `#2C2C2C` |
| Cream | `#F1F0EB` |

- **Fonts:** Montserrat (headings) · Open Sans (body)

---

## 👨‍💻 Author

**Theekshana Thennakoon**
- GitHub: [@your-username](https://github.com/your-username)
- Email: theekshanathennakoon79@gmail.com

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
