export default function Book({ title, description, image, click }: any) {
  return (
    <div onClick={click}>
        <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm w-[1000px] h-[270px] m-1">
          <div className="flex justify-space-between">
            <div className="w-96 ">
              <img src={image} alt="diary" />
            </div>
            <div className="pl-3">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
                {title}
              </h5>
              <p className="text-gray-700 text-base mb-4">
                {description}
              </p>
              <button className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase shadow-md ">
                Button
              </button>
            </div>
          </div>
      </div>
    </div>
  );
}
