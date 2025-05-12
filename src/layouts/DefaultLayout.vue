<template>
  <div class="default-layout bg-eggshell">
    <AppHeader />
    <main class="container mx-auto py-6">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
</script>
