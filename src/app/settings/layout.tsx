import SideNav from "@/component/sideNav";

export default function SettingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row h-screen">
      <SideNav
        navElements={[{ href: "/settings/general", label: "General" }]}
      />

      <div className="basis-5/6 p-4">
        <h1 className="text-2xl font-bold mb-8">Settings</h1>
        {children}
      </div>
    </main>
  );
}
