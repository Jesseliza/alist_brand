"use client";

import Sidebar from "@/components/Layout/Sidebar";
import Nav from "@/components/Layout/Nav";
import SearchInput from "@/components/general/SearchInput";
import Image from "next/image";
import { useState, useEffect, Suspense, useCallback, useRef } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import Loader from "@/components/general/Loader";
import { logout } from "@/store/auth/authSlice";
import { RootState } from "@/store/store";
import useIdleTimeout from "@/hooks/useIdleTimeout";
import { getInitials } from "@/utils/text";
import { generateColorFromString } from "@/utils/colorGenerator";

function DashboardContent({
  children,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  collapsed,
  setCollapsed,
  isOverlayMode,
  isMounted,
}: {
  children: React.ReactNode;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  isOverlayMode: boolean;
  isMounted: boolean;
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { isAuthenticated, user, isAuthLoading } = useSelector((state: RootState) => state.auth);
  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const mobileProfileMenuRef = useRef<HTMLDivElement>(null);
  const desktopProfileMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleIdle = () => {
    dispatch(logout());
    router.replace('/login');
  };

  useIdleTimeout(handleIdle, 1800000000);

  useEffect(() => {
    if (!isAuthLoading && !isAuthenticated) {
      // router.replace('/login');
    }
  }, [isAuthenticated, isAuthLoading, router]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const isMobileClickOutside =
        mobileProfileMenuRef.current &&
        !mobileProfileMenuRef.current.contains(event.target as Node);

      const isDesktopClickOutside =
        desktopProfileMenuRef.current &&
        !desktopProfileMenuRef.current.contains(event.target as Node);

      if (isMobileClickOutside && isDesktopClickOutside) {
        setProfileMenuOpen(false);
      } else if (isMobileClickOutside && !desktopProfileMenuRef.current) {
        setProfileMenuOpen(false);
      } else if (isDesktopClickOutside && !mobileProfileMenuRef.current) {
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const searchParams = useSearchParams();
  const fullPath = `${pathname}${
    searchParams.toString() ? `?${searchParams.toString()}` : ""
  }`;

  const whitePagePatterns: RegExp[] = [
    /^\/businesses\/accounts\/[^/?]+(\?tab=Details)$/,
    /^\/businesses\/accounts\/[^/?]+\/[^/?]+(\?tab=Business\+Details)$/,
    /^\/creators\/profiles\/[^/?]+(\?tab=Info)$/,
  ];

  const isWhitePage = whitePagePatterns.some((pattern) =>
    pattern.test(fullPath)
  );

  return (
    <div className="flex min-h-screen w-full font-[Poppins]">
      {/* Mobile Sidebar Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Overlay Backdrop for overlay mode when expanded */}
      {isOverlayMode && !collapsed && isMounted && (
        <div
          className="fixed inset-0 bg-black/20 z-40 hidden md:block"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full z-50 transform transition-transform duration-300 ease-in-out md:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <Sidebar setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div
        className={`flex-1 flex flex-col min-w-0 ${
          isOverlayMode && isMounted ? "ml-[102px]" : ""
        }`}
      >
        <header className="relative z-[60]">
          <Nav>
            {/* Mobile Nav */}
            <div className="flex md:hidden items-center justify-between w-full">
              <button
                className="w-[29px] h-[29px] bg-[#F8F8F8] rounded-[11px] flex items-center justify-center"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <Image
                  src="/icons/burger.svg"
                  alt="open sidebar"
                  width={27}
                  height={24}
                />
              </button>
              <span className="text-[18px] font-semibold text-[#4F4F4F]">
                Dashboard
              </span>
              <div className="flex items-center space-x-4">
                {/* <Image
                  src="/icons/navbar/notification.svg"
                  alt="notifications"
                  width={29.36}
                  height={29.36}
                /> */}
                <div className="relative" ref={mobileProfileMenuRef}>
                  <div
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer"
                    style={{
                      backgroundColor: generateColorFromString(
                        `${user?.firstName} ${user?.lastName}`
                      ),
                    }}
                    onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                  >
                    {getInitials(`${user?.firstName} ${user?.lastName}`)}
                  </div>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[100]">
                      <div className="px-4 py-2 text-sm text-gray-700">
                        {user?.firstName} {user?.lastName}
                      </div>
                      <button
                        onClick={() => {
                          if (user?.accountId) {
                            router.push(`/businesses/accounts/${user.accountId}`);
                            setProfileMenuOpen(false);
                          }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          dispatch(logout());
                          setProfileMenuOpen(false);
                          router.replace('/login');
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex w-full">
              <div className="flex-1">
                <SearchInput />
              </div>
              <div className="flex items-center space-x-4">
                {/* <Image
                  src="/icons/navbar/notification.svg"
                  alt="notifications"
                  width={29.36}
                  height={29.36}
                /> */}
                <div className="relative" ref={desktopProfileMenuRef}>
                  <div
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer"
                    style={{
                      backgroundColor: generateColorFromString(
                        `${user?.firstName} ${user?.lastName}`
                      ),
                    }}
                    onClick={() => setProfileMenuOpen(!isProfileMenuOpen)}
                  >
                    {getInitials(`${user?.firstName} ${user?.lastName}`)}
                  </div>
                  {isProfileMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-[100]">
                      <div className="px-4 py-2 text-sm text-gray-700">
                        {user?.firstName} {user?.lastName}
                      </div>
                      <button
                        onClick={() => {
                          if (user?.accountId) {
                            router.push(`/businesses/accounts/${user.accountId}`);
                            setProfileMenuOpen(false);
                          }
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          dispatch(logout());
                          setProfileMenuOpen(false);
                          router.replace('/login');
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Nav>
        </header>

        <div className="flex-1 relative">
          <main
            className={`
              absolute inset-0 overflow-y-auto
              overflow-x-hidden
              ${isWhitePage ? "bg-white" : "bg-[#F3F3F3]"}   /* mobile */
              md:bg-[#F3F3F3]                                    /* desktop override */
            `}
            style={
              {
                scrollbarGutter: "stable both-edges",
                "--scrollbar-width": "12px",
                paddingLeft: "calc(24px - var(--scrollbar-width))",
                paddingRight: "calc(24px - var(--scrollbar-width))",
              } as React.CSSProperties
            }
          >
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1920); // Default value for SSR
  const [isMounted, setIsMounted] = useState(false);

  // Stabilize the setCollapsed function
  const stableSetCollapsed = useCallback((value: boolean) => {
    setCollapsed(value);
  }, []);

  useEffect(() => {
    // Set mounted state to prevent hydration mismatch
    setIsMounted(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Only allow collapsed for 1280px > width >= 768px
      if (window.innerWidth < 1280 && window.innerWidth >= 768) {
        stableSetCollapsed(true);
      } else {
        stableSetCollapsed(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [stableSetCollapsed]);

  // Overlay mode for 1280px > width >= 768px
  const isOverlayMode = windowWidth < 1280 && windowWidth >= 768;

  return (
    <Suspense fallback={<Loader />}>
      <DashboardContent
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        collapsed={collapsed}
        setCollapsed={stableSetCollapsed}
        isOverlayMode={isOverlayMode}
        isMounted={isMounted}
      >
        {children}
      </DashboardContent>
    </Suspense>
  );
}
