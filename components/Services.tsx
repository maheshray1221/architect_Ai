"use client";
import React from "react";
import { servicesCard } from "@/constants/data";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

function Services() {
  return (
    <section className="w-full flex flex-col items-center text-center px-4 bg-[#f3f4f6] sm:py-10 lg:py-28 pb-10">

      {/* Badge */}
      <Badge
        variant="outline"
        className="text-xs font-semibold tracking-widest uppercase text-indigo-600 border-indigo-200 bg-indigo-50 px-3 py-1 mb-4"
      >
        What We Offer
      </Badge>

      {/* Heading — mobile 2 line, laptop 1 line */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
        <span className="block sm:hidden">Architectural<br />Services</span>
        <span className="hidden sm:block">Architectural Services</span>
      </h2>

      {/* Paragraph */}
      <p className="text-base sm:text-lg font-light text-gray-500 leading-relaxed mb-12 max-w-xl">
        Engineered for performance, built for scale. Explore the core pillars of our ecosystem.
      </p>

      {/* Carousel */}
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl px-8">
        <Carousel
          plugins={[Autoplay({ delay: 2000 })]}
          className="w-full"
        >
          <CarouselContent>
            {servicesCard.map((service) => (
              <CarouselItem
                key={service.id}
                className="basis-full sm:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card className="bg-white hover:shadow-md transition-shadow duration-200">
                    <CardContent className="p-6 text-left">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 shadow-sm flex items-center justify-center mb-5">
                        <service.icon size={22} color={service.iconColor} />
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        {service.heading}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>

    </section>
  );
}

export default Services;



// "use client";
// import React from "react";
// import { servicesCard } from "@/constants/data";
// import { Card, CardContent, CardHeader } from "@/components/ui/card";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import Autoplay from "embla-carousel-autoplay";

// function Services() {
//   return (
//     <div>
        
//       <main className="w-full grow flex flex-col items-center text-center  px-4 md:px-24 bg-[#f3f4f6] pb-18">
//         <h1 className="text-4xl font-bold leading-tight pb-3">Architectural </h1>
//         <span className="text-4xl font-bold leading-tight pb-3">Services</span>
//         <p className="text-lg font-light leading-tight pb-14">Engineered for performance, built for scale. Explore the core pillars of our ecosystem.</p>
//         <Carousel
//           plugins={[
//             Autoplay({
//               delay: 2000,
//             }),
//           ]}
//           className="max-w-75"
//         >
//           <CarouselContent>
//             {servicesCard.map((service) => {
//                 const Icon = service.icon
//               return (
//                 <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={service.id}>
//                   <div className="p-1 ">
//                     <Card className="bg-white">
//                       <CardContent className="p-6">
//                         {/* Icon Box */}
//                         <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
//                           <service.icon size={24} color={service.iconColor} />
//                         </div>

//                         {/* Heading */}
//                         <h3 className="text-2xl font-semibold text-gray-900 mb-3">
//                           {service.heading}
//                         </h3>

//                         {/* Description */}
//                         <p className="text-gray-500 text-sm leading-relaxed">
//                           {service.description}
//                         </p>
//                       </CardContent>
//                     </Card>
//                   </div>
//                 </CarouselItem>
//               );
//             })}
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </main>
//     </div>
//   );
// }

// export default Services;



