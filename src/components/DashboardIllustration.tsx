export default function DashboardIllustration() {
  return (
    <div className="space-y-3">
      {/* Charts and food items */}
      <div className="flex justify-between items-center group">
        <div className="w-16 h-16 bg-orange-400 rounded-lg group-hover:scale-105 transition-transform duration-200"></div>
        <div className="flex-1 ml-3">
          <div className="h-2 bg-green-400 rounded mb-1"></div>
          <div className="h-2 bg-orange-400 rounded w-3/4"></div>
        </div>
      </div>
      <div className="flex justify-between items-center group">
        <div className="w-16 h-16 bg-red-400 rounded-lg group-hover:scale-105 transition-transform duration-200"></div>
        <div className="flex-1 ml-3">
          <div className="h-2 bg-red-400 rounded mb-1"></div>
          <div className="h-2 bg-yellow-400 rounded w-2/3"></div>
        </div>
      </div>
      <div className="flex justify-between items-center group">
        <div className="w-16 h-16 bg-green-400 rounded-lg group-hover:scale-105 transition-transform duration-200"></div>
        <div className="flex-1 ml-3">
          <div className="h-2 bg-green-400 rounded mb-1"></div>
          <div className="h-2 bg-blue-400 rounded w-4/5"></div>
        </div>
      </div>
    </div>
  );
}
