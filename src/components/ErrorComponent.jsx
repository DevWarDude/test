function ErrorComponent() {
  return (
    <div className="flex h-screen items-center justify-center p-4">
      <div className="max-w-md rounded-lg bg-white p-8 text-center shadow-sm">
        <h2 className="mb-4 text-2xl font-bold text-red-600">Offline</h2>
        <p className="mb-6 text-gray-600">
          You're currently offline. Please check your internet connection or
          refresh the page
        </p>
      </div>
    </div>
  );
}

export default ErrorComponent;
