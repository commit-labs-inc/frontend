// For all the buttons used in the app.
import clsx from "clsx";
import { primFont } from "@/app/ui/fonts";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function TextButton({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        `${primFont.className} text-gray-800 hover:text-gray-600 mr-4`,
        className
      )}
    >
      {children}
    </button>
  );
}
