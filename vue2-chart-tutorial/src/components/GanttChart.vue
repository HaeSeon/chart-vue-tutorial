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
        // starts: [
        //     moment("02-01-2021", "MM-DD-YYYY"),
        //     moment("02-05-2021", "MM-DD-YYYY"),
        //     moment("02-07-2021", "MM-DD-YYYY"),
        //     moment("02-19-2021", "MM-DD-YYYY"),
        // ],
        starts: [20, 100, 40, 200],
        lengths: [500, 100, 200, 200],
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
