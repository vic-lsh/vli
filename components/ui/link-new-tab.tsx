/** Behaves the same as `<a></a>`, but opens in a new tab. */
export const LinkToNewTab: React.FC<{ href: string; className?: string }> = ({
  children,
  href,
  className,
}) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
