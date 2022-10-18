import Book from "../components/book";
import { addBook } from "../app/counterSlice";
import { useSelector, useDispatch } from "react-redux";
import store from "../app/store";
import { Provider } from "react-redux";

export default function HomeWrapper() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-fit my-0 mx-auto text-2xl font-bold">Home</div>
      <div className="w-fit my-0 mx-auto text-xl font-bold pt-[30px]">
        Featured
      </div>
      <Book
        click={() => dispatch(addBook({}))}
        title={"Diary of a Wimpy Kid"}
        description={
          "Greg Heffley and his family hit the road for a cross-country camping trip, ready for the adventure of a lifetime."
        }
        image={"/diary.jpg"}
      />

      <div className="w-fit my-0 mx-auto text-xl font-bold pt-[30px]">
        Other Selections
      </div>
      <div className="flex justify-around flex-wrap">
        {books.map((book) => (
          <Book
            key={book.title}
            onClick={() => dispatch(addBook(book))}
            title={book.title}
            description={book.description}
            image={book.image}
          />
        ))}
      </div>
    </div>
  );
}

const books = [
  {
    title: "Diary of a Wimpy Kid",
    description:
      "Greg Heffley and his family hit the road for a cross-country camping trip, ready for the adventure of a lifetime.",
    image: "/diary.jpg",
  },

  {
    title: "Never Split the Difference",
    description:
      "Chriss Voss, an ex-FBI hostage negotiator, shares his strategies for success in business and personal negotiations.",
    image: "/neversplit.jpg",
  },

  {
    title: "Rich Dad Poor Dad",
    description:
      "What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!",
    image: "/richdad.jpg",
  },

  {
    title: "Way of the Wolf",
    description:
      "Jordan Belfort reveals the step-by-step sales and persuasion system proven to turn anyone into a sales-closing, money-earning rock star.",
    image: "/wolf.jpg",
  },
];
