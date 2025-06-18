<template>
    <section class="w-10/12 m-auto">
        <h1 class="text-2xl font-semibold">All persons</h1>
        <p>All the Person lready reigster in our system.</p>
        <div class="grid grid-col-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            <UserCard v-for="user in users" :key="user.id" :user="user" />
        </div>
    </section>
</template>

<script setup>
// import components
import StudentCard from "./StudentCard.vue";

defineProps(["person"]);
// plugin import
import axios from "axios";
import { onMounted, ref } from "vue";


const persons = ref([]);

onMounted(async () => {
  try {
    await axios
      .get("https://jsonplaceholder.typicode.com/persons")
      .then((res) => {
        persons.value = res.data;
      });
  } catch (e) {
    console.log("Axios fetching data error...");
  }
});

</script>