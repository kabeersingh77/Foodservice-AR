
// ===========================================
// --- 5. Menu Section Component (Simulating 'MenuSection.jsx') ---
// ===========================================
const MenuSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Top List</h2>
        <p className="text-lg text-gray-500 mb-12">Our mainstay menu</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {menuData.map((item, index) => (
            <MenuCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;