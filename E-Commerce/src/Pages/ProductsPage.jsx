import ProductsCard from "../Components/ProductsCard";

export default function ProductsPage() {
  const products = [
    {
      id: 1,
      name: "T-Shirt",
      price: 20,
      image: "/images/tshirtImg.jpg",
    },
    {
      id: 2,
      name: "Sneakers",
      price: 50,
      image: "/images/sneakersImg.jpg",
    },
    {
      id: 3,
      name: "Hat",
      price: 15,
      image: "/images/hatImg.jpg",
    },
  ];

  return (
    <div>
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((item) => (
          <ProductsCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}
