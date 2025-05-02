export default function ProductsCard({ name, price, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" className="images" />

      <p>${price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
