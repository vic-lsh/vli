export interface Publication {
  title: string;
  authors: string[];
  // optional if the publication is not camera-ready
  url?: string;
  venue: string;
  venueAbbr: string;
  venueLink: string;
}

const quicksand = {
  title: "Unleashing True Utility Computing with Quicksand",
  authors: [
    "Zhenyuan Ruan",
    "Shihang Li",
    "Kaiyan Fan",
    "Marcos K. Aguilera",
    "Adam Belay",
    "Seo Jin Park",
    "Malte Schwarzkopf",
  ],
  url: "pubs/quicksand.pdf",
  venue: "The 19th Workshop on Hot Topics in Operating Systems",
  venueAbbr: "HotOS '23",
  venueLink: "https://sigops.org/s/conferences/hotos/2023/",
};

export const PUBLICATIONS: Publication[] = [quicksand];
