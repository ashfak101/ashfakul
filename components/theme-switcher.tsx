"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Check, Palette } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

type ColorTheme = {
  name: string;
  value: string;
  primaryColor: string;
  accentColor: string;
};

const colorThemes: ColorTheme[] = [
  {
    name: "Blue",
    value: "blue",
    primaryColor: "hsl(210, 100%, 50%)",
    accentColor: "hsl(35, 100%, 60%)",
  },
  {
    name: "Purple",
    value: "purple",
    primaryColor: "hsl(270, 70%, 60%)",
    accentColor: "hsl(330, 80%, 70%)",
  },
  {
    name: "Green",
    value: "green",
    primaryColor: "hsl(150, 60%, 40%)",
    accentColor: "hsl(180, 70%, 50%)",
  },
  {
    name: "Red",
    value: "red",
    primaryColor: "hsl(0, 70%, 50%)",
    accentColor: "hsl(30, 80%, 60%)",
  },
  {
    name: "Amber",
    value: "amber",
    primaryColor: "hsl(45, 100%, 50%)",
    accentColor: "hsl(30, 100%, 60%)",
  },
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [colorTheme, setColorTheme] = React.useState<string>("blue");

  // Apply the color theme by updating CSS variables
  React.useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = colorThemes.find((t) => t.value === colorTheme);
    
    if (selectedTheme) {
      // Update CSS variables for light mode
      root.style.setProperty("--primary-light", selectedTheme.primaryColor);
      root.style.setProperty("--accent-light", selectedTheme.accentColor);
      
      // Update CSS variables for dark mode
      // Adjust the HSL values for dark mode (typically darker/more saturated)
      const primaryHsl = selectedTheme.primaryColor.match(/\d+/g);
      const accentHsl = selectedTheme.accentColor.match(/\d+/g);
      
      if (primaryHsl && accentHsl) {
        const h1 = primaryHsl[0];
        const s1 = Math.min(100, parseInt(primaryHsl[1]) + 10);
        const l1 = Math.max(30, parseInt(primaryHsl[2]) - 10);
        
        const h2 = accentHsl[0];
        const s2 = Math.min(100, parseInt(accentHsl[1]) + 10);
        const l2 = Math.max(30, parseInt(accentHsl[2]) - 5);
        
        root.style.setProperty("--primary-dark", `hsl(${h1}, ${s1}%, ${l1}%)`);
        root.style.setProperty("--accent-dark", `hsl(${h2}, ${s2}%, ${l2}%)`);
      }
      
      // Apply the current theme colors based on light/dark mode
      const isDark = theme === "dark";
      if (primaryHsl && accentHsl) {
        // For light mode, use the primary/accent light values
        // For dark mode, use the calculated dark values
        if (!isDark) {
          root.style.setProperty(
            "--primary",
            `${primaryHsl[0]} ${primaryHsl[1]}% ${primaryHsl[2]}%`
          );
          root.style.setProperty(
            "--accent",
            `${accentHsl[0]} ${accentHsl[1]}% ${accentHsl[2]}%`
          );
        } else {
          const h1 = primaryHsl[0];
          const s1 = Math.min(100, parseInt(primaryHsl[1]) + 10);
          const l1 = Math.max(30, parseInt(primaryHsl[2]) - 10);
          
          const h2 = accentHsl[0];
          const s2 = Math.min(100, parseInt(accentHsl[1]) + 10);
          const l2 = Math.max(30, parseInt(accentHsl[2]) - 5);
          
          root.style.setProperty(
            "--primary",
            `${h1} ${s1}% ${l1}%`
          );
          root.style.setProperty(
            "--accent",
            `${h2} ${s2}% ${l2}%`
          );
        }
      }
    }
  }, [colorTheme, theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Palette className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle color theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {colorThemes.map((item) => (
          <DropdownMenuItem
            key={item.value}
            onClick={() => setColorTheme(item.value)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div
              className="h-4 w-4 rounded-full"
              style={{ background: item.primaryColor }}
            />
            <span>{item.name}</span>
            {colorTheme === item.value && (
              <Check className="h-4 w-4 ml-auto" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}