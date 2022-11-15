<template>
  <div>
    <main-bg></main-bg>
    <apt-list></apt-list>
    <review-list></review-list>
  </div>
  
</template>

<script>
import MainBg from './MainBg.vue'
import AptList from './AptList.vue'
import ReviewList from './ReviewList.vue'
export default {
  name: "MainPage",
  components: { MainBg, AptList, ReviewList},
  
}
</script>

<style>

</style>