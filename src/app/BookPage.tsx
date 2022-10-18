import book from "../helpers/books";

const BookPage = ({ bookId }: any) => {
  return (
    <div className="m-10">
      <div className="flex flex-row">
        <div className="w-[300px] h-auto">
          <img src={book[bookId].image} alt="" />
        </div>
        <div className="w-[500px] h-auto m-3">
          <h1 className="text-2xl font-bold">{book[bookId].title}</h1>
          <p className="text-lg">{book[bookId].description}</p>

          <div className="mt-[70px] px-[25px] py-[10px] bg-blue-300 w-fit cursor-pointer">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPage;
