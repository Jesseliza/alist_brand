import Image from "next/image";

interface DedicatedOfferCreatorCardProps {
  id: string;
  image: string;
  name: string;
  instagramName: string;
  stats: {
    followers: string;
    credibility: string;
    engagement: string;
  };
  status: number | null;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  loading?: "approve" | "reject" | null;
  hideCreatorActions?: boolean;
}

export default function DedicatedOfferCreatorCard({
  id,
  image,
  name,
  instagramName,
  stats,
  status,
  onApprove,
  onReject,
  loading = null,
  hideCreatorActions = false,
}: DedicatedOfferCreatorCardProps) {
  const handleApprove = () => {
    onApprove(id);
  };

  const handleReject = () => {
    onReject(id);
  };

  const getInitials = (name: string) => {
    if (!name) return "";
    const words = name.split(" ");
    if (words.length > 1) {
      return words[0].charAt(0) + words[1].charAt(0);
    }
    return name.substring(0, 2);
  };

  const formatCredibility = (credibility: string) => {
    const value = parseFloat(credibility);
    if (isNaN(value)) {
      return "N/A";
    }
    return `${(value * 100).toFixed(2)}%`;
  };

  return (
    <article className="min-w-[300px] w-full md:block flex items-center gap-5  md:shadow-[0_0_4px_rgba(0,0,0,0.23)]  rounded-[13px] md:bg-white bg-[#F8F8F8] md:border-none border border-[#E4E4E4]">
      {/* Top gray section with overlapping profile picture */}
      <div className="relative ">
        <div className="h-[86.54px] bg-[#E7E7E7] rounded-t-[13px] hidden md:block"></div>
        <div className="md:pl-0 md:py-0 py-6 pl-5.5  md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:-bottom-9">
          {image ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${image}`}
              alt={name}
              width={81.71}
              height={81.71}
              className="rounded-full border border-white"
            />
          ) : (
            <div className="w-[81.71px] h-[81.71px] rounded-full bg-gray-300 flex items-center justify-center text-white text-2xl font-bold border border-white">
              {getInitials(name)}
            </div>
          )}
        </div>
      </div>

      {/* Profile information */}
      <div className="flex-1">
        <div className="md:pt-10 md:pb-4 md:text-center md:px-[9px]">
          <h3 className="md:text-[15px] text-[18px] font-medium text-[#4F4F4F] mb-0.5 leading-[23px]">
            {name}
          </h3>
          <div className="flex items-center md:justify-center gap-1 md:mb-0 mb-2 md:mt-0 mt-1">
            <Image
              src="/icons/campaign/details/creators-and-posts/instagram.svg"
              alt="Instagram"
              width={8.83}
              height={8.83}
            />
            <span className="text-[11px] text-[#4F4F4F] leading-[17px] ">
              {instagramName}
            </span>
          </div>
        </div>

        {/* Statistics section */}
        <div className="md:flex items-center justify-center  py-4 hidden">
          <div className="flex-1 text-center">
            <p className="text-[18px] font-medium text-[#383838] leading-[33px]">
              {stats.followers}
            </p>
            <p className="text-[11px] text-[#4F4F4F]">Followers</p>
          </div>
          <div className="w-[1px] h-[36.97px] bg-[#4F4F4F]"></div>
          <div className="flex-1 text-center">
            <p className="text-[18px] font-medium text-[#383838] leading-[33px]">
              {formatCredibility(stats.credibility)}
            </p>
            <p className="text-[11px] text-[#4F4F4F]">Credibility</p>
          </div>
          {/* <div className="w-[1px] h-[36.97px] bg-[#4F4F4F]"></div>
          <div className="flex-1 text-center">
            <p className="text-[18px] font-medium text-[#383838] leading-[33px]">
              {stats.engagement}
            </p>
            <p className="text-[11px] text-[#4F4F4F]">Engagement</p>
          </div> */}
        </div>

        {/* Action buttons or status text */}
        <div className="flex md:gap-[9px] gap-2 md:pb-[9px] md:pl-[9px] md:pr-[9px] pr-3">
          {status === 6 ? (
            <div className="flex-1 flex items-center md:justify-center gap-2 text-[#00A4B6] py-[7px] md:rounded-[13px] rounded-[11px] text-[13px] leading-[20px] font-medium h-[38px]">
              <Image
                src="/icons/campaign/details/creators-and-posts/verified-check.svg"
                alt="Approved"
                width={10.62}
                height={9.09}
              />
              <p>Approved</p>
            </div>
          ) : status === 7 ? (
            <div className="flex-1 flex items-center md:justify-center gap-2 text-red-500 py-[7px] md:rounded-[13px] rounded-[11px] text-[13px] leading-[20px] font-medium h-[38px]">
              <p>Rejected</p>
            </div>
          ) : !hideCreatorActions ? (
            <>
              <button
                onClick={handleApprove}
                disabled={loading === "approve" || loading === "reject"}
                className="flex-1 bg-[#00A4B6] text-white py-[7px] md:rounded-[13px] rounded-[11px] md:text-[16px] text-[15px] leading-[23px] h-[38px] disabled:bg-gray-400"
              >
                {loading === "approve" ? "..." : "Approve"}
              </button>
              <button
                onClick={handleReject}
                disabled={loading === "approve" || loading === "reject"}
                className="flex-1 bg-[#747474] text-white py-[7px] md:rounded-[13px] rounded-[11px] md:text-[16px] text-[15px] leading-[23px] h-[38px] disabled:bg-gray-400"
              >
                {loading === "reject" ? "..." : "Reject"}
              </button>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
