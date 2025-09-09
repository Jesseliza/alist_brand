export type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type SidebarItem = {
  icon: IconProps;
  label: string;
  href: string;
};

export type SidebarSection = {
  title?: string;
  items: SidebarItem[];
};

export const sidebarConfig: SidebarSection[] = [
  {
    items: [
      {
        icon: {
          src: "/icons/sidebar/dashboard.svg",
          alt: "Dashboard",
          width: 24.13,
          height: 24.12,
        },
        label: "Dashboard",
        href: "/dashboard",
      },
    ],
  },
  {
    title: "Businesses",
    items: [
      {
        icon: {
          src: "/icons/sidebar/accounts.svg",
          alt: "Accounts",
          width: 29.45,
          height: 24.06,
        },
        label: "Accounts",
        href: "/businesses/accounts",
      },
      {
        icon: {
          src: "/icons/sidebar/brands.svg",
          alt: "Brands",
          width: 24.14,
          height: 24.13,
        },
        label: "Brands",
        href: "/businesses/brands",
      },
      {
        icon: {
          src: "/icons/sidebar/campaigns.svg",
          alt: "Campaigns",
          width: 24.14,
          height: 24.12,
        },
        label: "Campaigns",
        href: "/businesses/campaigns",
      },
      {
        icon: {
          src: "/icons/sidebar/activities.svg",
          alt: "Activities",
          width: 26.75,
          height: 24.14,
        },
        label: "Activities",
        href: "/businesses/activities",
      },
    ],
  },
  {
    title: "Creators",
    items: [
      {
        icon: {
          src: "/icons/sidebar/profiles.svg",
          alt: "Profiles",
          width: 34.58,
          height: 24.06,
        },
        label: "Profiles",
        href: "/creators/profiles",
      },
      {
        icon: {
          src: "/icons/sidebar/ugc.svg",
          alt: "UGC",
          width: 24.12,
          height: 24.14,
        },
        label: "UGC",
        href: "/creators/ugc",
      },
      {
        icon: {
          src: "/icons/sidebar/mod.svg",
          alt: "Mod Tools",
          width: 24.06,
          height: 24.16,
        },
        label: "Mod Tools",
        href: "/creators/mod-tools",
      },
    ],
  },
  {
    title: "Admin",
    items: [
      {
        icon: {
          src: "/icons/sidebar/team.svg",
          alt: "Team",
          width: 24.8,
          height: 24.79,
        },
        label: "Team",
        href: "/admin/team",
      },
      {
        icon: {
          src: "/icons/sidebar/plan.svg",
          alt: "Upgrade Plan",
          width: 24.11,
          height: 24.1,
        },
        label: "Upgrade Plan",
        href: "/admin/upgrade-plan",
      },
    ],
  },
];
