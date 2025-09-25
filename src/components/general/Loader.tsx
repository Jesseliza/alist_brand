import Image from "next/image";

interface LoaderProps {
  size?: number;
}

const Loader = ({ size = 64 }: LoaderProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
      <Image
        src="/icons/loader.gif"
        alt="Loading..."
        width={size}
        height={size}
      />
    </div>
  );
};

export default Loader;
