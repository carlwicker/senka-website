import Image from "next/image";

export default function ImageGrid({
  images,
  title,
}: {
  images: { src: string; width: number; height: number }[];
  title: string;
}) {
  return (
    <div className="bg-gray-200 w-full lg:w-2/3 flex flex-col">
      <Image
        src={`/images/collection/${images[0].src}`}
        alt={title}
        width={images[0].width} // Aspect ratio width
        height={images[0].height} // Aspect ratio height
        className=""
        priority={true}
      />
      <div className="w-full" />
      <div className="flex flex-wrap">
        {images.map(
          (image: any, index: number) =>
            index !== 0 && (
              // Skip the first image as it's already displayed above
              <div key={index} className="w-1/2">
                <Image
                  src={`/images/collection/${image.src}`}
                  alt={`${title} #${index + 1}`}
                  width={image.width} // Aspect ratio width
                  height={image.height} // Aspect ratio height
                  className="aspect-3/2 object-cover"
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
