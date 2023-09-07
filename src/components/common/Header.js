import Link from "next/link";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/react";
import { Navbar, Dropdown } from "@nextui-org/react";
import { useSelector, useDispatch } from "react-redux";
import { setLanguage } from "../../redux/language";
import { AiFillPhone } from "react-icons/ai";
import { MdMail } from "react-icons/md";
import LinkDropdown from "./LinkDropdown";

export default function Header({ page }) {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
    if (typeof window !== undefined) {
      window.localStorage.setItem("lang", language);
    }
  };

  const showLang = false;
  return (
    <>
      <Navbar variant="sticky">
        <Navbar.Brand>
          <div style={{ width: "80px" }}>
            <Link href="/">
              <Image alt="logo" src="/logo-viva.png" />
            </Link>
          </div>
        </Navbar.Brand>

        <Navbar.Content>
          <a href="mailto:info@vivavivianavarese.it" className="icon-link">
            <MdMail />
          </a>
          <a href="tel:+390249497340" className="icon-link">
            <AiFillPhone />
          </a>
          {!showLang && selectedLanguage === "en" && (
            <button
              onClick={() => handleLanguageChange("it")}
              disabled={selectedLanguage === "it"}
            >
              <Image src="/en.png" alt="en" width="30px" height="15px" />
            </button>
          )}
          {!showLang && selectedLanguage === "it" && (
            <button
              onClick={() => handleLanguageChange("en")}
              disabled={selectedLanguage === "en"}
            >
              <Image src="/it.png" alt="en" width="30px" height="15px" />
            </button>
          )}
        </Navbar.Content>
      </Navbar>
      <div className="rainbowbg" style={{ height: "10px" }}></div>
    </>
  );
}
