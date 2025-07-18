"use client";

import React from "react";

import { companies, testimonials } from "@/Data/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { motion } from "framer-motion";
import SectionHeading from "@/app/SectionHeading";

const Clients = () => {
  return (
    <section id="testimonial" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto  px-6">
         {/* Section Heading */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.5 }}
           className="mb-10">
        <SectionHeading>What People Say's</SectionHeading>
        </motion.div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <motion.div
                 initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, }}
              whileHover={{
                                    y: -10,
                   transition: { duration: 0.2 }
               }}
 

          // remove bg-white dark:bg-black dark:bg-grid-white/[0.05], h-[40rem] to 30rem , md:h-[30rem] are for the responsive design
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </motion.div>

       
      </div>
      </div>
    </section>
  );
};

export default Clients;
