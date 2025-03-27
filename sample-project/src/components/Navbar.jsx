
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const getHref = (sectionId) => {
    if (location.pathname !== '/') {
      return `/#${sectionId}`;
    }
    return `#${sectionId}`;
  };

  const handleNavClick = (e, sectionId, offset = 20) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        // Get the position of the element relative to the viewport
        const elementPosition = element.getBoundingClientRect().top;
        
        // Scroll to the position, subtracting the offset value
        window.scrollTo({
          top: window.pageYOffset + elementPosition - 50,
          behavior: 'smooth',
        });
      }
    }
  };
  
  // Updated services array with links to individual service pages
  const services = [
    { title: 'Inventory Management', href: '/services/inventory' },
    { title: 'POS System', href: '/services/pos' },
    { title: 'Supply Chain', href: '/services/supply-chain' },
    { title: 'Analytics', href: '/services/analytics' },
  ];

  // Legal pages
  const legalPages = [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms & Conditions', href: '/terms' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
      ? 'bg-white/80 backdrop-blur-lg shadow-md py-2'
      : 'bg-transparent py-2'
      }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link to={getHref('hero')} onClick={(e) => handleNavClick(e, 'hero')} className="text-2xl font-bold text-[#6495ed]">
          <img src='/Logo.png' className='w-14 h-14' alt="Logo" />
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-foreground hover:text-[#6495ed] transition-colors"
          >
            About Us
          </Link>
          
          {/* Services dropdown using NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent p-0 h-auto">
                  <span className="text-foreground hover:text-[#6495ed] transition-colors">Services</span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px]">
                  <ul className="grid gap-1 p-2">
                    {services.map((service, i) => (
                      <li key={i}>
                        <Link
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="text-sm font-medium">{service.title}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Link
            to="/blog"
            className="text-foreground hover:text-[#6495ed] transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className="text-foreground hover:text-[#6495ed] transition-colors"
          >
            Contact
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-down">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              to="/about"
              className="text-foreground hover:text-[#6495ed] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            
            {/* Services dropdown for mobile */}
            <div className="relative">
              <button
                className="flex items-center justify-between w-full text-left text-foreground hover:text-[#6495ed] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault();
                  const dropdown = e.currentTarget.nextElementSibling;
                  dropdown.classList.toggle('hidden');
                }}
              >
                Services
                <ChevronDown size={16} />
              </button>
              <ul className="pl-4 hidden space-y-2 mt-2">
                {services.map((service, i) => (
                  <li key={i}>
                    <Link
                      to={service.href}
                      className="block py-1 text-foreground hover:text-[#6495ed] transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <Link
              to="/blog"
              className="text-foreground hover:text-[#6495ed] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-foreground hover:text-[#6495ed] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>

            {/* Legal pages for mobile */}
            <div className="pt-2 mt-2 border-t border-gray-200">
              {legalPages.map((page, i) => (
                <Link
                  key={i}
                  to={page.href}
                  className="block py-1 text-sm text-gray-500 hover:text-[#6495ed] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
