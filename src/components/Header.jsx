import { useEffect, useState } from "react";

const mobileBottomNav = [
  { label: "Home", icon: "🏠" },
  { label: "Profile", icon: "👤" },
  { label: "Product", icon: "📦" },
  { label: "Contact", icon: "✉️" },
  { label: "Call Us", icon: "📞" },
];

const Header = () => {
  const [showNumber, setShowNumber] = useState("View Mobile Number");
  const [searchText, setSearchText] = useState("");
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 624 : false
  );

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 624);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
  };

  const renderMobileHeader = () => (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <button type="button" className="rounded-2xl bg-slate-100 p-2 text-xl">
          ☰
        </button>

        <div className="flex items-center gap-3">
          <img
            src="logo.png"
            alt="Company Logo"
            className="h-10 w-10 rounded-xl object-contain"
          />
          <div>
            <h1 className="text-sm font-semibold text-slate-900">M. C. Tools Pvt. Ltd.</h1>
            <p className="text-[11px] text-slate-500">Bahadurgarh, Haryana</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setShowNumber("08037249249")}
          className="rounded-full bg-blue-700 px-3 py-2 text-[11px] font-semibold text-white"
        >
          Call
        </button>
      </div>

      <form onSubmit={handleSearch} className="flex items-center gap-2 px-4 py-3">
        <input
          className="w-full rounded-full border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-800 outline-none focus:border-blue-500"
          type="text"
          placeholder="Search Products"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-full bg-blue-800 px-4 py-3 text-sm font-semibold text-white"
        >
          Go
        </button>
      </form>

      <div className="px-4 pb-24 pt-2">
        <div className="rounded-[30px] border border-slate-200 bg-slate-50 p-4 shadow-sm">
          <div className="mb-3 text-sm font-semibold text-slate-900">Product Range</div>
          <p className="text-sm leading-6 text-slate-700">
            Explore premium industrial cutting tools, rollers, and accessories with quick pricing and details.
          </p>
          <div className="mt-4 flex gap-3">
            <button className="flex-1 rounded-full bg-blue-800 px-4 py-3 text-sm font-semibold text-white">
              Get Best Price
            </button>
            <button className="flex-1 rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-800">
              View Details
            </button>
          </div>
        </div>

        <div className="mt-4 rounded-[30px] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 text-sm font-semibold text-slate-900">Connect with Us</div>
          <div className="grid gap-2 text-sm text-slate-700">
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold">GST</span>
              <span>06AAGCM5238F1ZK</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-slate-100 px-2 py-1 text-xs font-semibold">Location</span>
              <span>Bahadurgarh, Haryana</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-white">
        <nav className="mx-auto flex max-w-3xl justify-between px-4 py-3">
          {mobileBottomNav.map((item) => (
            <button
              key={item.label}
              type="button"
              className="flex flex-col items-center text-[10px] text-slate-700"
            >
              <span className="mb-1 text-lg">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );

  return (
    <header className="md:max-w-screen">
      {isMobile ? (
        renderMobileHeader()
      ) : (
        <>
          <div className="md:flex md:items-center md:justify-start md:mx-23 md:my-5">
            <div>
              <img
                src="logo.png"
                alt="Company Logo"
                className="md:max-w-[20vw] md:relative md:bottom-5"
              />
            </div>

            <div className="md:absolute md:top-0 md:py-7 md:right-0 md:bg-[#333333] md:min-w-[67vw] md:[clip-path:polygon(0_0,100%_0,100%_100%,6%_100%,0_-22%)]">
              <form
                onSubmit={handleSearch}
                className="md:absolute md:right-40 md:top-4 md:flex-row md:items-center"
              >
                <input
                  className="md:bg-white md:py-1 md:text-xl md:min-w-80 md:focus:outline-none md:px-4 md:rounded-l-full"
                  type="text"
                  placeholder="Search text here..."
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
                <button
                  type="submit"
                  className="md:bg-[#00abed] md:text-white md:mx-1 md:text-2xl md:px-4 md:py-0.5 md:rounded-r-full md:hover:bg-[#0077aa] md:transition-colors md:duration-300 md:relative md:top-0.5 md:w-auto"
                >
                  🔍
                </button>
              </form>
            </div>

            <div className="md:relative md:left-30 md:text-center">
              <div className="md:relative md:left-30 md:text-center">
                <img
                  className="md:text-5xl md:relative md:top-15 md:right-15"
                  src="https://catalog.wlimg.com/templates-images/12569/12570/callus-icon.webp"
                  alt="phone icon"
                />
                <h2
                  className="md:text-[#00abed] md:text-3xl md:hover:cursor-pointer"
                  onClick={() => setShowNumber("08037249249")}
                >
                  {showNumber}
                </h2>
                <span className="md:text-2xl md:block">Call Us</span>
              </div>
              <button className="md:relative md:bottom-[7vh] md:left-[46.5vw] md:bg-[#e92f2f] md:text-white md:px-8 md:py-4 md:text-[1.4rem] md:font-bold md:rounded-2xl">
                Send Enquiry
              </button>
            </div>
          </div>

          <nav className="md:max-w-screen md:flex md:justify-end md:relative md:bottom-16">
            <ul className="md:min-w-[98vw] md:text-white md:text-2xl md:font-medium md:flex md:px-30 md:gap-10 md:py-4 md:bg-[#00abed] md:[clip-path:polygon(5%_0,100%_0,100%_100%,0_100%)]">
              <li>
                <a href="#home" className="md:bg-[#e92f2f] md:py-4 md:px-[1.6rem]">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#why">Why us?</a>
              </li>
              <li>
                <a href="#clients">Our Clients</a>
              </li>
              <li>
                <a href="#contact">Contact Us</a>
              </li>
            </ul>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
