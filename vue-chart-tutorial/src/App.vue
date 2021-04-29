<template>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
</template>

<script lang="ts">
import Vue, { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { Bar } from "vue-chartjs";

export default {
    name: "App",
    extends: { Bar },
    // components: {
    //     HelloWorld,
    // },
    data: () => {
        return {
            chartdata: {
                labels: ["January", "February"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: "#f87979",
                        data: [40, 20],
                    },
                ],
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
            },
        };
    },
    mounted() {
        // this.renderChart(data, options);
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
