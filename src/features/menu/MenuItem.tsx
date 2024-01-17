import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  
  function addToCartHandler(){
    const newItem={
      pizzaId: id,
      name,
      quantity:1,
      unitPrice,
      totalPrice: unitPrice * 1
    }
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2 " >
      <img src={imageUrl} alt={name}  className= {`h-24 ${soldOut ? 'opacity-70 grayscale' : '' }`}/>
      <div className= "flex flex-col grow">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="uppercase font-medium text-stone-500">Sold out</p>}
          <Button type="small" onClick={addToCartHandler}>Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
