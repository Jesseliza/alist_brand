// components/Swiper.tsx
"use client";

import React, {
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";

interface SwiperProps {
  children: ReactNode[];
  rows?: number;
  minCardWidth?: string;
  maxCardWidth?: string;
  mobileMinCardWidth?: string;
  mobileMaxCardWidth?: string;
  gap?: string;
  rowGap?: string;
  columnGap?: string;
  mobileRowGap?: string;
  mobileColumnGap?: string;
  activeDotWidth?: string;
  activeDotHeight?: string;
  inactiveDotWidth?: string;
  inactiveDotHeight?: string;
  activeDotColor?: string;
  inactiveDotColor?: string;
  dotsGap?: string;
  dotsMarginTop?: string;
  mobileDotsMarginTop?: string;
  snapAlign?: "start" | "center" | "end";
}

export default function Swiper({
  children,
  rows = 1,
  minCardWidth = "250px",
  maxCardWidth = "400px",
  mobileMinCardWidth,
  mobileMaxCardWidth,
  gap = "1rem",
  rowGap,
  columnGap,
  mobileRowGap,
  mobileColumnGap,
  activeDotWidth = "29.21px",
  activeDotHeight = "9.29px",
  inactiveDotWidth = "9.29px",
  inactiveDotHeight = "9.29px",
  activeDotColor = "#878787",
  inactiveDotColor = "#B9B9B9",
  dotsGap = "12px",
  dotsMarginTop = "1rem",
  mobileDotsMarginTop,
  snapAlign = "start",
}: SwiperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNavigatingRef = useRef(false);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [scrollPadding, setScrollPadding] = useState("0px");

  const totalItems = children.length;
  const totalColumns = Math.ceil(totalItems / rows);

  // Helpers for responsive props
  const effRowGap = rowGap ?? gap;
  const effColGap = columnGap ?? gap;
  const getRowGap = () => (isMobile && mobileRowGap ? mobileRowGap : effRowGap);
  const getColGap = useCallback(() =>
    isMobile && mobileColumnGap ? mobileColumnGap : effColGap, [isMobile, mobileColumnGap, effColGap]);
  const getCardW = useCallback(() =>
    isMobile && mobileMaxCardWidth ? mobileMaxCardWidth : maxCardWidth, [isMobile, mobileMaxCardWidth, maxCardWidth]);
  const getDotsMT = () =>
    isMobile && mobileDotsMarginTop ? mobileDotsMarginTop : dotsMarginTop;

  // — detect mobile breakpoint —
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // — recalc visibleColumns and pageCount on resize or content change —
  useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;

    const calculate = () => {
      const cw = ref.clientWidth;

      // total pages = ceil(contentWidth / viewportWidth)
      const pages = Math.ceil(ref.scrollWidth / cw);
      setPageCount(pages);

      // clamp currentPage if out‑of‑range
      setCurrentPage((p) => Math.min(p, pages - 1));
    };

    calculate();
    window.addEventListener("resize", calculate);
    return () => window.removeEventListener("resize", calculate);
  }, [children.length, totalColumns, getCardW, getColGap, isMobile]);

  // — compute scrollPadding for center‑snap —
  useEffect(() => {
    if (snapAlign !== "center") {
      setScrollPadding("0px");
      return;
    }
    const ref = containerRef.current;
    if (!ref) return;
    const cw = ref.clientWidth;
    const cardW = parseFloat(getCardW());
    const pad = (cw - cardW) / 2;
    setScrollPadding(`${pad}px`);
  }, [snapAlign, getCardW, isMobile]);

  // — navigate to a page —
  const goTo = useCallback((pageIdx: number) => {
    const c = containerRef.current;
    if (!c) return;

    // Set flag to prevent scroll handler interference
    isNavigatingRef.current = true;

    const cw = c.clientWidth;
    const maxScroll = c.scrollWidth - cw;
    const target = Math.min(pageIdx * cw, maxScroll);

    setCurrentPage(pageIdx);
    c.scrollTo({ left: target, behavior: "smooth" });

    // Clear flag after scroll animation completes
    setTimeout(() => {
      isNavigatingRef.current = false;
    }, 500);
  }, []);

  // — sync currentPage when user scrolls —
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    let scrollTimeout: NodeJS.Timeout;

    const onScroll = () => {
      // Don't update if we're in the middle of programmatic navigation
      if (isNavigatingRef.current) return;

      // Clear previous timeout
      clearTimeout(scrollTimeout);

      // Debounce to avoid rapid updates during scroll
      scrollTimeout = setTimeout(() => {
        // Double-check we're not navigating (in case flag changed during timeout)
        if (isNavigatingRef.current) return;

        const cw = c.clientWidth;
        const scrollLeft = c.scrollLeft;

        // Calculate current page based on scroll position relative to container width
        const pageIdx = Math.round(scrollLeft / cw);
        const clampedPageIdx = Math.max(0, Math.min(pageIdx, pageCount - 1));

        if (clampedPageIdx !== currentPage) {
          setCurrentPage(clampedPageIdx);
        }
      }, 100); // Increased debounce to 100ms for better stability
    };

    c.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      c.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimeout);
    };
  }, [currentPage, pageCount]);

  return (
    <div className="w-full overflow-hidden">
      {/* SCROLLING GRID */}
      <div
        ref={containerRef}
        className="no-scrollbar overflow-x-auto scroll-smooth"
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridTemplateRows: `repeat(${rows}, auto)`,
          columnGap: getColGap(),
          rowGap: getRowGap(),
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollPaddingInlineStart: scrollPadding,
          scrollPaddingInlineEnd: scrollPadding,
        }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="swiper-card"
            style={{ scrollSnapAlign: snapAlign }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* PAGINATION DOTS */}
      {pageCount > 1 && (
        <div
          className="flex justify-center"
          style={{ gap: dotsGap, marginTop: getDotsMT() }}
        >
          {Array.from({ length: pageCount }).map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to page ${idx + 1}`}
              className="rounded-full transition-all duration-300"
              style={{
                width: idx === currentPage ? activeDotWidth : inactiveDotWidth,
                height:
                  idx === currentPage ? activeDotHeight : inactiveDotHeight,
                backgroundColor:
                  idx === currentPage ? activeDotColor : inactiveDotColor,
              }}
              onClick={() => goTo(idx)}
            />
          ))}
        </div>
      )}

      {/* GLOBAL STYLES FOR CARDS & SCROLLBAR */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .swiper-card {
          ${mobileMinCardWidth
            ? `min-width: ${mobileMinCardWidth};`
            : `min-width: ${minCardWidth};`}
          ${mobileMaxCardWidth
            ? `max-width: ${mobileMaxCardWidth};`
            : `max-width: ${maxCardWidth};`}
          ${mobileMaxCardWidth
            ? `flex: 0 0 ${mobileMaxCardWidth};`
            : `flex: 0 0 ${maxCardWidth};`}
        }
        @media (min-width: 768px) {
          .swiper-card {
            min-width: ${minCardWidth};
            max-width: ${maxCardWidth};
            flex: 0 0 ${maxCardWidth};
          }
        }
      `}</style>
    </div>
  );
}
