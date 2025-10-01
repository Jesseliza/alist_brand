declare namespace JSX {
  interface IntrinsicElements {
    'swiper-container': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      navigation?: string;
      'slides-per-view'?: string;
      'space-between'?: string;
      class?: string;
      'navigation-next-el'?: string;
      'navigation-prev-el'?: string;
    };
    'swiper-slide': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      key: React.Key;
    };
  }
}