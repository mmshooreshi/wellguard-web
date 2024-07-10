<script setup lang="ts">
//...
</script>

<template>
  <footer class="pt-12">
    <div class="container mx-auto px-8">
      <div class="flex flex-wrap relative">
        <div
          class="-mx-4 flex flex-col flex-wrap items-center pl-4 pr-8 py-4 md:flex-col md:flex-nowrap -mt-4 lg:items-start lg:w-1/3">
          <NuxtLink class="-ml-6" to="/">
            <div class="font-serif inline-flex items-center text-3xl">
              <TheLogoWellGuard />
              <!-- <h6 class="font-serif inline-flex items-center text-3xl">
                wellguard
              </h6> -->
            </div>
          </NuxtLink>
          <p class="mt-2 text-center w-full lg:text-left">
            Enhancing elder care with innovative AI solutions. Empowering families to provide the best care for their
            loved ones.
          </p>
          <div class="inline-flex mt-6 space-x-3">
            <div class="flex flex-wrap space-x-4">
              <NuxtLink href="https://www.facebook.com/wellguard" aria-label="facebook" external target="_blank">
                <BaseIcon name="i-logos-facebook" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://twitter.com/wellguard" aria-label="twitter" external target="_blank">
                <BaseIcon name="i-logos-twitter" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://discord.gg/wellguard" aria-label="discord" external target="_blank">
                <BaseIcon name="i-logos-discord-icon" class="text-2xl" width="28px" />
              </NuxtLink>
              <NuxtLink href="https://www.youtube.com/@wellguard" aria-label="youtube" external target="_blank">
                <BaseIcon name="i-logos-youtube-icon" class="text-2xl" width="28px" />
              </NuxtLink>
            </div>
          </div>
          <div class="my-6 text-center">
            <NuxtLink to="/">+1 234 567-890</NuxtLink>
            <br />
            <NuxtLink to="/">hello@wellguard.com</NuxtLink>
          </div>
        </div>
        <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            General
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/faq" class="hover:text-primary-600 dark:text-primary-200">FAQ</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/news" class="hover:text-primary-600 dark:text-primary-200">News</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/careers" class="hover:text-primary-600 dark:text-primary-200">Careers</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/contact" class="hover:text-primary-600 dark:text-primary-200">Contact Us</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full sm:w-1/2 md:flex-1 md:w-1/3 lg:items-start">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Links
          </h2>
          <ul class="text-center lg:mt-2 lg:text-left">
            <li class="mb-4">
              <NuxtLink to="/features" class="hover:text-primary-600 dark:text-primary-200">Features</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/support" class="hover:text-primary-600 dark:text-primary-200">Support</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/articles" class="hover:text-primary-600 dark:text-primary-200">Articles</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/blog" class="hover:text-primary-600 dark:text-primary-200">Blog</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/volunteer" class="hover:text-primary-600 dark:text-primary-200">Volunteer</NuxtLink>
            </li>
            <li class="mb-4">
              <NuxtLink to="/mission" class="hover:text-primary-600 dark:text-primary-200">Our Mission</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="flex flex-col items-center p-4 w-full md:w-1/3">
          <h2 class="font-bold text-primary-600 dark:text-primary-200 text-xl">
            Gallery
          </h2>
          <div class="-mx-2 flex flex-wrap items-center lg:mt-2">
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="https://wellguard.netlify.app/imgz/bottom/bot1.png" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="https://wellguard.netlify.app/imgz/bottom/bot2.png" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="https://wellguard.netlify.app/imgz/bottom/bot3.png" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="https://wellguard.netlify.app/imgz/bottom/bot4.png" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="https://wellguard.netlify.app/imgz/bottom/bot5.png" class="w-full" />
              </div>
            </div>
            <div class="p-2 w-1/2 sm:w-4/12">
              <div class="block hover:opacity-75 overflow-hidden rounded-xl">
                <NuxtImg src="https://wellguard.netlify.app/imgz/bottom/bot6.png" class="w-full" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col sm:w-full md:items-end">
          <hr class="mb-4 opacity-25" />
          <p class="py-1 text-sm sm:text-center">
            &copy; 2002 - 2021. All Rights Reserved - wellguard
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
