import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import GetinTouch from "./pages/Getintouch";
import Blogs from "./pages/Blogs";
import ArticleDetail from "./pages/ArticleDetail";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Hackathon from "./pages/Hackathon";
import Internship from "./pages/Internship";
import StudentsHackathon from "./pages/StudentsHackathon"; 
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Careers from "./pages/Careers";
import Vacancies from "./pages/Vacancies";


const queryClient = new QueryClient();

// Add smooth scrolling behavior for anchor links
const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const targetId = e.currentTarget.getAttribute('href');
  if (targetId?.startsWith('#')) {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = targetId.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};

// Add event listener for all anchor links
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;
  if (anchor) {
    e.preventDefault();
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Update URL without page reload
      window.history.pushState(null, '', targetId);
    }
  }
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Getintouch" element={<GetinTouch />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<ArticleDetail />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Hackathon" element={<Hackathon />} />
          <Route path="/Internship" element={<Internship />} />
          <Route path="/StudentsHackathon" element={<StudentsHackathon />} /> 
          <Route path="/TermsConditions" element={<TermsConditions />} />
          <Route path="/Privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/Careers" element={<Careers />} />
          <Route path="/Vacancies" element={<Vacancies />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
