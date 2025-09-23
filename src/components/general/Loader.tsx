import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Image src="/icons/loader.gif" alt="Loading..." width={64} height={64} />
    </div>
  );
};

export default Loader;
