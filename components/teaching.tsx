import { TeachingInfo, Course } from "../data/teaching";
import { UrlLink } from "./ui/url-link";
import { SectionHeader, SectionContent, SectionContainer } from "./ui/home";

const CourseEntry: React.FC<{ course: Course }> = ({ course }) => {
  const courseDesc = `${course.id}: ${course.name} @ ${course.school}`;

  return course.url ? (
    <UrlLink href={course.url}>{courseDesc}</UrlLink>
  ) : (
    <span>{courseDesc}</span>
  );
};

export const Teaching: React.FC<{ info: TeachingInfo }> = ({ info }) => {
  return (
    <SectionContainer>
      <SectionHeader>Teaching</SectionHeader>
      <SectionContent>
        <p>{info.brief}</p>
        <ul className="list-disc list-outside ml-3 py-2">
          {info.courses.map((course, index) => (
            <li key={index}>
              <CourseEntry course={course} />
            </li>
          ))}
        </ul>
      </SectionContent>
    </SectionContainer>
  );
};
