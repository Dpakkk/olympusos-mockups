import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeaderProps {
  onMenuToggle: () => void
  sidebarOpen: boolean
}

export default function Header({ onMenuToggle, sidebarOpen }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-gray-200 bg-white">
      <div className={`mx-auto max-w-full px-4 sm:px-6 lg:px-8 transition-all duration-300 ${sidebarOpen ? 'md:pl-72' : 'md:pl-4'}`}>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={onMenuToggle}
              className="p-2 rounded-md hover:bg-gray-100 mr-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <Image
              src="/logo.png"
              alt="OlympusOS Logo"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  )
} 