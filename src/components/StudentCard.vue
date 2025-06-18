<template>
  <div class="border border-gray-200 rounded-lg p-6">
    <div>
      <h1 class="text-lg font-semibold">{{ person.name }}</h1>
      <p class="text-sm">{{ person.email }}</p>
    </div>
    <div class="mt-4">
      <p class="flex items-center gap-2">
        <span class="material-symbols-outlined"> location_on </span>
        <span class="font-semibold">Address</span>
      </p>
      <p class="text-sm"> St {{person.address.street}}, {{person.address.suite}} , {{person.address.city}}</p>
    </div>
  </div>
</template>

<script setup>
defineProps(["person"])
</script>