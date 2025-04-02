import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-lime-200 flex justify-center items-center flex-col h-screen">
      <div className="text-2xl text-purple-400">Senkas Website</div>
      <div className="text-pink-400 text-5xl">I AM A TWAT!!!!!</div>

      <div className="text-pink-400 text-5xl">CATS CATS CATS CATS</div>
      <Image
        src="/images/1.webp" // Replace with your image path
        alt="Example"
        width={500} // Set the desired width
        height={300} // Set the desired height
        className="mt-4"
      />
      <div className="text-pink-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
        quibusdam consectetur aliquid autem, praesentium neque ipsam rerum
        doloremque error iusto, harum odio laudantium, explicabo qui deserunt
        magnam architecto sed corporis aspernatur impedit. Enim, fuga ut labore
        voluptatibus perferendis totam, at beatae impedit vel nisi iure
        perspiciatis, nesciunt eligendi ex?
      </div>
      <Image
        src="/images/1.webp" // Replace with your image path
        alt="Example"
        width={500} // Set the desired width
        height={300} // Set the desired height
        className="mt-4"
      />
      <div className="text-pink-600">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
        dignissimos et architecto non veritatis praesentium. Obcaecati,
        praesentium nostrum, hic iure modi ducimus recusandae corporis soluta
        sed aspernatur accusantium? Odio, repellat?
      </div>
      <div className="text-pink-400 text-5xl">CATS CATS CATS CATS</div>
      <div className="text-pink-400 text-5xl">CATS CATS CATS CATS</div>
    </div>
  );
}
