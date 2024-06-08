"use client";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "./logo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ShoppingCartIcon } from "lucide-react";

export const Header: React.FC = () => {
  const router = useRouter();
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsUserLoggedIn(localStorage.getItem("user") ? true : false);
    }
  }, []);

  const handleLogout = (event: any) => {
    event.preventDefault(); // Prevent the default form submission
    localStorage.removeItem("user");
    router.push("/login");
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <Logo />
        </Link>
      </div>
      <div className="navbar-end gap-x-2">
        <Link href="/dates">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>
        <Link href="/cart">
          <ShoppingCartIcon size={24} />
        </Link>
        {isUserLoggedIn ? (
          <div className="flex gap-x-2">
            <Link href="/mypage">
              <button className="btn">mypage</button>
            </Link>
            <button
              type="submit"
              onClick={handleLogout}
              className="btn btn-ghost"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link href="/login">
            <button className="btn">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};
