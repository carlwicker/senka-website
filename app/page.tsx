import Header from "@/components/Header";
import ImageCollection from "@/components/ImageCollection";
import SubHeader from "@/components/SubHeader";
import Footer from "@/components/Footer";

import imageCollectionData from "@/data/imageCollectionData.json";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-20 px-5">
        <div className="bg-white flex flex-col text-black container mx-auto gap-40">
          <header className="flex flex-col gap-20">
            <Header />
            <SubHeader />
          </header>
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
