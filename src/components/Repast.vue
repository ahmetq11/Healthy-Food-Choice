<script setup>
import Food from './Food.vue';
const props = defineProps({
  repast:String
})
</script>
<template>
 
    <div class="flex items-baseline">
      <h4 class="text-xl text-gray-700">{{repast}}</h4>
      <span class="text-gray-600 ml-2">400 kalori</span>
    </div>
    <!-- foods -->
    <div class="mt-5">
      <!-- food -->
      <Food></Food>
    </div>
  
</template>

<style></style>
