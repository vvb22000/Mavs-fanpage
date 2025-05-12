"use client";
import Link from 'next/link';
import { useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import React from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback((path: string) => pathname === path, [pathname]);

  return (
    <nav className="bg-[#00285E] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0z" fill="#00285E"/>
                <path d="M28 14h-4l-4 6-4-6h-4l6 9-6 9h4l4-6 4 6h4l-6-9 6-9z" fill="white"/>
              </svg>
            </div>
            <span className="text-2xl font-bold tracking-tight">Mavs Fan Zone</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/news', label: 'News' },
              { href: '/stats', label: 'Stats' },
              { href: '/schedule', label: 'Schedule' }
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`px-4 py-2 rounded-md transition-colors duration-200 ${
                  isActive(href)
                    ? 'bg-white text-[#00285E] font-semibold'
                    : 'hover:bg-[#0053BC]'
                }`}
              >
                {label}
              </Link>
            ))}
            <button className="ml-4 bg-[#0053BC] hover:bg-[#004299] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200">
              Buy Tickets
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#0053BC] transition-colors duration-200"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#0053BC]">
            <div className="flex flex-col space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/news', label: 'News' },
                { href: '/stats', label: 'Stats' },
                { href: '/schedule', label: 'Schedule' }
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-2 rounded-md ${
                    isActive(href)
                      ? 'bg-white text-[#00285E] font-semibold'
                      : 'hover:bg-[#0053BC] hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <button className="mt-4 w-full bg-[#0053BC] hover:bg-[#004299] text-white px-6 py-2 rounded-md font-semibold transition-colors duration-200">
                Buy Tickets
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
