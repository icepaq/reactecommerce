import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "./counterSlice";
import book from "../helpers/books";

const BookPage = ({ bookId }: any) => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value)


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
              dispatch(incrementByAmount(book[bookId].price));
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
