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
    </>
  );
}
