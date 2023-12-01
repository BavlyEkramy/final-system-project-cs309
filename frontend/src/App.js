import Product from "./components/Product";
import { useState, useEffect } from "react";

function App() {
  // const [cs309, setCs309] = useState("");
  // const [productsFilter, setProductsFilter] = useState("");
  const products = [
    { name: "laptop1", id: "15" },
    { name: "laptop2" },
    { name: "laptop3" },
    { name: "laptop4" },
    { name: "laptop5" },
    { name: "laptop6" },

  ];
  useEffect(() => {
    let heart_icon = document.querySelectorAll(".product-item .product-info i")
    heart_icon.forEach((z) => {
      z.onclick = function () {
        console.log("message")
        if (z.className === "fas fa-heart") {
          z.className = "far fa-heart";
        } else z.className = "fas fa-heart";
      }
    })
  })
  return (
    <>
      {products.map((p) => (
        <Product />
      ))}
    </>
  );

}

export default App;
