export interface News {
  date: string;
  detail: string;
}

const quicksand_pub: News = {
  date: "2024-07",
  detail:
    "Quicksand has been accepted to NSDI '25. Stay tuned for more detail!",
};

const mach_demo_pub: News = {
  date: "2024-06",
  detail:
    "A demo paper showcasing our system Mach has been accepted to VLDB '24!",
};

const uw_phd: News = {
  date: "2023-09",
  detail: "I have started my PhD at the University of Washington!",
};

const hotos_23_volunteer: News = {
  date: "2023-06",
  detail: "I am a student volunteer at HotOS '23. See you there!",
};

const brown_grad: News = {
  date: "2023-05",
  detail:
    "I have graduated from Brown! Many thanks to Malte and everyone who supported me along the way.",
};

export const NEWS: News[] = [
  quicksand_pub,
  mach_demo_pub,
  uw_phd,
  hotos_23_volunteer,
  brown_grad,
];
