export const UrlLink: React.FC<{ href: string }> = ({ children, href }) => (
  <a className="underline" href={href}>
    {children}
  </a>
);
