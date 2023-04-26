class mysqlLib {
    static query(query: string): any {
        return "";// do something
    }
    static execute(query: string): any {
        return "";// do something
    }
}

class UserRepository {
    save(user: {id?: string, name: string, age: number}) {
        if(user.id != undefined) {
            mysqlLib.query(`UPDATE USERDB 
            SET
            name = ${user.name}, 
            age = ${user.age} 
            WHERE ID = ${user.id}`);
        } else {
            const {id, name, age} = mysqlLib.query(`INSERT INTO USERDB (name, age) 
            VALUES (${user.name}, ${user.age})`);
            user.id = id;
        }
    } // 등등 여러 코드들...
}