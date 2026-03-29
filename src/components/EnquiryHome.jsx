import companydata from "../companydata.json";

export const EnquiryHome = () => {
  const data = companydata[0];
  const company = data.company;

  const formFields = (
    <>
      <input
        type="text"
        placeholder="Product / Service Looking for"
        className="w-full md:text-xl  rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
      />
      <input
        type="text"
        placeholder="Your Name"
        className="w-full md:text-xl  rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full md:text-xl rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
      />
      <select className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 md:text-xl text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200">
        <option className="text-sm">India</option>
        <option className="text-sm">USA</option>
        <option className="text-sm">UK</option>
      </select>
      <div className="flex gap-2">
        <span className="flex items-center justify-center md:text-xl rounded-3xl border border-gray-300 bg-white px-4 py-3 text-sm">
          +91
        </span>
        <input
          type="text"
          placeholder="Phone / Mobile"
          className="flex-1 rounded-3xl border border-gray-300 bg-white px-4 py-3 md:text-xl text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
        />
      </div>
      <textarea
        rows="5"
        placeholder="Leave a Message for us"
        className="w-full rounded-3xl border border-gray-300 bg-white px-4 py-3 md:text-xl text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200"
      ></textarea>
      <button
        type="submit"
        className="w-full rounded-3xl md:text-xl bg-[#00abed] px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Send Message
      </button>
    </>
  );

  return (
    <section className="bg-gray-100 px-4 py-10 md:bg-gray-100 md:py-12 md:px-16 md:flex md:justify-center md:items-center">
      <div className="mx-auto w-full max-w-[95vw] md:max-w-[90vw]">
        <div className="space-y-8 md:grid md:grid-cols-2 ">
          <div className="rounded-4xl bg-white p-6 shadow-sm md:p-10">
            <h2 className="text-3xl font-semibold md:text-4xl md:mb-6">
              Quick <span className="text-[#00abed]">Enquiry</span>
            </h2>
            <form className="space-y-4">{formFields}</form>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm md:relative md:left-20 md:p-10">
            <h2 className="text-3xl font-semibold md:text-4xl md:mb-6">
              Find Us
            </h2>
            <p className="text-sm font-medium text-[#00abed] md:text-2xl">
              {company.name}
            </p>
            <p className="mt-2 text-sm font-semibold md:text-2xl">
              {company.directors?.[0]}
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-700 md:text-2xl md:leading-relaxed">
              {company.units?.[1]?.address}
            </p>
            <p className="mt-3 text-sm font-semibold text-gray-800 md:text-2xl">
              {company.contact?.mobile?.join(", ")}
            </p>
            <div className="mt-6 flex flex-col gap-3 md:flex-row md:gap-4">
              <a
                href={`sms:${company.contact?.mobile?.[0]}`}
                className="rounded-3xl border border-blue-500 px-4 py-3 text-sm font-semibold text-[#00abed] hover:bg-blue-50"
              >
                📱 Send SMS
              </a>
              <a
                href={`mailto:${company.contact?.email}`}
                className="rounded-3xl border border-blue-500 px-4 py-3 text-sm font-semibold text-[#00abed] hover:bg-blue-50"
              >
                ✉️ Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
