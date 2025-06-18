<template>
  <section class="w-10/12 m-auto py-6">
    <h1 class="text-2xl font-semibold mb-2">All Persons</h1>
    <p class="mb-6">All the persons already registered in our system.</p>
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <StudentCard v-for="person in persons" :key="person.id" :person="person" />
    </div>
  </section>
</template>

<script setup>
import StudentCard from "@/components/StudentCard.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const persons = ref([]);

onMounted(async () => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    persons.value = res.data;
  } catch (e) {
    console.error("Failed to fetch persons:", e);
  }
});
</script>
