// 보여 주기용 더미 데이터입니다. 실제 내용으로 교체하세요.

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export const profile: Profile = {
  name: "Henry Kim",
  bio: "SoC Development Director",
  imageUrl: "https://placehold.co/224x224/orange/white/png",
};

export const links: LinkItem[] = [
  {
    id: "github",
    title: "깃허브",
    url: "https://github.com/verilogai-ax",
    emoji: "🐙",
  },
  // TODO: 실제 블로그 주소로 교체
  { id: "blog", title: "블로그", url: "https://blog.naver.com/", emoji: "🟩" },
  {
    id: "email",
    title: "이메일",
    // mailto: 는 메일 프로그램이 없으면 반응이 없어서 Gmail 쓰기 화면으로 엽니다.
    url: "https://mail.google.com/mail/?view=cm&to=verilog.ai@gmail.com",
    emoji: "📧",
  },
];
