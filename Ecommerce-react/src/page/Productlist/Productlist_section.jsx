import React from "react";
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
  const products = [
    { id: 1, image: img_product1, name: "Cervical pillow for airplane car office nap pillow", price: "$5" },
    { id: 2, image: img_product2, name: "Geometric striped flower home classy decor", price: "$5" },
    { id: 3, image: img_product3, name: "Foam filling cotton slow rebound pillows", price: "$5" },
    { id: 4, image: img_product4, name: "Memory foam filling cotton Slow rebound pillows", price: "$5" },
    { id: 5, image: img_product5, name: "Memory foam filling cotton Slow rebound pillows", price: "$5" },
    { id: 6, image: img_product6, name: "Sleeping orthopedic sciatica Back Hip Joint Pain relief", price: "$5" },
    { id: 7, image: img_product7, name: "Memory foam filling cotton Slow rebound pillows", price: "$5" },
    { id: 8, image: img_product8, name: "Sleeping orthopedic sciatica Back Hip Joint Pain relief", price: "$5" },
    { id: 9, image: img_product9, name: "Geometric striped flower home classy decor", price: "$5" },
    { id: 10, image: img_product10, name: "Geometric striped flower home classy decor", price: "$5" },
  ];

  // Function to handle "Add to Cart" action
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
    // You can implement your cart logic here, such as updating state or dispatching an action.
  };

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
                    <div className="select_option_list">Category <i className="right fas fa-caret-down" /></div>
                    <div className="select_option_dropdown">
                      <p><a href="#">Category 1</a></p>
                      <p><a href="#">Category 2</a></p>
                      <p><a href="#">Category 3</a></p>
                      <p><a href="#">Category 4</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product List */}
            <div className="col-md-8">
              <div className="product_list">
                <div className="row">
                  {products.map((product) => (
                    <div key={product.id} className="col-lg-6 col-sm-6">
                      <div className="single_product_item">
                        <img src={product.image} alt={product.name} className="img-fluid" />
                        <h3>
                          <a href="single-product.html">{product.name}</a>
                        </h3>
                        <p>From {product.price}</p>

                        {/* Size Buttons */}
                        <div className="size_buttons">
                          <button className="btn_size">S</button>
                          <button className="btn_size">M</button>
                          <button className="btn_size">L</button>
                          <button className="btn_size">XL</button>
                        </div>

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