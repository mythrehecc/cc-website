import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full bg-[#DBEAFE] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-8 max-w-[1920px] flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
            alt="Crestcode Logo" 
            className="w-11 h-11 object-contain"
          />
          <div className="flex flex-col">
            <span className="text-[19px] font-bold leading-7 text-[#111827]">Crestcode</span>
            <span className="text-[13px] font-normal leading-5 text-[#9CA3AF]">(India)</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-base font-normal leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">
            Services
          </Link>
          <Link to="/AboutUs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            About Us
          </Link>
          <Link to="/Blogs" className="text-base font-normal leading-6 text-[#374151] hover:text-[#111827] transition-colors">
            Blogs
          </Link>
        </nav>
        <button className="bg-[#111827] text-[#DBEAFE] px-5 py-2 rounded font-semibold text-[15px] leading-6 hover:bg-[#1f2937] transition-colors">
          <Link to="/Getintouch">Get In Touch</Link>
        </button>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#DBEAFE] py-12">
      <div className="container mx-auto px-8 max-w-[1462px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://cdn.builder.io/api/v1/image/assets%2F5586001c824e4bba8f5b4c395a2b38ba%2F7bcf3b6829fc467ea4a0c747871be1c5?format=webp&width=800" 
                alt="Crestcode Logo" 
                className="w-11 h-11 object-contain"
              />
              <div className="flex flex-col">
                <span className="text-[19px] font-bold leading-7 text-[#111827]">Crestcode</span>
                <span className="text-[13px] font-normal leading-5 text-[#9CA3AF]">(India)</span>
              </div>
            </div>
            <p className="text-[15px] leading-6 text-[#111827] mb-6 max-w-md">
              Engineering digital products that matter. From idea to launch -
              we build reliable, scalable, human-centered products for
              startups, businesses, and entrepreneurs.
            </p>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-base font-bold leading-6 text-[#111827] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/Internship" className="text-[15px] leading-6 text-[#111827] font-bold hover:text-[#2563EB] transition-colors">Internships</Link></li>
              <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Privacy policy</a></li>
              <li><Link to="/Getintouch" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Get In Touch</Link></li>
              <li><Link to="/Hackathon" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Hackathon</Link></li>
              <li><a href="#" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">Careers</a></li>
            </ul>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-[15px] font-bold leading-6 text-[#111827] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                  <path d="M13.3335 2.66663H2.66683C1.93045 2.66663 1.3335 3.26358 1.3335 3.99996V12C1.3335 12.7363 1.93045 13.3333 2.66683 13.3333H13.3335C14.0699 13.3333 14.6668 12.7363 14.6668 12V3.99996C14.6668 3.26358 14.0699 2.66663 13.3335 2.66663Z" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14.6668 4.66663L8.68683 8.46663C8.48101 8.59558 8.24304 8.66397 8.00016 8.66397C7.75729 8.66397 7.51932 8.59558 7.3135 8.46663L1.3335 4.66663" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <a href="mailto:contact@crestcode.in" className="text-[15px] leading-6 text-[#111827] hover:text-[#2563EB] transition-colors">contact@crestcode.in</a>
              </li>
              <li className="flex items-start gap-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1 flex-shrink-0">
                  <path d="M13.3332 6.66671C13.3332 10.6667 7.99984 14.6667 7.99984 14.6667C7.99984 14.6667 2.6665 10.6667 2.6665 6.66671C2.6665 5.25222 3.22841 3.89567 4.2286 2.89547C5.2288 1.89528 6.58535 1.33337 7.99984 1.33337C9.41433 1.33337 10.7709 1.89528 11.7711 2.89547C12.7713 3.89567 13.3332 5.25222 13.3332 6.66671Z" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z" stroke="#111827" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-[15px] leading-5 text-[#111827]">Chennai, India</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#4B5563] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[13px] leading-5 text-[#6B7280]">© 2025 Crestcode India. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] leading-5 text-[#6B7280] hover:text-[#111827] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[13px] leading-5 text-[#6B7280] hover:text-[#111827] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default function Internship() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-[#9BB4C2] py-16 md:py-20 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="max-w-[743px] mx-auto text-center space-y-10 md:space-y-15">
            <div className="space-y-6">
              <h1 className="text-[#111827] text-5xl md:text-6xl font-bold leading-tight">
                Internship
              </h1>
              <p className="text-[#111827] text-xl md:text-[22px] leading-8">
                Hands-on experience where learning meets real-world impact.
              </p>
            </div>
            <button className="inline-flex px-6 py-4 md:px-8 md:py-5 justify-center items-center rounded bg-[#111827] text-white text-lg md:text-xl font-semibold leading-6 hover:bg-[#1f2937] transition-colors">
              Join Our Internship Program
            </button>
          </div>
        </div>
      </section>

      {/* Internship Program Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-5">
              <h2 className="text-[#111827] text-5xl md:text-6xl lg:text-[64px] font-bold leading-tight">
                Internship
                <br />
                Program
              </h2>
              <p className="text-[#4B5563] text-2xl md:text-[28px] leading-10">
                Our internship program immerses final-year students in real-world
                design challenges, building user-centric solutions across product
                experiences.
              </p>
              <div className="h-1 w-full bg-[#111827] max-w-[744px]"></div>
              <p className="text-[#4B5563] text-2xl md:text-[28px] leading-10">
                Now accepting applications for our internship program!
              </p>
            </div>
            <div className="relative w-full aspect-video rounded-[30px] bg-[#D9D9D9] flex items-center justify-center">
              <button className="w-[116px] h-[116px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform">
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M38.6215 18.5684C41.9673 20.4711 41.9988 25.2822 38.6782 27.2285L19.2523 38.6143C15.9317 40.5606 11.7494 38.1823 11.7241 34.3334L11.5767 11.8172C11.5515 7.96828 15.7023 5.53548 19.0481 7.43813L38.6215 18.5684Z"
                    fill="#2563EB"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What can interns expect Section */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-[1920px] mx-auto px-8">
          <h2 className="text-[#111827] text-3xl md:text-4xl font-bold leading-tight text-center mb-12 md:mb-16">
            What can interns expect during the program?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            {/* Card 1 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <svg
                className="w-14 h-14"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M47.7295 8.27055L53.5955 9.44305C53.9105 9.50605 54.1695 9.73705 54.2605 10.0486C54.3065 10.1999 54.3106 10.3608 54.2723 10.5143C54.2341 10.6677 54.155 10.808 54.0435 10.92L49.238 15.7291C48.6622 16.3016 47.8835 16.6237 47.0715 16.6251H43.085L33.075 26.6386C33.266 27.3596 33.3011 28.1131 33.178 28.8488C33.055 29.5845 32.7765 30.2856 32.3613 30.9053C31.946 31.5249 31.4035 32.049 30.7698 32.4425C30.1361 32.8361 29.4259 33.0901 28.6863 33.1876C27.9468 33.2851 27.195 33.2239 26.4809 33.0081C25.7669 32.7922 25.1071 32.4267 24.5454 31.9359C23.9837 31.4451 23.533 30.8402 23.2235 30.1615C22.9139 29.4828 22.7525 28.746 22.75 28.0001C22.7498 27.1944 22.9351 26.3996 23.2914 25.677C23.6477 24.9545 24.1655 24.3236 24.8047 23.8333C25.4439 23.343 26.1874 23.0064 26.9776 22.8495C27.7677 22.6926 28.5834 22.7196 29.3615 22.9286L39.375 12.9115V8.93205C39.375 8.12005 39.697 7.33955 40.271 6.76555L45.08 1.95655C45.1921 1.845 45.3323 1.76592 45.4858 1.72771C45.6392 1.6895 45.8002 1.69359 45.9515 1.73955C46.263 1.83055 46.494 2.08955 46.557 2.40455L47.7295 8.27055Z"
                  fill="#60A5FA"
                />
                <path
                  d="M7.00042 28C7.00401 31.0029 7.65157 33.9701 8.8994 36.7014C10.1472 39.4327 11.9663 41.8647 14.234 43.8332C16.5016 45.8017 19.165 47.261 22.0446 48.1126C24.9242 48.9643 27.9529 49.1884 30.9265 48.77C33.9 48.3516 36.7493 47.3004 39.282 45.6872C41.8148 44.074 43.9721 41.9363 45.6085 39.4185C47.2448 36.9007 48.3222 34.0612 48.7678 31.0916C49.2135 28.1219 49.0171 25.0913 48.1919 22.204C48.0761 21.8667 48.0301 21.5093 48.0567 21.1537C48.0834 20.798 48.1822 20.4515 48.347 20.1352C48.5119 19.819 48.7394 19.5395 49.0157 19.314C49.292 19.0885 49.6113 18.9215 49.9542 18.8233C50.297 18.7251 50.6563 18.6977 51.0101 18.7428C51.3639 18.7879 51.7048 18.9045 52.0121 19.0855C52.3194 19.2666 52.5867 19.5082 52.7976 19.7959C53.0085 20.0835 53.1586 20.411 53.2389 20.7585C54.8368 26.3499 54.5332 32.3135 52.376 37.7137C50.2188 43.1139 46.3298 47.6452 41.3194 50.5968C36.3089 53.5483 30.4604 54.7529 24.6913 54.0218C18.9223 53.2907 13.5592 50.6651 9.44342 46.557C5.33211 42.4423 2.70373 37.0787 1.97093 31.3083C1.23813 25.5379 2.44241 19.6876 5.3947 14.6758C8.34698 9.66399 12.8801 5.77455 18.2823 3.61812C23.6845 1.4617 29.6499 1.1604 35.2419 2.76153C35.9078 2.95617 36.4695 3.40647 36.8043 4.01401C37.1392 4.62156 37.2199 5.33695 37.0289 6.00385C36.8379 6.67075 36.3907 7.23492 35.785 7.57309C35.1793 7.91125 34.4643 7.9959 33.7964 7.80853C30.6694 6.9106 27.3766 6.75149 24.1775 7.34373C20.9785 7.93598 17.9609 9.26339 15.3626 11.2213C12.7643 13.1792 10.6564 15.714 9.20527 18.6257C7.7541 21.5375 6.9993 24.7467 7.00042 28Z"
                  fill="#60A5FA"
                />
                <path
                  d="M17.4997 27.9999C17.4999 29.913 18.0224 31.7897 19.0109 33.4276C19.9994 35.0656 21.4162 36.4025 23.1087 37.2943C24.8012 38.1861 26.705 38.5989 28.6149 38.4882C30.5248 38.3774 32.3681 37.7474 33.9462 36.6659C35.524 35.5818 36.7754 34.0869 37.565 32.343C38.3546 30.599 38.6524 28.6724 38.4262 26.7714C38.365 26.3102 38.4279 25.8409 38.6084 25.412C38.7889 24.9831 39.0804 24.61 39.4529 24.3312C39.8255 24.0524 40.2657 23.8779 40.7281 23.8258C41.1905 23.7736 41.6584 23.8456 42.0837 24.0344C42.5089 24.2208 42.8771 24.5166 43.1507 24.8917C43.4244 25.2667 43.5936 25.7076 43.6412 26.1694C44.0215 29.4178 43.3812 32.704 41.809 35.5719C40.2369 38.4398 37.8109 40.7471 34.8679 42.1736C31.9249 43.6002 28.6108 44.0752 25.3856 43.5327C22.1603 42.9902 19.184 41.4571 16.8696 39.1463C14.5552 36.8354 13.0176 33.8614 12.4702 30.637C11.9228 27.4126 12.3928 24.0977 13.8149 21.1525C15.2369 18.2074 17.5406 15.7779 20.4061 14.2014C23.2716 12.6249 26.5568 11.9796 29.8057 12.3549C30.1536 12.3872 30.4915 12.4886 30.7997 12.6532C31.1079 12.8178 31.3801 13.0422 31.6005 13.3134C31.8208 13.5845 31.9848 13.8969 32.0828 14.2323C32.1808 14.5676 32.2109 14.9192 32.1713 15.2663C32.1317 15.6134 32.0232 15.9491 31.8521 16.2538C31.6811 16.5584 31.451 16.8259 31.1752 17.0404C30.8995 17.255 30.5837 17.4123 30.2464 17.5033C29.909 17.5942 29.5569 17.6169 29.2107 17.5699C27.7395 17.3991 26.2488 17.5415 24.8365 17.9877C23.4243 18.4339 22.1224 19.1738 21.0163 20.1588C19.9103 21.1439 19.0252 22.3517 18.4191 23.7031C17.813 25.0545 17.4997 26.5189 17.4997 27.9999Z"
                  fill="#60A5FA"
                />
              </svg>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Begin your internship journey with a practical, real-world project
                designed to evaluate your analytical thinking, creativity, and
                problem-solving approach.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <svg
                className="w-14 h-14"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg" >
                <path
                  d="M4.66699 28V14H15.167V11.6666C15.167 9.81011 15.9045 8.02963 17.2172 6.71688C18.53 5.40412 20.3105 4.66663 22.167 4.66663C24.0235 4.66663 25.804 5.40412 27.1167 6.71688C28.4295 8.02963 29.167 9.81011 29.167 11.6666V14H39.667V28H44.3337C46.1902 28 47.9707 28.7375 49.2834 30.0502C50.5962 31.363 51.3337 33.1434 51.3337 35C51.3337 36.8565 50.5962 38.637 49.2834 39.9497C47.9707 41.2625 46.1902 42 44.3337 42H39.667V51.3333H4.66699V42H9.33366C11.1902 42 12.9707 41.2625 14.2834 39.9497C15.5962 38.637 16.3337 36.8565 16.3337 35C16.3337 33.1434 15.5962 31.363 14.2834 30.0502C12.9707 28.7375 11.1902 28 9.33366 28H4.66699Z"
                  stroke="#60A5FA"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Candidates are assessed through hands-on project execution.
                Successful completion unlocks the next stage of the selection
                process.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <svg
                className="w-14 h-14"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34.4028 4.64187C33.9613 4.42602 33.4681 4.33845 32.9793 4.38911C32.4904 4.43977 32.0257 4.62663 31.6378 4.92843L16.5987 16.625H7C5.83968 16.625 4.72688 17.0859 3.90641 17.9064C3.08594 18.7269 2.625 19.8397 2.625 21V35C2.625 36.1603 3.08594 37.2731 3.90641 38.0936C4.72688 38.9141 5.83968 39.375 7 39.375H16.5987L31.6378 51.0716C32.0257 51.3734 32.4905 51.5603 32.9793 51.611C33.4682 51.6617 33.9614 51.5741 34.4029 51.3582C34.8445 51.1424 35.2165 50.8069 35.4768 50.39C35.737 49.9731 35.875 49.4915 35.875 49V7C35.875 6.50853 35.737 6.02695 35.4767 5.61005C35.2164 5.19316 34.8443 4.85771 34.4028 4.64187ZM7.875 21.875H14.875V34.125H7.875V21.875ZM30.625 43.6319L20.125 35.4659V20.5341L30.625 12.3681V43.6319ZM46.375 28C46.3754 30.3448 45.5197 32.6092 43.9688 34.3678C43.7407 34.6264 43.4639 34.8374 43.1542 34.989C42.8445 35.1406 42.5081 35.2297 42.164 35.2512C41.8199 35.2727 41.4749 35.2263 41.1487 35.1145C40.8226 35.0027 40.5217 34.8278 40.2631 34.5997C40.0046 34.3716 39.7935 34.0948 39.6419 33.7852C39.4904 33.4755 39.4013 33.139 39.3797 32.7949C39.3582 32.4508 39.4047 32.1058 39.5164 31.7797C39.6282 31.4535 39.8032 31.1526 40.0312 30.8941C40.7344 30.0952 41.1223 29.0675 41.1223 28.0033C41.1223 26.9391 40.7344 25.9113 40.0312 25.1125C39.5942 24.5872 39.3792 23.9122 39.4319 23.2309C39.4846 22.5496 39.801 21.9157 40.3137 21.464C40.8264 21.0122 41.4951 20.7782 42.1776 20.8116C42.8601 20.8451 43.5027 21.1434 43.9688 21.6431C45.5183 23.3983 46.3739 25.6587 46.375 28ZM55.125 28C55.1277 32.5203 53.4615 36.8825 50.4459 40.25C49.9818 40.769 49.3305 41.0823 48.6354 41.121C47.9402 41.1598 47.2582 40.9208 46.7392 40.4567C46.2203 39.9926 45.9069 39.3413 45.8682 38.6462C45.8294 37.951 46.0684 37.269 46.5325 36.75C48.6848 34.3437 49.8747 31.2285 49.8747 28C49.8747 24.7715 48.6848 21.6563 46.5325 19.25C46.2933 18.9948 46.1075 18.6943 45.9861 18.3662C45.8646 18.0382 45.81 17.6892 45.8253 17.3397C45.8407 16.9902 45.9257 16.6474 46.0755 16.3312C46.2252 16.0151 46.4367 15.7321 46.6973 15.4988C46.958 15.2655 47.2627 15.0867 47.5934 14.9729C47.9242 14.859 48.2744 14.8124 48.6234 14.8358C48.9724 14.8592 49.3133 14.9521 49.6259 15.1091C49.9385 15.2661 50.2165 15.484 50.4438 15.75C53.4601 19.1171 55.1271 23.4794 55.125 28Z"
                  fill="#60A5FA"
                />
              </svg>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                High-performing candidates from the project phase are invited for
                interviews, where skills, mindset, and real-time problem solving are
                evaluated.
              </p>
            </div>

            {/* Card 4 */}
            <div className="flex flex-col gap-6 md:gap-8">
              <svg
                className="w-14 h-14"
                width="56"
                height="56"
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.9804 6.52636L43.8811 6.65703C45.2811 6.8787 46.8491 7.2497 47.8128 8.21336C48.7764 9.17703 49.1498 10.7474 49.3714 12.1474L49.5021 13.0457C49.7961 15.169 49.8731 17.9527 49.3714 21.042C48.3821 27.139 45.1364 34.412 36.9861 40.047C36.9504 40.4637 36.9372 40.882 36.9464 41.3L36.9861 42.567C37.0094 43.4117 36.9954 44.254 36.7621 45.0637C36.3188 46.6037 34.7391 47.6187 33.2621 48.3467L32.5388 48.6897L31.6054 49.1004L30.9684 49.357C29.3188 49.987 27.3284 50.428 26.0264 49.1237C25.4361 48.5334 25.1631 47.7307 24.9438 46.928L24.8364 46.5267C24.4631 45.1104 24.0408 43.7034 23.5134 42.3407C23.3679 42.5177 23.2137 42.6875 23.0514 42.8494C21.7798 44.1187 20.0554 44.758 18.3311 45.2527L17.1854 45.5677L16.0421 45.871L14.9268 46.151L13.9188 46.3844L12.7124 46.641L11.9588 46.788C11.5829 46.8576 11.1957 46.8347 10.8307 46.7213C10.4656 46.608 10.1336 46.4075 9.8633 46.1372C9.593 45.8669 9.39251 45.5349 9.27912 45.1698C9.16573 44.8047 9.14284 44.4176 9.21244 44.0417L9.47144 42.756L9.77244 41.4074L10.0618 40.2174L10.5868 38.2457C11.1071 36.3324 11.7394 34.3607 13.1534 32.949L13.3844 32.7274L11.6041 32.088L9.81444 31.472C8.76677 31.1267 7.66544 30.7627 6.90477 30.002C5.5141 28.6114 6.10444 26.4414 6.79744 24.7357L7.18477 23.8327L7.50444 23.1304C8.2441 21.5577 9.2941 19.747 10.9648 19.2664C11.7744 19.033 12.6144 19.019 13.4614 19.04L14.7284 19.082C15.1484 19.0929 15.5661 19.0797 15.9814 19.0424C21.6141 10.892 28.8894 7.64636 34.9864 6.65703C37.6303 6.22141 40.3238 6.17738 42.9804 6.52636ZM35.7331 11.263C30.6044 12.096 24.3721 14.8424 19.5094 22.1574C18.9191 23.044 17.9228 23.4664 16.9078 23.6274C16.3338 23.7207 15.7551 23.744 15.1741 23.744L13.4311 23.7184C13.1418 23.7168 12.8517 23.7215 12.5608 23.7324C11.8514 24.675 11.3568 25.795 10.9858 26.908L14.4858 28.1797L15.9254 28.7234C18.5574 29.7547 21.1054 31.003 23.0654 32.963C26.3671 36.2647 28.0448 40.5837 29.2581 44.996C30.3221 44.6227 31.3908 44.1467 32.2961 43.4677L32.3101 42.5974L32.2844 40.8567C32.2844 40.278 32.3078 39.6994 32.4011 39.1207C32.5598 38.1057 32.9844 37.1094 33.8711 36.519C41.1861 31.6564 43.9324 25.424 44.7654 20.2954C45.1854 17.7054 45.1154 15.3907 44.8798 13.685C44.789 12.9774 44.6384 12.2788 44.4294 11.5967C43.7473 11.3885 43.0486 11.2387 42.3411 11.1487C40.1446 10.864 37.9182 10.901 35.7331 11.263ZM16.4504 36.2484C15.6338 37.2354 15.2534 38.5304 14.9478 39.8137L14.6958 40.9057L14.5674 41.433L16.1868 41.0527C17.4701 40.7494 18.7674 40.3644 19.7521 39.5477C20.1896 39.1099 20.4353 38.5162 20.4351 37.8972C20.4349 37.2782 20.1888 36.6847 19.7509 36.2472C19.3131 35.8097 18.7194 35.564 18.1004 35.5642C17.4815 35.5644 16.888 35.8105 16.4504 36.2484ZM29.6501 19.7517C30.0834 19.3183 30.5978 18.9744 31.1639 18.7398C31.7301 18.5052 32.3369 18.3843 32.9498 18.3842C33.5626 18.3841 34.1695 18.5047 34.7357 18.7392C35.302 18.9736 35.8165 19.3173 36.2499 19.7505C36.6834 20.1838 37.0272 20.6982 37.2618 21.2644C37.4965 21.8305 37.6173 22.4374 37.6174 23.0502C37.6175 23.6631 37.4969 24.2699 37.2625 24.8362C37.028 25.4024 36.6844 25.9169 36.2511 26.3504C35.3758 27.2257 34.1885 27.7175 32.9506 27.7175C31.7127 27.7175 30.5254 27.2257 29.6501 26.3504C28.7748 25.475 28.283 24.2878 28.283 23.0499C28.283 21.8119 28.7748 20.6247 29.6501 19.7494V19.7517Z"
                  fill="#60A5FA"
                />
              </svg>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Gain hands-on exposure to real business and product challenges,
                ensuring meaningful learning and industry-ready experience throughout
                the internship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Evaluation Process */}
      <section className="w-full py-16 md:py-20">
        <div className="max-w-[1920px] mx-auto px-8">
          <h2 className="text-[#111827] text-3xl md:text-4xl font-bold leading-tight text-center mb-12 md:mb-16">
            Internship Evaluation Process
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 xl:gap-16">
            {/* Step 1 */}
            <div className="border border-black rounded-[10px] p-10 space-y-3">
              <div className="text-[#111827] text-4xl font-bold">01</div>
              <h3 className="text-[#60A5FA] text-[34px] font-semibold leading-10">
                Apply
              </h3>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Final-year students submit their application. Eligibility and profile
                alignment are reviewed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="border border-black rounded-[10px] p-10 space-y-3">
              <div className="text-[#111827] text-4xl font-bold">02</div>
              <h3 className="text-[#60A5FA] text-[34px] font-semibold leading-10">
                Assess
              </h3>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Shortlisted candidates complete a real-world project. Skills and
                problem-solving ability are evaluated.
              </p>
            </div>

            {/* Step 3 */}
            <div className="border border-black rounded-[10px] p-10 space-y-3">
              <div className="text-[#111827] text-4xl font-bold">03</div>
              <h3 className="text-[#60A5FA] text-[34px] font-semibold leading-10">
                Interview
              </h3>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Successful candidates are invited for an interview. Approach,
                communication, and thinking are assessed.
              </p>
            </div>

            {/* Step 4 */}
            <div className="border border-black rounded-[10px] p-10 space-y-3">
              <div className="text-[#111827] text-4xl font-bold">04</div>
              <h3 className="text-[#60A5FA] text-[34px] font-semibold leading-10">
                Offer
              </h3>
              <p className="text-[#4B5563] text-2xl md:text-[20px] leading-10">
                Selected candidates receive an internship offer. Onboarding begins
                based on performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Is the Crestcode Internship Right for You? */}
      <section className="w-full py-16 md:py-20 bg-[#F9FAFB]">
        <div className="max-w-[1920px] mx-auto px-8">
          <h2 className="text-[#111827] text-3xl md:text-4xl font-semibold text-center mb-12 md:mb-16">
            Is the Crestcode Internship Right for You?
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Eligibility */}
            <div className="space-y-10">
              <div className="bg-[#DBEAFE] rounded-[20px] p-8 md:p-10 space-y-7">
                <h3 className="text-[#111827] text-[30px] font-semibold leading-10">
                  B.Tech Graduates
                </h3>
                <p className="text-[#4B5563] text-2xl leading-10">
                  Final-year B.Tech students are eligible to apply. Applicants should
                  have a strong interest in gaining practical industry experience.
                </p>
              </div>
              <div className="bg-[#DBEAFE] rounded-[20px] p-8 md:p-10 space-y-3">
                <h3 className="text-[#111827] text-[30px] font-semibold leading-10">
                  MBA Professionals
                </h3>
                <p className="text-[#4B5563] text-2xl leading-10">
                  MBA professionals can apply for roles aligned with B.Tech domains.
                  Applicants should demonstrate relevant skills and an interest in
                  technical or product-driven work.
                </p>
              </div>
            </div>

            {/* Right Column - Values */}
            <div className="space-y-8">
              <h3 className="text-[#2563EB] text-[30px] font-medium leading-10">
                Internship Values
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-[rgba(23,108,199,0.2)] rounded-[10px] p-5 space-y-2">
                  <h4 className="text-[#111827] text-xl font-semibold leading-10">
                    Ownership
                  </h4>
                  <p className="text-[#4B5563] text-base leading-[30px]">
                    Taking responsibility and driving tasks forward independently.
                  </p>
                </div>
                <div className="bg-[rgba(23,108,199,0.2)] rounded-[10px] p-5 space-y-2">
                  <h4 className="text-[#111827] text-xl font-semibold leading-10">
                    User-Centric Thinking
                  </h4>
                  <p className="text-[#4B5563] text-base leading-10">
                    Solving problems with a focus on user needs and business impact.
                  </p>
                </div>
                <div className="bg-[rgba(23,108,199,0.2)] rounded-[10px] p-5 space-y-4">
                  <h4 className="text-[#111827] text-xl font-semibold leading-10">
                    Collaboration
                  </h4>
                  <p className="text-[#4B5563] text-base leading-10">
                    Working effectively with teams through clear communication and
                    shared goals.
                  </p>
                </div>
                <div className="bg-[rgba(23,108,199,0.2)] rounded-[10px] p-5 space-y-5">
                  <h4 className="text-[#111827] text-xl font-semibold leading-10">
                    Impact
                  </h4>
                  <p className="text-[#4B5563] text-base leading-10">
                    Creating meaningful, business-relevant outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Reflection */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-[#F9FAFB]">
        <div className="max-w-[1920px] mx-auto px-8">
          <h2 className="text-[#111827] text-4xl md:text-6xl lg:text-[70px] font-bold leading-tight mb-12 md:mb-16 font-judson">
            INTERNSHIP REFLECTION
          </h2>
          <div className="max-w-[994px] mx-auto text-center space-y-8">
            <p className="text-[#4B5563] text-2xl md:text-[28px] leading-10">
              This internship gave me valuable hands-on experience, helped me apply
              my academic knowledge to real-world projects, and strengthened my
              confidence, skills, and professional mindset."
            </p>
            <p className="text-[#111827] text-2xl md:text-[28px] leading-10 italic">
              John Doe, B.Tech, Anna University.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <div className="w-16 h-16 rounded bg-white/80"></div>
              <div className="w-16 h-16 rounded bg-[#D9D9D9]"></div>
              <div className="w-16 h-16 rounded bg-white/80"></div>
              <div className="w-16 h-16 rounded bg-white/80"></div>
            </div>
          </div>
        </div>
      </section>

      {/* E-Mail Us Your Strengths */}
      <section className="w-full py-12 bg-[#9BB4C2] shadow-xl">
        <div className="max-w-[1920px] mx-auto px-8">
          <div className="max-w-[881px] mx-auto text-center space-y-5 mb-10">
            <h2 className="text-[#111827] text-3xl md:text-[35px] font-bold leading-10">
              E-Mail Us Your Strengths
            </h2>
            <p className="text-[#111827] text-base md:text-[18px] leading-7">
              Share your key strengths with us via email to help us understand your
              skills and areas of expertise. Highlight your abilities that can
              contribute effectively to real-world projects and team goals.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-[1513px] mx-auto flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3.5 rounded-lg bg-white text-[#6B7280] text-[15px] leading-normal focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              required
            />
            <button
              type="submit"
              className="px-12 py-4 rounded-lg bg-[#111827] text-white text-base font-bold leading-6 hover:bg-[#1f2937] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
