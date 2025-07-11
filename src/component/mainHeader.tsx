import Link from "next/link";

export default function MainHeader() {
  return (
    <header className="flex items-center justify-between p-4 bg-surface text-white">
      <h1 className="text-xl font-bold">Berry Busy</h1>
      <nav>
        <ul className="flex space-x-4">
          <li className="p-2 hover:bg-background/60 rounded-bl-xl rounded-tr-xl">
            <Link href="/">
              Dashboard
            </Link>
          </li>
          <li className="p-2 hover:bg-background/60 rounded-bl-xl rounded-tr-xl">
            <Link href="/calendar">
              Calendar
            </Link>
          </li>
          <li className="p-2 hover:bg-background/60 rounded-bl-xl rounded-tr-xl">
            <Link href="/media">
              Media
            </Link>
          </li>
          <li className="p-2 hover:bg-background/60 rounded-bl-xl rounded-tr-xl">
            <Link href="/recipes">
              Recipes
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
