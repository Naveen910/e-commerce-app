export default function Loader() {
  return (
    <div className="flex items-center justify-center py-20">
      <div className="flex flex-col items-center gap-4">
        
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

        {/* Text */}
        <p className="text-gray-600 text-sm font-medium tracking-wide">
          Loading products...
        </p>
      </div>
    </div>
  );
}