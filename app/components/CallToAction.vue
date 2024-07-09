<script setup lang="ts">
const callToActions = [
  {
    img: 'http://localhost:3000/imgz/sq3.jpeg?',
    action: 'Monitor Health',
    to: '/monitor',
  },
  {
    img: 'http://localhost:3000/imgz/sq2.jpeg?',
    action: 'Contact Doctor',
    to: '/contact',
  },
  {
    img: 'http://localhost:3000/imgz/sq1.jpeg?',
    action: 'Travel Assistance',
    to: '/travel',
  },
]
</script>

<template>
  <section class="container mx-auto px-4 py-12">
    <div>
      <h6 class="text-primary-600 dark:text-primary-200 text-center uppercase">
        Get Involved
      </h6>
      <h3 class="capitalize mt-3 text-center">
        Enhance Elder Care with Simple Actions
      </h3>
      <p class="mt-4 text-center">
        Discover how small actions can make a big difference in elder care.
      </p>
    </div>
    <div class="-mx-4 flex flex-wrap justify-center mt-12">
      <CallToActionCard v-for="(callToAction, index) in callToActions" :key="index" :action="callToAction.action"
        :img="callToAction.img" :to="callToAction.to" />
    </div>
  </section>
</template>
<style scoped></style>
