import ImageBadLand1 from "../public/imgs/bl.jpeg";
import ImageSquirrel from "../public/imgs/sql.jpeg";
import ImageBison2 from "../public/imgs/bs2.jpeg";
import ImageGrandTeton from "../public/imgs/gt.jpeg";
import ImageStone from "../public/imgs/st1.jpeg";
import ImageBadLand2 from "../public/imgs/bl2.jpeg";
import ImageGreenery1 from "../public/imgs/g1.jpeg";
import ImageBike1 from "../public/imgs/b1.jpeg";
import ImageGreenery2 from "../public/imgs/g2.jpeg";

import { SectionHeader, SectionContent, SectionContainer } from "./ui/home";
import { ImageGrid } from "./ui/image-grid";

export const Fun = () => {
  const roadtripImages = [
    { src: ImageBadLand1, alt: "Dusk at Badlands National Park" },
    { src: ImageSquirrel, alt: "A squirrel at Crater Lake National Park" },
    {
      src: ImageBison2,
      alt: "A bison next to a van at Badlands National Park",
    },
    { src: ImageGrandTeton, alt: "Grand Teton National Park" },
    {
      src: ImageStone,
      alt: "A hill of tavertine at Yellowstone National Park",
    },
    { src: ImageBadLand2, alt: "Dusk at Badlands National Park" },
  ];

  const mm35Images = [
    { src: ImageGreenery1, alt: "Mountain in fog at Rainier National Park" },
    { src: ImageBike1, alt: "Some bikes in New York streets" },
    { src: ImageGreenery2, alt: "A tree at Rainer National Park" },
  ];

  return (
    <SectionContainer>
      <SectionHeader>Fun</SectionHeader>
      <SectionContent>
        <p>
          I enjoy taking pictures,
          {` snowboarding, `}
          {`mildly spirited backroad driving, and a healthy dose of metaprogramming :)`}
        </p>

        <p className="py-2">
          {/* hacky padding between paragraphs, will fix */}
          {`Below are some photos I took on my cross-country roadtrip from New York
        to Seattle in the summer of 2023.`}
        </p>
        <ImageGrid images={roadtripImages} />

        <p className="pt-2">
          {`Lately I have been shooting with prime lenses exclusively. Here're some
        35mm shots:`}
        </p>
        <ImageGrid images={mm35Images} />
      </SectionContent>
    </SectionContainer>
  );
};
