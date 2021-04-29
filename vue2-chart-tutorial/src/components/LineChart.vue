<template>
    <div>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Chart, registerables } from "chart.js";

export default Vue.extend({
    data: () => ({
        data: {
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: [0, 15, 5, 2, 20, 30, 45],
                },
            ],
        },
    }),
    methods: {
        renderChart() {
            const { labels, datasets } = this.data;
            const $chart = document.getElementById(
                "myChart"
            ) as HTMLCanvasElement;
            new Chart($chart, {
                data: { datasets, labels },
                type: "line",
            });
        },
    },
    mounted() {
        Chart.register(...registerables);
        this.renderChart();
    },
});
</script>
