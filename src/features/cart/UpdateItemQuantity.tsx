import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

export default function UpdateItemQuantity({ id }: { id: string }) {
  const dispatch = useDispatch();
  return (
    <div className="space-x-2">
      <Button onClick={()=> dispatch(decreaseItemQuantity(id))} type="round">-</Button>
      <Button onClick={()=> dispatch(increaseItemQuantity(id))} type="round">+</Button>
    </div>
  );
}
