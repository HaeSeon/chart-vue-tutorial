<template>
    <div>
        <canvas id="gantChartt"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { renderChart } from "./chart";
import moment from "moment";

export default Vue.extend({
    data: () => ({
        labels: [
            "L2프로젝트_TWKO",
            "L2프로젝트_JAKO",
            "L2프로젝트_ENTW",
            "L2프로젝트_ENKO",
        ],
        starts: [
            moment("03-10-2021", "MM-DD-YYYY"),
            moment("02-05-2021", "MM-DD-YYYY"),
            moment("02-07-2021", "MM-DD-YYYY"),
            moment("03-19-2021", "MM-DD-YYYY"),
        ],
        // starts: [20, 100, 40, 200],
        lengths: [3990503000, 1330503000, 2030503000, 2030503000],
    }),
    methods: {},
    mounted() {
        const $chart = document.getElementById(
            "gantChartt"
        ) as HTMLCanvasElement;
        renderChart($chart, this.labels, this.starts, this.lengths);
    },
});
</script>
