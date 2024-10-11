"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from './button';
import { ScrollArea } from './scroll-area';
import { LayoutDashboard, Users, ShoppingCart, Settings } from 'lucide-react';

const sidebarNavItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Users",
    href: "/users",
    icon: Users,
  },
  {
    title: "Products",
    href: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ className, open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn(
      "fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-background transition-transform duration-300 ease-in-out",
      open ? "translate-x-0" : "-translate-x-full",
      "md:relative md:translate-x-0",
      className
    )}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Admin Panel
          </h2>
          <div className="space-y-1">
            <Button variant="secondary" className="w-full justify-start md:hidden" onClick={onClose}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
              Close Sidebar
            </Button>
          </div>
        </div>
        <ScrollArea className="px-3">
          <div className="space-y-1 p-2">
            {sidebarNavItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.title}
                </Button>
              </Link>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  )
}