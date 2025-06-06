import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

interface headerProps {
  label: string;
}

export const Header = ({ label }: headerProps) => (
  <div className="w-full flex flex-col items-center justify-center ">
    <h1 className={cn("text-3xl font-semibold", font.className)}>🔐Auth</h1>
    <p className="text-muted-foreground text-sm">{label}</p>
  </div>
);
