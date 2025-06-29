export default function CustomBurgerSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-xl overflow-hidden shadow-sm border">
      <div className="w-full h-44 sm:h-48 md:h-52 bg-gray-200 rounded-t-xl" />

      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto sm:mx-0" />
        <div className="h-3 bg-gray-200 rounded w-full" />
        <div className="h-3 bg-gray-200 rounded w-5/6" />
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-8 bg-gray-200 rounded w-full" />
      </div>
    </div>
  );
}
