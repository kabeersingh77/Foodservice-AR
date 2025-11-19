"use client";
import React from 'react';
import Link from 'next/link';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header: Added h-16 (height) and fixed/top-0/w-full to simulate a sticky navbar. 
        If your actual navbar is fixed, this helps visualize the issue.
      */}
      <header className="bg-white py-4 shadow-sm h-16 sticky top-10 z-10">
        <div className="container mx-auto flex items-center px-4">
          <Link href="/menu" className="flex items-center text-green-600 hover:text-green-700">
            <svg
              className="h-5 w-5 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Menu
          </Link>
          <h1 className="grow text-center text-3xl font-bold text-gray-800">Our Story</h1>
        </div>
      </header>

      {/* Main Content: 
        The class 'pt-8' (padding-top: 2rem) is added to push the content down 
        and prevent it from being hidden by the fixed header/navbar.
      */}
      <main className="container mx-auto py-8 px-4 pt-16">
        {/* Our History Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-700 leading-relaxed">
            Established in 2024, our restaurant was founded on a simple philosophy: bringing fresh, innovative dishes to our
            community with a focus on sustainable sourcing. What started as a small local eatery has grown into a culinary
            experience, known for our rotating menu and interactive AR food presentations. We believe that dining should
            be an adventure, and every plate we serve tells a story.
          </p>
        </section>

        {/* Stay Connected Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-8 border-t-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Stay Connected</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.776-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h3.046l-.492 3.03h-2.554v6.987A10 10 0 0022 12z"
                  clipRule="evenodd"
                />
              </svg>
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.715.01 3.655.047 1.006.037 1.763.15 2.406.417.67.28 1.294.67 1.838 1.215.545.545.935 1.168 1.215 1.838.267.643.38 1.4.417 2.406.037.94.047 1.225.047 3.655s-.01 2.715-.047 3.655c-.037 1.006-.15 1.763-.417 2.406-.28.67-.67 1.294-1.215 1.838-.545.545-1.168.935-1.838 1.215-.643.267-1.4.38-2.406.417-.94.037-1.225.047-3.655.047s-2.715-.01-3.655-.047c-1.006-.037-1.763-.15-2.406-.417-.67-.28-1.294-.67-1.838-1.215-.545-.545-.935-1.168-1.215-1.838-.267-.643-.38-1.4-.417-2.406-.037-.94-.047-1.225-.047-3.655s.01-2.715.047-3.655c.037-1.006.15-1.763.417-2.406.28-.67.67-1.294 1.215-1.838.545-.545 1.168-.935 1.838-1.215.643-.267 1.4-.38 2.406-.417C9.585 2.01 9.87 2 12.315 2zm0 0l.024-.001c-.002-.001-.004-.002-.006-.002zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zM12 9a3 3 0 110 6 3 3 0 010-6zm7.5-5.5a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              Instagram
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-sky-500 text-white rounded-full shadow-md hover:bg-sky-600 transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.293 2.293a1 1 0 01.077 1.34L15.343 7.5l4.877 4.877c.39.39.39 1.023 0 1.414l-1.414 1.414a1 1 0 01-1.414 0L12.5 14.5l-4.877 4.877a1 1 0 01-1.414 0L4.793 18.293a1 1 0 010-1.414L7.5 12.5l-4.877-4.877a1 1 0 010-1.414L4.093 5.07a1 1 0 011.414 0L12.5 9.5l4.877-4.877a1 1 0 011.414 0zM12.5 2C6.702 2 2 6.702 2 12s4.702 10 10 10 10-4.702 10-10S18.298 2 12.5 2z" />
                <path
                  fillRule="evenodd"
                  d="M19.006 4.394a.75.75 0 00-1.06 0L12.5 9.839 6.054 3.394a.75.75 0 00-1.06 1.06L11.44 10.9 5.004 17.336a.75.75 0 001.06 1.06L12.5 12.961l6.436 6.436a.75.75 0 001.06-1.06L13.56 10.9l6.436-6.436a.75.75 0 000-1.06z"
                  clipRule="evenodd"
                />
              </svg>
              Twitter
            </a>
            <a
              href="mailto:info@example.com"
              className="flex items-center px-6 py-3 bg-gray-600 text-white rounded-full shadow-md hover:bg-gray-700 transition-colors"
            >
              <svg
                className="h-5 w-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2L12 11 4 6h16z" />
              </svg>
              Email
            </a>
          </div>
        </section>

        {/* Copyrights Section */}
        <section className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Copyrights</h2>
          <p className="text-gray-700 leading-relaxed">
            &copy; {new Date().getFullYear()} Our Restaurant Name. All rights reserved.
            <br />
            No part of this website or any of its contents may be reproduced, copied, modified or adapted, without the prior written consent of the author, unless otherwise indicated for stand-alone materials.
          </p>
        </section>
      </main>
    </div>
  );
};

export default About;