import useMobile from "../hooks/useMobile";

export const CompanyHighlights = () => {
  const isMobile = useMobile();
  const data = [
    {
      title: "Our Vision",
      icon_url:
        "https://catalog.wlimg.com/templates-images/12569/12570/vision.png",
      description:
        "M.C. Tools Pvt. Ltd. thrives to become the one-stop-shop for ERW and SS Tube Industry tooling that provides quality services and creates a lasting impact on its esteemed customers.",
    },
    {
      title: "Infrastructure",
      icon_url:
        "https://catalog.wlimg.com/1/1371075/other-images/comp-info-img-14639.png",
      description:
        "M.C. Tools Pvt. Ltd. has an extensive in-house state-of-the-art technology and facilities to design products and provide services in accordance with customer’s specific requirements. Keeping Quality Control and Precision as our cornerstones, we practice quality checks and ensure accuracy at each step.",
    },
    {
      title: "Why Us?",
      icon_url:
        "https://catalog.wlimg.com/1/1371075/other-images/comp-info-img-14640.png",
      description:
        "M.C. Tools Pvt. Ltd. has an extensive in-house state-of-the-art technology and facilities to design products and provide services in accordance with customer’s specific requirements. Keeping Quality Control and Precision as our cornerstones, we practice quality checks and ensure accuracy at each step.",
    },
  ];

  if (isMobile) {
    return (
      <section className="bg-[url('https://plus.unsplash.com/premium_photo-1671717724869-bc8641046098?q=80&w=387&auto=format&fit=crop')] bg-cover bg-center px-4 py-10">
        <div className="mx-auto flex max-w-[95vw] flex-col gap-4">
          {data.map((item, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-[2rem] bg-white/95 p-5 shadow-md"
            >
              <img
                src={item.icon_url}
                alt={item.title}
                className="mx-auto h-16 w-16 object-contain"
              />
              <h3 className="mt-4 text-2xl font-semibold text-[#0f4c81]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-700">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="md:max-w-screen md:min-h-screen md:bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://plus.unsplash.com/premium_photo-1671717724869-bc8641046098?q=80&w=387&auto=format&fit=crop')] md:bg-no-repeat md:bg-cover md:bg-center md:flex md:justify-center md:items-center md:gap-10">
      {data.map((item, index) => (
        <div
          key={index}
          className="md:bg-white md:min-h-170 md:max-w-140 md:flex md:flex-col md:items-center md:justify-start md:gap-5 md:text-center md:p-10"
        >
          <img
            src={item.icon_url}
            alt={item.title}
            className="md:w-30 md:h-30 md:object-contain"
          />
          <h3 className="md:text-4xl md:font-medium md:text-[#00abed]">
            {item.title}
          </h3>
          <p className="md:text-2xl md:text-[#333] md:word-spacing-1 md:leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </section>
  );
};
