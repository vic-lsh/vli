/**
 * An extended <body /> that contains global styles that will be cascaded
 * throughout all routes.
 */
export const StyledBody: React.FC = ({ children }) => {
  return (
    <body className="min-h-screen dark:bg-gray-900 dark:text-gray-200">
      {children}
    </body>
  );
};
