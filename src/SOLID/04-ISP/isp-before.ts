interface IDatabase<T> {
    findById(id: string): T|null;
    findMany(): T[]; 

    update(id: string, values: Partial<T>): void;
    updateMany(...items: {id: string, values: Partial<T>}[]): void;
    delete(id: string): void;
    deleteMany(...id_list: string[]): void;
}

interface Data {}

class db {
    static somethingReturn(): Data {
        return {} as Data;
    }
    static somethingReturnMany(): Data[] {
        return [{},{}];
    }
    static somethingDo() {

    }
}

class ReadonlyDB implements IDatabase<Data> {
    findById(id: string): Data | null {
        return db.somethingReturn();
    }
    findMany(): Data[] {
        return db.somethingReturnMany();
    }
    
    update(id: string, values: Partial<Data>): void {
        throw new Error("Method not implemented.");
    }
    updateMany(...items: { id: string; values: Partial<Data>; }[]): void {
        throw new Error("Method not implemented.");
    }
    delete(id: string): void {
        throw new Error("Method not implemented.");
    }
    deleteMany(...id_list: string[]): void {
        throw new Error("Method not implemented.");
    }
    
}