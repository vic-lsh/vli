/**
 * Heading component intended to be used as the header of any sub-route page.
 *
 * This component displays content in monofont. It would be best if the content
 * of the header mirrors the page's URL path (e.g., /comments, /blogs, /images).
 */
export const SubrouteHeading: React.FC = ({ children }) => (
  <h1 className="text-5xl font-mono" style={{ fontFamily: "Monaco" }}>
    {children}
  </h1>
);
