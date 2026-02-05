"use client";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="wrap">{children}</div>
      </body>
    </html>
  );
}

