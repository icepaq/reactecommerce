import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setBooks, setTotal } from "./counterSlice";
import BookCheckout from "../components/bookcheckout";

const Cart = () => {
  const count = useSelector((state: any) => state.counter.value);
  const books = useSelector((state: any) => state.counter.books);

  const dispatch = useDispatch();

  const [uniqueBooks, setUniqueBooks] = useState<any>([]);

  useEffect(() => {
    // Remove duplicate books and add a quantity property
    
    const _uniqueBooks: any = [];

    books.map((book: any) => {
      let found = _uniqueBooks.find((b: any) => b.title === book.title);
      if (found) {
        found.quantity += 1;
      } else {
        _uniqueBooks.push({ ...book, quantity: 1 });
      }
    })

    setUniqueBooks(_uniqueBooks);
  }, []);

  const reCalculateTotal = () => {
    let total = 0;
    uniqueBooks.map((book: any) => {
      total += book.price * book.quantity;
    });

    dispatch(setTotal(total));
  };

  const changeQuantity = (title: string, quantity: number) => {

    const _uniqueBooks = uniqueBooks;
    let found = _uniqueBooks.find((b: any) => b.title === title);
    if (found) {
      found.quantity = quantity;
    }

    // Iterate over _uniqueBooks. For each book, add it to the books array times the quantitity property
    const _books: any = [];
    _uniqueBooks.map((book: any) => {
      for (let i = 0; i < book.quantity; i++) {
        _books.push(book);
      }
    })

    setUniqueBooks(_uniqueBooks);
    dispatch(setBooks(_books));

    reCalculateTotal();
  }

  const removeBook = (title: string) => {

    const filteredBooks = uniqueBooks.filter((book: any) => book.title !== title);

    console.log(filteredBooks);

    setUniqueBooks(filteredBooks);
    dispatch(setBooks(filteredBooks));

    reCalculateTotal();
  }

  return (
    <>
      <div className="w-fit m-auto pt-12">
        <h1 className="text-2xl font-bold">Cart</h1>
        <div className="mt-4">
          <h2 className="text-xl">Total - ${count}</h2>
        </div>
        <div className="mt-4">
          {uniqueBooks.map((book: any) => (
            <BookCheckout
              key={book.id}
              title={book.title}
              description={book.description}
              image={book.image}
              price={book.price}
              quantity={book.quantity}
              changeQuantity={changeQuantity}
              removeBook={removeBook}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
