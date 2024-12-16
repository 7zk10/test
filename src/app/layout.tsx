import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuwex",
  description: "صانع محتوى قيمنق وستريمر",
};

import { RootLayoutClient } from './layout-client';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RootLayoutClient>{children}</RootLayoutClient>;
}
