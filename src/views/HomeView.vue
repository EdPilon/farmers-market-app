<template>
  <div class="home-view container mx-auto py-6 text-center">
    <h1 class="text-4xl font-bold mb-6">Welcome to Farmers Market</h1>
    <p class="text-lg text-gray-600 mb-6">
      Discover fresh produce, browse vendors, and explore delicious recipes.
    </p>
    <router-link 
      to="/vendors" 
      class="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-medium"
    >
      Browse Vendors
    </router-link>
  </div>
</template>
