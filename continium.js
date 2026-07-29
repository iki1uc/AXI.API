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
