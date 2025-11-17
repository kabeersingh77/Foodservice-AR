"use client";
import React, { useState, useEffect, CSSProperties } from 'react';
// 1. All routing components are imported
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import Menu from './components/Menu';

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left" id="box">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/.08 px-5 transition-colors hover:border-transparent hover:bg-black/.04 dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }

// ===========================================
// START: types.ts (Data Definitions and Types)
// ===========================================

    // 1. Wrap the entire app with BrowserRouter
const HomePage: React.FC = () =>(
  <main>
    <HeroSection />
    <MenuSection />
    <FriesSection />
    <ServicesFooter />
  </main>
);

interface NavItem {
  name: string;
  icon: string; // SVG path for Lucide/Tailwind icons
  path: string;
}

interface MenuItem {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

interface ServiceItem {
  name: string;
  icon: string; // SVG path
}

const navItems: NavItem[] = [
  { name: 'HOME',path: '/', icon: 'M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z'},
  { name: 'MENU',path: '/menu', icon: 'M3 12h18M3 6h18M3 18h18' },
  { name: 'ABOUT',path: '/about', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
];

const menuData: MenuItem[] = [
  { title: 'Noodles three', description: 'White plate with dried shrimps', price: 12, imageUrl: 'https://placehold.co/300x300/F08080/ffffff?text=Noodles+3' },
  { title: 'Noodles one', description: 'Noodles spicy boil with seafood and pork in hot pot', price: 20, imageUrl: 'https://placehold.co/300x300/FFA07A/ffffff?text=Noodles+1' },
  { title: 'Noodles two', description: 'Noodles prawn spicy soup', price: 16, imageUrl: 'https://placehold.co/300x300/F0E68C/000000?text=Noodles+2' },
];

const serviceData: ServiceItem[] = [
  { name: 'Online booking', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }, 
  { name: 'Catering service', icon: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' },
  { name: 'Membership', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
  { name: 'Delivery service', icon: 'M19 12H5l7-7 7 7z' }, 
];

// ===========================================
// END: types.ts
// ===========================================


// ===========================================
// START: Icon.tsx (Helper Component)
// ===========================================

const Icon: React.FC<{ path: string; className?: string }> = ({ path, className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);

// ===========================================
// END: Icon.tsx
// ===========================================


// ===========================================
// START: Header.tsx (Component 1)
// ===========================================
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-6 md:px-12 bg-[#E98074] text-gray-800">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif tracking-widest text-shadow-gray-700 drop-shadow-lg">
          <Link to="/" className="text-gray-800 hover:text-orange-400 transition duration-300">
          FOOD EAT
          </Link>
          </h1>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
                // *** KEY CHANGE: Using <Link> component instead of <a>
            <Link 
                key={item.name} 
                to={item.path} 
                className="uppercase text-gray-700 hover:text-orange-400 transition duration-300 relative group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
            </Link>
          ))}
          <div className="w-6 h-6 ml-4 text-white hover:text-orange-400 transition cursor-pointer">
            <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          <Icon path={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden mt-4 p-4 rounded-xl bg-transparent shadow-lg space-y-2">
          {navItems.map((item) => (
                // *** KEY CHANGE: Using <Link> component instead of <a>
            <Link 
                key={item.name} 
                to={item.path} 
                className="block py-2 text-gray-800 hover:bg-gray-100 rounded-lg transition duration-200"
                onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

// ===========================================
// END: Header.tsx
// ===========================================


// ===========================================
// START: HeroSection.tsx (Component 2)
// ===========================================
const HeroSection: React.FC = () => {
  // Define CSS styles using React.CSSProperties
  const plateStyle: CSSProperties = { 
    objectFit: 'cover', 
    aspectRatio: '1 / 1',
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-[#ee5509] via-[#fdc600] to-[#d17b01] opacity-90"></div>

      {/* CSS for Rotating Plate */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotating-plate {
          animation: spin 90s linear infinite;
          filter: drop-shadow(0 20px 50px rgba(0, 0, 0, 0.5));
        }
      `}</style>

      <div className="relative container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="z-10 text-gray-900 pt-16 md:pt-0">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Delicious Food Is <br /> Waiting For You
          </h2>
          <p className="text-lg mb-8 max-w-md">
            Our team of registered nurses and skilled healthcare professionals provide in-home nursing
          </p>
          <div className="flex space-x-4">
            <button className="px-6 py-3 bg-[#E98074] text-white font-semibold rounded-full shadow-lg hover:bg-[#D57367] transition transform hover:scale-105">
              <Link  to='/Menu' className="text-gray-800 hover:text-orange-400 transition duration-300">
              Food Menu
              </Link>
            </button>
            <button className="px-6 py-3 bg-white text-gray-800 font-semibold rounded-full shadow-lg border border-gray-300 hover:bg-gray-100 transition transform hover:scale-105">
              Book a Table
            </button>
          </div>
        </div>

        {/* Right Plate Image - Rotation Target */}
        <div className="relative flex justify-center md:justify-end z-10">
          <img 
            src="https://placehold.co/600x600/523A28/ffffff?text=Delicious+Food+Bowl" 
            alt="Delicious large bowl of food with shrimp, beans, rice, and vegetables" 
            className="w-full max-w-md md:max-w-lg rotating-plate rounded-full shadow-2xl"
            style={plateStyle}
          />
        </div>
      </div>
    </section>
  );
};

// ===========================================
// END: HeroSection.tsx
// ===========================================


// ===========================================
// START: MenuCard.tsx (Component 3)
// ===========================================
const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
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

// ===========================================
// END: MenuCard.tsx
// ===========================================


// ===========================================
// START: MenuSection.tsx (Component 4)
// ===========================================
const MenuSection: React.FC = () => {
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

// ===========================================
// END: MenuSection.tsx
// ===========================================


// ===========================================
// START: FriesSection.tsx (Component 5)
// ===========================================
const FriesSection: React.FC = () => {
    // Define CSS styles using React.CSSProperties
    const friesImageStyle: CSSProperties = {
        filter: 'drop-shadow(0 25px 25px rgba(0, 0, 0, 0.6))',
        transform: 'rotate(-10deg)',
    };
    
  return (
    <section className="relative py-20 bg-linear-to-tr from-[#D8C3A5] to-[#EAE7DC] overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Image: Fries Plate */}
        <div className="relative flex justify-center md:justify-start">
          <img 
            src="https://placehold.co/600x400/FFA07A/ffffff?text=Best+French+Fries" 
            alt="A plate of perfectly crispy golden french fries" 
            className="w-full max-w-lg rotate-[-15deg] shadow-2xl rounded-xl"
            style={friesImageStyle}
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

// ===========================================
// END: FriesSection.tsx
// ===========================================


// ===========================================
// START: ServicesFooter.tsx (Component 6)
// ===========================================
const ServicesFooter: React.FC = () => {
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

// ===========================================
// END: ServicesFooter.tsx
// ===========================================


// ===========================================
// START: App.tsx (Root Component)
// ===========================================
const App: React.FC = () => {
  // Set Inter font for the whole app
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
  }, []);
  
return (
    // 2. Wrap the whole app in BrowserRouter
    <BrowserRouter> 
        <div className="min-h-screen bg-gray-50">
          <Header /> {/* Header stays outside of Routes so it's always visible */}
          
            {/* 3. Define the Routes where content will be swapped */}
            <Routes>
                {/* Home Page Route */}
                <Route path="/" element={<HomePage />} /> 
                {/* Menu Page Route */}
                <Route path="/menu" element={<Menu />} /> 
                {/* About Page Route */}
                <Route path="/about" element={<About />} />
                {/* Optional: 404 Route */}
                <Route path="*" element={<div className="pt-32 text-center text-4xl">404 - Page Not Found</div>} />
            </Routes>
      
          {/* Global CSS/Font Imports and Tailwind CDN */}
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet" />
          <script src="https://cdn.tailwindcss.com"></script>
        </div>
    </BrowserRouter>
  );
}

export default App;
// ===========================================
// END: App.tsx
// ===========================================