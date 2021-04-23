<template>
    <div>
        <canvas id="barChart"></canvas>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Chart, registerables } from "chart.js";

export default Vue.extend({
    data: () => ({
        data: {
            labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUNE", "JULY"],
            datasets: [
                {
                    label: "My First dataset",
                    data: [65, 59, 80, 81, 56, 55, 40],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 205, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(201, 203, 207, 0.2)",
                    ],
                    borderColor: [
                        "rgb(255, 99, 132)",
                        "rgb(255, 159, 64)",
                        "rgb(255, 205, 86)",
                        "rgb(75, 192, 192)",
                        "rgb(54, 162, 235)",
                        "rgb(153, 102, 255)",
                        "rgb(201, 203, 207)",
                    ],
                    borderWidth: 1,
                },
            ],
        },
    }),
    methods: {
        renderChart() {
            const { labels, datasets } = this.data;
            const $chart = document.getElementById(
                "barChart"
            ) as HTMLCanvasElement;
            new Chart($chart, {
                data: { datasets, labels },
                type: "bar",
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
    },
    mounted() {
        Chart.register(...registerables);
        this.renderChart();
    },
});
</script>
