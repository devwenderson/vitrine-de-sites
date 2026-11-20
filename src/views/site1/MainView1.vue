<script setup>
import Navbar1 from '@/components/site1/Navbar1.vue'
</script>

<template>
    <Navbar1 />

    <main>
        <RouterView />
    </main>
</template>

<style>
/* Tipografia do restaurante: serif para títulos, sans para leitura. */
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Fraunces:wght@400;600;700&display=swap');
</style>