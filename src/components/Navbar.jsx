"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();

  const session = useSession();
  const user = session?.data?.user;

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div>Logo</div>
        </div>
        <ul className="hidden items-center gap-4 md:flex">
          <li>
            <Link
              className={pathName === "/" ? "text-purple-500 underline" : ""}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/signin" ? "text-purple-500 underline" : ""
              }
              href="signin"
            >
              SingIn
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/signup" ? "text-purple-500 underline" : ""
              }
              href="/signup"
            >
              SingUp
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/dashboard" ? "text-purple-500 underline" : ""
              }
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
        </ul>

        <div>{user? <><div className="flex items-center gap-3"><p>Welcome!{user.name}</p> <Button onClick={()=>signOut()}>SignOut</Button></div></> : <></>}</div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <Link
                className={pathName === "/" ? "text-purple-500 underline" : ""}
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathName === "/signin" ? "text-purple-500 underline" : ""
                }
                href="signin"
              >
                SingIn
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathName === "/signup" ? "text-purple-500 underline" : ""
                }
                href="signup"
              >
                SingUp
              </Link>
            </li>
            <li>
              <Link
                className={
                  pathName === "/dashboard" ? "text-purple-500 underline" : ""
                }
                href="/dashboard"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
