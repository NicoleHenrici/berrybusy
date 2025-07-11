import Link from "next/link";

type NavElement = {
  href: string;
  label: string;
};

type SideNavProps = {
  navElements: NavElement[];
};

export default function SideNav({ navElements }: SideNavProps) {
  return (
    <>
      {navElements && (
        <nav className="basis-1/6 p-4 bg-brand-accent/25">
          <ul className="space-y-1 text-base-text">
            {navElements.map((element, index) => (
              <li key={index} className="p-2 hover:text-brand-primary">
                <Link href={element.href}>
                  {element.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}
