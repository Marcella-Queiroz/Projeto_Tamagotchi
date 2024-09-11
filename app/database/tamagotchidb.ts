import { SQLiteDatabase } from 'expo-sqlite';

export type Pet = {
    id: number;
    name: string;
    hunger: number;
    sleep: number;
    happy: number;
    status: number;
    tamagochi_id: string;
    lastUpdated: number;
};

export function useTamagochiDatabase(database: SQLiteDatabase) {

    async function createPet(data: Omit<Pet, 'id' | 'hunger' | 'sleep' | 'happy' | 'status' | 'lastUpdated'>) {
        const currentTime = Math.floor(Date.now() / 3600000);
        const statement = await database.prepareAsync(`
            INSERT INTO PETS (name, hunger, sleep, happy, status, tamagochi_id, lastUpdated) 
            VALUES ($name, 100, 100, 100, 300, $tamagochi_id, $lastUpdated);    
        `);
        try {
            const result = await statement.executeAsync({
                $name: data.name,
                $tamagochi_id: data.tamagochi_id,
                $lastUpdated: currentTime, 
            });
            const lastInsertId = Number(result.lastInsertRowId);
            if (!isNaN(lastInsertId)) {
                return lastInsertId.toLocaleString();
            } else {
                throw new Error("ID do último registro inserido não é um número válido.");
            }
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function findAllPets() {
        try {
            const query = `SELECT * FROM pets;`;
            return await database.getAllAsync<Pet>(query);
        } catch (error) {
            throw error;
        }
    }

    async function findPetById(id: number) {
        try {
            const query = `SELECT * FROM pets WHERE id = ?;`;
            return await database.getFirstAsync<Pet>(query, id);
        } catch (error) {
            throw error;
        }
    }

    async function deletePetById(id: number) {
        let statement;
        try {
            statement = await database.prepareAsync(`
                DELETE FROM pets WHERE id = $id;
            `);
            await statement.executeAsync({ $id: id });
        } catch (error) {
            throw error;
        } finally {
            if (statement) {
                await statement.finalizeAsync();
            }
        }
    }

    async function updateHunger(id: number, hunger: number) {
        const currentTime = Math.floor(Date.now() / 3600000);
        const statement = await database.prepareAsync(`
            UPDATE pets SET hunger = $hunger, lastUpdated = $lastUpdated WHERE id = $id;
        `);
        try {
            await statement.executeAsync({
                $hunger: hunger,
                $lastUpdated: currentTime,
                $id: id
            });
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function updateHappy(id: number, happy: number) {
        const currentTime = Math.floor(Date.now() / 3600000);
        const statement = await database.prepareAsync(`
            UPDATE pets SET happy = $happy, lastUpdated = $lastUpdated WHERE id = $id;
        `);
        try {
            await statement.executeAsync({
                $happy: happy,
                $lastUpdated: currentTime,
                $id: id
            });
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    async function updateSleep(id: number, sleep: number) {
        const currentTime = Math.floor(Date.now() / 3600000);
        const statement = await database.prepareAsync(`
            UPDATE pets SET sleep = $sleep, lastUpdated = $lastUpdated WHERE id = $id;
        `);
        try {
            await statement.executeAsync({
                $sleep: sleep,
                $lastUpdated: currentTime,
                $id: id
            });
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }
    
    async function updateAllPetAttributes(id: number, hunger: number, sleep: number, happy: number) {
        const currentTime = Math.floor(Date.now() / 3600000);
        const statement = await database.prepareAsync(`
            UPDATE pets 
            SET hunger = $hunger, sleep = $sleep, happy = $happy, lastUpdated = $lastUpdated
            WHERE id = $id;
        `);
        try {
            await statement.executeAsync({
                $hunger: hunger,
                $sleep: sleep,
                $happy: happy,
                $lastUpdated: currentTime,
                $id: id
            });
        } catch (error) {
            throw error;
        } finally {
            await statement.finalizeAsync();
        }
    }

    return { createPet, findAllPets, findPetById, deletePetById, updateHunger, updateHappy, updateSleep, updateAllPetAttributes };
}
