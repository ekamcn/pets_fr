import {Link} from 'react-router';

export function Footer() {
  return (
    <footer className="bg-[var(--color-2)] text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Us Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="!text-white text-sm leading-relaxed">
              Welcome to Deco Bay, a proudly American brand dedicated to 
              transforming your living space with style, quality, and great value.
            </p>
            <p className="!text-white text-sm leading-relaxed">
              Founded by a team passionate about home decor, our mission is simple: to 
              make your space more beautiful, more functional, and most 
              importantly — more accessible to everyone.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-white font-medium mb-2">Need Assistance or Have Questions?</h4>
                <p className="!text-white text-sm">
                  Our team is here to help! For any inquiries, simply send us an email at{' '}
                  <a 
                    href="mailto:contact@deco-bay.com" 
                    className="!text-[var(--color-1)] hover:text-blue-300 transition-colors"
                  >
                    contact@deco-bay.com
                  </a>
                </p>
              </div>

              <div>
                <h4 className="text-white font-medium mb-2">Customer Service Hours:</h4>
                <p className="!text-white text-sm">
                  Monday to Friday — 8:00 AM to 6:00 PM (EST)
                </p>
              </div>

              <div className="space-y-1 text-sm">
                <div className="flex items-start">
                  <span className="font-medium text-white mr-2">Company:</span>
                  <span className="!text-white">D2G Group LLC</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-white mr-2">Address:</span>
                  <span className="!text-white">81 Commerce Drive Fall River, MA 02720</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-white mr-2">Mail:</span>
                  <a 
                    href="mailto:contact@deco-bay.com" 
                    className="!text-[var(--color-1)] hover:text-blue-300 transition-colors"
                  >
                    contact@deco-bay.com
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="font-medium text-white mr-2">Tel:</span>
                  <a 
                    href="tel:+14842148789" 
                    className="!text-white hover:text-white transition-colors"
                  >
                    +14842148789
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Useful Links</h3>
            <nav className="space-y-2">
              <Link 
                to="/contact" 
                className="block !text-white hover:text-white transition-colors text-sm"
              >
                Contact Us
              </Link>
              <Link 
                to="/faq" 
                className="block !text-white hover:text-white transition-colors text-sm"
              >
                FAQ
              </Link>
              <div className="pt-2 border-t border-gray-700">
                <h4 className="text-white font-medium mb-2 text-sm">About Us</h4>
                <div className="space-y-2">
                  <Link 
                    to="/terms" 
                    className="block !text-white hover:text-white transition-colors text-sm"
                  >
                    Terms of service
                  </Link>
                  <Link 
                    to="/privacy" 
                    className="block !text-white hover:text-white transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                  <Link 
                    to="/returns" 
                    className="block !text-white hover:text-white transition-colors text-sm"
                  >
                    Return Policy
                  </Link>
                  <Link 
                    to="/shipping" 
                    className="block !text-white hover:text-white transition-colors text-sm"
                  >
                    Shipping policy
                  </Link>
                  <Link 
                    to="/payment" 
                    className="block !text-white hover:text-white transition-colors text-sm"
                  >
                    Payment Terms
                  </Link>
                </div>
              </div>
            </nav>
          </div>

          {/* Sign Up for Our Emails Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Sign Up for Our Emails</h3>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-white font-medium mb-2">Need Help or Have Questions?</h4>
                <p className="!text-white text-sm">
                  Our team is here to assist you! Just send us an email at{' '}
                  <a 
                    href="mailto:contact@deco-bay.com" 
                    className=" hover:text-blue-300 transition-colors !text-[var(--color-1)]"
                  >
                    contact@deco-bay.com  
                  </a>
                </p>
              </div>

              <form className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-[var(--color-2)] border !border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all rounded-full"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-md transition-colors"
                    aria-label="Subscribe"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Payment Methods and Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Payment Methods */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <div className="w-12 h-8 bg-red-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MC</span>
                </div>
                <div className="w-12 h-8 bg-black rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">🍎</span>
                </div>
                <div className="w-12 h-8 bg-blue-800 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AMEX</span>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2025, Deco Bay®
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}