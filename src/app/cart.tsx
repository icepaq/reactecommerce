import Book from "../components/book";
import { useSelector } from "react-redux";

const Cart = () => {
  const count = useSelector((state: any) => state.counter.value);
  const books = useSelector((state: any) => state.counter.books);

  return (
    <>
      <div className="w-[400px] m-auto pt-12">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="mt-4">
          <h2 className="text-xl">Total - ${count}</h2>
        </div>
        <div className="mt-4">
          {books.map((book: any) => (
            <Book key={book.id} title={book.title} description={book.description} image={book.image}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
