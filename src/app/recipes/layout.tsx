import SideNav from "@/component/sideNav";

export default function ReipesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex flex-row h-screen">
      <SideNav
        navElements={[
          { href: "/recipes", label: "Overview" },
          { href: "/recipes/addRecipe", label: "Add Recipe" },
        ]}
      />

      <div className="basis-5/6 p-4">
        <h1 className="text-2xl font-bold mb-8">Recipes</h1>
        {children}
      </div>
    </main>
  );
}
