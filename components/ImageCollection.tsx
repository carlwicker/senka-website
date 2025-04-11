import ImageGrid from "./ImageGrid";

interface ImageCollectionData {
  title: string;
  dimensions: string;
  year: number;
  description: string[];
  images: { src: string; width: number; height: number; alt?: string }[];
}

export default function ImageCollection({
  ImageCollectionData,
}: {
  ImageCollectionData: ImageCollectionData;
}) {
  return (
    <div className="flex gap-10 lg:flex-row flex-col-reverse text-[#555]">
      <div className="flex flex-col w-full lg:w-1/3 gap-10 container mx-auto">
        <div>
          <h1 className="font-bold text-3xl uppercase tracking-wide">
            {ImageCollectionData.title}
          </h1>
          <p className="text-sm tracking-wider">
            {ImageCollectionData.dimensions}
          </p>
          <p className="text-sm tracking-wider">{ImageCollectionData.year}</p>
        </div>
        <div className="flex flex-col gap-6">
          {ImageCollectionData.description.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <ImageGrid images={ImageCollectionData.images} />
    </div>
  );
}
