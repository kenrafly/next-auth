"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface backButtonProps {
  label: string;
  href: string;
}
const BackButton = ({ label, href }: backButtonProps) => {
  return (
    <Button variant="link" className="font-normal w-full" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
