<script setup>
import Repast from "./Repast.vue";
const props = defineProps({
  day:String
})
const repasts = ["Sabah", "Öğle", "Akşam"]
</script>

<template>
  <ul class="border-l-4 border-teal-500 pl-4 py-4 xl:pl-8">
    <h3 class="text-2xl text-teal-500 font-medium leading-none">{{day}}</h3>
    <div class="mt-4 space-y-10 xl:flex xl:space-y-0 xl:space-x-16">
       <li v-for="repast in repasts" :key="repast" class="xl:w-1/3">
          <Repast :repast="repast"></Repast>
       </li>
      <!-- breakfast -->
     

      <!-- lunch -->
      <!-- <Repast></Repast> -->
      <!-- dinner -->
      <!-- <Repast></Repast> -->
    </div>
  </ul>
</template>

<style></style>
