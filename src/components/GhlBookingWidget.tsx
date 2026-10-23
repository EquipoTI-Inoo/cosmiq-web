import { siteSettings } from "@/lib/data/site";

export default function GhlBookingWidget() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-lg">
      <iframe
        src={siteSettings.ghl.bookingWidgetUrl}
        style={{ width: "100%", border: "none", overflow: "hidden" }}
        scrolling="no"
        id="cosmiq-booking-widget"
        title="Agenda tu demo"
        className="h-[720px] w-full"
      />
      <script src="https://link.msgsndr.com/js/form_embed.js" async />
    </div>
  );
}
