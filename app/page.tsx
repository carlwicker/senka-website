import ImageCollection from "@/components/ImageCollection";
import Footer from "@/components/Footer";

import imageCollectionData from "@/data/imageCollectionData.json";

export default function Home() {
  return (
    <div>
      <head>
        <title>Senka Loosemore | Selected Works</title>
      </head>
      <div className="px-5 pt-20 text-[#333]">
        <div className="container flex flex-col mx-auto gap-40">
          <div className="flex lg:gap-10">
            <div className="flex flex-col gap-20 lg:w-1/3">
              <h1 className="text-4xl font-bold uppercase tracking-wide ">
                Senka Loosemore
              </h1>
              <div className="flex flex-col gap-10">
                <h2 className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  libero consequuntur quaerat qui facere impedit tempora
                  corrupti, vero aliquid? Tempore harum vel porro molestias cum
                  eum eos illo.
                </h2>
                <p className="text-base leading-relaxed ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  libero consequuntur quaerat qui facere impedit tempora
                  corrupti, vero aliquid? Tempore harum vel porro molestias cum
                  eum eos illo, autem ipsam at dicta ipsum aut eligendi fuga
                  eveniet dolorem dolorum distinctio sunt minima numquam soluta
                  atque. Fugiat ut, rerum iusto fuga obcaecati amet praesentium
                  natus accusantium nostrum aliquid sequi quisquam modi
                  recusandae facilis earum maiores omnis quis vitae tenetur
                  temporibus! Facere, consectetur voluptatem. Amet repellendus
                  tenetur quis odit totam, perspiciatis voluptate?
                </p>
              </div>
            </div>
            <div className="lg:w-2/3 lg:visible"></div>
          </div>
          <main className="flex flex-col gap-40">
            {imageCollectionData.map((item, index) => (
              <ImageCollection key={index} ImageCollectionData={item} />
            ))}
          </main>
        </div>
      </div>
      <footer className="px-5 bg-[#111]">
        <Footer />
      </footer>
    </div>
  );
}
