import { OurDvrController } from "./index.Cont.js";
import { AComDvrController } from "./legacyCont/ACom.js";
import { BComDvrController } from "./legacyCont/BCom.js";
import { CComDvrController } from "./legacyCont/CCom.js";

function record(type: string, time: Date) {
    switch (type) {
        case "OUR":
            const c1 = new OurDvrController();
            c1.playBack(time);
            break;
        case "ACom":
            const c2 = new AComDvrController();
            c2.beginPlayBack(time);
            break;
        case "BCom":
            const c3 = new BComDvrController();
            c3.startPlayBack(time.getTime());
            break;
        case "CCom":
            const c4 = new CComDvrController();
            const tf = new Intl.DateTimeFormat('en-US', {
                timeStyle: "long",
            });
            const df = new Intl.DateTimeFormat('en-US', {
                dateStyle: "long"
            });
            c4.playBack(df.format(time), tf.format(time));
            break;
        // 여기서 벤더가 계속 추가되면? Record 말고 start, stop도 바꿔야하면?
        // 이렇게 짜는건 미친짓이다.
    }
}

