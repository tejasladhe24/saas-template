"use client";

import { Logo } from "@/components/logo"
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { cn } from "@/lib/utils"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Menu } from "lucide-react";
import { Sidebar } from "../organization/_components/sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar";

const MobileSidebar = () => {
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);

    const onOpen = useMobileSidebar((state) => state.onOpen);
    const onClose = useMobileSidebar((state) => state.onClose);
    const isOpen = useMobileSidebar((state) => state.isOpen);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        onClose();
    }, [pathname, onClose]);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <Button
                onClick={onOpen}
                className="block md:hidden mr-2"
                variant="ghost"
                size="sm"
            >
                <Menu className="h-4 w-4" />
            </Button>
            <Sheet open={isOpen} onOpenChange={onClose}>
                <SheetContent side="left" className="p-2 pt-10">
                    <Sidebar storageKey="t-sidebar-mobile-state" />
                </SheetContent>
            </Sheet>
        </>
    );
};


export const TopBar = ({ className }: { className?: string }) => {
    return <nav className={cn(className, "w-full flex items-center justify-between px-4 md:px-10")}>
        <MobileSidebar />
        <Logo className="hidden md:block" />
        <div className="flex items-center space-x-2">
            <div className="hidden dark:block">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                background: "#111827",
                                padding: 4,
                                borderRadius: 8,
                            },
                            organizationSwitcherTrigger: {
                                color: "white",
                            },
                        },
                    }}
                />
            </div>
            <div className="dark:hidden">
                <OrganizationSwitcher
                    hidePersonal
                    afterCreateOrganizationUrl="/organization/:id"
                    afterLeaveOrganizationUrl="/select-org"
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        elements: {
                            rootBox: {
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: 4,
                                borderRadius: 8,
                            },
                        },
                    }}
                />
            </div>
            <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: {
                            height: 30,
                            width: 30,
                        }
                    }
                }}
            />
        </div>
    </nav>
}