"use client";
import Lottie from "lottie-react";

interface LottieStepProps {
  animationData: unknown;
  title: string;
  description: string;
  bgColor?: string;
  width?: number;
  height?: number;
}

export default function LottieStep({
  animationData,
  title,
  description,
  bgColor = "bg-white",
  width = 300,
  height = 200,
}: LottieStepProps) {
  return (
    <div className="text-center group">
      {/* Animation Container */}
      <div
        className={`relative ${bgColor} p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-6 group-hover:scale-105`}
      >
        {/* Lottie Animation */}
        <div className="flex justify-center items-center">
          <Lottie
            animationData={animationData}
            style={{ width: width, height: height }}
            loop={true}
            autoplay={true}
          />
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
        {description}
      </p>
    </div>
  );
}
