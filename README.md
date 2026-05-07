# React E-Commerce Store

A modern and responsive e-commerce web application built using React, TypeScript, Tailwind CSS, and React Router.

The application allows users to:

- Browse products
- Filter products by categories
- Sort products by price
- View detailed product information
- Add/remove items from cart
- Persist cart state using LocalStorage
- Share filter URLs using query parameters

---

# Tech Stack

- React
- TypeScript
- React Router DOM
- Tailwind CSS
- Context API
- Vite
- Platzi Fake Store API

API Used:

https://fakeapi.platzi.com

---

# Features

## Home Page

- Product listing grid
- Dynamic category filters
- Sort by price
- Responsive layout
- Query parameter based filters
- Products refetch on filters/sorting

## Product Detail Page

- Dynamic route using `/product/:id`
- Product image
- Product description
- Add to Cart functionality

## Cart Functionality

- Add products to cart
- Remove products from cart
- Cart item count
- Total cart value
- Persistent cart using LocalStorage

## Responsive UI

- Mobile responsive
- Tablet responsive
- Desktop optimized
- Modern Tailwind UI

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/Naveen910/e-commerce-app
```

## 2. Navigate to Project

```bash
cd e-commerce-app
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Run Development Server

```bash
npm run dev
```

Application will run on:

```bash
http://localhost:5173
```

---

# Install Tailwind CSS

If Tailwind is not configured:

## Install Tailwind

```bash
npm install tailwindcss @tailwindcss/vite
```

## Update vite.config.ts

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

## Update index.css

```css
@import "tailwindcss";
```

---

# Available Scripts

## Run Development Server

```bash
npm run dev
```

## Build Application

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

---

# Limitations

- API does not support multiple category filters directly.
- Implemented custom multiple API fetching and merged responses.
- Pagination is not implemented.
- Authentication is not implemented.
- Checkout flow is not implemented.

---

# Additional Features Implemented

- Persistent cart using LocalStorage
- Query param based filters and sorting
- Shareable URLs
- Loading states
- Empty states
- Duplicate product removal
- Sticky cart summary
- Responsive Tailwind design
- Custom dropdown styling

---

# Notes

- Products are dynamically fetched from APIs.
- Filters and sorting survive page refreshes.
- Cart data persists across sessions using LocalStorage.

---

# Author

Naveen Chary

```

```
