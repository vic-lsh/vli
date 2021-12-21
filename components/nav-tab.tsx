import Link from "next/link";

export const NavTab: React.FC<{ href: string }> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <span className="hover:border-black transition-all px-3 py-2 rounded-md underline cursor-pointer">
        {children}
      </span>
    </Link>
  );
};
