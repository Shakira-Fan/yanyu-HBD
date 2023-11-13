import { SocialMedia } from "./socialMedia";
import { FaBirthdayCake } from 'react-icons/fa'

export const Nav = () => {
  const navLinks = [
    { href: "#advocate", label: "莉莉的祝福" },
    { href: "#latestEvents", label: "台中-台北" },
    { href: "#policyIssues", label: "回憶" },
    { href: "#donate", label: "晏羽" },
    { href: "#email", label: "我跟晏羽" },
  ];

  const socialMedia = [
    { href: "#facebook", img: "images/fb-icon.png", alt: "Facebook" },
    { href: "#instargram", img: "images/ig-icon.png", alt: "Instagram" },
    { href: "#youtube", img: "images/yt-icon.png", alt: "Youtube" },
  ];

  return (
    <header className="py-4 px-5 mx-4 overflow-hidden fixed top-0 rounded-xl w-full 2xl:w-[1410px] bg-white/90 z-10">
      <nav className="flex justify-between items-center">
        <a href="/" className="flex">
          <div className="bg-gradient-color rounded-full w-[50px] h-[50px]  mr-4">
            <div className="text-white text-[25.5px] md:text-[32px] flex justify-center pt-2">
              <FaBirthdayCake />
            </div>
          </div>
          <div>
            <span className="text-primary-theme-one font-bold text-[28px] md:text-[40px]">
              2023/11/13
            </span>
          </div>
        </a>
        <ul className="flex gap-[10px] max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-text-primary text-lg hover:text-primary-theme-one hover:font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="max-sm:hidden">
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </nav>
    </header>
  );
};
