import Image from "next/image";

const images = [
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
    sold: false,
  },
  {
    id: 6652,
    sold: false,
  },
  {
    id: 6656,
    sold: false,
  },
  {
    id: 6658,
    sold: false,
  },
  {
    id: 6662,
    sold: false,
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
    sold: false,
  },
  {
    id: 6680,
    sold: false,
  },
  {
    id: 6685,
    sold: false,
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

export default function Home() {
  return (
    <div className="px-5 xl:px-10 pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-10">
        {images.map((image, index) => (
          <div
            key={`image-${image.id}`}
            className="flex items-center justify-center relative overflow-hidden border-2 border-solid border-black rounded-lg"
          >
            {image.sold && (
              <div className="absolute top-0 w-full h-[60px] bg-red-600/70 text-white flex items-center justify-center font-extrabold">
                SOLD OUT
              </div>
            )}
            <Image
              alt="brosevi"
              src={`/images/IMG_${image.id}.jpg`}
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
