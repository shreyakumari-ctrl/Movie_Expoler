
import { Link } from "react-router-dom";
import { SearchX } from "lucide-react";

function EmptyState({ message, subMessage, actionLabel, actionTo, onAction }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-4">
      <SearchX size={40} className="text-neutral-600 mb-4" />
      <p className="text-neutral-300 font-medium mb-1">{message}</p>
      {subMessage && (
        <p className="text-neutral-500 text-sm mb-4">{subMessage}</p>
      )}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
        >
          {actionLabel}
        </button>
      )}
      {actionLabel && actionTo && !onAction && (
        <Link
          to={actionTo}
          className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}

export default EmptyState;