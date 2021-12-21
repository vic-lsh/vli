/**
 * Contains global styles that will be cascaded throughout all routes.
 */
export const RootStyleContainer: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-gray-200">
      {children}
    </div>
  );
};
