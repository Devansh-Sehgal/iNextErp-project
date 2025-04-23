import React from 'react';
import { useLocation } from 'react-router-dom';
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
import LandingPage from "./pages/LandingPage";
import Career from "./pages/Career";
import ComputerProduct from "./pages/products/ComputerProduct";
import BarcodeProduct from "./pages/products/BarcodeProduct";
import LabelProduct from "./pages/products/LabelProduct";
import PrinterProduct from "./pages/products/PrinterProduct";
import ReceiptPrinterProduct from "./pages/products/ReceiptPrinterProduct";
import ScannerProduct from "./pages/products/ScannerProduct";
import FashionDistribution from "./pages/solutions/FashionDistribution";
import LifestyleBrands from "./pages/solutions/LifestyleBrands";
import FashionRetail from "./pages/solutions/FashionRetail";
import D2CBrands from "./pages/solutions/D2CBrands";
import WarehouseManagement from "./pages/solutions/WarehouseManagement";
import MultiLocation from "./pages/solutions/MultiLocation";
import CareerDetail from "./pages/CareerDetail.jsx";
import Support from "./pages/Support";

const InventoryService = lazy(() => import("./pages/services/InventoryService.jsx"));
const POSService = lazy(() => import("./pages/services/POSService.jsx"));
const SupplyChainService = lazy(() => import("./pages/services/SupplyChainService.jsx"));
const AccountingService = lazy(() => import("./pages/services/AccountingService.jsx"));
const ConsultingService = lazy(() => import("./pages/services/ConsultingService.jsx"));
const DevelopmentService = lazy(() => import("./pages/services/DevelopmentService.jsx"));
const CloudService = lazy(() => import("./pages/services/CloudService.jsx"));
const HRMService = lazy(() => import("./pages/services/HRMService.jsx"));
const CRMService = lazy(() => import("./pages/services/CRMService.jsx"));
const ManufacturingService = lazy(() => import("./pages/services/ManufacturingService.jsx"));

emailjs.init("r2V1JFhGvzvEJjBL0");

const ScrollToTop = ({ children }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return children;
};

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
    const prefetchServices = async () => {
      const services = [
        import("./pages/services/InventoryService.jsx"),
        import("./pages/services/POSService.jsx"),
        import("./pages/services/SupplyChainService.jsx"),
        import("./pages/services/AccountingService.jsx"),
        import("./pages/services/ConsultingService.jsx"),
        import("./pages/services/DevelopmentService.jsx"),
        import("./pages/services/CloudService.jsx"),
        import("./pages/services/HRMService.jsx"),
        import("./pages/services/CRMService.jsx"),
        import("./pages/services/ManufacturingService.jsx")
      ];

      await Promise.all(services);
    };

    setTimeout(() => {
      prefetchServices();
    }, 2000);

    if (window.location.pathname === "/") {
      setTimeout(() => setLoading(false), 1200);
    } else {
      setLoading(false);
    }

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
            <ScrollToTop>
              <WhatsAppButton />
              <ContactPopup open={showContactPopup} onOpenChange={setShowContactPopup} />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/support" element={<Support />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/terms" element={<TermsConditions />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/careers" element={<Career />} />
                <Route path="/careers/:id" element={<CareerDetail />} />
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
                <Route path="/services/consulting" element={
                  <Suspense fallback={<LoadingAnimation />}>
                    <ConsultingService />
                  </Suspense>
                } />
                <Route path="/services/development" element={
                  <Suspense fallback={<LoadingAnimation />}>
                    <DevelopmentService />
                  </Suspense>
                } />
                <Route path="/services/cloud" element={
                  <Suspense fallback={<LoadingAnimation />}>
                    <CloudService />
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
                <Route path="/services/manufacturing" element={
                  <Suspense fallback={<LoadingAnimation />}>
                    <ManufacturingService />
                  </Suspense>
                } />
                
                <Route path="/products/computer" element={<ComputerProduct />} />
                <Route path="/products/barcode" element={<BarcodeProduct />} />
                <Route path="/products/label" element={<LabelProduct />} />
                <Route path="/products/printer" element={<PrinterProduct />} />
                <Route path="/products/receipt-printer" element={<ReceiptPrinterProduct />} />
                <Route path="/products/scanner" element={<ScannerProduct />} />
                
                <Route path="/solutions/fashion-distribution" element={<FashionDistribution />} />
                <Route path="/solutions/lifestyle-brands" element={<LifestyleBrands />} />
                <Route path="/solutions/fashion-retail" element={<FashionRetail />} />
                <Route path="/solutions/d2c-brands" element={<D2CBrands />} />
                <Route path="/solutions/warehouse-management" element={<WarehouseManagement />} />
                <Route path="/solutions/multi-location" element={<MultiLocation />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ScrollToTop>
          </BrowserRouter>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
