import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Initialize with false to ensure consistent server/client rendering
  const [isMobile, setIsMobile] = React.useState(false)
  // Track if component is mounted
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // Mark as mounted
    setMounted(true)
    
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Set initial value
    onChange()
    
    // Add event listener
    mql.addEventListener("change", onChange)
    
    return () => mql.removeEventListener("change", onChange)
  }, [])

  // Return the value only if mounted, otherwise return the initial value (false)
  // This ensures consistent rendering between server and client
  return mounted ? isMobile : false
}
