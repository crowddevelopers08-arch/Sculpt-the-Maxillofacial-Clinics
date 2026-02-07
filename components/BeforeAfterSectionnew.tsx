import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const TransformationSectionhair: React.FC = () => {
  const beforeConditions = [
    { title: "Receding hairline", icon: "lucide:arrow-down-right" },
    { title: "Androgenetic alopecia", icon: "lucide:circle-dashed" },
    { title: "Thinning hair", icon: "lucide:scissors" },
    { title: "Alopecia areata", icon: "lucide:circle-off" },
    { title: "Diffuse hair loss", icon: "lucide:wind" },
    { title: "Stress-induced shedding", icon: "lucide:brain" }
  ];
  
  const afterResults = [
    { title: "Increased hair follicle count", icon: "lucide:plus" },
    { title: "Stimulated hair growth", icon: "lucide:sprout" },
    { title: "Improved thickness", icon: "lucide:layers" },
    { title: "Faster growth cycle", icon: "lucide:timer" },
    { title: "Slowed hair loss progression", icon: "lucide:shield" },
    { title: "Healthier scalp overall", icon: "lucide:check-circle" }
  ];

  return (
    <>
     <style jsx global>{`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
      `}</style>
    
    <section id="results" className="section-padding relative overflow-hidden bg-white" style={{fontFamily: "'Outfit', sans-serif"}}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#f8f8f8] to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[radial-gradient(circle_at_center,rgba(201,149,0,0.07),transparent_70%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 md:py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5 md:mb-8"
        >
          {/* <span className="inline-block px-4 py-1.5 bg-[#c99500]/10 text-[#c99500] rounded-full text-sm font-medium mb-4">Results</span> */}
          <h2 className="text-[40px] max-[470px]:text-[22px] font-black mb-4 md:mb-6 leading-tight">
            Hair Transplants That Bring Back <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#c99500] to-[#e6b800] bg-clip-text text-transparent">
              Confidence
            </span> and a Fuller Hairline
          </h2>
        </motion.div>
        
        {/* Before/After with Large Center Image */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 max-[470px]:gap-1 max lg:gap-8 xl:gap-10">
          {/* Before Treatment */}
          <div className="lg:w-1/4 xl:w-3/10">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-red-100 flex items-center justify-center mr-2 sm:mr-3">
                <Icon icon="lucide:alert-circle" className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              Before Treatment:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {beforeConditions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03, x: 5 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-100 shadow-sm"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                    <Icon icon={item.icon} className="text-red-500 w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Large Center Image - Increased width for larger screens */}
          <div className="flex justify-center my-8 lg:my-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-[600px] h-full min-h-[300px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px]"
            >
              <div className="w-full h-full rounded-2xl overflow-hidden border-4 border-[#c99500] shadow-xl">
                <img 
                  src="sl1.jpg" 
                  alt="Hair treatment process" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#c99500] text-white px-6 py-2 rounded-full text-base font-medium whitespace-nowrap shadow-lg">
                Our Treatment Process
              </div>
            </motion.div>
          </div>
          
          {/* After Treatment */}
          <div className="lg:w-1/4 xl:w-3/10">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 md:mb-6 flex items-center">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#c99500]/10 flex items-center justify-center mr-2 sm:mr-3">
                <Icon icon="lucide:check-circle" className="text-[#c99500] w-3 h-3 sm:w-4 sm:h-4" />
              </div>
              After Treatment:
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {afterResults.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.03, x: -5 }}
                  className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-[#c99500]/5 rounded-lg border border-[#c99500]/20 shadow-sm"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#c99500]/10 flex items-center justify-center flex-shrink-0">
                    <Icon icon={item.icon} className="text-[#c99500] w-3 h-3 sm:w-4 sm:h-4" />
                  </div>
                  <span className="text-gray-700 font-medium text-sm sm:text-base">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10 md:mt-8 lg:mt-10 max-[470px]:mt-5 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="relative inline-flex items-center justify-center group">
            <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-[#c99500] to-[#e6bc4e] group-hover:shadow-lg group-hover:shadow-[#c99500]/50"></div>
            <a href="#hairform">
              <Button
                className="
                  relative inline-flex items-center justify-center
                  w-full px-8 py-3 text-base font-normal
                  text-white bg-black border border-transparent rounded-full
                "
                endContent={<Icon icon="lucide:calendar" width={18} />}
              >
                Schedule Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};