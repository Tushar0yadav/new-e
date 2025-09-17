import { useState, useEffect } from "react";

export default function Header({ onSearch }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSearch = (e) => {
    const v = e.target.value;
    setQ(v);
    onSearch(v);
  };

  // Apply dark/light mode on <html>
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="border-b bg-white dark:bg-gray-900 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo + Nav */}
          <div className="flex items-center">
            <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
              E-COMMERCE
            </div>
            <nav className="hidden md:flex ml-8 gap-6">
              <a href="#" className="text-sm text-gray-700 dark:text-gray-300">
                Home
              </a>
              <a href="#" className="text-sm text-gray-700 dark:text-gray-300">
                Categories
              </a>
              <a
                href="#contact"
                className="text-sm text-gray-700 dark:text-gray-300"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Middle: Search */}
          <div className="flex-1 px-4 max-w-xl">
            <input
              value={q}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full border rounded-full px-4 py-2 bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
            />
          </div>

          {/* Right: Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-3 py-2 text-gray-700 dark:text-gray-300">
              Login
            </button>
            <button className="px-3 py-2 text-gray-700 dark:text-gray-300">
              Cart
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="px-3 py-2 rounded-full border dark:border-gray-600"
            >
              {darkMode ? "🌙" : "☀️"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen((o) => !o)}>
            ☰
          </button>
        </div>

        {/* Mobile Dropdown */}
        {open && (
          <div className="md:hidden py-4">
            <a className="block py-2 text-gray-700 dark:text-gray-300">Home</a>
            <a className="block py-2 text-gray-700 dark:text-gray-300">
              Categories
            </a>
            <a className="block py-2 text-gray-700 dark:text-gray-300">
              Contact
            </a>

            {/* Dark Mode Toggle in Mobile */}
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="mt-4 px-3 py-2 rounded-full border dark:border-gray-600"
            >
              {darkMode ? "🌙 Dark" : "☀️ Light"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
}



// import { useState } from 'react'


// export default function Header({ onSearch }){
// const [open, setOpen] = useState(false)
// const [q, setQ] = useState('')


// const handleSearch = (e)=>{
// const v = e.target.value
// setQ(v)
// onSearch(v)
// }


// return (
// <header className="border-b bg-white">
// <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// <div className="flex justify-between items-center h-16">
// <div className="flex items-center">
// <div className="text-lg font-bold">E‑COMMERCE</div>
// <nav className="hidden md:flex ml-8 gap-6">
// <a href="#" className="text-sm">Home</a>
// <a href="#" className="text-sm">Categories</a>
// <a href="#contact" className="text-sm">Contact</a>
// </nav>
// </div>


// <div className="flex-1 px-4 max-w-xl">
// <input value={q} onChange={handleSearch} placeholder="Search products..." className="w-full border rounded-full px-4 py-2" />
// </div>


// <div className="hidden md:flex items-center gap-4">
// <button className="px-3 py-2">Login</button>
// <button className="px-3 py-2">Cart</button>
// </div>


// <button className="md:hidden" onClick={()=>setOpen(o=>!o)}>
// ☰
// </button>
// </div>


// {open && (
// <div className="md:hidden py-4">
// <a className="block py-2">Home</a>
// <a className="block py-2">Categories</a>
// <a className="block py-2">Contact</a>
// </div>
// )}
// </div>
// </header>
// )
// }

