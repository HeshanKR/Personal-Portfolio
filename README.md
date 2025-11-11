# Heshan Ratnaweera - Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my projects, skills, and experience as a software developer.

## 🚀 Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Components**: Dynamic project showcase and contact form
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: CSS3 with custom animations
- **Deployment**: Vercel
- **Email Service**: EmailJS for contact form

## 📁 Project Structure

```
my-portfolio/
├── docs/                    # Project documentation
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images and media files
│   ├── components/         # React components
│   │   ├── About/         # About section
│   │   ├── Certifications/ # Certifications section
│   │   ├── Contact/       # Contact form
│   │   ├── Education/     # Education section
│   │   ├── Experience/    # Work experience
│   │   ├── Header/        # Navigation header
│   │   ├── Hero/          # Hero section
│   │   ├── Projects/      # Projects showcase
│   │   ├── Skills/        # Skills section
│   │   └── shared/        # Shared components
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── .env                    # Environment variables (ignored)
├── vercel.json            # Vercel deployment config
└── package.json           # Dependencies and scripts
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist/` folder to your hosting provider

## 📧 Contact

**Heshan Ratnaweera**
- Email: heshan.ratnaweera@gmail.com
- LinkedIn: [Heshan Ratnaweera](https://www.linkedin.com/in/heshan-ratnaweera-027hkr/)
- GitHub: [HeshanKR](https://github.com/HeshanKR)

## 📄 License

This project is open source and available under the [ License](LICENSE).
