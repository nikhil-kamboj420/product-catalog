import companydata from "../companydata.json";

export const CompanyDetailsHome = () => {
  const data = companydata[0];
  const company = data.company;

  const details = [
    {
      title: "Product Range",
      value: company.product_range,
      icon: company.product_icon,
    },
    {
      title: "Years of Experience",
      value: company.years_of_experience,
      icon: company.years_of_experience_icon,
    },
    {
      title: "Countries Served",
      value: company.countries_served,
      icon: company.countries_icon,
    },
    {
      title: "Manufacturing Units",
      value: company.manufacturing_units,
      icon: company.manufacturing_icons,
    },
    {
      title: "GST No.",
      value: company.gst_no,
      icon: company.gst_icon,
    },
    {
      title: "Nature of Business",
      value: company.nature_of_business,
      icon: company.nature_of_icon,
    },
    {
      title: "Market Covered",
      value: company.markets_covered.join(", "),
      icon: company.markets_icon,
    },
    {
      title: "Number of Employees",
      value: company.employees,
      icon: company.employees_icon,
    },
    {
      title: "Directors",
      value: company.directors.join(" & "),
      icon: company.directors_icon,
    },
  ];

  return (
    <section className="bg-[#f3f3f3]  px-26 flex   flex-col items-center">
      <div className=" rounded-4xl p-10 md:p-14">
        <div className="max-w-3xl text-center">
          <h2 className="text-[2.5rem]  text-[#333] font-bold ">
            {company.tagline}
          </h2>
        </div>
      </div>

      <div className="grid  sm:grid-cols-2 xl:grid-cols-3 max-w-[88vw]">
        {details.map((item) => (
          <div
            key={item.title}
            className="flex items-center gap-5 rounded-4xl p-6"
          >
            <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#f9f9f9] border border-[#e5e5e7]">
              <img
                src={item.icon}
                alt={item.title}
                className="h-23 w-23 object-contain"
              />
            </div>
            <div>
              <p className="text-3xl font-bold  text-[#333]">{item.title}</p>
              <p className="mt-2 text-xl  text-[#333]">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <p className="text-2xl text-[#333] mt-10">{company.description[0]}</p>
        <p className="text-2xl text-[#333] mt-10">
          {company.description[1]}{" "}
          <span className="text-[#00abed] text-3xl cursor-pointer">
            Read more...
          </span>
        </p>
      </div>
    </section>
  );
};
