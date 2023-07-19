import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "./components/button/Button";
import { useScroll } from "./hooks/useScroll";

export default function Layout() {
  const [visible, setVisible] = useState(false);
  const scrollDirection = useScroll();

  return (
    <>
      <header
        className={`flex flex-col gap-4 items-center pb-2 border-b-2 fixed w-full bg-white ${
          scrollDirection === "up" ? "top-0" : "-top-24"
        }`}
      >
        <Link
          to="/"
          className="text-2xl mt-1 z-30"
          onClick={() => {
            setVisible(false);
          }}
        >
          <h1>Jacob Lang</h1>
        </Link>
        {/* mobile screen nav bar */}
        <div
          className={`absolute left-0 w-full ${
            visible ? "bg-white border-b-2 py-1" : ""
          }
            md:hidden`}
        >
          <Button
            className="m-1"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? "X" : "="}
          </Button>
          <nav
            className={`flex flex-col ml-4 gap-2 items-center text-center ${
              visible ? "" : "hidden"
            }`}
          >
            <ul className="flex flex-col">
              <Link
                to="/galleries/animal-portraits"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Animal Portraits
              </Link>
              <Link
                to="/galleries/photography"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Photography
              </Link>
              <Link
                to="/galleries/doodles"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Doodles
              </Link>
            </ul>
            <ul className=" text-slate-600 flex flex-col">
              <Link
                to="/about"
                onClick={() => {
                  setVisible(false);
                }}
              >
                About
              </Link>
              <Link
                to="/donate"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Donate
              </Link>
            </ul>
          </nav>
        </div>
        {/* md screen nav bar */}
        <div className="hidden md:block">
          <nav className={`flex ml-4 gap-4 items-center text-center `}>
            <ul className="flex gap-2">
              <Link
                to="/galleries/animal-portraits"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Animal Portraits
              </Link>
              <Link
                to="/galleries/photography"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Photography
              </Link>
              <Link
                to="/galleries/doodles"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Doodles
              </Link>
            </ul>
            <ul className=" text-slate-600 flex gap-2">
              <Link
                to="/about"
                onClick={() => {
                  setVisible(false);
                }}
              >
                About
              </Link>
              <Link
                to="/donate"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Donate
              </Link>
            </ul>
          </nav>
        </div>
      </header>
      <main className="py-16 px-4 md:pt-24 md:px-16">
        <Outlet />
      </main>
      <footer>
        <p className="text-xs text-center">Copyright © 2023 Zachary Maynor</p>
      </footer>
    </>
  );
}
