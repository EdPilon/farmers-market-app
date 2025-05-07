<template>
  <header class="app-header bg-green-500 text-white py-4 px-6">
    <div class="container mx-auto flex justify-between items-center">
      <h1 class="text-xl font-bold">
        <router-link to="/" class="hover:underline">Farmers Market</router-link>
      </h1>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/vendors" class="hover:underline">Vendors</router-link></li>
          <li><router-link to="/recipes" class="hover:underline">Recipes</router-link></li>
          <li><router-link to="/account" class="hover:underline">My Account</router-link></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
