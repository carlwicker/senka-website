import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="container mx-auto text-sm">
      <div className="flex text-[#eee] items-center h-60 mt-20 w-full">
        <div className="w-1/2 ">
          <div>SENKA LOOSEMORE</div>
          <a href="mailto:hisenka@hotmail.com">hisenka@hotmail.com</a>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <a
            href="https://www.instagram.com/senkaloosemore"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} role="img" />
          </a>
        </div>
      </div>
    </div>
  );
}
