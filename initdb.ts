import Database from "better-sqlite3";

const db = new Database("recipes.db");

const dummyRecipes = [
  {
    slug: "pellkartoffeln-mit-quark",
    name: "Pellkartoffeln mit Quark",
    duration: 45,
    ingredients: `
        1,5 kg Kartoffeln, 
        1 EL Kümmel, 
        2 Loorbeerblätter, 
        750g Sahnequark (20% Fett), 
        40 ml Mineralwasser, 
        1 Schalotte, 
        1 Bund Schnittlauch, 
        1/2 Bund Petersilie, 
        1/2 Bund Dill, 
        1/2 Bund Kerbel, 
        1 EL angeröstete Sesamsamen, 
        Salz, 
        4 Eier
      `,
    instructions: `
        1. Die Eier in einen Topf mit kochendem Wasser geben und 8 Minuten kochen, abgießen und beiseite stellen, damit sie etwas abkühlen können. Dann pellen. 
        2. Die Kartoffeln zusammen mit dem Kümmel und den Lorbeerblättern in einem großen Topf in gesalzenem Wasser gar kochen, abgießen und leicht abkühlen lassen. Die Kartoffeln pellen.
        3. Den Quark in eine Schüssel geben und mit dem Schneebesen glatt rühren. Das Mineralwasser nach und nach zugeben und unter den Quark rühren. Bei Bedarf das Leinöl unterrühren und den Quark mit Salz und Pfeffer würzen. 
        4. Die Zwiebelwürfelchen und die Kräuter untermischen und den Quark nochmal mit Salz und Pfeffer abschmecken Zusammen mit den Pellkartoffeln und den Eiern servieren.
    `,
    image: "/images/pellkartoffeln-mit-quark.jpg",
  },
];

db.prepare(
  `
    CREATE TABLE IF NOT EXISTS recipes (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        slug TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        duration INTEGER NOT NULL,
        ingredients TEXT NOT NULL,
        instructions TEXT NOT NULL,
        image TEXT NOT NULL
    )
`
).run();

async function initDb() {
  const stmt = db.prepare(`
        INSERT INTO recipes VALUES (
        null,
        @slug,
        @name,
        @duration,
        @ingredients,
        @instructions,
        @image
        )
    `);

  for (const recipe of dummyRecipes) {
    stmt.run(recipe);
  }
}

initDb();
