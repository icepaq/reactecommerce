import store from "../app/store";
import { Provider } from "react-redux";
import Cart from "../app/cart";

export default function Checkout() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>
  );
}
