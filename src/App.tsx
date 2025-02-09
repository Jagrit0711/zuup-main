
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AdminAuthProvider } from "./contexts/AdminAuthContext";
import { AdminEditorProvider } from "./contexts/AdminEditorContext";
import Index from "./pages/Index";
import Team from "./pages/Team";
import Admin from "./pages/Admin";
import AdminUpdate from "./pages/AdminUpdate";
import TermsAndConditions from "./pages/TermsAndConditions";
import FamilyLoveChecker from "./pages/FamilyLoveChecker";
import Jobs from "./pages/Jobs";
import Blog from "./pages/Blog";
import OurStory from "./pages/OurStory";
import JagritSachdev from "./pages/JagritSachdev";

const queryClient = new QueryClient();

// View tracker component
const ViewTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const trackPageView = () => {
      const currentDate = new Date();
      const currentMonth = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;
      
      const savedViews = JSON.parse(localStorage.getItem('siteViews') || '[]');
      const currentMonthData = savedViews.find(item => item.date === currentMonth);
      
      if (currentMonthData) {
        currentMonthData.views += 1;
        localStorage.setItem('siteViews', JSON.stringify(savedViews));
      } else {
        const newData = [...savedViews, { date: currentMonth, views: 1 }];
        localStorage.setItem('siteViews', JSON.stringify(newData));
      }
    };

    trackPageView();
  }, [location]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AdminAuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AdminEditorProvider>
            <ViewTracker />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/team" element={<Team />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/adminupdate/*" element={<AdminUpdate />} />
              <Route path="/terms" element={<TermsAndConditions />} />
              <Route path="/family-check" element={<FamilyLoveChecker />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/jagrit-sachdev" element={<JagritSachdev />} />
            </Routes>
          </AdminEditorProvider>
        </BrowserRouter>
      </TooltipProvider>
    </AdminAuthProvider>
  </QueryClientProvider>
);

export default App;
