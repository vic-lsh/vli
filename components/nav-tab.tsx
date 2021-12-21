import Link from "next/link";

export const NavTab: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <span className="hover:bg-gray-200 transition-all px-3 py-2 rounded-md underline">
        {children}
      </span>
    </Link>
  );
};
