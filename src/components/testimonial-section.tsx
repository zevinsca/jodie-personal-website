"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import TestimonialCard from "./testimonial-card";

export default function TestimonialSection() {
  return (
    <section id="testimonial-section" className="lg:pt-32 lg:pb-16 pt-16 pb-8">
      <div>
        <p className="text-orange-theme font-bold text-center lg:text-6xl text-4xl lg:px-0 px-10">
          Testimonial
        </p>
        {/* Swiper for mobile view */}
        <div className="lg:hidden block px-10 pt-8">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
          >
            <SwiperSlide>
              <TestimonialCard
                src="/testimonial/miss-t.jpg"
                alt="Miss T Avatar"
                testimonial="I hired Jodie to build a site for my small business, and they completely nailed it. The site looks amazing, works perfectly on every device, and loads super fast. They explained everything clearly and made the whole process easy. Highly recommend if you need a front-end dev who truly cares about the details."
                name="Miss T"
                title="Founder of Baleton"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                src="/testimonial/michael.jpg"
                alt="Michael Avatar"
                testimonial="Working with Jodie was a game-changer. Their front-end code is clean, responsive, and easy to integrate with our API. They think ahead about UX and accessibility, and they’re quick to troubleshoot any edge cases. If you're building something that needs polish and performance, they’re the one to call."
                name="Michael"
                title="Fullstack Developer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard
                src="/testimonial/miss-a.jpg"
                alt="Miss A Avatar"
                testimonial="The first thing I noticed was how smooth and intuitive the site felt. Every interaction was thoughtful — from the layout to the animations. You can tell it was built by someone who understands both design and development. It’s inspiring to see this level of craft from a front-end developer."
                name="Miss A"
                title="Freelance Designer"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Grid Desktop */}
        <div className="hidden lg:grid grid-cols-3 gap-10 mx-auto container pt-16 px-16">
          <TestimonialCard
            src="/testimonial/miss-t.jpg"
            alt="Miss T Avatar"
            testimonial="I hired Jodie to build a site for my small business, and they completely nailed it. The site looks amazing, works perfectly on every device, and loads super fast. They explained everything clearly and made the whole process easy. Highly recommend if you need a front-end dev who truly cares about the details."
            name="Miss T"
            title="Founder of Baleton"
          />
          <TestimonialCard
            src="/testimonial/michael.jpg"
            alt="Michael Avatar"
            testimonial="Working with Jodie was a game-changer. Their front-end code is clean, responsive, and easy to integrate with our API. They think ahead about UX and accessibility, and they’re quick to troubleshoot any edge cases. If you're building something that needs polish and performance, they’re the one to call."
            name="Michael"
            title="Fullstack Developer"
          />
          <TestimonialCard
            src="/testimonial/miss-a.jpg"
            alt="Miss A Avatar"
            testimonial="The first thing I noticed was how smooth and intuitive the site felt. Every interaction was thoughtful — from the layout to the animations. You can tell it was built by someone who understands both design and development. It’s inspiring to see this level of craft from a front-end developer."
            name="Miss A"
            title="Freelance Designer"
          />
        </div>
      </div>
    </section>
  );
}
