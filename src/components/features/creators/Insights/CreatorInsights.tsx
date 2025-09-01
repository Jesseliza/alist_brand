import CreatorInsights1 from "./CreatorInsights1";
import CreatorInsights2 from "./CreatorInsights2";
import CreatorInsights3 from "./CreatorInsights3";
import CreatorInsights4 from "./CreatorInsights4";
import { Creator } from "@/types/entities";

export default function CreatorsInsights({ creator }: { creator: Creator }) {
  return (
    <>
      <div className="max-w-[1428px] mt-5 px-2 mx-auto mb-5">
        <CreatorInsights1 creator={creator} />
      </div>
      <div className="max-w-[1428px] mt-5 px-2 mx-auto mb-5">
        <CreatorInsights2 creator={creator} />
      </div>
      <div className="max-w-[1428px] mt-5 px-2 mx-auto mb-5">
        <CreatorInsights3 creator={creator} />
      </div>
      <div className="max-w-[1428px] mt-5 px-2 mx-auto mb-5">
        <CreatorInsights4 creator={creator} />
      </div>
    </>
  );
}
