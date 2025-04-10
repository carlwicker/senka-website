import Header from "@/components/Header";
import ImageCollection from "@/components/ImageCollection";
import SubHeader from "@/components/SubHeader";
import Footer from "@/components/Footer";

import imageCollectionData from "@/data/imageCollectionData.json";

export default function Home() {
  return (
    <div>
      <div className="px-5 pt-20">
        <div className="container flex flex-col mx-auto gap-40">
          <div className="flex lg:gap-10">
            <div className="flex flex-col gap-20 lg:w-1/3">
              <h1 className="text-4xl font-bold uppercase tracking-wide text-[#333]">
                Senka Loosemore
              </h1>
              <Header />
              <SubHeader />
            </div>
            <div className="lg:w-2/3 lg:visible"></div>
          </div>
          <main className="flex flex-col gap-20">
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
