"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo / Brand */}
            <Link href={"/"}>
              <div className="text-2xl font-bold text-white cursor-pointer">
                Ashish Verma
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href={"/"} className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <a href="#about" className="text-white/80 hover:text-white transition-colors">
                About
              </a>
              <a href="#services" className="text-white/80 hover:text-white transition-colors">
                Services
              </a>
              <a href="#skills" className="text-white/80 hover:text-white transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#education" className="text-white/80 hover:text-white transition-colors">
                Education
              </a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="/AshishUpdateResume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-white/20">
              <div className="flex flex-col space-y-4">
                <Link href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
                <a href="#about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
                <a href="#services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </a>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </a>
                <a
                  href="/AshishUpdateResume.pdf"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white border-0 w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Resume
                  </Button>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
