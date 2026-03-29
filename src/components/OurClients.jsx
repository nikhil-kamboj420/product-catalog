import companydata from "../companydata.json";
export const OurClients = () => {
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
    <section className="bg-[#f3f3f3] max-w-screen min-h-[80vh] flex flex-col items-center justify-center gap-10">
      <h2 className="relative bottom-12 text-4xl text-[#333]">
        Our <span className="text-[#00abed]">Clients</span>
      </h2>
      <div className="flex justify-start items-center flex-nowrap max-w-[80vw] gap-10 overflow-x-auto">
        {clientEntries.map(({ key, name, imgUrl }) => (
          <div key={key} className="shrink-0 min-h-40 min-w-45 bg-[#f3f3f3] border-2 border-[#e5e5e7] rounded-4xl p-6 flex items-center justify-center mb-10">
            <img src={imgUrl} alt={name} className="max-h-70  max-w-70.5 object-contain hover:scale-120" />
          </div>
        ))}
      </div>
    </section>
  );
};
