import { useState } from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Footer from "@/components/Footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  PhoneCall,
  Mail as MailIcon,
  CheckCircle2,
} from "lucide-react";
import { typography, spacing } from "@/utils/typography";

function Header() {
  return (
    <header className="w-full bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
      <div className={spacing.container + " flex items-center justify-between h-16"}>
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
            alt="Crestcode Logo" 
            className="w-10 h-10 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-gray-900 text-base font-bold">Crestcode</span>
            <span className="text-gray-500 text-xs">(India)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Home
          </Link>
          <Link to="/services" className={typography.nav + " text-gray-900 hover:text-blue-500 transition-colors"}>
            Services
          </Link>
          <Link to="/AboutUs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            About Us
          </Link>
          <Link to="/Blogs" className={typography.nav + " text-gray-600 hover:text-gray-900 transition-colors"}>
            Blogs
          </Link>
        </nav>
        <Button className="bg-gray-900 hover:bg-gray-800 text-blue-100">
          <Link to="/Getintouch">Get In Touch</Link>
        </Button>
      </div>
    </header>
  );
}

export default function Getintouch() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    budgetRange: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submission started");
    setIsSubmitting(true);
    setMessage("");

    // Validate required fields
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.projectType || !formData.description.trim()) {
      console.log("Validation failed:", formData);
      setMessage("Please fill in all required fields (Name, Email, Project Type, and Description).");
      setIsSubmitting(false);
      return;
    }

    console.log("Submitting form data:", formData);

    // Convert field names to match backend expectations
    const backendData = {
      full_name: formData.fullName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      project_type: formData.projectType,
      budget_range: formData.budgetRange,
      timeline: formData.timeline,
      description: formData.description,
    };

    console.log("Backend data:", backendData);

    try {
      const response = await fetch("http://localhost:8000/api/contact/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(backendData),
      });

      console.log("Response status:", response.status);
      const data = await response.json();
      console.log("Response data:", data);

      if (response.ok) {
        setMessage("Thank you for contacting us! We'll get back to you soon.");
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          projectType: "",
          budgetRange: "",
          timeline: "",
          description: "",
        });
      } else {
        console.log("Error details:", data.detail);
        if (Array.isArray(data.detail)) {
          const errorMessages = data.detail.map(err => `${err.loc?.join('.')} : ${err.msg}`).join(", ");
          console.log("Formatted errors:", errorMessages);
          setMessage(`Validation error: ${errorMessages}`);
        } else {
          setMessage(data.detail || "Failed to submit form. Please try again.");
        }
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
        <div className="w-full">
          <section className="w-full bg-[#9BB4C2] py-12 md:py-16 flex flex-col items-center">
            <div className={spacing.containerSmall + " text-center"}>
              <div className="space-y-4">
                <h1 className={typography.h1}>Get In Touch</h1>
                <p className={typography.pLarge}>
                  Ready to bring your idea to life? Let's discuss your project and
                  create something amazing together.
                </p>
              </div>
              <Button
                onClick={() => {
                  document
                    .getElementById("contact-form")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                size="lg"
                className="mt-6"
              >
                Contact Us
              </Button>
            </div>
          </section>
          
          <div className="bg-white -mt-2">
            <section id="contact-form" className="w-full pt-2 pb-12 md:pt-4 md:pb-16">
              <div className={spacing.container}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className={typography.h2 + " mb-4"}>
                      Build Your Project
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            placeholder="Your full name"
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                            className="h-10 border-gray-300 rounded-lg text-sm"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            className="h-10 border-gray-300 rounded-lg text-sm"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Company
                          </label>
                          <Input
                            placeholder="Your company name"
                            value={formData.company}
                            onChange={(e) =>
                              setFormData({ ...formData, company: e.target.value })
                            }
                            className="h-10 border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-gray-700 text-sm font-medium mb-2">
                            Phone Number
                          </label>
                          <Input
                            type="tel"
                            placeholder="+91 9876543210"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="h-10 border-gray-300 rounded-lg text-sm"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-700 text-sm font-medium mb-2">
                          Project Type *
                        </label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) =>
                            setFormData({ ...formData, projectType: value })
                          }
                        >
                          <SelectTrigger className="h-10 border-gray-300 rounded-lg text-sm">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="web">Web Development</SelectItem>
                            <SelectItem value="mobile">Mobile App</SelectItem>
                            <SelectItem value="design">UI/UX Design</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-gray-700 text-sm font-medium mb-2">
                            Budget Range
                          </label>
                          <Select
                            value={formData.budgetRange}
                            onValueChange={(value) =>
                              setFormData({ ...formData, budgetRange: value })
                            }
                          >
                            <SelectTrigger className="h-10 border-gray-300 rounded-lg text-sm">
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small">$5,000 - $10,000</SelectItem>
                              <SelectItem value="medium">$10,000 - $25,000</SelectItem>
                              <SelectItem value="large">$25,000 - $50,000</SelectItem>
                              <SelectItem value="enterprise">$50,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-gray-700 text-sm font-medium mb-2">
                            Timeline
                          </label>
                          <Select
                            value={formData.timeline}
                            onValueChange={(value) =>
                              setFormData({ ...formData, timeline: value })
                            }
                          >
                            <SelectTrigger className="h-10 border-gray-300 rounded-lg text-sm">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="urgent">1-2 weeks</SelectItem>
                              <SelectItem value="short">1-2 months</SelectItem>
                              <SelectItem value="medium">3-6 months</SelectItem>
                              <SelectItem value="long">6+ months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="text-gray-700 text-sm font-medium mb-2">
                          Project Description *
                        </label>
                        <Textarea
                          placeholder="Tell us about your project, goals, and any specific requirements..."
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                          }
                          className="min-h-32 border-gray-300 rounded-lg text-sm"
                          required
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        <Send className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                    
                    {message && (
                      <div className={`mt-4 p-3 rounded-lg text-sm ${
                        message.includes("Thank you") 
                          ? "bg-green-50 text-green-700 border border-green-200" 
                          : "bg-red-50 text-red-700 border border-red-200"
                      }`}>
                        {message}
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div className="bg-white rounded-xl shadow-sm p-6">
                      <h3 className={typography.h3 + " mb-4"}>
                        Contact Information
                      </h3>
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                          <div>
                            <h4 className={typography.h5 + " mb-1"}>
                              Our Office
                            </h4>
                            <p className={typography.pSmall}>
                              2nd Floor, Plot No:248, Kannan St, Sree Balaji Nagar,
                              Pallikaranai, Chennai - 600 100.
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div>
                            <h4 className={typography.h5}>
                              Phone
                            </h4>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div>
                            <h4 className={typography.h5 + " mb-1"}>
                              Email
                            </h4>
                            <p className={typography.pSmall}>
                              contact@crestcode.in
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <Clock className="w-5 h-5 text-blue-400 flex-shrink-0" />
                          <div>
                            <h4 className={typography.h5 + " mb-1"}>
                              Business Hours
                            </h4>
                            <p className={typography.pSmall}>
                              Tuesday - Friday: 11:00 AM - 8:00 PM IST
                              <br />
                              Saturday: 09:00 AM - 5:00 PM IST
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-sm overflow-hidden h-48">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/TEMP/151937ec3e52055161fe617ea770584d0b5ed301?width=1216"
                        alt="Crestcode office"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}