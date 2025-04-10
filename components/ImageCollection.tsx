import ImageCollectionGrid from "./ImageCollectionGrid";

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
    <div className="flex gap-16 lg:flex-row flex-col-reverse">
      <div className="flex flex-col w-full lg:w-1/3 gap-8 container mx-auto px-5">
        <div>
          <h1 className="font-sans font-bold text-3xl uppercase tracking-wide">
            {ImageCollectionData.title}
          </h1>
          <p className="font-sans text-sm uppercase tracking-wider text-gray-500">
            {ImageCollectionData.dimensions}
          </p>
          <p className="font-sans text-sm uppercase tracking-wider text-gray-500">
            {ImageCollectionData.year}
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {ImageCollectionData.description.map((paragraph, index) => (
            <p
              key={index}
              className="font-sans text-base leading-relaxed text-gray-800"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <ImageCollectionGrid
        images={ImageCollectionData.images}
        title={ImageCollectionData.title}
      />
    </div>
  );
}
