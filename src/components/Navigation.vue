<template>
  <nav class="h-16 flex shadow-md">
        <div id="nav-item" class="flex justify-between items-center w-10/11 m-auto gap-12">
            <div class="flex gap-12">
                 <navigation-item 
                  v-for="item in navItems" 
                  :key="item.label" 
                  :item="item"
                  :to="item.path"
                  >
                </navigation-item>
            </div>
        
        </div>
    </nav>
</template>

<script setup>
import NavigationItem from "@/components/NavigationItem.vue";

const navItems = [
  { path: "/", label: "Books", icon: "menu_book" },
  { path: "/library", label: "Library", icon: "local_library" }
];
</script>
