export const STORAGE_LANG = "urumuri-language";
export const STORAGE_THEME = "urumuri-theme";

export const NAV_ITEMS = [
  { href: "/", key: "home" },
  { href: "/transport", key: "transport" },
  { href: "/food", key: "food" },
  { href: "/courier", key: "courier" },
  { href: "/merchants", key: "merchants" },
  { href: "/drivers", key: "drivers" },
  { href: "/about", key: "about" },
  { href: "/contact", key: "contact" },
  { href: "/reviews", key: "reviews" },
] as const;

export const SOCIAL_LINKS = [
  {
    href: "https://api.whatsapp.com/send/?phone=%2B250793155154",
    label: "WhatsApp",
    icon: "https://cdn.simpleicons.org/whatsapp/ffffff",
  },
  {
    href: "#",
    label: "Instagram",
    icon: "https://cdn.simpleicons.org/instagram/ffffff",
  },
  {
    href: "https://x.com/UrumuriDelivery",
    label: "X",
    icon: "https://cdn.simpleicons.org/x/ffffff",
  },
  {
    href: "https://www.facebook.com/share/17YSwN8z9S/",
    label: "Facebook",
    icon: "https://cdn.simpleicons.org/facebook/ffffff",
  },
] as const;
