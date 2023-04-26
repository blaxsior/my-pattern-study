interface IReadDatabase<T> {
    findById(id: string): T|null;
    findMany(): T[]; 
}
interface IWriteDatabase<T> {
    update(id: string, values: Partial<T>): void;
    updateMany(...items: {id: string, values: Partial<T>}[]): void;
    delete(id: string): void;
    deleteMany(...id_list: string[]): void;
}
interface IDatabase2<T> extends IReadDatabase<T>, IWriteDatabase<T> {}

class ReadonlyDB2 implements IReadDatabase<Data> {
    findById(id: string): Data | null {
        return db.somethingReturn();
    }
    findMany(): Data[] {
        return db.somethingReturnMany();
    }
}