/** Behaves the same as `<a></a>`, but opens in a new tab. */
export const LinkToNewTab: React.FC<{ href: string }> = ({
  children,
  href,
}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};
