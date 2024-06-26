import Link from 'next/link'
import MobileMenu from './mobile-menu'

export default function Header() {
    return (
        <header className="absolute w-full z-30">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-20">
                    {/* Site branding */}
                    <div className="shrink-0 mr-4">
                        {/* Logo */}
                        <Link href="/" className="block" aria-label="Cruip">
                            <svg className="inline w-8 h-8 text-orange-500" viewBox="0 0 32 32"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                    <path
                                        d="M14.5 19.5H9.5M14.5 19.5C14.5 18.7865 14.5 18.4297 14.5381 18.193C14.6609 17.4296 14.6824 17.3815 15.1692 16.7807C15.3201 16.5945 15.8805 16.0927 17.0012 15.0892C18.5349 13.7159 19.5 11.7206 19.5 9.5C19.5 8.62341 19.3496 7.78195 19.0732 7M14.5 19.5C14.5 20.4346 14.5 20.9019 14.299 21.25C14.1674 21.478 13.978 21.6674 13.75 21.799C13.4019 22 12.9346 22 12 22C11.0654 22 10.5981 22 10.25 21.799C10.022 21.6674 9.83261 21.478 9.70096 21.25C9.5 20.9019 9.5 20.4346 9.5 19.5M9.5 19.5C9.5 18.7865 9.5 18.4297 9.46192 18.193C9.3391 17.4296 9.31762 17.3815 8.83082 16.7807C8.67987 16.5945 8.11945 16.0927 6.99876 15.0892C5.4651 13.7159 4.5 11.7206 4.5 9.5C4.5 5.35786 7.85786 2 12 2C13.3637 2 14.6423 2.36394 15.7442 3"
                                        stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round"/>
                                    <path d="M12.7857 8.5L10.6428 11.5H13.6428L11.5 14.5" stroke="#FF9900"
                                          strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </g>
                            </svg>
                            <div className="inline font-architects-daughter text-xl text-orange-600">Elstyga</div>
                        </Link>
                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                        </ul>
                    </nav>

                    {/*<MobileMenu/>*/}
                    <div className="inline font-architects-daughter text-xl text-orange-600">
                        <Link
                            href="mailto:info@elstyga.lt"
                            aria-label="mobile-phone">
                            info@elstyga.lt
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
