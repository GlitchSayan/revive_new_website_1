export default function PhoneIllustration() {
  return (
    <div className="relative">
      <div className="bg-black rounded-2xl p-2 mx-auto w-32 h-48 relative overflow-hidden">
        <div className="bg-green-400 rounded-xl w-full h-full relative flex items-center justify-center">
          {/* Avocado illustration */}
          <div className="relative">
            <div className="w-16 h-20 bg-green-500 rounded-full relative">
              <div className="w-6 h-8 bg-yellow-800 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* Barcode overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-90 rounded px-2 py-1">
                <div className="flex space-x-px">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-px h-4 bg-black"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hand holding phone */}
      <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-200 rounded-full opacity-80"></div>
    </div>
  );
}
