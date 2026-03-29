import products from "../products.json";
import useMobile from "../hooks/useMobile";

export const ProductRange = () => {
  const isMobile = useMobile();
  const items = products.slice(0, 8);

  return (
    <section className="flex flex-col items-center bg-slate-50 py-10">
      <h2 className="text-4xl text-[#333]">
        Product <span className="text-[#00abed]">Range</span>
      </h2>

      {isMobile ? (
        <div className="mx-auto mt-6 grid w-full max-w-[95vw] gap-4">
          {items.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-[2rem] bg-white shadow-md"
            >
              <img
                className="h-[220px] w-full object-cover"
                src={product.url}
                alt={product.name}
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-slate-900">
                  {product.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Explore our industrial-grade {product.name} with premium
                  finish and fast delivery.
                </p>
                <div className="mt-5 flex gap-3">
                  <button className="flex-1 rounded-full bg-blue-800 px-4 py-3 text-sm font-semibold text-white">
                    Get Best Price
                  </button>
                  <button className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900">
                    View Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap max-w-[100vw] justify-center gap-10 mt-10">
          {items.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-3xl shadow-lg w-100 h-100 group-hover:bg-[#fbfbfb]"
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={product.url}
                alt={product.name}
              />
              <div className="absolute inset-0 bg-[#31384e]/60 z-10 group-hover:bg-[#868e9c]/0 transition-all duration-300" />
              <span className="absolute inset-0 z-20 flex items-center justify-center text-3xl text-white font-semibold text-center px-4 hover:opacity-0 transition-opacity duration-300">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
