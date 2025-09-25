import { useState } from "react";
import BgImage1 from "../assets/Faqs/BackgroundImage.png"
import Image1 from "../assets/Faqs/Image1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const faqData = [
    {
      question: "What are the best crops to grow in India during the Kharif season?",
      answer:
        "During the Kharif season (June–October), popular crops include rice, maize, cotton, soybeans, groundnut, and pulses, as they thrive with the onset of monsoon rains.",
    },
    {
      question: "How can farmers improve soil fertility naturally?",
      answer:
        "Farmers can improve soil fertility through crop rotation, using organic manure, vermicompost, and green manures, as well as practicing conservation tillage to retain soil health.",
    },
    {
      question: "What are the benefits of drip irrigation in agriculture?",
      answer:
        "Drip irrigation saves up to 50% water compared to traditional methods, improves crop yield, reduces weed growth, and ensures nutrients reach plant roots directly.",
    },
  ];

  return (
    <section className="relative  max-w-screen  ">
      {/* Background Image */}
      <div className="hidden lg:block lg:absolute inset-0 left-0  ">
        <img
          src={BgImage1}
          alt="FAQ Background"
          className="max-w-1/4 h-full"
        />
      </div>

      {/* FAQ content on top of image */}
      <div className="relative  z-10 py-10 md:py-16 px-6 md:px-20 lg:px-50  ">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center justify-center">
          {/* Left Side Image (keep as is) */}
          <div className="flex justify-center  items-center md:justify-start self-center relative">
            <img
              src={Image1}
              className="rounded-lg w-3/4 "
              alt="FAQ"
            />
            <section className="bg-[#EEC044] rounded-t-2xl absolute bottom-0 left-[3.5%] px-8 py-3">
                <h2 className="sub-heading-1 !text-white text-center">Call us anytime</h2>
                <h3 className="heading-2 !text-white">666 888 0000</h3>

            </section>
          </div>

          {/* Right Side FAQs */}
          <div className="space-y-3 ">
            <header className="mb-4">
              <h1 className="sub-heading-1">Frequently Asked Questions</h1>
              <h2 className="heading-2">Your Agriculture Queries Answered</h2>
            </header>

            {/* FAQ Items */}
            <section className="space-y-2">
              {faqData.map((data, index) => {
                const isOpen = index === selectedIndex;
                return (
                  <div
                    key={index}
                    className="bg-[#F8F7F0] rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-md"
                    onClick={() => setSelectedIndex(isOpen ? -1 : index)}
                  >
                    <div className="flex items-center">
                      {/* Question text */}
                      <h3 className="heading-3 flex-1 pr-4">{data.question}</h3>

                      {/* Chevron button */}
                      <button className="bg-[#C5CE38] rounded-md p-2 flex-shrink-0">
                        <FontAwesomeIcon
                          icon={faChevronRight}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-90" : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Answer with smooth expand */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-gray-700">{data.answer}</p>
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Faqs;
