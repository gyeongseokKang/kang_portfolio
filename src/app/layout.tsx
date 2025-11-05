import type { Metadata } from "next/types";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Handy Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}
