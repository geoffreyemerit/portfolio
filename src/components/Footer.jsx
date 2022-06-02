import React from "react";
import footLinks from "../../data/footLinks";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="flex flex-col p-4 font-pat bg-opacity-30 text-secondary bg-primary sm:flex-row sm:items-center dark:text-primary dark:bg-secondary dark:bg-opacity-30">
      {/* :FOOTER */}
      {/* >> Social Networks */}
      <ul className="flex flex-wrap justify-between w-full">
        {footLinks.map((link) => (
          <a key={link.id} href={link.href} target={link.target}>
            <li className="m-2 sm:m-4">
              <Logo myStyle="w-6 h-6" name={link.name} id={link.id} />
            </li>
          </a>
        ))}
        {/* >> Copyright */}
        <li className="flex items-center m-2 text-base sm:m-4">
          &copy; Geoffrey Emerit
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
