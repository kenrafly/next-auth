import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});
const page = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            `text-6xl font-semibold text-white drop-shadow-md`,
            font.className
          )}
        >
          🔐 Auth
        </h1>
        <p className="text-white text-lg">simple authentication service</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
};

export default page;
