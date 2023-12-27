export const SectionHeader: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl lg:text-3xl font-bold text-blue-800 dark:text-dark-accent border-solid border-b-2 border-blue-800 dark:border-dark-accent font-serif">
      {children}
    </h2>
  );
};

export const SectionContent: React.FC = ({ children }) => {
  return <div className="py-3">{children}</div>;
};
