export class AudioManager {
    private static instance :AudioManager|null;
    private audioMap: Map<string,string>;
    // 대략 이렇게 동작한다고 가정

    private constructor() {
        this.audioMap = new Map();
    }

    static getInstance(): AudioManager {
        if(this.instance == null) {
            this.instance = new AudioManager();
        }
        return this.instance;
    }

    public play(sname: string) {
        const buffer = this.audioMap.get(sname);
        if(buffer != undefined) {
            console.log(`song: ${sname}, buffer: ${buffer}`);
        } else {
            console.log(`There is no song named ${sname}`);
        }
    }

    public addAudio(sname: string, buffer: string) {
        this.audioMap.set(sname, buffer);
    }

    public removeAudio(sname: string) {
        this.audioMap.delete(sname);
    }
}