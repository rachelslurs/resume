'use client'
import { useEffect, useState } from "react"
import { ThemeProvider } from "next-themes"
import { Theme } from '@radix-ui/themes';
import { ThemePanel } from "src/components/ThemePicker";
 
function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
}, [])

if (!mounted) {
    return null
}
  return (
    <ThemeProvider attribute="class">
      <Theme>
        <ThemePanel />
        {children}
      </Theme>
    </ThemeProvider>
  )
}

export default Providers