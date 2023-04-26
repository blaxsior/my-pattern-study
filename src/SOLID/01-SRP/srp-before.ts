class Person {
    private id: string;
    private name: string;
    private age: number;
    // 이하 주소 등 많은 개인 정보들

    private totalLoan: number;
    private loanInfo: {date: Date, description: string, amount: number}[];
    // 이하 많은 서비스 관련 정보들

    constructor(name:string, age: number, id?: string) {
        this.name = name;
        this.age = age;
        this.id = id??"";
        this.totalLoan = 0;
        this.loanInfo = [];
    }
    /* 유저 관리 관련 함수들 */
    public printUserInfo() {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
    }

    /* 대출 서비스 관련 함수들 */
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

    public json(target: any) {
        return JSON.stringify(target);
    }
    public csv(target: any): string {
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

// type AvailableFormat = 'json'|'csv';