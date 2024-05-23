import { useState, useEffect } from "react";
import NavigationLink from "./Components/NavigationLink.jsx";
import ProductCard from "./Components/ProductCard/ProductCard.jsx";
import "./App.css";

// Utilizzo di await a top-level
// const initialCategories = await fetch(
//   "https://fakestoreapi.com/products/categories"
// ).then((res) => res.json());

// const initialProducts = await fetch("https://fakestoreapi.com/products").then(
//   (res) => res.json()
// );

const App = () => {
  const [categories, setCategories] = useState([]); //metto array perché so che categories è un array
  const [products, setProducts] = useState([]); //metto array perché il prodotto è un array

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((categories) => setCategories(categories));

    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((products) => setProducts(products));
  }, []);
  // esempio Async Await dentro a una funzione

  // const getProducts=async()=>{
  // const res= await fetch("https://fakestoreapi.com/products")
  // const products= await res.json()
  // console.log(products)
  // }
  // getProducts()

  return (
    <>
      <header className="site--bar">
        <h1>Edge-Commerce</h1>
        <ul className="navigation">
          {categories.map((category, index) => {
            return (
              <NavigationLink key={index} href={`#${index}`} text={category} />
            );
          })}
        </ul>
        {/* <button onClick={() => setCategories(["cars", ...categories])}>
          Aggiungi categoria{" "}
        </button> */}
      </header>

      <div className="product-list">
        {products.map((product, index) => {
          return (
            <ProductCard
              key={index}
              name={product.title}
              link={"#" + index}
              price={product.price}
              src={product.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default App;
