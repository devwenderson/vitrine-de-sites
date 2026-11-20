<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="nav">
    <div class="nav__inner">
      <RouterLink class="brand" to="/site1">
        <span class="brand__mark" aria-hidden="true">SV</span>
        <span>Sabor da Vila</span>
      </RouterLink>

      <nav class="nav__links" aria-label="Navegação do restaurante">
        <RouterLink to="/site1">Início</RouterLink>
        <RouterLink :to="{ path: '/site1', hash: '#cardapio' }">Cardápio</RouterLink>
        <RouterLink :to="{ path: '/site1', hash: '#localizacao' }">Localização</RouterLink>
        <RouterLink :to="{ path: '/site1', hash: '#contato' }">Contato</RouterLink>
        <RouterLink to="/site1/sobre">Sobre</RouterLink>
      </nav>

      <a class="nav__cta" href="https://wa.me/5511999991234" target="_blank" rel="noopener">
        Reservar mesa
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #fdf8f2;
  border-bottom: 1px solid #e9dccd;
  font-family: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.nav__inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
}

.brand {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #241b17;
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-decoration: none;
  white-space: nowrap;
}

.brand__mark {
  display: grid;
  place-items: center;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: #b4532f;
  color: #fff;
  font-size: 0.75rem;
  letter-spacing: 0.04em;
}

.nav__links {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-left: auto;
}

.nav__links a {
  color: #6f625a;
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
}

.nav__links a:hover,
.nav__links a.router-link-active {
  color: #b4532f;
}

.nav__links a.router-link-exact-active {
  color: #8f3f22;
}

.nav__cta {
  padding: 10px 16px;
  border-radius: 999px;
  background: #241b17;
  color: #fff;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.nav__cta:hover {
  background: #b4532f;
}

@media (max-width: 720px) {
  .nav__inner {
    padding: 12px 20px;
    gap: 12px;
  }

  .nav__links {
    order: 3;
    width: 100%;
    margin-left: 0;
    gap: 14px;
  }

  .nav__cta {
    margin-left: auto;
  }
}
</style>
