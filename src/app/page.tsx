import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative flex flex-1 justify-center overflow-hidden">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -right-28 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl"
      />
      <main className="relative flex w-full max-w-md flex-col items-center px-7 pt-20 pb-16 sm:px-8 sm:pt-24">
        <ProfileHeader profile={profile} />
        <ul className="mt-12 flex w-full flex-col gap-4">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard link={link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
