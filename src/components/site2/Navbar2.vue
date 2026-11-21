<template>
  <header>
    <div class="topbar">
      <div class="topbar__menu">
        <span class="burger" aria-hidden="true"><i></i><i></i><i></i></span>
        <span>MENU BACK</span>
      </div>
      <nav class="topbar__nav" aria-label="Navegação">
        <RouterLink :to="{ path: '/site2', hash: '#sobre' }">Sobre</RouterLink>
        <RouterLink :to="{ path: '/site2', hash: '#cardapio' }">Cardápio</RouterLink>
        <RouterLink :to="{ path: '/site2', hash: '#especiais' }">Especiais</RouterLink>
        <RouterLink :to="{ path: '/site2', hash: '#contato' }">Contato</RouterLink>
      </nav>
      <a class="pill pill--coral topbar__cta" :href="deliveryUrl" target="_blank" rel="noopener">Delivery</a>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  deliveryUrl: {
    type: String,
    default: 'https://wa.me/5511977776666',
  },
})
</script>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 24px;
  border-bottom: 1px solid #eee;
  font-size: 0.62rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.topbar__menu {
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.burger {
  display: grid;
  gap: 3px;
}

.burger i {
  display: block;
  width: 16px;
  height: 2px;
  background: var(--ink);
}

.topbar__nav {
  display: flex;
  gap: 14px;
}

.topbar__nav a {
  color: var(--muted);
  text-decoration: none;
  text-transform: uppercase;
}

.topbar__nav a:hover {
  color: var(--coral);
}

.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
  white-space: nowrap;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    background 0.15s ease;
}

.pill--coral {
  background: #e63946;
}

.pill--coral:hover {
  background: #c92a37;
  transform: scale(1.08);
}

.pill--coral:active {
  transform: scale(0.95);
}

@media (max-width: 620px) {
  .topbar {
    padding: 12px 14px;
  }

  .topbar__nav {
    display: none;
  }
}
</style>