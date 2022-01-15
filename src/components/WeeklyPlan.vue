<script setup>
import DailyPlan from "./DailyPlan.vue";
const days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
</script>

<template>
  <h3 class="text-2xl font-medium text-gray-700">Haftalık Menü</h3>
  <!-- for each day -->
  <div v-for="i in 7" :key="i" class="mt-8 space-y-10">
    <DailyPlan :day="days[i-1]"></DailyPlan>
  </div>
</template>

<style></style>
