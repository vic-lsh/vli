export interface Course {
  id: string;
  name: string;
  school: string;
  url?: string;
}

const TA_COURSES: Course[] = [
  {
    id: "CSCI 0300",
    name: "Fundamentals of Computer Systems",
    school: "Brown",
    url: "https://cs.brown.edu/courses/csci0300/2023/",
  },
  {
    id: "CSCI 1760",
    name: "Multiprocessor Synchronization",
    school: "Brown",
    url: "https://cs.brown.edu/courses/cs176/",
  },
  {
    id: "STAT-GB.2308.10",
    name: "Stochastic Processes",
    school: "NYU",
  },
];

export interface TeachingInfo {
  brief: string;
  courses: Course[];
}

export const TEACHING = {
  brief:
    "I find teaching deeply rewarding. I have TAed for the following courses:",
  courses: TA_COURSES,
};
