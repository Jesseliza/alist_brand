type NavProps = {
  children: React.ReactNode;
};

export default function Nav({ children }: NavProps) {
  return (
    <nav className="bg-white border border-solid border-[#E2E2E2] px-6 py-2.5">
      <div className="max-w-[1428px] mx-auto flex justify-between items-center">
        {children}
      </div>
    </nav>
  );
}
