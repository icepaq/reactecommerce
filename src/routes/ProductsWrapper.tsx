import "../App.css";
import store from "../app/store";
import { Provider } from "react-redux";
import Home from '../app/Home'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <Home />
      </div>
    </Provider>
  );
}

export default App;
