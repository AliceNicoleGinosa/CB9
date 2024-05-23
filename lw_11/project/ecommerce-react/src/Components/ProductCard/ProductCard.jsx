import "./index.css";

const ProductCard = ({ link, name, price, src }) => {
  return (
    <div className="product-card">
      <img src={src} alt={name} className="product-card-image" />
      <a href={link}>
        <h3 className="product-card-title">{name}</h3>
      </a>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
