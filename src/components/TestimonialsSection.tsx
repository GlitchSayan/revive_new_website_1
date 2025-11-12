"use client";
import Lottie from "lottie-react";
import reviewAnimation from "../../public/animations/Review_Animation.json";

export default function TestimonialsSection() {
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main image and testimonial */}
          <div className="relative">
            {/* Background decorative circles */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-green-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>

            {/* Main testimonial card */}
            <div className="relative bg-white p-8 rounded-3xl shadow-xl">
              {/* Lottie Review Animation */}
              <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl mb-6 overflow-hidden relative flex items-center justify-center">
                <Lottie
                  animationData={reviewAnimation}
                  style={{ width: 320, height: 280 }}
                  loop={true}
                  autoplay={true}
                />
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "After just a week of using Olive, I feel more in control of my
                family's nutrition than ever before. It's empowering to make
                informed choices so quickly."
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                  L
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Lila M.</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-sm">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Title and additional testimonials */}
          <div>
            <div className="mb-12 relative">
              {/* Floating Lottie Animation */}
              <div className="absolute -top-4 -right-4 w-24 h-24 opacity-70">
                <Lottie
                  animationData={reviewAnimation}
                  loop={true}
                  autoplay={true}
                />
              </div>

              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Real Mothers
                <br />
                <span className="text-[#386642]">Real Results</span>
              </h2>

              <button className="text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors text-sm cursor-pointer">
                read all 3,147+ reviews
                <span className="text-xl">→</span>
              </button>
            </div>

            {/* Additional testimonial cards */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Olive has completely changed the way I shop for my family. I
                  feel confident knowing exactly what's in our food before it
                  ever hits our pantry."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Megan L.</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">
                            ⭐
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "Meal planning used to be stressful. Now I scan, get
                  recommendations, and feel great about what my kids are eating.
                  It's that easy."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      T
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Tina B.</h4>
                      <div className="flex">
                        {[...Array(4)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-xs">
                            ⭐
                          </span>
                        ))}
                        <span className="text-gray-300 text-xs">⭐</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="mt-12">
              <button className="bg-[#386642] cursor-pointer text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                Join Thousands of Happy Families
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
