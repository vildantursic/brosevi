import Image from "next/image";
import Gallery from "../components/gallery";

const collection2 = [
  {
    id: 6641,
    sold: false,
  },
  {
    id: 6646,
    sold: true,
  },
  {
    id: 6650,
    sold: true,
  },
  {
    id: 6652,
    sold: false,
  },
  {
    id: 6656,
    sold: true,
  },
  {
    id: 6658,
    sold: false,
  },
  {
    id: 6662,
    sold: true,
  },
  {
    id: 6666,
    sold: false,
  },
  {
    id: 6669,
    sold: false,
  },
  {
    id: 6672,
    sold: false,
  },
  {
    id: 6677,
    sold: true,
  },
  {
    id: 6680,
    sold: false,
  },
  {
    id: 6685,
    sold: true,
  },
  {
    id: 6690,
    sold: false,
  },
  {
    id: 6696,
    sold: false,
  },
];

const collection1 = [
  {
    id: 5114,
    sold: false,
  },
  {
    id: 5143,
    sold: false,
  },
  {
    id: 5162,
    sold: false,
  },
  {
    id: 5166,
    sold: false,
  },
  {
    id: 5179,
    sold: false,
  },
  {
    id: 5189,
    sold: false,
  },
  {
    id: 5195,
    sold: false,
  },
  {
    id: 5206,
    sold: false,
  },
  {
    id: 5229,
    sold: false,
  },
  {
    id: 5241,
    sold: false,
  },
  {
    id: 5455,
    sold: false,
  },
];

export default function Home() {
  return (
    <div className="pb-10">
      <div className="px-5 xl:px-10">
        <Gallery images={collection2} folder="collection2" newCollection />
      </div>
      <div className="w-full h-52 flex items-center justify-center my-10 overflow-hidden">
        <div className="separator"></div>
        <h3 className="px-5 md:px-0 headings font-extrabold text-[60px] text-white absolute">
          Stara kolekcija
        </h3>
      </div>
      <div className="px-5 xl:px-10">
        <Gallery images={collection1} folder="collection1" />
      </div>
    </div>
  );
}
