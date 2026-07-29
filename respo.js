export const RESPO = {

    mode: "IDLE",
    stamp: performance.now(),
    signal: "dim",
    prefetch: false,

    lol(){
        this.mode = "LOL(rdy)+";
        this.signal = "bright";
        this.prefetch = true;
        this.stamp = performance.now();
        return this;
    },

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

    whirl(mode){ this.whirlMode = mode; return this; },
    nc(matrix){ this.ncMatrix = matrix; return this; },
    uni(mode){ this.uniMode = mode; return this; },
    da(mode){ this.daMode = mode; return this; },
    welt(mode){ this.weltMode = mode; return this; },
    exo(signal){ this.exoSignal = signal; return this; },
    cosmos(state){ this.cosmosState = state; return this; }
};
