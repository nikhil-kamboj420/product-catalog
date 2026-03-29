export const Footer = () => {
  return (
    <footer className="bg-slate-900 px-4 py-8 text-slate-100 md:text-white md:min-h-[50vh] md:bg-[url('https://media.istockphoto.com/id/1089282134/photo/abstract-3d-black-cubes-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=A7CtDiMVrHeRpNWqgVm0cHr8P6Kw_68WjueKn0SbnDQ=')] md:bg-cover md:bg-center">
      <div className="mx-auto grid max-w-[95vw] gap-6 md:flex md:justify-around md:items-start md:max-w-[70vw] md:pt-20">
        <div className="rounded-[2rem] bg-slate-800/80 p-5 shadow-sm md:bg-transparent md:p-0">
          <h2 className="text-lg font-semibold md:text-xl md:mb-5">
            Quick Contact
          </h2>
          <ul className="space-y-2 text-sm md:space-y-2">
            <li>M. C. Tools Pvt. Ltd.</li>
            <li>Mr. Anil Aggarwal.</li>
            <li>
              Unit 2: Plot No.1 (Freehold), Part-B, Bahadurgarh, Haryana -
              124507, India.
            </li>
            <li>View Mobile Number</li>
            <li>+91-011-28765760, +91-011-28765761</li>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-slate-800/80 p-5 shadow-sm md:bg-transparent md:p-0">
          <h2 className="text-lg font-semibold md:text-xl md:mb-5">
            General Links
          </h2>
          <ul className="space-y-2 text-sm md:space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Why us?</li>
            <li>Our Clients</li>
            <li>Contact Us</li>
            <li>Site Map</li>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-slate-800/80 p-5 shadow-sm md:bg-transparent md:p-0">
          <h2 className="text-lg font-semibold md:text-xl md:mb-5">Products</h2>
          <ul className="space-y-2 text-sm md:space-y-2">
            <li>Tube Mill Roll</li>
            <li>Flying Saw Cutter</li>
            <li>COC Cutter</li>
            <li>Slitting Cutter</li>
            <li>Fin Disc</li>
            <li>Separator Disc</li>
            <li>Industrial Spacer</li>
            <li>Pipe Threading Chaser</li>
          </ul>
        </div>

        <div className="rounded-[2rem] bg-slate-800/80 p-5 shadow-sm md:bg-transparent md:p-0">
          <h2 className="text-lg font-semibold md:mb-5">More Products</h2>
          <ul className="space-y-2 text-sm md:space-y-2">
            <li>Shear Blades</li>
            <li>Tube Forming Roll</li>
            <li>End Shear Cutter</li>
            <li>Mill Shaft</li>
            <li>Ferrite Rods</li>
            <li>Friction Saw Blades</li>
            <li>Worm Gears</li>
            <li>HSS Cut Off Saw</li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-slate-700 md:max-w-[70vw] md:mx-auto md:my-5" />
      <div className="mx-auto flex max-w-[95vw] flex-col gap-4 text-sm md:mx-auto md:max-w-[70vw] md:flex-row md:justify-between md:items-center">
        <div>
          <p>© Copyright 2012. M. C. Tools Pvt. Ltd.</p>
          <p>
            © Copyright 2012. M. C. Tools Pvt. Ltd. Developed & Managed By
            Weblink.In Pvt. Ltd.
          </p>
        </div>
        <img
          className="h-10 w-auto self-start md:w-40 md:h-15"
          src="https://catalog.wlimg.com/main-common/ei.webp"
          alt="catalog.wlimg image"
        />
      </div>
    </footer>
  );
};
