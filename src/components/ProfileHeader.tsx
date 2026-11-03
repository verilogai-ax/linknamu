import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-4 ring-white/80 shadow-[0_14px_32px_-12px_rgba(160,90,50,0.45)]"
      />
      <h1 className="mt-6 text-2xl font-bold tracking-tight text-stone-800">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-[15px] text-stone-500">
        {profile.bio}
      </p>
    </header>
  );
}
