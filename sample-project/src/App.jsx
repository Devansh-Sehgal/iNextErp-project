
import { useState, useEffect, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import emailjs from 'emailjs-com';
import Index from "./pages/Index";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
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
const AccountingService = lazy(() => import("./pages/AccountingService.jsx"));
const HRMService = lazy(() => import("./pages/HRMService.jsx"));
const CRMService = lazy(() => import("./pages/CRMService.jsx"));
const CloudService = lazy(() => import("./pages/CloudService.jsx"));

// Hardware product pages
const BarcodeProduct = lazy(() => import("./pages/products/BarcodeProduct.jsx"));
const LabelProduct = lazy(() => import("./pages/products/LabelProduct.jsx"));
const ComputerProduct = lazy(() => import("./pages/products/ComputerProduct.jsx"));
const ReceiptPrinterProduct = lazy(() => import("./pages/products/ReceiptPrinterProduct.jsx"));
const PrinterProduct = lazy(() => import("./pages/products/PrinterProduct.jsx"));
const ScannerProduct = lazy(() => import("./pages/products/ScannerProduct.jsx"));

// Solution pages
const WarehouseManagementSolution = lazy(() => import("./pages/solutions/WarehouseManagement.jsx"));
const MultiLocationSolution = lazy(() => import("./pages/solutions/MultiLocation.jsx"));
const FashionDistributionSolution = lazy(() => import("./pages/solutions/FashionDistribution.jsx"));
const LifestyleBrandsSolution = lazy(() => import("./pages/solutions/LifestyleBrands.jsx"));
// const FashionRetailSolution = lazy(() => import("./pages/solutions/FashionRetail.jsx"));
// const SupermarketsSolution = lazy(() => import("./pages/solutions/Supermarkets.jsx"));
// const D2CBrandsSolution = lazy(() => import("./pages/solutions/D2CBrands.jsx"));

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
        import("./pages/AccountingService.jsx")
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
              <Route path="/careers" element={<Career />} />
              
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
              <Route path="/services/hrm" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <HRMService />
                </Suspense>
              } />
              <Route path="/services/crm" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <CRMService />
                </Suspense>
              } />
              <Route path="/services/cloud" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <CloudService />
                </Suspense>
              } />
              
              {/* Product Routes */}
              <Route path="/products/retail" element={<RetailProduct />} />
              <Route path="/products/warehouse" element={<WarehouseProduct />} />
              <Route path="/products/pos" element={<POSProduct />} />
              <Route path="/products/mobile" element={<MobileProduct />} />
              <Route path="/products/barcode-printer" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <BarcodeProduct />
                </Suspense>
              } />
              <Route path="/products/label" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <LabelProduct />
                </Suspense>
              } />
              <Route path="/products/computer" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <ComputerProduct />
                </Suspense>
              } />
              <Route path="/products/receipt-printer" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <ReceiptPrinterProduct />
                </Suspense>
              } />
              <Route path="/products/printer" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <PrinterProduct />
                </Suspense>
              } />
              <Route path="/products/scanner" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <ScannerProduct />
                </Suspense>
              } />
              
              {/* Solution Routes */}
              <Route path="/solutions/fashion-distribution" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <FashionDistributionSolution />
                </Suspense>
              } />
              <Route path="/solutions/lifestyle-brands" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <LifestyleBrandsSolution />
                </Suspense>
              } />
              {/* <Route path="/solutions/fashion-retail" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <FashionRetailSolution />
                </Suspense>
              } /> */}
              {/* <Route path="/solutions/supermarkets" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <SupermarketsSolution />
                </Suspense>
              } />
              <Route path="/solutions/d2c-brands" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <D2CBrandsSolution />
                </Suspense>
              } />
              <Route path="/solutions/warehouse-management" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <WarehouseManagementSolution />
                </Suspense>
              } /> */}
              <Route path="/solutions/multi-location" element={
                <Suspense fallback={<LoadingAnimation />}>
                  <MultiLocationSolution />
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
