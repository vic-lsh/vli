import { SectionHeader, SectionContent, SectionContainer } from "./ui/home";
import { Publication } from "../data/pubs";
import { UrlLink } from "./ui/url-link";

const PublicationEntry: React.FC<{ pub: Publication; selfName?: string }> = ({
  pub,
  selfName,
}) => {
  const formattedName = pub.authors.map((name, index) =>
    name === selfName ? <strong key={index}>{name}</strong> : name,
  );
  const concatenatedAuthors = formattedName.map((name, index) => (
    <span key={index}>
      {name}
      {index === formattedName.length - 1 ? "" : ", "}
    </span>
  ));

  return (
    <span>
      {pub.url ? (
        <a
          href={pub.url}
          className="font-bold underline text-blue-600 dark:text-dark-accent"
        >
          {pub.title}
        </a>
      ) : (
        <div className="font-bold">{pub.title}</div>
      )}
      <div className="text-sm">{concatenatedAuthors}</div>
      <div className="text-sm italic">
        {pub.venue}{" "}
        {pub.venueLink && pub.venueAbbr && (
          <span>
            (<UrlLink href={pub.venueLink}>{pub.venueAbbr}</UrlLink>)
          </span>
        )}
      </div>
    </span>
  );
};

export const Publications: React.FC<{
  pubs: Publication[];
  selfName?: string;
}> = ({ pubs, selfName }) => {
  return (
    <SectionContainer>
      <SectionHeader>Publications</SectionHeader>
      <SectionContent>
        {pubs.map((pub, index) => (
          <PublicationEntry key={index} pub={pub} selfName={selfName} />
        ))}
      </SectionContent>
    </SectionContainer>
  );
};
