import { Link } from "react-router-dom";

export default function Book({ title, description, image, id, author }: any) {
  return (
    <Link to={`/book/${id}`}>

    <div>
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-[1000px] h-auto m-1">
        <div className="flex justify-space-between">
          <div className="w-96 ">
            <img src={image} alt="diary" />
          </div>
          <div className="pl-3">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {title}
            </h5>
            <div className="text-gray-500 mb-2">
              {author}
            </div>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </div>
        </div>
      </div>
    </div>
    </Link>

  );
}
