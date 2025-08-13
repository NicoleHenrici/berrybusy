import sql from 'better-sqlite3';

const db = new sql('recipes.db');

export function getRecipes() {
    const stmt = db.prepare('SELECT * FROM recipes');
    return stmt.all();
}