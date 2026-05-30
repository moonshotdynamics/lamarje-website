"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const divisions = [
  { title: "Lamarje Capital", href: "/divisions/capital", description: "Forex trading, financing, and capital solutions across Africa" },
  { title: "Lamarje Infrastructure", href: "/divisions/infrastructure", description: "Roads, housing, airports, hospitals, solar energy projects" },
  { title: "Supply Chain Solutions", href: "/divisions/supply-chain", description: "Mining procurement, logistics, and FMCG distribution" },
  { title: "Lamarje Consulting", href: "/divisions/consulting", description: "Strategic advisory, M&A, transaction structuring" },
  { title: "FMCG & Food Distribution", href: "/divisions/fmcg", description: "Meat, fish, and commodity food distribution across Africa" },
  { title: "Procurement & Products", href: "/divisions/procurement", description: "Mining equipment, pumps, safety gear, and industrial supplies" },
];

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Structure", href: "/structure" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <img
            src="/logo.png"
            alt="Lamarje Investments"
            className="h-12 w-auto"
          />
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold font-heading text-navy leading-tight">
              Lamarje
            </h1>
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Investments
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((link) =>
                link.title === "About Us" ? (
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-navy data-[active]:text-navy">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {divisions.map((division) => (
                          <ListItem
                            key={division.title}
                            title={division.title}
                            href={division.href}
                          >
                            {division.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={link.title}>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-muted-foreground hover:text-navy transition-colors"
                      render={<Link href={link.href} />}
                    >
                      {link.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/contact">
            <Button size="sm" className="ml-4 bg-navy hover:bg-navy-light text-white rounded-full px-6">
              Get in Touch
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            className="lg:hidden"
            render={
              <Button variant="ghost" size="icon" className="h-10 w-10" />
            }
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-sm p-6">
            <div className="flex flex-col h-full">
              <div className="flex items-center mb-8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <img src="/logo.png" alt="Lamarje" className="h-8 w-auto" />
                  <span className="font-heading font-bold text-navy">Lamarje</span>
                </Link>
              </div>

              <nav className="flex-1 space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-navy transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.title}
                  </Link>
                ))}
                {/* Divisions subnav */}
                <div className="pt-4">
                  <p className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">
                    Our Divisions
                  </p>
                  {divisions.map((div) => (
                    <Link
                      key={div.title}
                      href={div.href}
                      className="block rounded-lg px-4 py-2.5 text-sm text-muted-foreground hover:bg-muted hover:text-navy transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {div.title}
                    </Link>
                  ))}
                </div>
              </nav>

              <div className="mt-auto pt-6 border-t border-border">
                <Link href="/contact" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-navy hover:bg-navy-light text-white rounded-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: {
  className?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}) => (
  <li>
    <NavigationMenuLink
      className={cn(
        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-navy focus:bg-muted",
        className
      )}
      render={<Link href={href} {...props} />}
    >
      <div className="text-sm font-medium leading-none">{title}</div>
      <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
        {children}
      </p>
    </NavigationMenuLink>
  </li>
);
