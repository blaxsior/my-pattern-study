// person.ts
class Person2 {
    private id: string;
    private name: string;
    private age: number;
    // 이하 주소 등 많은 개인 정보들

    constructor(name:string, age: number, id?: string) {
        this.name = name;
        this.age = age;
        this.id = id??"";
    }

    public printUserInfo() {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
    }
}
// service/loan.service.ts
class LoanService {
    private pid: string; 
    private totalLoan: number;
    private loanInfo: {date: Date, description: string, amount: number}[];

    constructor(pid: string) {
        this.pid = pid;
        this.totalLoan = 0;
        this.loanInfo = [];
    }


    public addLoan(date: Date, description: string, amount: number) {
        this.loanInfo.push({date,description,amount});
    }

    public loadLoanInfo() {
        // load loan data from db by person id;
    }

    public printLoanInfo() {
        console.log(`total amount of loan: ${this.totalLoan}`);
        console.log(`Date | Desc | amount`);
        for(const lf of this.loanInfo) {
            console.log(`${lf.date} | ${lf.description} | ${lf.amount}`);
        }
    }
}
// util/formatter.ts
class Formatter {
    public static json(target: any) {
        return JSON.stringify(target);
    }
    public static csv(target: any): string {
        switch(typeof target) {
            case 'object':
                if(target != null) {
                    const values = Object.values(target);
                    return values.join(', ');
                }
            case "undefined":
                return '';
            default:
                return (target).toString();
        }
    }
}