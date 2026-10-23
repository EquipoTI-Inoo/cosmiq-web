import FunnelHeader from "@/components/FunnelHeader";
import FunnelFooter from "@/components/FunnelFooter";

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <FunnelHeader />
      <main className="flex-1">{children}</main>
      <FunnelFooter />
    </>
  );
}
