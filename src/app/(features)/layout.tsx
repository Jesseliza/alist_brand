import DashboardShell from "./DashboardShell";

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardShell>{children}</DashboardShell>;
}
