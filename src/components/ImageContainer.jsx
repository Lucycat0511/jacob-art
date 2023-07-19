import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function ImageContainer({ img }) {
  const [ref, inView, entry] = useInView({ threshold: 0.3, triggerOnce: true });
  const imgSize = 900;
  return (
    <div
      ref={ref}
      className={`bg-secondary opacity-0 translate-y-10 rounded-md
      dark:bg-quaternary
    ${inView && "fadeUpIn"}`}
    >
      <Image
        className={`w-[36rem] aspect-square rise rounded-md`}
        src={img.address}
        width={imgSize}
        height={imgSize}
        alt="art"
        address={img.address}
        onClick={() => {
          setFullImage((prev) => {
            return { ...prev, src: img.address, fullImage: true };
          });
        }}
      />
    </div>
  );
}
