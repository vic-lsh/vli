export const SectionHeader: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl font-semibold text-blue-800 dark:text-dark-accent border-solid border-b-2 border-blue-800 dark:border-dark-accent font-mono">
      {children}
    </h2>
  );
};

export const SectionContent: React.FC = ({ children }) => {
  return <div className="py-3">{children}</div>;
};
