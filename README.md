
# Shop On - E-Commerce Application


**Shop On** is a modern e-commerce web application built with **React**, **Tailwind CSS**, and **FakeStoreAPI**. It allows users to browse products, add them to a cart, and view their cart in a modal. The application is fully responsive and features a clean, user-friendly interface.

---

## Features

- **Product Listing**: Browse a wide range of products fetched from the FakeStoreAPI.
- **Add to Cart**: Add products to your cart with a single click.
- **Shopping Cart**: Add/remove products, adjust quantities.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **Alerts**: Display success, warning, and error alerts using a global alert system.
- **Gradient Styling**: Modern UI with gradient backgrounds and buttons.
- **Routing**: Navigation between home and cart pages

---

## Technologies Used

- **Frontend**: React, Tailwind CSS
- **API**: [FakeStoreAPI](https://fakestoreapi.com)
- **Icons**: React Icons (`react-icons`)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Build Tool**: Vite (or Create React App)

---
## Install Dependencies
- npm install 
- npm install tailwindcss @tailwindcss/vite
- npm install react-icons --save 
- npm install prop-types --save
- npm install react-router-dom (V6)


## Start the development environment
- npm run dev


## Folder Structure
shop-on/
├── src/
│   ├── Components/
│   │   ├── Common/
│   │   │   ├── AppHeader.jsx
│   │   │   ├── AppFooter.jsx
│   │   │   └── Alert.jsx
│   │   ├── Products/
│   │   │   ├── ProductList.jsx
│   │   │   └── ProductCard.jsx
│   │   └── Cart/
│   │       └── CartPage.jsx
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
