import Link from 'next/link'

export const NavItem = ({ name, linkTo }: { name: string; linkTo: string }) => (
    <Link href={linkTo}>{name}</Link>
)
