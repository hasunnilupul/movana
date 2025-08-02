"use client"

import * as React from "react"
import {Eye, EyeOff} from "lucide-react"
import {Switch} from "@/components/ui/switch"
import {Label} from "@/components/ui/label"
import {useSpoilerStore} from "@/store/spoiler-store"

interface SpoilerToggleProps {
    className?: string
    showLabel?: boolean
}

export default function SpoilerToggle({className = "", showLabel = true}: SpoilerToggleProps) {
    const {spoilerFreeMode, toggleSpoilerFreeMode} = useSpoilerStore()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return (
            <div className={`flex items-center space-x-2 ${className}`}>
                <EyeOff className="h-4 w-4 text-muted-foreground" aria-hidden="true"/>
                <Switch id="spoiler-mode" checked={true} disabled/>
                {showLabel && (
                    <Label htmlFor="spoiler-mode" className="text-sm font-medium cursor-pointer">
                        Spoiler-Free Mode
                    </Label>
                )}
            </div>
        )
    }

    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            {spoilerFreeMode ? (
                <EyeOff className="h-4 w-4 text-muted-foreground" aria-hidden="true"/>
            ) : (
                <Eye className="h-4 w-4 text-muted-foreground" aria-hidden="true"/>
            )}
            <Switch
                id="spoiler-mode"
                checked={spoilerFreeMode}
                onCheckedChange={toggleSpoilerFreeMode}
                aria-describedby="spoiler-mode-description"
            />
            {showLabel && (
                <Label htmlFor="spoiler-mode" className="text-sm font-medium cursor-pointer">
                    Spoiler-Free Mode
                </Label>
            )}
            <span id="spoiler-mode-description" className="sr-only">
        {spoilerFreeMode
            ? "Spoiler-free mode is enabled. Spoiler content will be hidden."
            : "Spoiler-free mode is disabled. All content will be visible."}
      </span>
        </div>
    )
}
