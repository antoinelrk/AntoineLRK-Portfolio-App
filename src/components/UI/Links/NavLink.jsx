import './NavLink.scss'

import Link from "next/link";

export function NavLink ({ to, children }) {
    return <Link href={to} className="nav-link">{children}</Link>
}