<template>
  <div class="container mx-auto px-4 py-12 relative">
    <div class="-mx-4 flex flex-wrap items-center">
      <div class="p-4 w-full lg:w-6/12">
        <NuxtImg src="http://localhost:3000/imgz/la3.jpeg?" class="rounded-3xl w-full" alt="Our Mission" />
      </div>
      <div class="mx-auto p-4 w-full lg:w-5/12">
        <h6 class="mb-2 text-primary-600 dark:text-primary-200 uppercase">
          Our Mission
        </h6>
        <h3 class="capitalize mb-2">
          Revolutionizing Elder Care with AI
        </h3>
        <p class="mb-6">
          Our mission is to empower families and caregivers with AI-driven solutions, making elder care more efficient
          and compassionate.
        </p>
        <BaseButton size="xl" to="/about"> Learn More </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
