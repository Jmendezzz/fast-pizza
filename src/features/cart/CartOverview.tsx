import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartItems, getTotalCartPrice } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  //Good practice. Check cartSlice out.
  const totalCartQuantity = useSelector(getTotalCartItems);
  const totalCartPrice = useSelector(getTotalCartPrice);
  
  if(totalCartQuantity == 0){return null}
  return (
    <div className="flex fixed w-full bottom-0 items-center justify-between bg-stone-800 p-4  px-4 py-4 uppercase text-stone-200 sm:px-6">
      <p className="space-x-4 font-semibold text-stone-300 ">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
