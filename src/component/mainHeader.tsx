import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-surface text-white shadow-lg shadow-brand-accent">
      <h1 className="text-xl font-bold">Berry Busy</h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:underline">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/calendar" className="hover:underline">
              Calendar
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/settings" className="hover:underline">
          Settings
        </Link>
        <Link href="/profile" className="hover:underline">
          Profile
        </Link>
      </div>
    </header>
  );
}
