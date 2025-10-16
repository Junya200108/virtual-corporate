import React from "react";
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Virtual Corporate",
  description: "A simple Next.js v14 App Router demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <header className="border-b bg-white/50 backdrop-blur sticky top-0 z-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-pink-500 rounded-md flex items-center justify-center text-white font-bold">
                    VC
                  </div>
                  <span className="sr-only">Virtual Corporate</span>
                </Link>
              </div>

              <div className="flex items-center space-x-6">
                <NavLink href="/brand">ブランド</NavLink>
                <NavLink href="/services">商品紹介</NavLink>
                <NavLink href="/news">ニュース・ブログ</NavLink>
                <NavLink href="/careers">採用情報</NavLink>
                <NavLink href="/online-shop">オンラインショップ</NavLink>
              </div>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">{children}</main>

        <footer className="border-t py-6 mt-12 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Virtual Corporate
        </footer>
      </body>
    </html>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="text-sm font-medium text-gray-700 hover:text-indigo-600 dark:text-gray-200"
    >
      {children}
    </Link>
  );
}
