import { cn } from "@/lib/utils"
import Link from "next/link"

export const Logo = ({ onClickUrl, className }: { onClickUrl?: string, className?: string }) => {
    return <Link href={onClickUrl || "/"}><h1 className={cn("font-semibold", className)}>Logo</h1></Link>

}