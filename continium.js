export const ANKER = {
    core: "ANKER.core",
    prefetch: "ANKER.prefetch",
    signal: "ANKER.signal",
    axes: {
        iq: "IQ",
        qi: "QI",
        evo: "EVO",
        upd: "UPD",
        upg: "UPG",
        bios: "BIOS",
        calc: "CALC"
    }
};
document.body.dataset.anker = JSON.stringify(ANKER);
if(WHIRL && ROM_BOOT && WLOCH && GATE){
    ANKER.signal = "ON";
}
export function PREFETCH_FINAL(){
    if(ANKER.signal === "ON"){
        return "prefetch.final.ready";
    }
    return "prefetch.blocked";
}
import { RESPO } from "./respo.js";

const axes = {
    gate: document.body.dataset.gate,
    wloch: document.body.dataset.wloch,
    whirl: document.body.dataset.whirl,
    rom: document.body.dataset.rom,
    continium: document.body.dataset.build,
    uni: "UNI",
    da: "DA",
    welt: "WELT"
};

const respoState = RESPO.check(axes);
document.body.dataset.respo = JSON.stringify(respoState);
