import { RESPO } from "./respo.js";

const axes = {
    gate: document.body.dataset.gate,
    wloch: document.body.dataset.wloch,
    whirl: document.body.dataset.whirl,
    rom: document.body.dataset.rom,
    continium: document.body.dataset.build,
    uni: "UNI",
    da: "DA",
    welt: "WELT",
    anker: ANKER.signal
};

const respoState = RESPO.check(axes)
    .whirl("active")
    .nc("NC9x9")
    .uni("bridge")
    .da("matrix")
    .welt("core")
    .exo("scan")
    .cosmos("sync");

document.body.dataset.respo = JSON.stringify(respoState);
