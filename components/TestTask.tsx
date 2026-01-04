import React from 'react';

/**
 * Props interface for TestTask component
 */
interface TestTaskProps {
  /** The title to display in the component */
  title?: string;
  /** The description text to display */
  description?: string;
  /** Additional CSS classes to apply */
  className?: string;
  /** Whether the component is in loading state */
  isLoading?: boolean;
  /** Callback function when the verify button is clicked */
  onVerify?: () => void;
}

/**
 * TestTask component for automation verification
 * 
 * This component displays a test task with title, description and verification button.
 * Supports both light and dark themes using Tailwind CSS.
 * 
 * @param props - The component props
 * @returns JSX element representing the test task
 */
const TestTask: React.FC<TestTaskProps> = ({
  title = 'Test Task',
  description = 'This is a test to verify automation',
  className = '',
  isLoading = false,
  onVerify
}) => {
  return (
    <div 
      className={`
        max-w-md mx-auto p-6 rounded-lg shadow-lg
        bg-white dark:bg-gray-800
        border border-gray-200 dark:border-gray-700
        transition-colors duration-200
        ${className}
      `}
    >
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h2>
        <div className="h-1 w-16 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
        {description}
      </p>

      {/* Status Indicator */}
      <div className="flex items-center mb-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Ready for verification
          </span>
        </div>
      </div>

      {/* Action Button */}
      <button
        onClick={onVerify}
        disabled={isLoading}
        className="
          w-full py-3 px-4 rounded-md font-medium
          bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600
          text-white
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          dark:focus:ring-offset-gray-800
        "
      >
        {isLoading ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Verifying...</span>
          </div>
        ) : (
          'Verify Automation'
        )}
      </button>

      {/* Footer */}
      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-xs text-gray-400 dark:text-gray-500 text-center">
          Test component generated automatically
        </p>
      </div>
    </div>
  );
};

export default TestTask;
