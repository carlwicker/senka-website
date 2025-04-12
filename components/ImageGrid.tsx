import Image from "next/image";

export default function ImageGrid({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const isOdd = images.length % 2 !== 0; // Check if the number of images is odd

  return (
    <div className="lg:w-2/3 flex flex-col w-full">
      {isOdd && (
        <div id="head-image" className="relative w-full aspect-3/2">
          <Image
            src={`/images/collection/${images[0].src}`}
            alt={images[0].alt}
            priority={true}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
            quality={100}
          />
        </div>
      )}

      <div className="w-full" />
      <div className="flex flex-wrap" id="image-grid">
        {images.map((image, index) => {
          // Skip the first image only if the number of images is odd
          if (isOdd && index === 0) return null;

          return (
            <div key={index} className="w-1/2">
              <div className="relative w-full aspect-3/2">
                <Image
                  src={`/images/collection/${image.src}`}
                  fill
                  alt={image.alt}
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  className="aspect-3/2 object-cover"
                  quality={60}
                  priority={false}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
