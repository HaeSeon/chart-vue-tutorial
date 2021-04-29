<template>
    <div>
        <canvas id="gantChartt"></canvas>
    </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.3/Chart.js"></script>
<script lang="ts">
import Vue from "vue";
import { renderChart } from "./chart";

export default Vue.extend({
    data: () => ({
        labels: ["1번", "헬로우", "오구", "토깽"],
        starts: [30, 150, 300, 400, 500],
        lengths: [500, 100, 200, 200, 100],
    }),
    methods: {},
    mounted() {
        console.log(window);
        const $chart = document.getElementById(
            "gantChartt"
        ) as HTMLCanvasElement;
        renderChart($chart, this.labels, this.starts, this.lengths);
    },
});
</script>
