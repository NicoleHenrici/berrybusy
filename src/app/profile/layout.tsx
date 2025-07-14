import SideNav from "@/component/sideNav";

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row h-screen">
      <SideNav
        navElements={[
          { href: "/profile/userData", label: "User Data" },
          { href: "/profile/avatar", label: "Avatar" },
        ]}
      />

      <div className="basis-5/6 p-4">
        <h1 className="text-2xl font-bold mb-8">Profile</h1>
        {children}
      </div>
    </main>
  );
}
