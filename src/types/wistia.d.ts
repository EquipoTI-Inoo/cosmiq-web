import type { DetailedHTMLProps, HTMLAttributes } from "react";

type WistiaPlayerProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement> & { "media-id"?: string; aspect?: string },
  HTMLElement
>;

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": WistiaPlayerProps;
    }
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "wistia-player": WistiaPlayerProps;
    }
  }
}
