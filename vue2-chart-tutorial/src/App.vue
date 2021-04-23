<template>
    <div>
        <line-chart />
        <pie-chart />
    </div>
</template>

<script lang="ts">
import LineChart from "./components/LineChart.vue";
import PieChart from "./components/pieChart.vue";

export default {
    name: "App",
    components: {
        LineChart,
        PieChart,
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
