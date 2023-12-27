import Image, { StaticImageData } from "next/legacy/image";

export interface ImageSpec {
  src: StaticImageData;
  alt: string;
}

export const ImageGrid: React.FC<{ images: ImageSpec[] }> = ({ images }) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-4">
      {images.map((image, index) => (
        <div key={index} className="relative h-0 pb-[100%]">
          <Image
            src={image.src}
            alt={image.alt}
            title={image.alt}
            layout="fill"
            objectFit="cover"
            placeholder="blur"
          />
        </div>
      ))}
    </div>
  );
};
