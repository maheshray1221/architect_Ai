"use client";
import React from "react";
import { servicesCard } from "@/constants/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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
    <div>
        
      <main className="w-full grow flex flex-col items-center text-center  px-4 md:px-24 bg-[#f3f4f6] pb-18">
        <h1 className="text-4xl font-bold leading-tight pb-3">Architectural </h1>
        <span className="text-4xl font-bold leading-tight pb-3">Services</span>
        <p className="text-lg font-light leading-tight pb-14">Engineered for performance, built for scale. Explore the core pillars of our ecosystem.</p>
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="max-w-75"
        >
          <CarouselContent>
            {servicesCard.map((service) => {
                const Icon = service.icon
              return (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={service.id}>
                  <div className="p-1 ">
                    <Card className="bg-white">
                      <CardContent className="p-6">
                        {/* Icon Box */}
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                          <service.icon size={24} color={service.iconColor} />
                        </div>

                        {/* Heading */}
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                          {service.heading}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </main>
    </div>
  );
}

export default Services;
