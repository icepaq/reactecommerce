export default function BookCheckout({
  key,
  title,
  description,
  image,
  price,
  quantity,
  changeQuantity,
  removeBook
}: any) {
  return (
    <div key={'KEY_' + key}>
      <div className="block p-6 rounded-lg shadow-lg bg-white h-auto m-1">
        <div className="flex justify-space-between w-[700px]">
          <div className="w-96 ">
            <img src={image} alt="diary" />
          </div>
          <div className="pl-3">
            <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
              {title}
            </h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
          </div>
          <div className="pl-3 w-[600px]">
            <div>Price - ${price}</div>
            <div>
              Quantity -
              <select
                name="cars"
                id="cars"
                defaultValue={quantity}
                onChange={(e) => {
                  changeQuantity(title, e.target.value);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="w-2 cursor-pointer" onClick={() => {removeBook(title)}}>
            X
          </div>
        </div>
      </div>
    </div>
  );
}
