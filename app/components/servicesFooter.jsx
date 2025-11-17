// ===========================================
// --- 7. Services Footer Component (Simulating 'ServicesFooter.jsx') ---
// ===========================================
const ServicesFooter = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-12">Our services</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {serviceData.map((service, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div className="p-4 rounded-full bg-gray-100 text-[#E98074] mb-3 shadow-lg">
                <Icon path={service.icon} className="w-8 h-8" />
              </div>
              <p className="text-base font-semibold text-gray-700">{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesFooter;