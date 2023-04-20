export class MazeFactory {
    private static registy = new Map<string, MazeFactory>();
    private static instance: MazeFactory;

    protected constructor() { }

    static register(name: string, singleton: MazeFactory) {
        this.registy.set(name, singleton);
    }

    static getInstance() {
        if (this.instance == undefined) {
            this.instance = this.registy.get(process.env.MAZE_TYPE ?? "")
                ?? new MazeFactory();
        }
        return this.instance;
    }

    public hello() {
        console.log("I'm MazeFactory!");
    }
}

export class EnchantedMazeFactory extends MazeFactory {
    private static _inner = new EnchantedMazeFactory();
    private constructor() { 
        super();
        MazeFactory.register("enchanted", this);
    }

    
    public override hello() {
        console.log("I'm EnchantedMazeFactory!");
    }
}

export class BombedMazeFactory extends MazeFactory {
    private static _inner = new BombedMazeFactory();
    private constructor() { 
        super(); 
        MazeFactory.register("bombed", this);
    }

    public override hello() {
        console.log("I'm BombedMazeFactory!");
    }
}