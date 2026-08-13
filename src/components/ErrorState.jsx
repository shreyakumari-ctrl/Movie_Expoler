import { AlertTriangle } from "lucide-react";

function ErrorState({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <AlertTriangle size={40} className="text-red-500 mb-4" />
      <p className="text-red-400 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
        >
          Try Again
        </button>
      )}
    </div>
  );
}

export default ErrorState;