import { identity } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-8 border-t border-border">
      <div className="mx-auto max-w-[1248px] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-2">
        <span>
          © {new Date().getFullYear()} {identity.realName} — {identity.brandName}
        </span>
        <span>Built with Next.js, Tailwind &amp; GSAP</span>
      </div>
    </footer>
  );
}
