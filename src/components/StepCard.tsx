export default function StepCard({
  stepNumber,
  title,
  description,
  children,
  colorClass,
}: any) {
  return (
    <div className="text-center">
      <div className="relative mb-8">
        <div
          className={`${colorClass} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300`}
        >
          <div className="bg-white rounded-xl p-6 relative">{children}</div>
          {/* Step number */}
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
            <span
              className={`text-2xl font-bold ${
                stepNumber === 1
                  ? "text-green-600"
                  : stepNumber === 2
                  ? "text-orange-600"
                  : "text-blue-600"
              }`}
            >
              {stepNumber}
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
