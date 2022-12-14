import Image from "next/image";

const images = [
  "6641",
  "6646",
  "6650",
  "6652",
  "6656",
  "6658",
  "6662",
  "6666",
  "6669",
  "6672",
  "6677",
  "6680",
  "6685",
  "6690",
  "6696",
];

export default function Home() {
  return (
    <div className="px-5 xl:px-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-10">
        {images.map((image, index) => (
          <div
            key={`image-${image}`}
            className="flex items-center justify-center relative overflow-hidden border-2 border-solid border-black rounded-lg"
          >
            <Image
              alt="brosevi"
              src={`/images/IMG_${image}.jpg`}
              width={700}
              height={700}
            ></Image>
            <div className="absolute bottom-0 w-full h-[60px] bg-white/70 text-black flex items-center justify-center">
              Broš {index + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
