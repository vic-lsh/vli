export const SectionHeader: React.FC = ({ children }) => {
  return (
    <h2 className="text-2xl lg:text-xl w-full font-semibold text-blue-800 dark:text-dark-accent border-solid border-b-2 border-blue-800 dark:border-dark-accent font-mono lg:border-none lg:w-60">
      {children}
    </h2>
  );
};

export const SectionContent: React.FC = ({ children }) => {
  return <div className="py-5 lg:py-0 max-w-2xl w-full">{children}</div>;
};

export const SectionContainer: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-start lg:border-t-2 lg:border-blue-800 lg:dark:border-dark-accent lg:py-5">
      {children}
    </div>
  );
};
