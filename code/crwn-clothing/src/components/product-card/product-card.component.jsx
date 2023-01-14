import Button from "../button/button.component";
import "./product-card.styles.scss";

export const ProductCard = ({product}) => {
  const {name, imageUrl, price} = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button> Add to cart</Button>
    </div>
  );
}