import Image from "next/image";
import loaderGif from "../../assets/icons/loader.gif";

interface LoaderProps {
  size?: number;
}

const Loader = ({ size = 64 }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center min-h-[400px]">
      <Image src={loaderGif} alt="Loading..." width={size} height={size} unoptimized />
    </div>
  );
};

export default Loader;
