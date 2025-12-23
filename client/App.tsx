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
import BlogPost from "./pages/BlogPost";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";
import Hackathon from "./pages/Hackathon";
import Internship from "./pages/Internship";
/* import StudentsHackathon from "./pages/StudentsHackathon"; */


const queryClient = new QueryClient();

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
          <Route path="/blogs/:id" element={<BlogPost />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Hackathon" element={<Hackathon />} />
          <Route path="/Internship" element={<Internship />} />
          {/* <Route path="/StudentsHackathon" element={<StudentsHackathon />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
