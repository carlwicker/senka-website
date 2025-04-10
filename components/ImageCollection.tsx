import Image from "next/image";

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
      <div className="bg-gray-200 w-full lg:w-2/3 flex flex-col">
        <Image
          src={`/images/collection-1/${ImageCollectionData.images[0].src}`}
          alt={ImageCollectionData.title}
          width={ImageCollectionData.images[0].width} // Aspect ratio width
          height={ImageCollectionData.images[0].height} // Aspect ratio height
          className=""
          priority={true}
        />
        <div className="w-full" />
        <div className="flex flex-wrap">
          {ImageCollectionData.images.map(
            (image: any, index: number) =>
              index !== 0 && (
                // Skip the first image as it's already displayed above
                <div key={index} className="w-1/2">
                  <Image
                    src={`/images/collection-1/${image.src}`}
                    alt={image.alt || `Image ${index + 1}`}
                    width={image.width} // Aspect ratio width
                    height={image.height} // Aspect ratio height
                    className="aspect-3/2 object-cover"
                  />
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
}
