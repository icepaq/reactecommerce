import "../App.css";
import store from "../app/store";
import { Provider } from "react-redux";
import Products from '../app/Products'

export default function ProductsWrapper() {
  return (
    <Provider store={store}>
      <div className="App">
          <Products />
      </div>
    </Provider>
  );
}
