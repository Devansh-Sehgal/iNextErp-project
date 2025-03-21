
import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound";
import About from "./pages/About.jsx";
import Blog from "./pages/Blog.jsx";
import LoadingAnimation from "./components/LoadingAnimation";
import WhatsAppButton from "./components/WhatsAppButton";
import ContactPopup from "./components/ContactPopup";
import BlogDetail from "./pages/BlogDetail";

// Use lazy loading for service pages to improve performance
const InventoryService = lazy(() => import("./pages/InventoryService.jsx"));
const POSService = lazy(() => import("./pages/POSService.jsx"));
const SupplyChainService = lazy(() => import("./pages/SupplyChainService.jsx"));
const AnalyticsService = lazy(() => import("./pages/AnalyticsService.jsx"));

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);
  const [showContactPopup, setShowContactPopup] = useState(false);

  useEffect(() => {
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
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
              <Route path="/services/analytics" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <AnalyticsService />
                </Suspense>
              } />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
