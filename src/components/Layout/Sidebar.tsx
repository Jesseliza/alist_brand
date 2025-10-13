import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { sidebarConfig } from "@/utils/sidebar-config";

const IconContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[34.58px] flex items-center justify-center">{children}</div>
);

const Logo = () => (
  <Image width={52} height={52} alt="Alist Logo" src="/icons/Logo.svg" />
);

interface SidebarProps {
  collapsed?: boolean;
  setCollapsed?: (collapsed: boolean) => void;
  setIsMobileMenuOpen?: (isOpen: boolean) => void;
}

export default function Sidebar({
  collapsed: controlledCollapsed,
  setCollapsed: setControlledCollapsed,
  setIsMobileMenuOpen,
}: SidebarProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const { user, isAuthLoading } = useSelector((state: RootState) => state.auth);
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920); // Default for SSR
  const [isMounted, setIsMounted] = useState(false);

  // Wait for auth check to complete before rendering the sidebar
  const filteredSidebarConfig = sidebarConfig.map((section) => {
    const filteredItems = section.items.filter((item) => {
      if (item.label === "Accounts") {
        return user?.registration_type === "admin";
      }
      return true;
    });

    return {
      ...section,
      items: filteredItems,
    };
  }).filter((section) => section.items.length > 0);

  // Use controlled or internal state
  const collapsed =
    controlledCollapsed !== undefined ? controlledCollapsed : internalCollapsed;

  // Stabilize the setCollapsed function
  const stableSetCollapsed = useCallback(
    (value: boolean) => {
      if (setControlledCollapsed !== undefined) {
        setControlledCollapsed(value);
      } else {
        setInternalCollapsed(value);
      }
    },
    [setControlledCollapsed]
  );

  useEffect(() => {
    // Set mounted state to prevent hydration mismatch
    setIsMounted(true);

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      // Only allow collapsed for 1280px > width >= 768px
      if (width < 1280 && width >= 768) {
        stableSetCollapsed(true);
      } else {
        stableSetCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [stableSetCollapsed]);

  const handleLogoClick = () => {
    // Only allow toggling collapse for 1280px > width >= 768px
    if (windowWidth < 1280 && windowWidth >= 768) {
      stableSetCollapsed(!collapsed);
    }
  };

  // Overlay mode for 1280px > width >= 768px
  const isOverlayMode = windowWidth < 1280 && windowWidth >= 768;

  const sidebarClass = `bg-white border-r border-solid border-[#E2E2E2] h-screen flex flex-col transition-[width] duration-300 overflow-x-hidden ${
    collapsed ? "w-[102px]" : "w-[280px]"
  }`;

  if (isAuthLoading || !isMounted) {
    return (
      <aside className={sidebarClass}>
        {/* You can optionally place a lightweight sidebar skeleton here */}
      </aside>
    );
  }

  return (
    <aside
      className={
        isOverlayMode && isMounted
          ? `${sidebarClass} fixed left-0 top-0 z-50`
          : sidebarClass
      }
    >
      <div className="flex items-center gap-4 mb-[min(8vh,8.375rem)] cursor-pointer pt-9.5 pl-[25px] pr-[25px] xl:pl-[25px] xl:pr-[30px]">
        <div onClick={handleLogoClick} className="flex-shrink-0">
          <Logo />
        </div>
        <div className={collapsed ? "invisible" : ""}>
          <p className="text-[27px] font-bold text-[#414141] leading-[1.25] font-[Greycliff]">
            alist.ae
          </p>
          <p className="text-[13.5px] leading-[1.5] text-[#414141] mt-[-3px] font-[Greycliff]">
            Administrator
          </p>
        </div>
      </div>
      <nav className="flex-1 pl-[25px] pr-[25px] xl:pl-[25px] xl:pr-[30px]">
        {filteredSidebarConfig.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-7.25">
            {section.title && (
              <p
                className={`px-4 mb-1 text-[15px] text-[#7B7B7B] whitespace-nowrap ${
                  collapsed ? "invisible" : ""
                }`}
              >
                {section.title}
              </p>
            )}
            <ul className={section.title ? "mt-1 space-y-1" : ""}>
              {section.items.map((item, itemIndex) => {
                let isActive = pathname.startsWith(item.href);
                if (item.label === "Brands" && (pathname.startsWith("/businesses/campaigns") || pathname.startsWith("/businesses/dedicated-offers")) && from === "brand") {
                  isActive = true;
                }
                if ((item.label === "Campaigns" && pathname.startsWith("/businesses/campaigns") && from === "brand") || (item.label === "Dedicated Offers" && pathname.startsWith("/businesses/dedicated-offers") && from === "brand")) {
                  isActive = false;
                }
                if (item.label === "Accounts" && pathname.startsWith("/businesses/brands") && from === "accounts") {
                  isActive = true;
                }
                if (item.label === "Brands" && pathname.startsWith("/businesses/brands") && from === "accounts") {
                  isActive = false;
                }
                const iconSrc = isActive
                  ? item.icon.src.replace("/sidebar/", "/sidebar/darkmode/")
                  : item.icon.src;

                return (
                  <li key={itemIndex}>
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen?.(false)}
                      className={`${
                        collapsed
                          ? "flex items-center justify-center w-[52px] aspect-square"
                          : "flex items-center w-[227px] gap-4.5 px-[9.2px] py-[12.5px]"
                      } rounded-[11px] ${
                        isActive
                          ? "bg-[#008C9E] text-white"
                          : "text-[#414141] hover:bg-[#F1F1F1]"
                      }`}
                    >
                      <IconContainer>
                        <Image
                          src={iconSrc}
                          alt={item.icon.alt}
                          width={item.icon.width}
                          height={item.icon.height}
                        />
                      </IconContainer>
                      <span
                        className={
                          collapsed
                            ? "hidden"
                            : `text-lg leading-[1.5] ${
                                isActive ? "text-white" : "text-[#4F4F4F]"
                              }`
                        }
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
