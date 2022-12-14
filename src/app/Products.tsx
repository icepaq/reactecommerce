import Book from "../components/book";
import { addBook } from "./counterSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "./store";
import { Provider } from "react-redux";
import books from "../helpers/books";

export default function HomeWrapper() {

  return (
    <div>
      <div className="w-fit my-0 mx-auto text-2xl font-bold">Home</div>
      <div className="w-fit my-0 mx-auto text-xl font-bold pt-[30px]">
        Featured
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        <Book
          key={"KEY_featured"}
          title={"Diary of a Wimpy Kid"}
          description={
            "Greg Heffley and his family hit the road for a cross-country camping trip, ready for the adventure of a lifetime."
          }
          image={"/diary.jpg"}
          id={0}
          author={"Jeff Kinney"}
        />
      </div>

      <div className="w-fit my-0 mx-auto text-xl font-bold pt-[30px]">
        Other Selections
      </div>
      <div className="flex justify-around flex-wrap">
        {books.map((book, index) => (
          <Book
            key={book.title}
            title={book.title}
            description={book.description}
            image={book.image}
            id={index}
            author={book.author}
          />
        ))}
      </div>
    </div>
  );
}
