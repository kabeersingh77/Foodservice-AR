
const navItems = [
  { name: 'HOME', icon: 'M10 20v-6h4v6h5v-8h3l-10-9-10 9h3v8z' },
  { name: 'MENU', icon: 'M3 12h18M3 6h18M3 18h18' },
  { name: 'ABOUT', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' },
];

const menuData = [
  { title: 'Noodles three', description: 'White plate with dried shrimps', price: 12, imageUrl: 'https://placehold.co/300x300/F08080/ffffff?text=Noodles+3' },
  { title: 'Noodles one', description: 'Noodles spicy boil with seafood and pork in hot pot', price: 20, imageUrl: 'https://placehold.co/300x300/FFA07A/ffffff?text=Noodles+1' },
  { title: 'Noodles two', description: 'Noodles prawn spicy soup', price: 16, imageUrl: 'https://placehold.co/300x300/F0E68C/000000?text=Noodles+2' },
];

const serviceData = [
  { name: 'Online booking', icon: 'M13 10V3L4 14h7v7l9-11h-7z' }, // Zap (Online booking)
  { name: 'Catering service', icon: 'M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2' }, // Users (Catering service)
  { name: 'Membership', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' }, // Circle (Membership)
  { name: 'Delivery service', icon: 'M19 12H5l7-7 7 7z' }, // Truck (Delivery service)
];

// Helper component for icons
const Icon = ({ path, className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
  </svg>
);
export default menuData;