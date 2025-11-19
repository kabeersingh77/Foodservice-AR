"use client";
import React, { useState } from 'react';
import { ChevronLeft } from 'lucide';

// --- Type Definitions ---

/** Defines the structure for a single menu item. */
interface MenuItemData {
  name: string;
  key: string;
  color: string;
  textColor: string;
  layout: 'default' | 'reverse'; // Explicitly define layout options
  mockImage: string;
  arImage: string;
}

/** Defines the props for the MenuItem component. */
interface MenuItemProps {
  item: MenuItemData;
  onClick: (item: MenuItemData) => void; // Function that takes MenuItemData and returns void
}

/** Defines the props for the ARViewModal component. */
interface ARViewModalProps {
  isOpen: boolean;
  image: string | undefined;
  name: string | undefined;
  onClose: () => void;
}

// --- Color and Layout Definitions ---
const COLOR_1 = 'bg-orange-200/70'; // Peach/Orange
const COLOR_2 = 'bg-white';         // White
const COLOR_3 = 'bg-lime-600/10';   // Olive/Khaki Tone
const DARK_COLOR = 'bg-gray-800';   // Special dark color for Cocktails

const textDefault = 'text-gray-800';

// Sample data with type assertion (as MenuItemData[])
const menuData: MenuItemData[] = [
  // 1. Color 1 - Default Layout (Text Left)
  {
    name: 'BREAKFAST', key: 'breakfast', color: COLOR_1, textColor: textDefault, layout: 'default',
    mockImage: 'https://placehold.co/150x120/f9d8b3/333?text=Breakfast+Plate',
    arImage: 'https://placehold.co/800x600/f9d8b3/000?text=Breakfast+AR+View',
  },
  // 2. Color 2 - Reverse Layout (Text Right)
  {
    name: 'PASTA', key: 'pasta', color: COLOR_2, textColor: textDefault, layout: 'reverse',
    mockImage: 'https://placehold.co/150x120/ffffff/333?text=Pasta+Bowl',
    arImage: 'https://placehold.co/800x600/ffffff/000?text=Pasta+AR+View',
  },
  // 3. Color 3 (Olive) - Default Layout (Text Left)
  {
    name: 'PIZZA', key: 'pizza', color: COLOR_3, textColor: textDefault, layout: 'default',
    mockImage: 'https://placehold.co/150x120/d4ed9a/333?text=Pizza+Slice',
    arImage: 'https://placehold.co/800x600/d4ed9a/000?text=Pizza+AR+View',
  },
  // 4. Color 1 - Reverse Layout (Text Right)
  {
    name: 'BURGER', key: 'burger', color: COLOR_1, textColor: textDefault, layout: 'reverse',
    mockImage: 'https://placehold.co/150x120/f9d8b3/333?text=Burger+Stack',
    arImage: 'https://placehold.co/800x600/f9d8b3/000?text=Burger+AR+View',
  },
  // 5. Color 2 - Default Layout (Text Left)
  {
    name: 'COFFEE', key: 'coffee', color: COLOR_2, textColor: textDefault, layout: 'default',
    mockImage: 'https://placehold.co/150x120/ffffff/333?text=Coffee+Cup',
    arImage: 'https://placehold.co/800x600/ffffff/000?text=Coffee+AR+View',
  },
  // 6. Special Dark Color - Reverse Layout (Text Right)
  {
    name: 'COCKTAIL', key: 'cocktail', color: DARK_COLOR, textColor: 'text-white', layout: 'reverse',
    mockImage: 'ccktsa',
    arImage: 'https://placehold.co/800x600/3b3b3b/fff?text=Cocktails+AR+View',
  },
  // 7. Color 3 (Olive) - Default Layout (Text Left)
  {
    name: 'SALAD', key: 'salad', color: COLOR_3, textColor: textDefault, layout: 'default',
    mockImage: 'https://placehold.co/150x120/d4ed9a/333?text=Fresh+Salad',
    arImage: 'https://placehold.co/800x600/d4ed9a/000?text=Salad+AR+View',
  },
  // 8. Color 1 - Reverse Layout (Text Right)
  {
    name: 'DESSERT', key: 'dessert', color: COLOR_1, textColor: textDefault, layout: 'reverse',
    mockImage: 'https://placehold.co/150x120/f9d8b3/333?text=Sweet+Treat',
    arImage: 'https://placehold.co/800x600/f9d8b3/000?text=Dessert+AR+View',
  },
];

// Component for a single Menu Item
const MenuItem: React.FC<MenuItemProps> = ({ item, onClick }) => {
  const isReversed = item.layout === 'reverse';

  return (
    <div
      className={`
        flex items-center justify-between p-4 sm:p-6 cursor-pointer rounded-xl shadow-md transition duration-300
        hover:shadow-xl active:scale-[0.995]
        ${item.color} ${item.textColor}
        md:min-h-[140px] min-h-[120px]
        ${isReversed ? 'md:flex-row-reverse gap-x-130' : 'md:flex-row'}
        flex-col text-center md:text-left
      `}
      onClick={() => onClick(item)}
    >
      {/* Menu Text */}
      <h2 className="text-xl sm:text-3xl font-extrabold tracking-wider mb-2 md:mb-0 w-full md:w-auto md:flex-1">
        {item.name}
      </h2>

      {/* Placeholder Image Box */}
      <div className="w-full md:w-1/4 max-w-[180px] h-24 md:h-28 overflow-hidden rounded-lg flex justify-center items-center shrink-0">
        {/* The 'src' is guaranteed to be a string here */}
        <img
          src={item.mockImage}
          alt={`Image for ${item.name}`}
          className="w-full h-full object-cover rounded-lg border-2 border-gray-100/50 shadow-inner"
          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
            // Type assertion for the event target to access properties like onerror
            const target = e.target as HTMLImageElement;
            target.onerror = null;
            target.src = 'https://placehold.co/150x120/cccccc/333?text=Image';
          }}
        />
      </div>
    </div>
  );
};

// Component for the AR View Modal
const ARViewModal: React.FC<ARViewModalProps> = ({ isOpen, image, name, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-95 p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        
        {/* Back Button */}
        <button
          className="absolute top-4 left-4 sm:top-8 sm:left-8 z-10 p-3 bg-white/10 text-white rounded-full flex items-center space-x-2 backdrop-blur-sm hover:bg-white/20 transition duration-150 shadow-lg text-sm sm:text-base"
          onClick={onClose}
        >
          {/* <ChevronLeft className="w-5 h-5" /> */}
          {/* <span className="hidden sm:inline font-semibold">Back to Menu</span> */}
        </button>

        {/* AR Image Container */}
        <div className="w-full h-full flex items-center justify-center p-8">
            {/* The 'src' is either a string or undefined, but the component only renders if 'image' is present */}
            {image && (
              <img
                src={image}
                alt={`AR View for ${name}`}
                className="max-h-[90vh] max-w-full object-contain rounded-xl shadow-2xl border-4 border-gray-700"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://placehold.co/800x600/555555/eee?text=AR+Image+Not+Found';
                }}
              />
            )}
        </div>

        <p className="mt-4 text-white text-lg font-bold text-center">
            Viewing AR Model for: {name}
        </p>
      </div>
    </div>
  );
};

// Main App Component renamed to Menu
const Menu: React.FC = () => {
  // Explicitly type the state for the current item
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentARItem, setCurrentARItem] = useState<MenuItemData | null>(null);

  // Function to handle clicking a menu item
  const handleItemClick = (item: MenuItemData) => {
    setCurrentARItem(item);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentARItem(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sans">
      <header className="mb-6 sm:mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 border-b-4 border-lime-500 pb-2 inline-block">
          Interactive Menu
        </h1>
        <p className="mt-2 text-gray-600 text-lg">Tap any dish to view its simulated AR model.</p>
      </header>

      {/* Menu Grid - Responsive Layout with reduced gap (space-y-2) */}
      <main className="max-w-4xl mx-auto space-y-2">
        {menuData.map((item) => (
          <MenuItem
            key={item.key}
            item={item}
            onClick={handleItemClick}
          />
        ))}
      </main>

      {/* AR Modal */}
      <ARViewModal
        isOpen={isModalOpen}
        // Safely pass properties, TypeScript handles the potential null state
        image={currentARItem?.arImage}
        name={currentARItem?.name}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Menu;