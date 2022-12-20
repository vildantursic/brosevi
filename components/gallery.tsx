import Image from "next/image";

export default function Gallery({
  images,
  folder,
  newCollection,
}: {
  images: { id: number; sold: boolean }[];
  folder: string;
  newCollection?: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid-flow-row gap-10">
      {images.map((image, index) => (
        <div
          key={`image-${image.id}`}
          className="flex items-center justify-center relative overflow-hidden border-2 border-solid border-black rounded-lg bg-white"
        >
          {image.sold && (
            <div className="absolute top-0 w-full h-[60px] bg-red-600/70 text-white flex items-center justify-center font-extrabold">
              SOLD OUT
            </div>
          )}
          <Image
            alt="brosevi"
            src={`/images/${folder}/IMG_${image.id}.jpg`}
            width={700}
            height={700}
          ></Image>
          <div className="absolute bottom-0 w-full h-[60px] bg-white/70 text-black flex items-center justify-center">
            {newCollection && "Nova Kolekcija ~"} Broš {index + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
