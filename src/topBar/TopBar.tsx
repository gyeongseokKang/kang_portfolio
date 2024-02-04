import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";
import SettingIcons from "./component/SettingIcons";

const LinkList = [
  "Experience",
  "Project",
  "Skill",
  "Award",
  "Certificate",
  "Retrospective",
  "Blog",
];

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        shouldHideOnScroll
        isBordered
      >
        <NavbarContent
          className="sm:hidden"
          justify="start"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <NavbarMenuToggle />
        </NavbarContent>
        <NavbarBrand>
          <p className="font-bold text-inherit"> KANG GYEONG SEOK</p>
        </NavbarBrand>
        <NavbarContent className="hidden gap-4 sm:flex" justify="center">
          {LinkList.map((link) => (
            <NavbarItem key={link}>
              <Link color="foreground" href={`#${link}`}>
                {link}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <SettingIcons />
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          {LinkList.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full"
                color="foreground"
                href={`#${item}`}
                size="lg"
                onPress={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </>
  );
}
