"use client"

import type React from "react"
import {useState} from "react"
import Link from "next/link"
import {useRouter} from "next/navigation"
import {Menu, Search} from "lucide-react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import SpoilerToggle from "@/components/spoiler-toggle"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("")
    const router = useRouter()

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        if (searchQuery.trim()) {
            router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`)
        }
    }

    const navigation = [
        {name: "Movies", href: "/movies"},
        {name: "TV Shows", href: "/tv"},
        {name: "People", href: "/people"},
    ]

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <Link href="/" className="flex items-center space-x-2">
                            <div
                                className="h-8 w-8 rounded bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                                <span className="text-white font-bold text-sm">M</span>
                            </div>
                            <span className="font-bold text-xl">Movana</span>
                        </Link>

                        <nav className="hidden md:flex items-center space-x-6">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-sm font-medium transition-colors hover:text-primary"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="hidden md:flex items-center space-x-4">
                                <SpoilerToggle/>
                                <ThemeToggle/>
                            </div>
                        </nav>
                    </div>

                    <div className="flex items-center space-x-4">
                        <form onSubmit={handleSearch} className="hidden sm:flex items-center space-x-2">
                            <Input
                                type="search"
                                placeholder="Search movies, TV shows..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-64"
                            />
                            <Button type="submit" size="icon" variant="ghost">
                                <Search className="h-4 w-4"/>
                            </Button>
                        </form>

                        <Sheet>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="h-5 w-5"/>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right">
                                <div className="flex flex-col space-y-4 mt-8">
                                    <form onSubmit={handleSearch} className="flex items-center space-x-2">
                                        <Input
                                            type="search"
                                            placeholder="Search..."
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                        />
                                        <Button type="submit" size="icon">
                                            <Search className="h-4 w-4"/>
                                        </Button>
                                    </form>
                                    {navigation.map((item) => (
                                        <Link key={item.name} href={item.href} className="text-lg font-medium">
                                            {item.name}
                                        </Link>
                                    ))}
                                    <div className="pt-4 border-t space-y-4">
                                        <SpoilerToggle/>
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm font-medium">Theme</span>
                                            <ThemeToggle/>
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
