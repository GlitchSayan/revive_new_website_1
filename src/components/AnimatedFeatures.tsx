"use client";
import React, { useState } from "react";

export default function AnimatedFeatures() {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "eco-friendly",
      title: "Eco-Friendly",
      description: "Sustainable choices for a better planet",
      color: "#00c851",
      bgColor: "bg-green-100",
      iconColor: "bg-green-500",
    },
    {
      id: "ai-powered",
      title: "AI-Powered",
      description: "Advanced machine learning technology",
      color: "#4285f4",
      bgColor: "bg-blue-100",
      iconColor: "bg-blue-500",
    },
    {
      id: "real-time",
      title: "Real-time",
      description: "Instant analysis and recommendations",
      color: "#ff8800",
      bgColor: "bg-orange-100",
      iconColor: "bg-orange-500",
    },
    {
      id: "personalized",
      title: "Personalized",
      description: "Tailored to your dietary preferences",
      color: "#aa66cc",
      bgColor: "bg-purple-100",
      iconColor: "bg-purple-500",
    },
  ];

  return (
    <div className="mt-20 bg-white rounded-3xl shadow-xl p-8 md:p-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Revive?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our AI-powered platform helps you make informed decisions about your
          food choices while promoting sustainability.
        </p>
      </div>

      <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="text-center cursor-pointer transition-all duration-300 p-4 rounded-xl hover:shadow-lg hover:scale-105"
            onMouseEnter={() => setActiveIndex(index)}
          >
            <div
              className={`w-16 h-16 ${feature.bgColor} rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 hover:shadow-lg`}
            >
              <div
                className={`w-8 h-8 ${feature.iconColor} rounded-full`}
              ></div>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}

        {/* Animated highlight line */}
        <div
          className="absolute bottom-0 h-1 rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${100 / features.length}%`,
            left: `${(activeIndex * 100) / features.length}%`,
            backgroundColor: features[activeIndex].color,
          }}
        />
      </div>
    </div>
  );
}
