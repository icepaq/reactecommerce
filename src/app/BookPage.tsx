import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, addBook } from "./counterSlice";
import book from "../helpers/books";

const BookPage = ({ bookId }: any) => {

  const dispatch = useDispatch();

  return (
    <div className="m-10">
      <div className="flex flex-row">
        <div className="w-[300px] h-auto">
          <img src={book[bookId].image} alt="" />
        </div>
        <div className="w-[500px] h-auto m-3">
          <h1 className="text-2xl font-bold">{book[bookId].title}</h1>
          <p className="">{book[bookId].description}</p>
          <p className="text-lg mt-[70px]">Price: ${book[bookId].price}</p>

          <div
            onClick={() => {
              dispatch(incrementByAmount(book[bookId].price)); // increment the total price
              dispatch(addBook(book[bookId])); // add the book to the cart
            }}
            className="mt-2 px-[25px] py-[10px] bg-blue-300 w-fit cursor-pointer"
          >
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
