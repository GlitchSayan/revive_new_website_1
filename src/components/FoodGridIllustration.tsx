export default function FoodGridIllustration() {
  return (
    <div className="relative">
      {/* Food grid illustration */}
      <div className="grid grid-cols-4 gap-2">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="aspect-square rounded-lg overflow-hidden">
            <div
              className={`w-full h-full transition-colors duration-300 hover:scale-105 transform ${
                i % 4 === 0
                  ? "bg-green-400"
                  : i % 4 === 1
                  ? "bg-orange-400"
                  : i % 4 === 2
                  ? "bg-red-400"
                  : "bg-yellow-400"
              }`}
            ></div>
          </div>
        ))}
      </div>
      {/* Chart overlays */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white bg-opacity-95 rounded-lg p-2 shadow-lg">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded-full"></div>
            <div className="w-8 h-2 bg-gray-200 rounded">
              <div className="w-6 h-2 bg-green-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
