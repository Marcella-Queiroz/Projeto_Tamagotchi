import { SQLiteDatabase } from "expo-sqlite";

export async function initDatabase (database: SQLiteDatabase) {
    try {
        await database.execAsync(`
            CREATE TABLE IF NOT EXISTS PETS (
            id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            hunger INTEGER NOT NULL DEFAULT 100,
            happy INTEGER NOT NULL DEFAULT 100,
            sleep INTEGER NOT NULL DEFAULT 100,
            status INTEGER,
            tamagochi_id TEXT NOT NULL,
            lastUpdated INTEGER NOT NULL DEFAULT (strftime('%s', 'now'))
        );
        `)

        await database.execAsync(`
            CREATE TRIGGER IF NOT EXISTS update_data
            AFTER UPDATE OF hunger, happy, sleep ON PETS
            FOR EACH ROW
            BEGIN
            UPDATE PETS
            SET status = NEW.hunger + NEW.happy + NEW.sleep
            WHERE id = NEW.id;
            END;
        `);

        console.log("Banco de dados iniciado!")//Mensagem de inicialização
    } catch (error) {
            
    
    console.error("Erro no Banco de Dados!", error);//Erro
    }
}