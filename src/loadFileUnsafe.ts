import * as fs from "fs";

export function loadFileUnsafe(path:string): void  {
    fs.readFileSync(path)
}
