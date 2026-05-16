# CodeTetra 3D | Next.js + Three.js Infrastructure Showcase

A high-performance, cinematic 3D web experience built with **Next.js 14**, **React Three Fiber**, and **Framer Motion**. This project mimics the premium, scroll-driven interaction of high-end tech hardware landing pages (e.g., Keychron, Apple, NVIDIA).

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Three.js](https://img.shields.io/badge/Three.js-R158-orange)

---

## 🚀 Features

* **Scroll-Driven 3D Animation:** Using `ScrollControls` to sync GPU model "explosions" and transitions with text overlays.
* **Dynamic GPU Model:** A modular H100-inspired model built with Three.js primitives for rapid loading and GPU-accelerated performance.
* **Cinematic Lighting:** ACESFilmic tone mapping with custom environment maps and emissive "neon" hardware glows.
* **Fluid UI/UX:** Trailing ring custom cursor and Framer Motion-powered text reveals.
* **Responsive Design:** Fully fluid layout using Tailwind CSS designed for high-resolution displays.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
* **3D Engine:** [Three.js](https://threejs.org/)
* **React Bridge:** [React Three Fiber (R3F)](https://docs.pmnd.rs/react-three-fiber)
* **3D Helpers:** [Drei](https://github.com/pmndrs/drei)
* **Animations:** [Framer Motion](https://www.framer.com/motion/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

---

## 📦 Project Structure

```text
├── app/
│   ├── layout.tsx       # Root layout & Global styles
│   └── page.tsx         # Entry point (Hydrates the Scene)
├── components/
│   ├── 3d/
│   │   ├── Scene.tsx    # R3F Canvas & Scroll logic
│   │   └── GPUModel.tsx # The interactive 3D hardware
│   └── ui/
│       └── Cursor.tsx   # Custom trailing cursor
├── public/              # Static assets & Environment maps
└── tailwind.config.ts   # Custom theme & Branding
