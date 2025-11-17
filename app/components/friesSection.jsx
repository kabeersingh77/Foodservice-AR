
// ===========================================
// --- 6. Fries Section Component (Simulating 'FriesSection.jsx') ---
// ===========================================
const FriesSection = () => {
  return (
    <section className="relative py-20 bg-linear-to-tr from-[#D8C3A5] to-[#EAE7DC] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image: Fries Plate */}
        <div className="relative flex justify-center md:justify-start">
          <img 
            src="https://placehold.co/600x400/FFA07A/ffffff?text=Best+French+Fries" 
            alt="A plate of perfectly crispy golden french fries" 
            className="w-full max-w-lg rotate-[-15deg] shadow-2xl rounded-xl"
            style={{ 
              filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.6))',
              transform: 'rotate(-10deg)',
            }}
          />
        </div>

        {/* Right Content */}
        <div className="text-gray-900">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Best Potatoes For <br /> French Fries
          </h2>
          <p className="text-lg mb-8 max-w-md">
            Russet potatoes are ideal. Since they're dense, they don't contain as much water inside, which allows them to get extra crispy.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FriesSection;