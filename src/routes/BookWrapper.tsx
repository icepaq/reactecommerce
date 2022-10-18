import { useParams } from "react-router-dom";
import BookPage from "../app/BookPage";
import store from "../app/store";
import { Provider } from "react-redux";

const BookWrapper = () => {
  const params = useParams();

  return (
    <Provider store={store}>
      <BookPage bookId={params.id} />
    </Provider>
  );
};

export default BookWrapper;
