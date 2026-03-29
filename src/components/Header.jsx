import { useState } from "react";

const Header = () => {
  const [showNumber, setShowNumber] = useState("View Mobile Number");
  const [searchText, setSearchText] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchText);
  };

  return (
    <header className="max-w-screeen">
      {/* Top Section with Logo and Contact */}
      <div className="flex items-center justify-start mx-23 my-5 gap-10">
        {/* Logo Section */}
        <div>
          <img  src="logo.png" alt="Company Logo" className="max-w-[20vw]"/>
        </div>

        {/* Search Section */}
        <div className="absolute top-0 py-7  right-0 bg-[#333333] min-w-[67vw] [clip-path:polygon(0_0,100%_0,100%_100%,6%_100%,0_-22%)]">
          <form onSubmit={handleSearch} className="absolute right-40 top-4" >
            <input
            className="bg-white py-1 text-xl min-w-80  focus:outline-none  px-4 rounded-l-full"
              type="text"
              placeholder="Search text here..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button type="submit"  className="bg-[#00abed] text-white mx-1 text-2xl px-4 py-0.5 rounded-r-full hover:bg-[#0077aa] transition-colors duration-300 relative top-0.5">🔍</button>
          </form>
        </div>

        {/* Contact Section */}
        <div>
          <div className="relative left-30  text-center">
            <img className="text-5xl relative top-15 right-15" src="https://catalog.wlimg.com/templates-images/12569/12570/callus-icon.webp" alt="phone icon"/>
            <h2 className="text-[#00abed]  text-3xl hover: cursor-pointer" onClick={() => setShowNumber("08037249249")}>{showNumber}</h2>
            <span className="text-2xl block">Call Us</span>
          </div>
          <button className="absolute top-[7.8vh]  right-41 bg-[#e92f2f] text-white px-8 py-4 text-[1.4rem] font-bold rounded-2xl">Send Enquiry</button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="max-w-screen flex   justify-end">
        <ul className= "min-w-[98vw]   text-white text-2xl bold flex px-30 gap-10 py-4   bg-[#00abed]  [clip-path:polygon(5%_0,100%_0,100%_100%,0_100%)]">
          <li >
            <a href="#home" className="bg-[#e92f2f] py-4 px-[1.6rem]">Home</a>
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
    </header>
  );
};

export default Header;
