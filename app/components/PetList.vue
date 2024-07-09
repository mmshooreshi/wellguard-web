<script setup lang="ts">
const { elderCareFeatures: features } = await usePets()
</script>

<template>
  <div class="bg-primary-100 dark:bg-primary-700">
    <div class="pb-24 pt-12">
      <div class="container mx-auto px-4 relative">
        <div class="-mx-4 flex flex-col flex-wrap items-center justify-center mb-4">
          <div class="px-4 text-center w-full">
            <h6 class="text-primary-100 dark:text-primary-700 uppercase">
              Our Features
            </h6>
            <h3 class="capitalize">Innovative Solutions for Better Elder Care</h3>
            <p class="mb-4">
              Discover how our AI-driven technology enhances the quality of elder care, making it easier and more
              efficient for families and caregivers.
            </p>
          </div>
          <div class="px-4 text-center w-full">
            <BaseButton size="xl" to="/features" color="secondary">
              <span>Explore All ></span>
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap -mx-4 justify-center">
          <FeatureCard v-for="(feature, index) in features" :key="index" v-bind="feature" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
