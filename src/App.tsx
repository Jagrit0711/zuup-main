import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "@/routes";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import About from "./pages/About";
import Empower from "./pages/Empower";
import Join from "./pages/Join";
import Schools from "./pages/Schools";
import Saas from "./pages/Saas";
import Events from "./pages/Events";
import Moza from "./pages/Moza";
import Privacy from "./pages/Privacy";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import JobDetail from "./pages/JobDetail";
import JobAdmin from "./pages/JobAdmin";
import ZuupStore from "./pages/ZuupStore";
import ZuupCity from "./pages/ZuupCity";
import ZuupCities from "./pages/ZuupCities";
import FloatingBackground from "./components/FloatingBackground";

const ExternalRedirect = ({ url }: { url: string }) => {
  useEffect(() => { window.location.href = url; }, [url]);
  return null;
};

const queryClient = new QueryClient();

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
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
         <FloatingBackground />
         <ViewTracker />
        <Routes>
          <Route path={routes.home} element={<Index />} />
          <Route path={routes.ourStory} element={<OurStory />} />
          <Route path={routes.about} element={<About />} />
          <Route path={routes.empower} element={<Empower />} />
          <Route path={routes.schools} element={<Schools />} />
          <Route path={routes.join} element={<Join />} />
          <Route path={routes.saas} element={<Saas />} />
          <Route path={routes.events} element={<Events />} />
          <Route path={routes.moza} element={<Moza />} />
          <Route path={routes.privacy} element={<Privacy />} />
          <Route path={routes.careers} element={<Careers />} />
          <Route path="/careers/:slug" element={<JobDetail />} />
          <Route path={routes.jobAdmin} element={<JobAdmin />} />
          <Route path={routes.zuupStore} element={<ZuupStore />} />
          <Route path={routes.store} element={<ZuupStore />} />
          <Route path={routes.zuupCities} element={<ZuupCities />} />
          <Route path="/zuup-in/:city" element={<ZuupCity />} />
          <Route path={routes.apply} element={<ExternalRedirect url="https://zuup.fillout.com/CITY" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
