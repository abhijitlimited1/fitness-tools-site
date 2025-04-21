export default function AdBanner() {
  return (
    <div className="my-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-gray-600 mb-2">Advertisement</p>
          <img
            src="/assets/placeholder.jpg"
            alt="Ad placeholder"
            className="mx-auto w-full max-w-728px h-24 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
}
