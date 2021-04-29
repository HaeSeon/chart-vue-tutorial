<template>
    <div>
        <ggant-chart />
        <line-chart />
        <pie-chart />
        <bar-chart />
    </div>
</template>

<script lang="ts">
import BarChart from "./components/BarChart.vue";
import GgantChart from "./components/GanttChart.vue";
import LineChart from "./components/LineChart.vue";
import PieChart from "./components/PieChart.vue";

export default {
    name: "App",
    components: {
        LineChart,
        PieChart,
        BarChart,
        GgantChart,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
