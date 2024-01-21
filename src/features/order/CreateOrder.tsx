import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { fetchAddress } from "../user/userSlice";
import { useState } from "react";


// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str: string) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const {username,status: addressStatus, position, address} = useSelector(store=> store.user);
  const isLoadingAddress = addressStatus == 'loading';
  console.log(addressStatus, position, address )

  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";
  const dispatch = useDispatch();
  const formErrors = useActionData();
  const cart = useSelector(getCart);

  if(cart.length == 0){
    return <EmptyCart/>
  }

  return (
    <div className="px-4 py-6">
      <h2>Ready to order? Let's go!</h2>

      <Form method="POST">
        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-32">First Name</label>
          <input type="text" name="customer" required className="input"  defaultValue={username}/>
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label className="sm:basis-32">Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input w-full" />
          </div>
          {formErrors?.phone && <p className="text-xs text-red-600">{formErrors.phone}</p>}
        </div>

        <div className="mb-5 flex gap-2 flex-col sm:flex-row sm:items-center">
          <label  className="sm:basis-32">Address</label>
          <div className="relative flex items-center">
            <input type="text" name="address" disabled={isLoadingAddress} defaultValue={address} required className="input w-full" />
            <span className="absolute right-[3px] z-10">
              {!position.latitude && !position.longitude && <Button type="round" disabled={isLoadingAddress} onClick={(e)=>
              {e.preventDefault(); dispatch(fetchAddress())}}>Get position</Button> }
            </span>
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">Want to yo give your order priority?</label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button type="primary" disabled={isSubmitting}>
            {isSubmitting ? "Placing order..." : "Order now"}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };

  const errors = {};
  if (!isValidPhone(data.phone)) {
    errors.phone =
      "Please provide us your correct number. We need it to contact you.";
  }

  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
