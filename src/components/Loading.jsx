
function Loading() {
  const skeletons = Array.from({ length: 8 });

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {skeletons.map((_, index) => (
        <div
          key={index}
          className="bg-neutral-900 rounded-xl overflow-hidden animate-pulse"
        >
          <div className="w-full h-72 bg-neutral-800" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-neutral-800 rounded w-3/4" />
            <div className="h-3 bg-neutral-800 rounded w-1/2" />
            <div className="h-3 bg-neutral-800 rounded w-1/3" />
          </div>
        </div>
      ))}
    </main>
  );
}

export default Loading;