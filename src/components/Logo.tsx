import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

export type LogoProps = {
    src?: string;
    text?: string;
    className?: string;
    variant?: 'light' | 'dark';
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
    ({ src = null, text = null, className = "", variant = 'dark', ...props }, ref) => {

        const logoVariants = {
            light: "text-primary-foreground",
            dark: "text-secondary-foreground"
        }

        return src ? (
            <div ref={ref}>
                <Image
                    src={src}
                    alt="Logo"
                    className={`w-20 h-20 ${className}`}
                    {...props}
                />
            </div>
        ) : (
            <div ref={ref}>
                <Link href="/" >
                    <span className={clsx('text-4xl logo-font', logoVariants[variant], className)}>
                        {text || "Logo"}
                    </span>
                </Link>
            </div>
        )
    }
)

Logo.displayName = 'Logo'

export default Logo