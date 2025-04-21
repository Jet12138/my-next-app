import React from "react";
import './global.css'

interface Props {
    children: React.ReactNode
}
export default function DashboardLayout({ 
    children,
}: Props) {
  return (
    <html lang="en">
        <body>
            {/*layout UI*/}
            {/* Place children where you want to render a page or nested layout */}
            <main>{children}</main>
        </body>
    </html>
  );
}
