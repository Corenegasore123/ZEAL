import React from "react";
import Search3D from "./3dsearch";

const Hero = () => {
  return (
    <section className="relative bg-customGray-background min-h-screen overflow-hidden">
      <div className="relative max-w-[2000px] mx-auto h-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">

          <div className="relative flex flex-col gap-16 z-10 px-5 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-10 lg:py-12 xl:py-16 h-full justify-center">

            <div className="w-16 xs:w-18 sm:w-20 lg:w-[80px] mb-12 xs:mb-16 sm:mb-20 md:mb-24">
              <img 
                src="/images/home-images/logo.png" 
                alt="Company Logo"
                className="w-full h-auto"
                width={80}
                height={80}
              />
            </div>

            <div className="flex flex-col gap-12 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">

              <h1 className="font-lora text-customGray-primary 
                text-[28px] xs:text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px]
                leading-[1.25] lg:leading-[1.3]
                max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] lg:max-w-[450px]">
                We Help You Build The Dreams & Bring More Than You Expect
              </h1>

              <div className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] lg:max-w-[450px]">
                <Search3D />
              </div>
            </div>
          </div>

         
          <div className="absolute top-0 right-0 h-full 
            w-[90%] xs:w-[85%] sm:w-[80%] md:w-[75%] lg:w-1/2
            pointer-events-none select-none">
            
            <div className="relative h-full w-full">

              <img
                src="/images/home-images/hero.png"
                alt="Modern Building"
                className="object-cover object-right-top sm:object-center h-full lg:h-[100vh] w-full
                  opacity-40 xs:opacity-50 sm:opacity-60 lg:opacity-100"
                style={{
                  maxHeight: '100vh',
                  objectPosition: '80% center'
                }}
                width={950}
                height={1080}
                loading="eager"
                priority="true"
              />
              
              <div className="absolute inset-0 lg:hidden 
                bg-gradient-to-t 
                from-customGray-background 
                via-customGray-background/80 
                to-transparent" 
              />
              <div className="absolute inset-0 lg:hidden 
                bg-gradient-to-r 
                from-customGray-background 
                to-transparent"
              />
            </div>
          </div>

         
          <div className="hidden lg:block absolute top-0 left-[45%] h-full w-[150px]
            bg-gradient-to-r from-customGray-background to-transparent" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;