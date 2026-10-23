import Script from "next/script";
import { siteSettings } from "@/lib/data/site";

// Two widget-id scripts were present on the original site (possibly a leftover
// duplicate from a prior setup) — replicated as-is for fidelity. Worth asking
// the client whether both are still needed when reviewing SiteSettings in the CMS.
export default function GhlChatWidget() {
  return (
    <>
      {siteSettings.ghl.chatWidgetIds.map((id) => (
        <Script
          key={id}
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id={id}
          strategy="lazyOnload"
        />
      ))}
    </>
  );
}
