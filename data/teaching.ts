export interface Course {
  id: string;
  name: string;
  school: string;
}

const TA_COURSES: Course[] = [
  {
    id: "CSCI 0300",
    name: "Fundamentals of Computer Systems",
    school: "Brown",
  },
  {
    id: "CSCI 1760",
    name: "Multiprocessor Synchronization",
    school: "Brown",
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
