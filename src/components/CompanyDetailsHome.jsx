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
    <section className="bg-[#f3f3f3] px-4 py-10 md:px-26 md:flex md:flex-col md:items-center">
      <div className="mx-auto w-full max-w-[95vw] rounded-4xl bg-white p-6 shadow-sm md:max-w-3xl md:p-14">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#333] md:text-[2.5rem]">
            {company.tagline}
          </h2>
        </div>
      </div>

      <div className="grid gap-4 pt-6 md:grid-cols-3 md:gap-6 md:max-w-[88vw]">
        {details.map((item) => (
          <div
            key={item.title}
            className="grid grid-cols-[56px_1fr] items-center gap-4 rounded-4xl bg-white p-4 shadow-sm md:flex md:items-center md:gap-5 md:p-6"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f9f9f9] border border-[#e5e5e7] p-3 md:h-36 md:w-36">
              <img
                src={item.icon}
                alt={item.title}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-[#333] md:text-3xl">
                {item.title}
              </p>
              <p className="mt-1 text-base text-[#333] md:mt-2 md:text-xl">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 w-full max-w-[95vw] md:max-w-[88vw]">
        <p className="text-sm leading-7 text-[#333] md:text-2xl">
          {company.description[0]}
        </p>
        <p className="mt-4 text-sm leading-7 text-[#333] md:mt-10 md:text-2xl">
          {company.description[1]}{" "}
          <span className="text-[#00abed] md:text-3xl">Read more...</span>
        </p>
      </div>
    </section>
  );
};
