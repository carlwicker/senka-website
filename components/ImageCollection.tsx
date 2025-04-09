import Image from "next/image";

interface ImageCollectionData {
  title: string;
  dimensions: string;
  year: number;
  description: string[];
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
          src="/placeholder.jpg"
          alt="Placeholder image"
          layout="responsive" // Makes the width dynamic
          width={1024} // Aspect ratio width
          height={768} // Aspect ratio height
          className="rounded-lg"
          priority={true}
        />
        <div className="w-full bg-gray-400 mt-4" />
        <div className="flex ">
          <Image
            src="/placeholder.jpg"
            alt="Placeholder image"
            layout="responsive" // Makes the width dynamic
            width={1024} // Aspect ratio width
            height={768} // Aspect ratio height
            className="bg-red-600 w-1/2"
            priority={true}
          />
          <Image
            src="/placeholder.jpg"
            alt="Placeholder image"
            layout="responsive" // Makes the width dynamic
            width={1024} // Aspect ratio width
            height={768} // Aspect ratio height
            className="bg-red-500 w-1/2"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
