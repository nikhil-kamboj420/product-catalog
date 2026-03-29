import companydata from "../companydata.json";
export const EnquiryHome = () => {
  const data = companydata[0];
  const company = data.company;

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-16 flex justify-center items-center">
      <div className=" grid md:grid-cols-2 gap-10   max-w-[90vw] justify-center ">
        {/* LEFT - FORM */}
        <div>
          <h2 className="text-4xl font-semibold mb-6">
            Quick{" "}
            <span className="text-[#00abed] ">
              Enquiry
            </span>
          </h2>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Product / Service Looking for"
                className="text-2xl bg-white w-110  border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="text-2xl bg-white border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="text-2xl bg-white border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
              />

              <select className="text-2xl bg-white border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-400">
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
              </select>
            </div>

            <div className="flex gap-2">
              <span className="text-2xl bg-white border border-gray-300 px-4 py-3 rounded ">
                +91
              </span>
              <input
                type="text"
                placeholder="Phone / Mobile"
                className="text-2xl bg-white border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Leave a Message for us"
              className="w-full text-2xl bg-white border border-gray-300 px-4 py-3 rounded outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <center>
              {" "}
              <button
                type="submit"
                className="text-2xl bg-[#00abed] hover:bg-[#1f84ab] text-white px-6 py-3 rounded transition"
              >
                Send Message
              </button>
            </center>
          </form>
        </div>

        {/* RIGHT - DYNAMIC COMPANY INFO */}
        <div className="relative left-20">
          <h2 className="text-4xl font-semibold mb-6">Find Us</h2>

          {/* Company Name */}
          <p className=" text-2xl text-[#00abed] font-medium ">{company.name}</p>

          {/* Director */}
          <p className=" text-2xl font-semibold mt-2">{company.directors?.[0]}</p>

          {/* Address (Unit 2 preferred) */}
          <p className=" text-2xl mt-3 text-gray-700 leading-relaxed">
            {company.units?.[1]?.address}
          </p>

          {/* Phones */}
          <p className=" text-2xl mt-3 font-semibold text-gray-800">
            {company.contact?.mobile?.join(", ")}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href={`sms:${company.contact?.mobile?.[0]}`}
              className=" text-2xl flex items-center gap-2 border border-blue-500 text-[#00abed] px-4 py-2 rounded hover:bg-blue-50 transition"
            >
              📱 Send SMS
            </a>

            <a
              href={`mailto:${company.contact?.email}`}
              className=" text-2xl flex items-center gap-2 border border-blue-500 text-[#00abed] px-4 py-2 rounded hover:bg-blue-50 transition"
            >
              ✉️ Send Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
