
import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import Index from "./pages/Index";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import LoadingAnimation from "./components/LoadingAnimation";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactPopup from "./components/ContactPopup";
import BlogDetail from "./pages/BlogDetail";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RetailProduct from "./pages/RetailProduct";
import WarehouseProduct from "./pages/WarehouseProduct";
import POSProduct from "./pages/POSProduct";
import MobileProduct from "./pages/MobileProduct";
import LandingPage from "./pages/LandingPage";
import Career from "./pages/Career";

// Use lazy loading for service pages to improve performance
const InventoryService = lazy(() => import("./pages/InventoryService.jsx"));
const POSService = lazy(() => import("./pages/POSService.jsx"));
const SupplyChainService = lazy(() => import("./pages/SupplyChainService.jsx"));
const AccountingService = lazy(() => import("./pages/AnalyticsService.jsx"));

// Initialize EmailJS
emailjs.init("r2V1JFhGvzvEJjBL0");

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 60, // 1 hour
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
    // Start prefetching lazy-loaded service pages
    const prefetchServices = async () => {
      const services = [
        import("./pages/InventoryService.jsx"),
        import("./pages/POSService.jsx"),
        import("./pages/SupplyChainService.jsx"),
        import("./pages/AnalyticsService.jsx")
      ];

      await Promise.all(services);
    };

    // Prefetch after initial render
    setTimeout(() => {
      prefetchServices();
    }, 2000);

    // Redirect to hero section on page reload
    if (window.location.hash) {
      window.scrollTo(0, 0);
    }

    // Show loading animation briefly only on main page
    if (window.location.pathname === "/") {
      setTimeout(() => setLoading(false), 1200);
    } else {
      setLoading(false);
    }

    // Show contact popup after 5 seconds, but only on the main page
    const timer = setTimeout(() => {
      if (window.location.pathname === "/") {
        setShowContactPopup(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {loading && window.location.pathname === "/" && <LoadingAnimation />}

        <div className={loading && window.location.pathname === "/" ? "opacity-0" : "opacity-100 transition-opacity duration-500"}>
          <BrowserRouter>
            <WhatsAppButton />
            <ContactPopup open={showContactPopup} onOpenChange={setShowContactPopup} />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/career" element={<Career />} />
              
              {/* Service Routes */}
              <Route path="/services/inventory" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <InventoryService />
                </Suspense>
              } />
              <Route path="/services/pos" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <POSService />
                </Suspense>
              } />
              <Route path="/services/supply-chain" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <SupplyChainService />
                </Suspense>
              } />
              <Route path="/services/accounting" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <AccountingService />
                </Suspense>
              } />
              
              {/* Product Routes */}
              <Route path="/products/retail" element={<RetailProduct />} />
              <Route path="/products/warehouse" element={<WarehouseProduct />} />
              <Route path="/products/pos" element={<POSProduct />} />
              <Route path="/products/mobile" element={<MobileProduct />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;