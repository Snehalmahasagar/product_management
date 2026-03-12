# Product Management Dashboard

## Project Overview

The **Product Management Dashboard** is a React-based web application that allows users to manage products efficiently.
Users can **view, search, filter, add, edit, and delete products** in a clean and responsive dashboard interface.

The project demonstrates **React fundamentals, component architecture, API integration, and state management using React Hooks**.

---

## Tech Stack

* React.js (Functional Components)
* React Hooks (`useState`, `useEffect`)
* Axios / Fetch API
* Tailwind CSS
* Vite
* Git & GitHub

---

## Features

### Product Dashboard

* Displays products in a responsive card layout
* Shows:

  * Product Name
  * Price
  * Category
  * Rating (Star UI)

### Add Product

* Users can add new products using a form
* Controlled inputs with validation
* Form appears only when clicking **Add Product**

### Edit Product

* Existing product data is pre-filled in the form
* Users can update product details

### Delete Product

* Products can be removed from the list with confirmation

### Search

* Dynamic search by product name

### Category Filter

Filter products by category:

* All
* Electronics
* Clothing
* Accessories

### Pagination

* Products are displayed with pagination
* 10 products per page

### Rating System

* Users can assign ratings using star selection
* Ratings display visually as stars on product cards

### Loading & Error Handling

* Loading indicator while fetching products
* Error message if API request fails

### Responsive UI

* Fully responsive layout
* Works on desktop and mobile devices

---

## API Used

Fake Store API

https://fakestoreapi.com/products

---

## Project Structure

```
src
│
├── components
│   ├── ProductCard.jsx
│   ├── ProductForm.jsx
│   ├── ProductList.jsx
│   ├── SearchBar.jsx
│   ├── FilterBar.jsx
│   └── Pagination.jsx
│
├── hooks
│   └── useProducts.js
│
├── pages
│   └── Dashboard.jsx
│
├── services
│   └── api.js
│
├── App.jsx
└── main.jsx
```

---

## Installation

Clone the repository

```
git clone <repo-link>
```

Install dependencies

```
npm install
```

Run the development server

```
npm run dev
```

---

## Screenshots

(Add screenshots of your dashboard UI here)

---

## Author

Snehal Mahasagar
