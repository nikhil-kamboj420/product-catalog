
export const CompanyHighlights = () => {
  const data = [
  {
    "title": "Our Vision",
    "icon_url": "https://catalog.wlimg.com/templates-images/12569/12570/vision.png",
    "description": "M.C. Tools Pvt. Ltd. thrives to become the one-stop-shop for ERW and SS Tube Industry tooling that provides quality services and creates a lasting impact on its esteemed customers."
  },
  {
    "title": "Infrastructure",
    "icon_url": "https://catalog.wlimg.com/1/1371075/other-images/comp-info-img-14639.png",
    "description": "M.C. Tools Pvt. Ltd. has an extensive in-house state-of-the-art technology and facilities to design products and provide services in accordance with customer’s specific requirements. Keeping Quality Control and Precision as our cornerstones, we practice quality checks and ensure accuracy at each step."
  },
  {
    "title": "Why Us?",
    "icon_url": "https://catalog.wlimg.com/1/1371075/other-images/comp-info-img-14640.png",
    "description": "M.C. Tools Pvt. Ltd. has an extensive in-house state-of-the-art technology and facilities to design products and provide services in accordance with customer’s specific requirements. Keeping Quality Control and Precision as our cornerstones, we practice quality checks and ensure accuracy at each step."
  },
];
  return (
    <section className="max-w-screen min-h-screen bg-[linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://plus.unsplash.com/premium_photo-1671717724869-bc8641046098?q=80&w=387&auto=format&fit=crop')] bg-no-repeat bg-cover bg-center flex justify-center items-center gap-10">
        {data.map((item, index) => (
          <div key={index} className="bg-white min-h-170 max-w-140  flex flex-col items-center justify-start gap-5 text-center p-10">
            <img src={item.icon_url} alt={item.title} className="w-30 h-30 object-contain" />
            <h3 className="text-4xl bold text-[#00abed]">{item.title}</h3>
            <p className="text-2xl text-[#333] word-spacing-1 leading-relaxed">{item.description}</p>
          </div>
        ))}

    </section>
  )
}
