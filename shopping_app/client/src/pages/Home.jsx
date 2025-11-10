import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your One-Stop Shop for Everything 🛍️</h1>
          <p>
            Discover amazing deals, exclusive collections, and fast delivery
            right at your doorstep.
          </p>
          <div className="hero-buttons">
            <Link to="/user" className="btn-primary">
              Shop Now
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://cdn.dribbble.com/userupload/11653165/file/original-35074d091a4b8decb3ab52bff30c3e9c.png?resize=1200x900"
            alt="E-commerce banner"
          />
        </div>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3531/3531809.png"
              alt="Clothing"
            />
            <h3>Clothing</h3>
          </div>
          <div className="category-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png"
              alt="Electronics"
            />
            <h3>Electronics</h3>
          </div>
          <div className="category-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3194/3194576.png"
              alt="Home Decor"
            />
            <h3>Home Decor</h3>
          </div>
          <div className="category-card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3022/3022821.png"
              alt="Beauty"
            />
            <h3>Beauty</h3>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="product-grid">
          {[1, 2, 3, 4].map((item) => (
            <div className="product-card" key={item}>
              <img
                src={`https://source.unsplash.com/400x400/?product,${item}`}
                alt="Product"
              />
              <h3>Product {item}</h3>
              <p>₹{999 + item * 50}</p>
              <button className="btn-primary small">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <h2>Join the MyShop Family ❤️</h2>
        <p>Sign up today and get 10% off your first order!</p>
        <Link to="/register" className="btn-secondary large">
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
