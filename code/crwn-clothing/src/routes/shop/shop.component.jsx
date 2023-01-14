import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";

const Shop = () => {
  const [setHasShopped] = useContext(UserContext);
  setHasShopped(true);

  return "I am shop component"
};

export default Shop;