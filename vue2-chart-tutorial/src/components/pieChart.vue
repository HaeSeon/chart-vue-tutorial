<template>
    <div>
        <canvas id="pieChart"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Chart, registerables } from "chart.js";

export default Vue.extend({
    data: () => ({
        data: {
            labels: ["Red", "Blue", "Yellow"],
            datasets: [
                {
                    label: "My First dataset",
                    backgroundColor: [
                        "rgb(255, 99, 132)",
                        "rgb(54, 162, 235)",
                        "rgb(255, 205, 86)",
                    ],
                    hoverOffset: 4,
                    data: [300, 50, 100],
                },
            ],
        },
    }),
    methods: {
        renderChart() {
            const { labels, datasets } = this.data;
            const $chart = document.getElementById(
                "pieChart"
            ) as HTMLCanvasElement;
            new Chart($chart, {
                data: { datasets, labels },
                type: "pie",
            });
        },
    },
    mounted() {
        Chart.register(...registerables);
        this.renderChart();
    },
});
</script>
