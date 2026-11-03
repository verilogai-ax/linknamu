import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  // mailto: 같은 링크는 새 탭을 열면 빈 탭만 남으므로 웹 주소만 새 탭으로 엽니다.
  const isWeb = link.url.startsWith("http");

  return (
    <a
      href={link.url}
      {...(isWeb && { target: "_blank", rel: "noopener noreferrer" })}
      className="relative flex w-full items-center justify-center rounded-2xl border border-white/70 bg-white/40 px-14 py-[1.125rem] text-center text-[15px] font-semibold text-stone-700 shadow-[0_8px_24px_-12px_rgba(160,90,50,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-[0_12px_28px_-12px_rgba(160,90,50,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300"
    >
      {link.emoji && (
        <span aria-hidden="true" className="absolute left-5 text-lg">
          {link.emoji}
        </span>
      )}
      <span>{link.title}</span>
    </a>
  );
}
