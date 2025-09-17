export default function Footer() {
  return (
     <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-bold">ECOMMERCE</h4>
            <p className="mt-2 text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
          <div>
            <h4 className="font-bold">Links</h4>
            <ul className="mt-2 space-y-2 text-gray-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#categories">Categories</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">Newsletter</h4>
            <input type="email" placeholder="Enter your email" className="mt-2 w-full px-3 py-2 rounded text-black" />
          </div>
        </div>
      </footer>
  );
}
