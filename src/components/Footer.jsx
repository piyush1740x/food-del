const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h1 className="text-2xl font-bold">FoodDel</h1>
              <p className="text-gray-400">Delivering delicious food to your doorstep</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
              <a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a>
              <a href="/faq" className="text-gray-400 hover:text-white">FAQ</a>
              <a href="/terms" className="text-gray-400 hover:text-white">Terms & Conditions</a>
              <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
            </div>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="Twitter" className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.instagram_icon} alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin_icon} alt="LinkedIn" className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 FoodDel. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  