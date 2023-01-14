import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import SHOP_DATA from "../../data/shop.json";

const Shop = () => {
  return (
    <div>
      {
        SHOP_DATA.map(({ id, name }) => (
          <div key={ id }>
            <h1> { name } </h1>
          </div>
        ))
      }
    </div>
  );
};

export default Shop;