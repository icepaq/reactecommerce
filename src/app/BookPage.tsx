import { useDispatch } from "react-redux";
import { incrementByAmount, addBook } from "./counterSlice";
import book from "../helpers/books";
import Swal from "sweetalert2";
import { useState } from "react";

const BookPage = ({ bookId }: any) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  return (
    <div className="m-10">
      <div className="flex flex-row justify-around">
        <div className="w-[500px] h-auto m-3">
          <h1 className="text-2xl font-bold">{book[bookId].title}</h1>
          <p className="mb-2 text-gray-500">{book[bookId].author}</p>
          <p className="">{book[bookId].description}</p>
        </div>
        <div className="w-[200px] h-auto">
          <img src={book[bookId].image} alt="" />
          <div>
            <p className="text-lg mt-[70px]">Price: ${book[bookId].price}</p>
            Quantity
            <select
              name="cars"
              id="cars"
              defaultValue={quantity}
              onChange={(e) => {
                setQuantity(Number.parseInt(e.target.value));
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div
              onClick={() => {
                for (let i = 0; i < quantity; i++) {
                  dispatch(incrementByAmount(book[bookId].price)); // increment the total price
                  dispatch(addBook(book[bookId])); // add the book to the cart
                }

                Swal.fire({
                  title: "Added to cart!",
                  icon: "success",
                });
              }}
              className="mt-2 px-[25px] py-[10px] bg-blue-300 w-fit cursor-pointer"
            >
              Add to Cart
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
