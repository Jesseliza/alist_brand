import Image from "next/image";

interface LoaderProps {
  size?: number;
}

const Loader = ({ size = 64 }: LoaderProps) => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image src="/icons/loader.gif" alt="Loading..." width={size} height={size} />
    </div>
  );
};

export default Loader;
