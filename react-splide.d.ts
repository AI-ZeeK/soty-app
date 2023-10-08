// @splidejs/react-splide.d.ts
declare module "@splidejs/react-splide" {
  import React from "react";

  interface SplideProps {
    // Define the props used by the Splide component here
    options: {
      // Define the Splide options here
      rewind?: boolean;
      width?: string;
      type?: string;
      gap?: string;
      focus?: string;
      perPage?: number;
      perMove?: number;
      // Add other options as needed
    };
    className?: string;
  }

  const Splide: any;
  const SplideSlide: any;

  export {Splide, SplideSlide};
}
