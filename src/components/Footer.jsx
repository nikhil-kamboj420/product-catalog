export const Footer = () => {
  return (
    <footer className="text-white  min-h-[50vh] bg-[url('https://media.istockphoto.com/id/1089282134/photo/abstract-3d-black-cubes-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=A7CtDiMVrHeRpNWqgVm0cHr8P6Kw_68WjueKn0SbnDQ=')] bg-cover bg-center ">
      <div className="flex justify-around items-start max-w-[70vw] pt-20 mx-auto">
        <div>
          <h2 className="text-xl mb-5">Quick Contact</h2>
          <ul>
            <li> M. C. Tools Pvt. Ltd.</li>
            <li> Mr. Anil Aggarwal.</li>
            <li>
              {" "}
              Unit 2: Plot No.1 (Freehold), Part-B, Bahadurgarh, Haryana -
              124507, India.
            </li>
            <li> View Mobile Number</li>
            <li> +91-011-28765760, +91-011-28765761</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl mb-5">General Links</h2>
          <ul>
            <li> Home</li>
            <li> About Us</li>
            <li> Products</li>
            <li> Why us?</li>
            <li>Our Clients</li>
            <li>Contact Us</li>
            <li>Site Map</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl mb-5">Products</h2>
          <ul>
            <li> Tube Mill Roll</li>
            <li> Flying Saw Cutter</li>
            <li> COC Cutter</li>
            <li>Slitting Cutter</li>
            <li>Fin Disc</li>
            <li>Separator Disc</li>
            <li>Industrial Spacer</li>
            <li>Pipe Threading Chaser</li>
          </ul>
        </div>
        <ul className="relative top-13">
          <li> Shear Blades</li>
          <li> Tube Forming Roll</li>
          <li>End Shear Cutter</li>
          <li>Mill Shaft</li>
          <li>Ferrite Rods</li>
          <li>Friction Saw Blades</li>
          <li>Worm Gears</li>
          <li>HSS Cut Off Saw</li>
        </ul>
      </div>
      <hr className="max-w-[70vw] mx-auto my-5"/>
      <div className="my-5 mx-auto max-w-[70vw] flex justify-between items-center">
        <div>
          <p>© Copyright 2012. M. C. Tools Pvt. Ltd.</p>
          <p>
            © Copyright 2012. M. C. Tools Pvt. Ltd. Developed & Managed By
            Weblink.In Pvt. Ltd.
          </p>
        </div>
        <img
        className="w-40 h-15"
          src="https://catalog.wlimg.com/main-common/ei.webp"
          alt="catalog.wlimg image"
        />
      </div>
    </footer>
  );
};
