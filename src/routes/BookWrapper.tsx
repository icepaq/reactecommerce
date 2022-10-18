import { useParams } from "react-router-dom";
import BookPage from "../app/BookPage";

const BookWrapper = () => {

  const params = useParams();

  return (
    <div>
      <BookPage bookId={params.id} />
    </div>
  )
}

export default BookWrapper