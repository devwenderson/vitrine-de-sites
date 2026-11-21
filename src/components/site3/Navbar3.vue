<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="nav">
    <div class="nav__inner">
      <RouterLink class="brand" to="/site3">
        <span class="brand__mark" aria-hidden="true">G</span>
        <span>Gelato da Praça</span>
      </RouterLink>

      <nav class="nav__links" aria-label="Navegação da sorveteria">
        <RouterLink to="/site3">Início</RouterLink>
        <RouterLink :to="{ path: '/site3', hash: '#sabores' }">Sabores</RouterLink>
        <RouterLink :to="{ path: '/site3', hash: '#sobre' }">Nossa história</RouterLink>
        <RouterLink :to="{ path: '/site3', hash: '#contato' }">Contato</RouterLink>
      </nav>

      <a class="nav__cta" href="https://wa.me/5500000000000" target="_blank" rel="noopener">
        Peça agora
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fffaf2;
  border-bottom: 1px solid #f0e5d5;
  font-family: 'Nunito Sans', 'Segoe UI', sans-serif;
}
.nav__inner {
  width: min(1120px, 100% - 48px);
  min-height: 76px;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 28px;
}
.brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #3b2925;
  font-family: 'DM Serif Display', Georgia, serif;
  font-size: 1.2rem;
  text-decoration: none;
  white-space: nowrap;
}
.brand__mark {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ef8b72;
  color: white;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 800;
}
.nav__links {
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  margin-left: auto;
}
.nav__links a {
  color: #76645d;
  font-size: .9rem;
  font-weight: 700;
  text-decoration: none;
}
.nav__links a:hover,
.nav__links a.router-link-exact-active {
  color: #d96751;
}
.nav__cta {
  padding: 11px 18px;
  border-radius: 999px;
  background: #d96751;
  color: #fff;
  font-size: .88rem;
  font-weight: 800;
  text-decoration: none;
  white-space: nowrap;
}
.nav__cta:hover { background: #bd503d; }
@media (max-width: 760px) {
  .nav__inner { width: min(1120px, 100% - 36px); padding: 14px 0; flex-wrap: wrap; gap: 12px; }
  .nav__links { order: 3; width: 100%; margin: 0; gap: 16px; }
  .nav__cta { margin-left: auto; }
}
</style>
