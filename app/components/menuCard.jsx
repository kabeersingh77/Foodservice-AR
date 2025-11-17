const MenuCard = ({ item }) => {
  const { title, description, price, imageUrl } = item;
  return (
    <div className="relative bg-white p-6 pt-16 rounded-3xl shadow-xl hover:shadow-2xl transition transform hover:-translate-y-1 duration-300 max-w-xs mx-auto">
      {/* Image Container (Simulating the lifted shadow effect) */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full overflow-hidden shadow-2xl border-4 border-white">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>
      
      <div className="text-center mt-4">
        <div className="flex justify-center mb-2">
          {/* Star Icon */}
          <svg className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-4 h-10 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center pt-2 border-t border-gray-100">
          <span className="text-2xl font-extrabold text-[#E98074]">${price}</span>
          <button className="w-8 h-8 flex items-center justify-center bg-[#E98074] text-white rounded-full hover:bg-[#D57367] transition">
            {/* Plus icon */}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;