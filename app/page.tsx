import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

export default function Home() {
  return (
    <div className="bg-white flex flex-col text-black container mx-auto gap-40">
      <Header />
      <SubHeader />
    </div>
  );
}
