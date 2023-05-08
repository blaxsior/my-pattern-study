// Chain Of Responsibility



interface StringChecker {
    check(str: string): boolean;
    setNext(next: StringChecker): void;
}

class UpperCaseChecker implements StringChecker {
    private next?: StringChecker;

    check(str: string) {
        for(let i = 0; i < str.length; i++) {
            if(str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122)
            {
                console.log("소문자 감지");
                return false;
            }
        }
        return this.next? this.next.check(str) : true;
    }

    setNext(next:StringChecker) {
        this.next = next;   
    }
}

class AlnumChecker implements StringChecker {
    private next?: StringChecker;
    
    check(str: string) {
        for(let i = 0; i < str.length; i++) {
            const code = str.charCodeAt(i);
            if (!(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)) { // lower alpha (a-z)
              return false;
            } // https://stackoverflow.com/questions/4434076/best-way-to-alphanumeric-check-in-javascript
        }
        return this.next? this.next.check(str) : true;
    }

    setNext(next:StringChecker) {
        this.next = next;   
    }
}