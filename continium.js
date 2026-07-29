export const RESPO = {

    mode: "IDLE",
    stamp: performance.now(),
    signal: "dim",
    prefetch: false,

    // LOL(rdy)+ Zustand
    lol(){
        this.mode = "LOL(rdy)+";
        this.signal = "bright";
        this.prefetch = true;
        this.stamp = performance.now();
        return this;
    },

    // Stabilisations-Check
    check(axes){
        const ready =
            axes.gate &&
            axes.wloch &&
            axes.whirl &&
            axes.rom &&
            axes.continium &&
            axes.uni &&
            axes.da &&
            axes.welt &&
            axes.anker;

        if(ready){
            return this.lol();
        }

        this.mode = "WAIT";
        this.prefetch = false;
        this.signal = "dim";
        return this;
    },

    // WHIRL-Modus
    whirl(mode){
        this.whirlMode = mode;
        return this;
    },

    // NC-Modus
    nc(matrix){
        this.ncMatrix = matrix;
        return this;
    },

    // UNI-Modus
    uni(mode){
        this.uniMode = mode;
        return this;
    },

    // DA-Modus
    da(mode){
        this.daMode = mode;
        return this;
    },

    // WELT-Modus
    welt(mode){
        this.weltMode = mode;
        return this;
    },

    // EXO-Modus
    exo(signal){
        this.exoSignal = signal;
        return this;
    },

    // COSMOS-Modus
    cosmos(state){
        this.cosmosState = state;
        return this;
    }
};
