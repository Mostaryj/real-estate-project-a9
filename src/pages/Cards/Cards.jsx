const Cards = () => {
  return (
    <div className="mt-10">
        <h1 className="text-center font-semibold font-pop text-3xl">Some of our places</h1>
        <p className="text-center">In these photos, you can choose your places. Click view <br />details to know more about this place</p>
      <div className="card w-96 bg-base-100 shadow-xl mt-6">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
