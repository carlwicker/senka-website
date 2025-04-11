import Image from "next/image";

export default function ImageGrid({
  images,
  title,
}: {
  images: { src: string; width: number; height: number }[];
  title: string;
}) {
  return (
    <div className="lg:w-2/3 flex flex-col w-full">
      <div className="relative w-full aspect-3/2 ">
        <Image
          src={`/images/collection/${images[0].src}`}
          alt={title}
          priority={true}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          quality={100}
        />
      </div>

      <div className="w-full" />
      <div className="flex flex-wrap">
        {images.map(
          (
            image: { src: string; width: number; height: number },
            index: number
          ) =>
            index !== 0 && (
              // Skip the first image as it's already displayed above
              <div key={index} className="w-1/2">
                <div className="relative w-full aspect-3/2 ">
                  <Image
                    src={`/images/collection/${image.src}`}
                    alt={`${title} #${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="aspect-3/2 object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
}
