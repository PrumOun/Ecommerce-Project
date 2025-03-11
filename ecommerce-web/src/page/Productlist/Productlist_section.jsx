import React, { useState } from "react";
// Import all product images for better React compatibility
import img_product1 from "../../assets/img/product/product_list_1.png";
import img_product2 from "../../assets/img/product/product_list_2.png";
import img_product3 from "../../assets/img/product/product_list_3.png";
import img_product4 from "../../assets/img/product/product_list_4.png";
import img_product5 from "../../assets/img/product/product_list_5.png";
import img_product6 from "../../assets/img/product/product_list_6.png";
import img_product7 from "../../assets/img/product/product_list_7.png";
import img_product8 from "../../assets/img/product/product_list_8.png";
import img_product9 from "../../assets/img/product/product_list_9.png";
import img_product10 from "../../assets/img/product/product_list_10.png";

export default function Productlist_section() {
  // Define product data as an array of objects
  const allProducts = [
    { id: 1, image: img_product1, name: "Cervical pillow", price: "$5", category: "Pillow" },
    { id: 2, image: img_product2, name: "Geometric decor", price: "$5", category: "Decor" },
    { id: 3, image: img_product3, name: "Foam pillows", price: "$5", category: "Pillow" },
    { id: 4, image: img_product4, name: "Memory foam pillows", price: "$5", category: "Pillow" },
    { id: 5, image: img_product5, name: "Memory foam pillows", price: "$5", category: "Pillow" },
    { id: 6, image: img_product6, name: "Orthopedic relief", price: "$5", category: "Health" },
    { id: 7, image: img_product7, name: "Memory foam pillows", price: "$5", category: "Pillow" },
    { id: 8, image: img_product8, name: "Orthopedic relief", price: "$5", category: "Health" },
    { id: 9, image: img_product9, name: "Geometric decor", price: "$5", category: "Decor" },
    { id: 10, image: img_product10, name: "Geometric decor", price: "$5", category: "Decor" },
  ];

  // State for managing dropdown visibility
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  // State for tracking the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle "Add to Cart" action
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // You can implement your cart logic here, such as updating state or dispatching an action.
  };

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  // Function to handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownVisible(false); // Close the dropdown after selection
  };

  // Filter products based on the selected category
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div>
      {/* Breadcrumb part start */}
      <section className="breadcrumb_part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb_iner">
                <h2>Product List</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Breadcrumb part end */}

      {/* Product list part start */}
      <section className="product_list section_padding">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-4">
              <div className="product_sidebar">
                <div className="single_sedebar">
                  <form action="#">
                    <input type="text" name="search" placeholder="Search keyword" />
                    <i className="ti-search" />
                  </form>
                </div>
                <div className="single_sedebar">
                  <div className="select_option">
                    <div
                      className="select_option_list"
                      onClick={toggleDropdown}
                      style={{ cursor: "pointer" }}
                    >
                      {selectedCategory} <i className="right fas fa-caret-down" />
                    </div>
                    {isDropdownVisible && (
                      <div className="select_option_dropdown">
                        <p onClick={() => handleCategorySelect("All")}>
                          <a href="#">All</a>
                        </p>
                        <p onClick={() => handleCategorySelect("Pillow")}>
                          <a href="#">Pillow</a>
                        </p>
                        <p onClick={() => handleCategorySelect("Decor")}>
                          <a href="#">Decor</a>
                        </p>
                        <p onClick={() => handleCategorySelect("Health")}>
                          <a href="#">Health</a>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="col-md-8">
              <div className="product_list">
                <div className="row">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="col-lg-6 col-sm-6">
                      <div className="single_product_item">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <h3>
                          <a href="single-product.html">{product.name}</a>
                        </h3>
                        <p>From {product.price}</p>

                        {/* Shop Now Button */}
                        <div className="shop_now_button">
                          <button onClick={() => handleAddToCart(product)} className="btn_1">
                            Shop Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="load_more_btn text-center">
                  <a href="#" className="btn_3">Load More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product list part end */}
    </div>
  );
}
