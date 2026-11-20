<script setup>
import { nextTick, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

// Dados ilustrativos: substitua pelo nome, endereço e contatos reais.
const restaurant = {
  neighborhood: 'Vila Madalena, São Paulo',
  address: 'Rua das Palmeiras, 128 — Vila Madalena, São Paulo/SP',
  hours: 'Terça a domingo, das 11h30 às 22h',
  phone: '(11) 99999-1234',
  whatsapp: 'https://wa.me/5511999991234',
  email: 'contato@sabordavila.com.br',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua+das+Palmeiras+128+Vila+Madalena+Sao+Paulo',
}

const highlights = [
  { number: '01', title: 'Ingredientes da estação', text: 'Compras semanais na feira e produtores da região.' },
  { number: '02', title: 'Carta que muda', text: 'Novos pratos entram no cardápio a cada estação.' },
  { number: '03', title: 'Mesa para todo mundo', text: 'Salão, varanda e espaço para famílias e amigos.' },
]

const dishes = [
  { name: 'Pão de queijo recheado', category: 'Entradas', description: 'Muçarela, alecrim e azeite de oliva.', price: 'R$ 28', tone: 'sand' },
  { name: 'Salada da horta', category: 'Entradas', description: 'Folhas da estação, tomate e vinagrete de limão.', price: 'R$ 34', tone: 'sage' },
  { name: 'Frango na brasa', category: 'Pratos', description: 'Arroz branco, farofa de bacon e mandioca.', price: 'R$ 62', tone: 'clay' },
  { name: 'Massa ao sugo', category: 'Pratos', description: 'Molho de tomate artesanal e manjericão fresco.', price: 'R$ 54', tone: 'sand' },
  { name: 'Pudim de leite', category: 'Sobremesas', description: 'Calda de caramelo e chantilly leve.', price: 'R$ 24', tone: 'cream' },
  { name: 'Brownie da casa', category: 'Sobremesas', description: 'Chocolate 70% e sorvete de baunilha.', price: 'R$ 27', tone: 'cocoa' },
]

// Os links de cardápio/contato usam hash do roteador; fazemos o scroll aqui
// para funcionar tanto na página inicial quanto ao vir da página "Sobre".
const route = useRoute()

watch(
  () => route.hash,
  (hash) => {
    if (!hash) return
    nextTick(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
    })
  },
  { immediate: true },
)
</script>

<template>
  <div class="landing">
    <section id="inicio" class="hero">
      <div class="hero__inner">
        <div class="hero__copy">
          <p class="eyebrow">Restaurante na {{ restaurant.neighborhood }}</p>
          <h1>Comida boa, gente feliz, mesa sempre cheia.</h1>
          <p class="hero__text">
            Um restaurante de bairro com cozinha afetiva, ingredientes frescos e
            aquele jeito de receber que faz você querer voltar.
          </p>
          <div class="hero__actions">
            <RouterLink class="button button--primary" :to="{ path: '/site1', hash: '#cardapio' }">
              Ver cardápio
            </RouterLink>
            <a class="button button--outline" :href="restaurant.whatsapp" target="_blank" rel="noopener">
              Reservar pelo WhatsApp
            </a>
          </div>
          <ul class="hero__facts">
            <li><strong>12</strong> anos de cozinha</li>
            <li><strong>Salão</strong> e varanda</li>
            <li><strong>Reservas</strong> todos os dias</li>
          </ul>
        </div>

        <!-- Substitua esta div por <img> com a foto do salão/prato principal -->
        <div class="hero__image ph ph--hero" role="img" aria-label="Foto do salão do restaurante"></div>
      </div>
    </section>

    <section class="highlights">
      <div class="container highlights__grid">
        <article v-for="item in highlights" :key="item.number" class="highlight">
          <span class="highlight__number">{{ item.number }}</span>
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </article>
      </div>
    </section>

    <section id="cardapio" class="section section--menu">
      <div class="container">
        <header class="section__header">
          <p class="eyebrow">Cardápio</p>
          <h2>Feito para compartilhar</h2>
          <p>Entradas, pratos e sobremesas com o sabor de casa — e porções generosas.</p>
        </header>

        <div class="dishes">
          <article v-for="dish in dishes" :key="dish.name" class="dish">
            <!-- Substitua esta div por <img> com a foto do prato -->
            <div class="dish__image ph" :class="`ph--${dish.tone}`" role="img" :aria-label="`Foto de ${dish.name}`"></div>
            <div class="dish__body">
              <span class="dish__category">{{ dish.category }}</span>
              <h3>{{ dish.name }}</h3>
              <p>{{ dish.description }}</p>
              <span class="dish__price">{{ dish.price }}</span>
            </div>
          </article>
        </div>

        <p class="section__note">Cardápio ilustrativo — confira disponibilidade e preços diretamente com o restaurante.</p>
      </div>
    </section>

    <section id="localizacao" class="section section--location">
      <div class="container location">
        <div class="location__copy">
          <p class="eyebrow">Onde estamos</p>
          <h2>Fácil de achar, difícil de sair.</h2>
          <dl class="info-list">
            <div>
              <dt>Endereço</dt>
              <dd>{{ restaurant.address }}</dd>
            </div>
            <div>
              <dt>Horário</dt>
              <dd>{{ restaurant.hours }}</dd>
            </div>
          </dl>
          <a class="button button--primary" :href="restaurant.maps" target="_blank" rel="noopener">
            Como chegar
          </a>
        </div>

        <!-- Substitua esta div por um mapa incorporado ou uma imagem -->
        <div class="location__map ph ph--map" role="img" aria-label="Mapa de localização do restaurante"></div>
      </div>
    </section>

    <section id="contato" class="contact">
      <div class="container contact__inner">
        <div>
          <p class="eyebrow">Contato</p>
          <h2>Gostou? Reserve sua mesa.</h2>
          <p class="contact__text">
            Fale com a gente para reservar, tirar dúvidas sobre o cardápio ou
            combinar um evento.
          </p>
        </div>
        <div class="contact__channels">
          <a :href="restaurant.whatsapp" target="_blank" rel="noopener">
            <span>WhatsApp</span>
            <strong>{{ restaurant.phone }}</strong>
          </a>
          <a :href="`tel:+55${restaurant.phone.replace(/\D/g, '')}`">
            <span>Telefone</span>
            <strong>{{ restaurant.phone }}</strong>
          </a>
          <a :href="`mailto:${restaurant.email}`">
            <span>E-mail</span>
            <strong>{{ restaurant.email }}</strong>
          </a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <strong>Sabor da Vila</strong>
        <span>{{ restaurant.address }}</span>
        <span>© {{ new Date().getFullYear() }} Sabor da Vila. Todos os direitos reservados.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.landing {
  --ink: #241b17;
  --muted: #6f625a;
  --paper: #fdf8f2;
  --accent: #b4532f;
  --accent-dark: #8f3f22;
  --line: #e9dccd;

  background: var(--paper);
  color: var(--ink);
  font-family: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.55;
}

.container {
  width: min(1120px, 100% - 48px);
  margin-inline: auto;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2,
h3 {
  margin: 0;
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-weight: 600;
  line-height: 1.15;
  letter-spacing: -0.025em;
}

p {
  margin: 0;
}

/* Blocos provisórios no lugar das imagens */
.ph {
  background-color: #d8c4b2;
}

.ph--hero {
  background-color: #c9a27e;
}

.ph--sand {
  background-color: #d9b98f;
}

.ph--sage {
  background-color: #b9bfa1;
}

.ph--clay {
  background-color: #b8755a;
}

.ph--cream {
  background-color: #e0c3a5;
}

.ph--cocoa {
  background-color: #a9684f;
}

.ph--map {
  background-color: #d7c6b2;
}

.hero {
  padding: 76px 0 0;
}

.hero__inner {
  width: min(1120px, 100% - 48px);
  margin-inline: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
}

.hero__copy h1 {
  max-width: 12ch;
  font-size: clamp(2.6rem, 5.2vw, 4.4rem);
}

.hero__text {
  max-width: 46ch;
  margin-top: 22px;
  color: var(--muted);
  font-size: 1.05rem;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 30px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 13px 22px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 600;
  text-decoration: none;
}

.button--primary {
  background: var(--accent);
  color: #fff;
}

.button--primary:hover {
  background: var(--accent-dark);
}

.button--outline {
  border: 1px solid #cbb8a5;
  color: var(--ink);
}

.button--outline:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin: 38px 0 0;
  padding: 24px 0 0;
  border-top: 1px solid var(--line);
  list-style: none;
  color: var(--muted);
  font-size: 0.85rem;
}

.hero__facts strong {
  display: block;
  color: var(--ink);
  font-size: 1.05rem;
}

.hero__image {
  min-height: 420px;
  border-radius: 24px;
}

.highlights {
  padding: 56px 0;
  margin-top: 64px;
  border-block: 1px solid var(--line);
}

.highlights__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.highlight__number {
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 700;
}

.highlight h2 {
  margin: 10px 0 8px;
  font-size: 1.15rem;
}

.highlight p {
  color: var(--muted);
  font-size: 0.92rem;
}

.section {
  padding: 90px 0;
}

.section__header {
  max-width: 620px;
  margin-bottom: 40px;
}

.section__header h2 {
  font-size: clamp(2rem, 3.5vw, 2.9rem);
}

.section__header p {
  margin-top: 14px;
  color: var(--muted);
}

.section--menu {
  background: #fff;
}

.dishes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 26px;
}

.dish {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--paper);
}

.dish__image {
  height: 190px;
}

.dish__body {
  padding: 20px;
}

.dish__category {
  color: var(--accent);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.dish h3 {
  margin: 8px 0 6px;
  font-size: 1.1rem;
}

.dish p {
  min-height: 3em;
  color: var(--muted);
  font-size: 0.9rem;
}

.dish__price {
  display: block;
  margin-top: 14px;
  font-weight: 700;
}

.section__note {
  margin-top: 28px;
  color: var(--muted);
  font-size: 0.82rem;
}

.section--location {
  background: var(--paper);
}

.location {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 56px;
}

.location__copy h2 {
  max-width: 14ch;
  font-size: clamp(2rem, 3.5vw, 2.9rem);
}

.info-list {
  margin: 28px 0;
  display: grid;
  gap: 20px;
}

.info-list dt {
  color: var(--accent);
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.info-list dd {
  margin: 4px 0 0;
  font-size: 1rem;
}

.location__map {
  min-height: 340px;
  border-radius: 18px;
}

.contact {
  padding: 80px 0;
  background: var(--ink);
  color: #fff;
}

.contact .eyebrow {
  color: #e8a17f;
}

.contact h2 {
  font-size: clamp(2rem, 3.5vw, 2.9rem);
}

.contact__text {
  max-width: 46ch;
  margin-top: 14px;
  color: #d7c9bf;
}

.contact__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 48px;
}

.contact__channels {
  display: grid;
  gap: 10px;
}

.contact__channels a {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 18px;
  border: 1px solid #4a3b34;
  border-radius: 12px;
  color: #fff;
  text-decoration: none;
}

.contact__channels a:hover {
  border-color: #e8a17f;
}

.contact__channels span {
  color: #d7c9bf;
  font-size: 0.85rem;
}

.contact__channels strong {
  font-size: 0.95rem;
}

.footer {
  padding: 28px 0;
  background: #17100d;
  color: #bca99d;
  font-size: 0.82rem;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 12px;
}

.footer strong {
  color: #fff;
}

@media (max-width: 860px) {
  .hero__inner,
  .location,
  .contact__inner {
    grid-template-columns: 1fr;
  }

  .hero__image {
    min-height: 300px;
  }

  .dishes,
  .highlights__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 560px) {
  .container,
  .hero__inner {
    width: min(1120px, 100% - 40px);
  }

  .hero {
    padding-top: 48px;
  }

  .dishes,
  .highlights__grid {
    grid-template-columns: 1fr;
  }

  .section {
    padding: 64px 0;
  }

  .contact__channels a {
    flex-direction: column;
    gap: 4px;
  }
}
</style>
