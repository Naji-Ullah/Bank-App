import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { Bug } from "../assets";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-gradient-to-r from-black via-black to-black w-full shadow-[0px_4px_12px_rgba(255,221,51,0.5)]`} section id="Aboutus">
    <div className="w-full max-w-[1400px] px-4 md:px-10">
      <div className={`${styles.flexStart} flex flex-col md:flex-row mb-8 w-full`}>
        <div className="flex flex-col justify-start flex-1 mb-10 md:mb-0 md:mr-10">
          <img 
            src={Bug}
            alt="Cicada logo"
            className="w-[160px] sm:w-[200px] md:w-[226px] h-auto object-contain"
          />
          <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-wrap gap-y-6 justify-between">
          {footerLinks.map((footerLink) => (
            <div
              className="flex flex-col min-w-[140px]"
              key={footerLink.title}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="mt-2 list-none">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] leading-[24px] text-gray-500 cursor-pointer hover:text-yellow-700 mb-2"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between w-full pt-6 border-t border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center md:text-left text-[16px] md:text-[18px] leading-[27px] text-white">
          © 2024 <span className="text-yellow-800">Cicada</span> 3301. All Rights Reserved. <br className="md:hidden" />
          Built by{" "}
          <a
            href="https://github.com/Naji-Ullah/weather_app"
            className="cursor-pointer hover:text-secondary"
            rel="noopener noreferrer"
            target="_blank"
          >
            Team
          </a>
        </p>

        <div className="flex flex-row mt-4 md:mt-0">
          {socialMedia.map((social, index) => (
            <img
              src={social.icon}
              key={social.id}
              alt={social.id}
              className={`${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              } w-[21px] h-[21px] object-contain cursor-pointer`}
              onClick={() => window.open(social.link)}
            />
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
