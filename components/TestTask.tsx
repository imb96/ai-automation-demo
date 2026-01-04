import React from 'react';

/**
 * Props interface for TestTask component
 */
interface TestTaskProps {
  /** The title to display */
  title?: string;
  /** The description text */
  description?: string;
  /** Whether the task is completed */
  isCompleted?: boolean;
  /** Callback function when task status changes */
  onStatusChange?: (completed: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * TestTask Component
 * 
 * A component designed to verify automation functionality.
 * Displays task information with completion status and dark mode support.
 * 
 * @param props - The component props
 * @returns JSX element representing the test task
 */
const TestTask: React.FC<TestTaskProps> = ({
  title = 'Test Task',
  description = 'This is a test to verify automation',
  isCompleted = false,
  onStatusChange,
  className = ''
}) => {
  const handleStatusToggle = () => {
    if (onStatusChange) {
      onStatusChange(!isCompleted);
    }
  };

  return (
    <div className={`p-6 max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg space-y-4 transition-colors duration-200 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h2>
        <div className={`w-3 h-3 rounded-full ${
          isCompleted 
            ? 'bg-green-500 dark:bg-green-400' 
            : 'bg-gray-300 dark:bg-gray-600'
        }`} />
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {description}
      </p>

      {/* Status Section */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Status:
        </span>
        <span className={`text-sm font-semibold ${
          isCompleted 
            ? 'text-green-600 dark:text-green-400' 
            : 'text-orange-600 dark:text-orange-400'
        }`}>
          {isCompleted ? 'Completed' : 'In Progress'}
        </span>
      </div>

      {/* Action Button */}
      {onStatusChange && (
        <button
          onClick={handleStatusToggle}
          className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            isCompleted
              ? 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500'
              : 'bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700 focus:ring-blue-500'
          }`}
        >
          {isCompleted ? 'Mark as Incomplete' : 'Mark as Complete'}
        </button>
      )}

      {/* Automation Verification Badge */}
      <div className="flex items-center justify-center">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
          🤖 Automation Verified
        </span>
      </div>
    </div>
  );
};

export default TestTask;
