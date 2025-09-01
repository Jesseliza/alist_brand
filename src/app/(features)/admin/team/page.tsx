import UserCard from "@/components/features/team/UserCard";

export default function UsersPage() {
  return (
    <div className="py-5.5 px-4">
      <div className="max-w-[1428px] mx-auto">
        <div>
          <h3 className="text-[#4F4F4F] text-[18px] mb-1 ml-1.5">Admins</h3>
          <div className="overflow-x-auto md:overflow-visible pb-2 md:pb-6 border-b border-[#E2E2E2]">
            <div className="inline-flex md:grid gap-3 md:grid-cols-[repeat(auto-fit,340px)]">
              {Array.from({ length: 2 }).map((_, idx) => (
                <div key={idx}>
                  <UserCard
                    name="Bianca Williams"
                    email="bianca@gmail.com"
                    role="Admin"
                    initials="BW"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8.5">
          <h3 className="text-[#4F4F4F] text-[18px] mb-1 ml-1.5">
            Role or Dept title
          </h3>
          <div className="overflow-x-auto md:overflow-visible pb-2 md:pb-6 border-b border-[#E2E2E2]">
            <div className="inline-flex md:grid gap-3 md:grid-cols-[repeat(auto-fit,340px)]">
              {Array.from({ length: 4 }).map((_, idx) => (
                <div key={idx}>
                  <UserCard
                    name="Bianca Williams"
                    email="bianca@gmail.com"
                    role="Admin"
                    initials="BW"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8.5">
          <h3 className="text-[#4F4F4F] text-[18px] mb-1 ml-1.5">
            Role or Dept title
          </h3>
          <div className="overflow-x-auto md:overflow-visible pb-2 md:pb-6 border-b border-[#E2E2E2]">
            <div className="inline-flex md:grid gap-3 md:grid-cols-[repeat(auto-fit,340px)]">
              {Array.from({ length: 8 }).map((_, idx) => (
                <div key={idx}>
                  <UserCard
                    name="Bianca Williams"
                    email="bianca@gmail.com"
                    role="Admin"
                    initials="BW"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
