import LinkButton from "../../UI/LinkButton";
import Button from "../../UI/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { cleartCart } from "./cartSlice";
import EmptyCart from "../cart/EmptyCart";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const username = useSelector((state) => state.user.username);

  if (!cart.length) return <EmptyCart />;
  function handleClearCart() {
    dispatch(cleartCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
