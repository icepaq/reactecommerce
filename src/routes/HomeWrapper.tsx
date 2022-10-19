import { Link } from "react-router-dom";
import Book from "../components/book";

export default function HomeWrapper() {
  return (
    <>
      <div className="mt-5 text-center font-bold text-2xl">Redux Bookstore</div>
      <div className="mt-5 text-center text-xl">Today's Pick</div>
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
      <Link to={"product"}>
        <div className="mt-5 text-center text-xl bg-cyan-200 w-fit m-auto px-5 py-2 rounded cursor-pointer">
          Other Selections
        </div>
      </Link>
    </>
  );
}
