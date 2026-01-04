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
  /** Additional CSS classes */
  className?: string;
  /** Click handler for the task */
  onClick?: () => void;
}

/**
 * TestTask Component
 * 
 * A component to verify automation functionality with test data.
 * Displays a task card with title, description, and completion status.
 * 
 * @param props - The component props
 * @returns JSX.Element
 */
const TestTask: React.FC<TestTaskProps> = ({
  title = 'Test Task',
  description = 'This is a test to verify automation',
  isCompleted = false,
  className = '',
  onClick
}) => {
  return (
    <div
      className={`
        max-w-md mx-auto p-6 rounded-lg shadow-md border
        bg-white dark:bg-gray-800
        border-gray-200 dark:border-gray-700
        hover:shadow-lg transition-shadow duration-300
        ${onClick ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700' : ''}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {/* Header with title and status */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="flex items-center">
          <div
            className={`
              w-3 h-3 rounded-full
              ${isCompleted 
                ? 'bg-green-500 dark:bg-green-400' 
                : 'bg-yellow-500 dark:bg-yellow-400'
              }
            `}
            aria-label={isCompleted ? 'Completed' : 'In Progress'}
          />
          <span className="ml-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            {isCompleted ? 'Completed' : 'In Progress'}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {description}
      </p>

      {/* Footer with metadata */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
        <span className="text-xs text-gray-500 dark:text-gray-400">
          Automation Test
        </span>
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" />
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Active
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestTask;
