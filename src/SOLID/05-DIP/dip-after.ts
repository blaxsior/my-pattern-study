interface IDBAction<T> {
    findById(id: string, table: string): T | null;
    findMany(table: string): T[];
    update(id: string, values: Record<string, any>, table: string): void;
    insert(values: Record<string, any>, table: string): T;
}

class mysqlDBImpl implements IDBAction<any> {
    findById(id: string, table: string) {
        return mysqlLib.query(`SELECT * FROM ${table} where ID = ${id}`);
    }
    findMany(table: string): any[] {
        return mysqlLib.query(`SELECT * FROM ${table}`);
    }
    update(id: string, values: Record<string, any>, table: string) {
        const target = Object.entries(values);

        mysqlLib.query(`UPDATE ${table} 
        SET ${target.map((k, v) => `${k} = ${v}`).join(',')} 
        WHERE ID=${id}`);
    }
    insert(values: Record<string, any>, table: string) {
        const keylist = Object.keys(values);
        const valueList = Object.values(values);

        return mysqlLib.query(`INSERT INTO ${table} (${keylist.join(',')}) 
        VALUES (${valueList.join(',')})`);
    }
}

class UserRepository2 {
    private static SCHEMA = "USERDB";
    constructor(private db: IDBAction<any>) { }

    save(user: { id?: string, name: string, age: number }) {
        if (user.id != undefined) {
            this.db.update(user.id, { name: user.name, age: user.age }, UserRepository2.SCHEMA);
        } else {
            const {id, name, age} = this.db.insert(user, UserRepository2.SCHEMA);
            user.id = id;
        }
    } // 등등 여러 코드들...
}