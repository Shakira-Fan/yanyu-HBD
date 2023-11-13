export const BottomNav = () => {
    const navLinks = [
        { href: "#advocate", label: "莉莉的祝福", imgUrl: "images/Icon-advocate.png" },
        { href: "#latestEvents", label: "台中-台北", imgUrl: "images/Icon-latestEvents.png" },
        { href: "#policyIssues", label: "回憶", imgUrl: "images/Icon-policyIssues.png" },
        { href: "#donate", label: "晏羽", imgUrl: "images/Icon-donate.png" },
        { href: "#email", label: "我跟晏羽", imgUrl: "images/Icon-email.png" },
    ];
    return (
        <div className="py-4 px-8 overflow-hidden fixed bottom-0 w-screen 2xl:w-[1410px] bg-white/90 z-10 lg:hidden">
            <ul className="flex justify-around">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className="text-text-primary text-[10px] hover:text-primary-theme-one hover:font-semibold flex flex-col items-center">
                            <img src={item.imgUrl} />
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
