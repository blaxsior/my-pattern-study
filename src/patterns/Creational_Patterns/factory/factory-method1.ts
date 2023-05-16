export abstract class Document { // 추상적 레벨의 문서
    protected metaData: string;
    constructor() {
        this.metaData = "";
    }
    get Metadata() {
        return this.metaData;
    }

    set Metadata(data: string) {
        this.metaData = data;
    }

    abstract open():void;
    abstract close():void;
    save() {
        console.log("save");
    }
    revert() {
        console.log("revert");
    }
}

export abstract class Application { // 추상적 레벨의 어플리케이션
    protected docs: Document[];
    constructor() {
        this.docs = [];
    }
    abstract createDocument(): Document;
    newDocument() {
        let doc = this.createDocument();
        doc.open();
    }

    openDocument() {
        // do something
    }

    get Documents(): readonly Document[] {
        return this.docs;
    }
}

class TextDocument extends Document { // 구체적 레벨의 문서
    override open(): void {
        console.log("open text document");
    }
    override close(): void {
        console.log("close text document");
    }
}

export class TextApplication extends Application { // 구체적 레벨의 어플리케이션
    override createDocument(): Document {
        return new TextDocument;
    }
}

export class DefaultApplication<T extends {new(...args: any[]): Document}> extends Application {
    constructor(protected ctor: T) {
        super();
    }
    override createDocument(): Document {
        return new this.ctor();
    }
}
const myapp = new DefaultApplication(TextDocument);

function logMetaOfDoc(app: Application) {
    for(const doc of app.Documents) {
        console.log(doc.Metadata);
    }
}