<template>
  <header class="app-header bg-success text-white py-3 fixed-top">
    <div class="container d-flex justify-content-between align-items-center">
      <h1 class="h3 mb-0">
        <router-link to="/" class="text-white text-decoration-none">Farmers Market</router-link>
      </h1>
      <nav>
        <ul class="nav">
          <li class="nav-item">
            <router-link to="/vendors" class="nav-link text-white">Vendors</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/account" class="nav-link text-white">My Account</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  width: 100%; /* Full width */
  position: sticky; /* Sticks to the top */
  top: 0; /* Ensures it stays at the top */
  z-index: 1030; /* Ensures it stays above other elements */
}
.nav-link:hover {
  color: #d4edda; /* Light green hover effect */
}
</style>