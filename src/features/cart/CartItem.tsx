import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6">
        <p>{formatCurrency(totalPrice)}</p>
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
