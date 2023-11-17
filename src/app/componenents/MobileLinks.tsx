import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileLinks = () => {
    const pathName = usePathname()
    const linkStyle = "before:content-[''] before:bg-white before:w-full before:h-1 before:rounded before:absolute before:translate-y-12 before:scale-0 before:focus:scale-100 before:duration-700 before:origin-center relative before:hover:scale-100";

    return (
        <section className="hidden animate-toggle-btn origin-top z-10 fixed min-h-screen w-full dark:bg-black pt-32 sm:hidden top-32 bg-indigo-400" id="mobile-menu">
            <nav className="flex text-white flex-col items-center text-4xl gap-10 " aria-label="mobile">
                <Link href="/dishes" className={pathName === "/dishes" ? `${linkStyle} before:scale-100`: linkStyle }>Dishes</Link>
                <Link href="/about" className={pathName === "/about" ? `${linkStyle} before:scale-100`: linkStyle }>About</Link>
                <Link href="/contact" className={pathName === "/contact" ? `${linkStyle} before:scale-100`: linkStyle }>Contact</Link>
                <Link href="/login" className={pathName === "/login" ? `${linkStyle} before:scale-100`: linkStyle }>Login</Link>
            </nav>
        </section>
    );
}

export default MobileLinks;
