# 📸 Comeet

Comeet is a powerful, modern web application built with **Next.js 15**, **Tailwind CSS 4**, **React 19**, and **Stream Video SDK**.  
It enables users to enhance images, schedule video meetings, and collaborate seamlessly, featuring secure authentication and a beautiful, fast UI.

---

## 🚀 Tech Stack

- **Next.js 15** (App Router + Turbopack)
- **Tailwind CSS 4** (with custom themes and animations)
- **React 19**
- **Clerk** (Authentication & User Management)
- **Stream.io** (Video and chat SDKs)
- **Radix UI** (Accessible UI components)
- **Lucide React Icons**
- **Sonner** (Notifications)
- **Next Themes** (Dark/Light Mode)
- **TypeScript**

---

## 🛆 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/comeet.git
cd comeet
```

Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

---

## 🛠️ Running the App Locally

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Scripts

| Script         | Description                        |
|----------------|------------------------------------|
| `npm run dev`  | Start the development server with Turbopack |
| `npm run build`| Build the production version        |
| `npm run start`| Start the production server         |
| `npm run lint` | Run ESLint to check for errors      |

---

## 🌙 Dark Mode Support

Comeet fully supports dark mode using `next-themes`.  
Toggle between light and dark seamlessly across the entire UI.

---

## 🖍️ Tailwind Customizations

- Full design tokens (colors, radii, animations) configured via `tailwind.config.ts`
- Custom palette (`comeet.primary`, `comeet.secondary`, `comeet.accent`)
- Smooth animations (`fade-in`, `slide-up`, accordion, etc.)

---

## 🔒 Authentication

User authentication and session management are handled by [Clerk.dev](https://clerk.dev/).

---

## 📹 Video & Communication

Real-time video calling and messaging are powered by [Stream Video SDK](https://getstream.io/video/).

---

## 📁 Project Structure

```bash
├── app/           # Next.js App Directory
├── components/    # Reusable UI Components
├── pages/         # (If any legacy routing)
├── public/        # Static assets
├── src/           # Application Logic
├── styles/        # Global styles
├── tailwind.config.ts # Tailwind configuration
├── package.json   # Project Metadata
└── README.md      # Project Overview
```

---

## ✨ Features

- 🚀 Fast, SEO-optimized, responsive
- 🎨 Fully themed & customizable
- 🔒 Secure Auth with Clerk
- 📹 Stream.io powered real-time video
- 🎥 AI-Powered Image Enhancements *(Optional future)*

---

## 📢 Contributing

Feel free to submit issues, pull requests, or suggest new features!

1. Fork this repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

# 🚀 Let's make collaboration easy with **Comeet**!

