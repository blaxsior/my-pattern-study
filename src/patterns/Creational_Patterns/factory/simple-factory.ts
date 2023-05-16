class SimpleButtonFactory {
    static createButton(btnType: string): Button1|null {
        switch(btnType) {
            case 'black':
                return new BlackButton1();
            case 'white':
                return new WhiteButton1();
            case 'red':
                return new RedButton1();
            default:
                return null;
        }
    }
}

// const redbtn = SimpleButtonFactory.createButton('red');

function main1() {
    // 데이터를 읽어오는 로직이 있다고 가정.
    const btnType: string = 'red';
    let btn: Button1;
    switch(btnType) {
        case 'black':
            btn =  new BlackButton1();
            break;
        case 'white':
            btn = new WhiteButton1();
            break;
        case 'red':
            btn =  new RedButton1();
            break;
        default:
            return null;
    }
    if(btn) {
        btn.click();
    }
}

function main2() {
    const btnType: string = 'red';
    // 구체적인 생성 로직은 팩토리 클래스에게 위임.
    // 팩토리 클래스만 변경되면 된다.
    const btn = SimpleButtonFactory.createButton(btnType);
    if(btn) {
        btn.click();
    }
}

abstract class Button1 {
    click() {
        console.log("default button");
    }
}

class BlackButton1 extends Button1 {
    override click() {
        console.log("black button");
    }
}

class WhiteButton1 extends Button1 {
    override click() {
        console.log("white button");
    }
}

class RedButton1 extends Button1 {
    override click() {
        console.log("red button");
    }
}