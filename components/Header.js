
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gray-700 text-gray-100 shadow w-full p-2">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <Link legacyBehavior href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/images/logo2.png" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl">conscious_code</span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link legacyBehavior href="/blog">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              Blog
            </a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-indigo-300">
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header
