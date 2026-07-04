import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { personalInfo } from "./data";

export const socialLinks = [
  {
    label: "GitHub",
    href: personalInfo.github,
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: personalInfo.linkedin,
    icon: FaLinkedin,
  },
  {
    label: "Facebook",
    href: personalInfo.facebook,
    icon: FaFacebook,
  },
  {
    label: "Instagram",
    href: personalInfo.instagram,
    icon: FaInstagram,
  },
  {
    label: "X",
    href: personalInfo.x,
    icon: FaXTwitter,
  },
];
