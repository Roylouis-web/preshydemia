import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = () => {
    const pathName = usePathname()
    const linkStyle = "before:content-[''] before:bg-white before:w-full before:h-1 before:rounded before:absolute before:translate-y-8 before:scale-0 before:duration-700 before:origin-center before:hover:scale-100";

    const handleClick = () => {
        const mobileMenu = document.getElementById("mobile-menu") as HTMLElement;
        const toggleBtn = document.getElementById("toggle-btn") as HTMLButtonElement;
        const link = document.getElementById("link") as HTMLElement;
        link.classList.toggle("fixed")
        mobileMenu.classList.toggle("hidden");
        toggleBtn.classList.toggle("toggle-btn")
    }

    return (
        <header className="bg-blue-950 dark:text-white p-10 w-full z-10 top-0" id="link">
            <section className="flex justify-between items-center lg:justify-evenly">
                <Link href="/" className="text-3xl lg:text-4xl p-2">Preshydemia 🍽️</Link>
                <nav className="flex justify-between w-1/2 hidden sm:flex sm:text-xl lg:text-3xl shrink" aria-label="main">
                    <div className="relative flex">
                        <Link href="/dishes" className={pathName === "/dishes" ? `${linkStyle} before:scale-100`: linkStyle }>Dishes</Link>
                    </div>
                    <div className="relative">
                        <Link href="/about" className={pathName === "/about" ? `${linkStyle} before:scale-100`: linkStyle }>About</Link>
                    </div>
                    <div className="relative">
                        <Link href="/contact" className={pathName === "/contact" ? `${linkStyle} before:scale-100`: linkStyle }>Contact</Link>
                    </div>
                    <div className="relative">
                        <Link href="/login" className={pathName === "/login" ? `${linkStyle} before:scale-100`: linkStyle }>Login</Link>
                    </div>
                </nav>
                <button className="sm:hidden relative" onClick={handleClick} id="toggle-btn">
                    <div className="bg-white w-8 h-1 rounded before:content-[''] before:bg-white before:w-8 before:h-1 relative before:absolute before:translate-y-3 before:-translate-x-4 before:rounded after:content-[''] after:bg-white after:w-8 after:h-1 relative after:absolute after:-translate-y-3 after:-translate-x-4 after:rounded transition-all duration-500 after:transition-all after:duration-500 before:transition-all before:duration-500"></div>
                </button>
            </section>
        </header>
    );
}

export default Links