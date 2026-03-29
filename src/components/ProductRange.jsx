import products from "../products.json";

export const ProductRange = () => {
  return (
    <section className="flex flex-col justify-center items-center py-15">
      <h2 className="text-4xl text-[#333]">
        Product <span className="text-[#00abed]">Range</span>
      </h2>
      <div className="flex flex-wrap max-w-[90vw] justify-center  gap-10 mt-10">
        {products
          .slice(
            0,
            products.findIndex((p) => p.id === 8 + 1),
          )
          .map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg w-100 h-100 group-hover:bg-[#fbfbfb]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={product.url}
                alt={product.name}
              />
              <div className="absolute inset-0 bg-[#31384e]/60 z-10 group-hover:bg-[#868e9c]/0 transition-all duration-300"></div>
              <span className="absolute inset-0 z-20 flex items-center justify-center text-3xl text-white font-semibold text-center px-4 hover:opacity-0 transition-opacity duration-300">
                {product.name}
              </span>
            </div>
          ))}
      </div>
    </section>
  );
};
