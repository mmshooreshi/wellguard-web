<script setup>
definePageMeta({
  title: 'Our Features',
  description: 'Discover Our AI-Driven Elder Care Solutions',
  navOrder: 2,
  type: 'primary',
  icon: 'i-mdi-star',
})
</script>
<template>
  <div class="py-12 bg-primary-100 dark:bg-primary-700 text-primary-900 dark:text-primary-100">
    <div class="flex flex-col items-center">
      <div class="px-4 text-center w-full lg:w-7/12">
        <h6 class="uppercase">Our Features</h6>
        <h3 class="capitalize">Innovative Solutions for Better Elder Care</h3>
        <p class="mb-4">
          Explore how our AI technology enhances the quality of elder care, making it more efficient and compassionate.
        </p>
      </div>
    </div>
    <div class="-mt-4 mx-auto pt-8 px-4 relative">
      <div class="-mx-4 flex flex-wrap items-center justify-center mb-4">
        <FeatureList />
      </div>
    </div>
  </div>
</template>
