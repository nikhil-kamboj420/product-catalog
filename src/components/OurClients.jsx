import companydata from "../companydata.json";
import useMobile from "../hooks/useMobile";

export const OurClients = () => {
  const isMobile = useMobile();
  const data = companydata[0];
  const clients = data.clients;

  const clientEntries = Object.entries(clients)
    .filter(([key]) => !key.endsWith("_img_url"))
    .map(([key, name]) => ({
      key,
      name,
      imgUrl: clients[`${key}_img_url`],
    }));

  return (
    <section className="bg-[#f3f3f3] px-4 py-10 md:bg-[#f3f3f3] md:max-w-screen md:min-h-[80vh] md:flex md:flex-col md:items-center md:justify-center md:gap-10">
      <h2 className="text-3xl font-semibold text-[#333] md:relative md:bottom-12 md:text-4xl">
        Our <span className="text-[#00abed]">Clients</span>
      </h2>

      {isMobile ? (
        <div className="flex gap-4 overflow-x-auto pb-4">
          {clientEntries.map(({ key, name, imgUrl }) => (
            <div
              key={key}
              className="min-w-[180px] rounded-[2rem] bg-white p-4 shadow-sm"
            >
              <img
                src={imgUrl}
                alt={name}
                className="h-24 w-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="md:flex md:justify-start md:items-center md:flex-nowrap md:max-w-[80vw] md:gap-10 md:overflow-x-auto">
          {clientEntries.map(({ key, name, imgUrl }) => (
            <div
              key={key}
              className="md:shrink-0 md:min-h-40 md:min-w-45 md:bg-[#f3f3f3] md:border-2 md:border-[#e5e5e7] md:rounded-4xl md:p-6 md:flex md:items-center md:justify-center md:mb-10"
            >
              <img
                src={imgUrl}
                alt={name}
                className="md:max-h-70 md:max-w-70.5 md:object-contain md:hover:scale-120"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
