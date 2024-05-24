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

// SINTASSI PER FILTRARE PRODOTTI
const filterProductsbyCategory = (productsArray, category) => {
  if (!category) {
    return productsArray;
  }
  return productsArray.filter((product) => product.category === category);
};

const App = () => {
  const [categories, setCategories] = useState([]); //metto array perché so che categories è un array
  const [products, setProducts] = useState([]); //metto array perché il prodotto è un array
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(""); //metto stringa vuota per identificare il documento, potevo mettere anche null o undefined
  const [search, setSearch] = useState("");

  //useEffect per feth categorie con array vuoto perché va bene che avvenga una volta sola
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((initcategories) => setCategories(initcategories));

    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((initproducts) => {
        setProducts(initproducts);
      });
  }, []);

  useEffect(() => {
    const filteredProductsbyCategory = filterProductsbyCategory(
      products,
      currentCategory
    );
    setFilteredProducts(filteredProductsbyCategory);
  }, [products, currentCategory]);

  useEffect(() => {
    const filteredProductsbyTitle = products.filter((product) =>
      product.title.includes(search)
    );
    setFilteredProducts(filteredProductsbyTitle);
  }, [products, search]);
  /// useEffect sui prodotti che fa la fetch ogni volta che filtriamo
  // per categoria e avrà una dipendenza specifica nell'array
  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((products) => {
  //       const filteredProducts = filterProductsbyCategory(
  //         products,
  //         currentCategory
  //       );
  //       setProducts(filteredProducts);
  //     });
  // }, [currentCategory]); //currentCatroey diventa una dipendenza di questo useeffetc perché al modificare della categoria mi deve fetchare quei prodotti

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
              <NavigationLink
                HandleClick={() => setCurrentCategory(category)}
                key={index}
                href={`#${index}`}
                text={category}
              />
            );
          })}
        </ul>
        {/* <button onClick={() => setCategories(["cars", ...categories])}>
          Aggiungi categoria{" "}
        </button> */}
      </header>
      <p>
        FILTRA PER NOME
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
        />
      </p>
      <div className="product-list">
        {filteredProducts.map((product, index) => {
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
