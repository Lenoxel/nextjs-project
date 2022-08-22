import Link from 'next/link'
import Style from './style'

export default function Sidebar() {
  return (
    <>
        <nav>
            <input placeholder="Search..." />
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/contact">
                <a>Contact</a>
            </Link>
        </nav>
        <Style/>
    </>
  )
}