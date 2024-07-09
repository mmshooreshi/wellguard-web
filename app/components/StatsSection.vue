<script setup lang="ts">
// const props = defineProps({
// 	name: {
// 		type: String,
// 		default: 'StatsSection',
// 	},
// })
</script>
<template>
  <section>
    <div class="container mx-auto px-4 py-12 relative">
      <div class="-mx-4 flex flex-wrap items-center">
        <div class="p-4 w-full lg:w-2/5">
          <NuxtImg src="https://wellguard.netlify.app/imgz/la2.jpeg?" class="mb-6 rounded-3xl w-full" alt="Impact" />
        </div>
        <div class="lg:w-6/12 mx-auto p-4 w-full">
          <h6 class="font-bold mb-2 text-primary-600 dark:text-primary-200 uppercase">
            Our Achievements
          </h6>
          <h3 class="capitalize mb-6">The Impact We Create</h3>
          <p>
            Our AI-driven solutions have significantly enhanced the quality of elder care, making it more efficient and
            compassionate.
          </p>
          <div class="-mx-4 flex flex-wrap items-center">
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">1500+</h2>
              <p>Elders Monitored</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">1200+</h2>
              <p>Families Assisted</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">50+</h2>
              <p>Healthcare Providers Connected</p>
            </div>
            <div class="px-4 py-6 w-1/2">
              <h2 class="mb-2">10K+</h2>
              <p>Health Alerts Managed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
