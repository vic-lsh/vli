import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ImageProfile from "../public/profile.jpg";

export interface ContactInfo {
  /** This will be the name displayed at the top of the page */
  titleName: string;
  /** Name used in academic setting. If not provided, titleName will be used. */
  academicName?: string;
  email: string;
  githubUsername: string;
  profilePic: string | StaticImport;
}

export const CONTACT: ContactInfo = {
  titleName: "Shihang (Vic) Li",
  academicName: "Shihang Li",
  email: "shli [at] cs [dot] uw [dot] edu",
  githubUsername: "vic-lsh",
  profilePic: ImageProfile,
};
