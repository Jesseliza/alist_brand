import Image from "next/image";

interface LoaderProps {
  size?: number;
}

const Loader = ({ size = 64 }: LoaderProps) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 flex justify-center items-center bg-white bg-opacity-80">
      <Image src="/icons/loader.gif" alt="Loading..." width={size} height={size} />
    </div>
  );
};

export default Loader;
