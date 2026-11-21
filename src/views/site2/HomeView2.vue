<script setup>
import { watch, nextTick } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import Navbar2 from '@/components/site2/Navbar2.vue'

// Dados ilustrativos — troque pelos dados reais depois.
const restaurant = {
  name: 'Taqueria Sol',
  neighborhood: 'Vila Madalena, São Paulo',
  address: 'Rua do Sol, 44 — Vila Madalena, São Paulo/SP',
  hours: 'Todos os dias, das 11h às 23h',
  phone: '(11) 97777-6666',
  whatsapp: 'https://wa.me/5511977776666',
  email: 'oi@taqueriasol.com.br',
}

const stats = [
  { value: '30k', label: 'pedidos felizes' },
  { value: '60', label: 'fazendas parceiras' },
  { value: '5', label: 'chefs na cozinha' },
]

const dishes = [
  { name: 'Tacos de carnita', category: 'Tacos', description: 'Tortilha de milho, pork lento e cilantro.', price: 'R$ 32', tone: 'teal' },
  { name: 'Tostadas crocantes', category: 'Tostadas', description: 'Feijão, queijo fresco e pimenta da casa.', price: 'R$ 36', tone: 'orange' },
  { name: 'Burritos do sol', category: 'Burritos', description: 'Arroz, feijão, guacamole e carne grelhada.', price: 'R$ 44', tone: 'teal' },
]

const specialties = [
  { name: 'Taco de peixe', category: 'Especial', description: 'Peixe grelhado, repolho e limão.', price: 'R$ 38', tone: 'lime' },
  { name: 'Salada verde', category: 'Fresco', description: 'Folhas da estação, abacate e vinagrete.', price: 'R$ 29', tone: 'teal' },
  { name: 'Quesadilla', category: 'Forno', description: 'Queijo derretido e tortilha dourada.', price: 'R$ 34', tone: 'orange' },
]

// (Navbar agora renderizada pelo componente Navbar2.vue)
// Scroll suave para as âncoras do roteador.
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
  <div class="scene">
    <!-- Enfeites no lugar das imagens: formas de cor sólida -->
    <div class="garnish garnish--lime-a" aria-hidden="true"></div>
    <div class="garnish garnish--lime-b" aria-hidden="true"></div>
    <div class="garnish garnish--leaf-a" aria-hidden="true"></div>
    <div class="garnish garnish--leaf-b" aria-hidden="true"></div>
    <div class="garnish garnish--chili-a" aria-hidden="true"></div>
    <div class="garnish garnish--chili-b" aria-hidden="true"></div>
    <div class="garnish garnish--orange" aria-hidden="true"></div>

    <div class="screen">

      <!-- HERO -->
      <section id="inicio" class="hero">
        <div class="hero__copy">
          <p class="kicker">TASTE THE BEST OF</p>
          <h1>Mexican<br />Street Style</h1>
          <p class="hero__text">
            Taco de milho, fogo na brasa e tempero que grita. Street food mexicana
            feita na hora, com ingredientes frescos e muito sabor.
          </p>
          <ul class="stats">
            <li v-for="stat in stats" :key="stat.label">
              <strong>{{ stat.value }}</strong>
              <span>{{ stat.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Substitua por <img> com a foto dos tacos -->
        <div class="hero__photo ph ph--tacos" role="img" aria-label="Foto de tacos no prato"></div>
      </section>

      <!-- SOBRE / CARDÁPIO RESUMO -->
      <section id="sobre" class="intro">
        <p class="label label--green">NOSSA COZINHA</p>
        <h2 class="display">Do carrinho pra sua mesa</h2>
        <p class="intro__text">
          Cada prato sai quentinho, montado na sua frente. Massa de milho feita na
          hora, carne marinada de um dia pro outro e aquele toque de limão que
          faz toda a diferença.
        </p>
        <div class="intro__photos">
          <!-- Substitua por <img> -->
          <div class="intro__photo ph ph--tacos" role="img" aria-label="Foto de tacos"></div>
          <div class="intro__photo ph ph--orange" role="img" aria-label="Foto de acompanhamento"></div>
        </div>
      </section>

      <!-- CARDÁPIO -->
      <section id="cardapio" class="menu-section">
        <p class="label label--green">WAIT 2</p>
        <h2 class="display">Nossos clássicos</h2>
        <p class="menu-section__sub">Os favoritos que saem todo dia da nossa cozinha.</p>

        <div class="cards">
          <article v-for="dish in dishes" :key="dish.name" class="card">
            <div class="card__art brush" :class="`tone--${dish.tone}`">
              <a class="pill pill--coral" :href="restaurant.whatsapp" target="_blank" rel="noopener">
                Pedir agora
              </a>
              <!-- Substitua por <img> do prato -->
              <div class="card__photo ph" :class="`ph--${dish.tone}`" role="img" :aria-label="`Foto de ${dish.name}`">
              </div>
            </div>
            <div class="card__meta">
              <h3>{{ dish.name }}</h3>
              <p>{{ dish.description }}</p>
              <span class="card__price">{{ dish.price }}</span>
            </div>
          </article>
        </div>
      </section>

      <!-- ESPECIAIS -->
      <section id="especiais" class="menu-section">
        <p class="label label--green">COUF 3</p>
        <h2 class="display">Para variar o pedido</h2>
        <p class="menu-section__sub">Opções frescas e leves para acompanhar o seu taco.</p>

        <div class="cards">
          <article v-for="dish in specialties" :key="dish.name" class="card">
            <div class="card__art brush" :class="`tone--${dish.tone}`">
              <a class="pill pill--coral" :href="restaurant.whatsapp" target="_blank" rel="noopener">
                Pedir agora
              </a>
              <!-- Substitua por <img> do prato -->
              <div class="card__photo ph" :class="`ph--${dish.tone}`" role="img" :aria-label="`Foto de ${dish.name}`">
              </div>
            </div>
            <div class="card__meta">
              <h3>{{ dish.name }}</h3>
              <p>{{ dish.description }}</p>
              <span class="card__price">{{ dish.price }}</span>
              <span class="card__thumb ph" :class="`ph--${dish.tone}`" aria-hidden="true"></span>
            </div>
          </article>
        </div>
      </section>

      <!-- CONTATO -->
      <section id="contato" class="contact">
        <p class="label label--light">VENHA NOS VISITAR</p>
        <h2 class="display">Onde encontrar a gente</h2>
        <div class="contact__grid">
          <div>
            <span class="contact__key">Endereço</span>
            <p>{{ restaurant.address }}</p>
          </div>
          <div>
            <span class="contact__key">Horário</span>
            <p>{{ restaurant.hours }}</p>
          </div>
          <div>
            <span class="contact__key">Contato</span>
            <p>{{ restaurant.phone }}<br />{{ restaurant.email }}</p>
          </div>
        </div>
        <a class="pill pill--coral contact__cta" :href="restaurant.whatsapp" target="_blank" rel="noopener">
          Fazer pedido pelo WhatsApp
        </a>
      </section>

      <footer class="footer">
        <strong>{{ restaurant.name }}</strong>
        <span>{{ restaurant.neighborhood }}</span>
      </footer>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Permanent+Marker&family=Playfair+Display:wght@700;900&display=swap');

:global(body) {
  margin: 0;
}

.scene {
  --dark: #1a1a1a;
  --paper: #ffffff;
  --orange: #ff6b35;
  --yellow: #ffca3a;
  --teal: #2ec4b6;
  --lime: #7ed957;
  --coral: #ef476f;
  --green: #2d6a4f;
  --ink: #111111;
  --muted: #666666;

  position: relative;
  min-height: 100vh;
  padding: 46px 20px;
  overflow: hidden;
  background: var(--dark);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: var(--ink);
}

.screen {
  position: relative;
  z-index: 1;
  width: min(736px, 100%);
  margin: 0 auto;
  background: var(--paper);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.45);
}

/* Enfeites de cor sólida na moldura escura */
.garnish {
  position: absolute;
  z-index: 0;
}

.garnish--lime-a {
  top: 60px;
  left: 5%;
  width: 92px;
  height: 92px;
  border-radius: 50%;
  background: var(--lime);
}

.garnish--lime-b {
  bottom: 120px;
  right: 6%;
  width: 74px;
  height: 74px;
  border-radius: 50%;
  background: var(--yellow);
}

.garnish--leaf-a {
  top: 260px;
  right: 8%;
  width: 110px;
  height: 44px;
  border-radius: 100% 0 100% 0;
  background: var(--green);
  transform: rotate(-32deg);
}

.garnish--leaf-b {
  bottom: 300px;
  left: 7%;
  width: 96px;
  height: 38px;
  border-radius: 100% 0 100% 0;
  background: var(--lime);
  transform: rotate(24deg);
}

.garnish--chili-a {
  top: 520px;
  left: 4%;
  width: 26px;
  height: 120px;
  border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
  background: var(--coral);
  transform: rotate(38deg);
}

.garnish--chili-b {
  bottom: 80px;
  right: 4%;
  width: 22px;
  height: 96px;
  border-radius: 50%;
  background: #e03b3b;
  transform: rotate(-45deg);
}

.garnish--orange {
  top: 740px;
  right: 3%;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  background: var(--orange);
}

/* Bordas irregulares, como pincel */
.brush {
  clip-path: polygon(0% 3%, 5% 1%, 11% 3%, 17% 0%, 24% 2%, 31% 0%, 38% 3%, 45% 1%,
      52% 3%, 59% 0%, 66% 2%, 73% 0%, 80% 3%, 87% 1%, 94% 3%, 100% 1%,
      100% 97%, 94% 99%, 88% 97%, 81% 100%, 74% 98%, 67% 100%, 60% 97%,
      53% 99%, 46% 97%, 39% 100%, 32% 98%, 25% 100%, 18% 98%, 11% 100%,
      5% 98%, 0% 99%);
}

/* Tipografia */
.kicker {
  margin: 0 0 6px;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.24em;
}

h1 {
  margin: 0;
  font-family: 'Permanent Marker', 'Comic Sans MS', cursive;
  font-size: clamp(2.9rem, 8vw, 4.6rem);
  line-height: 0.98;
  text-transform: uppercase;
}

.display {
  font-family: 'Playfair Display', Georgia, serif;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1.05;
}

.label {
  margin: 0 0 10px;
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.2em;
}

.label--green {
  color: var(--green);
}

.label--light {
  color: var(--yellow);
}

/* Botões pílula */
.pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 18px;
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-decoration: none;
  text-transform: uppercase;
  color: #fff;
}

.pill--coral {
  background: var(--coral);
}

.pill--coral:hover {
  background: #d93a60;
}

/* Blocos no lugar das imagens */
.ph {
  background-color: #c8b8a0;
}

.ph--tacos,
.ph--teal {
  background-color: #a8763f;
}

.ph--orange {
  background-color: #e07a2f;
}

.ph--lime {
  background-color: #94b64a;
}

/* Hero */
.hero {
  position: relative;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 12px;
  min-height: 370px;
  padding: 44px 30px 54px;
  background: linear-gradient(115deg, var(--orange) 0%, var(--yellow) 48%, var(--teal) 100%);
}

.hero__copy h1,
.hero__copy .kicker,
.hero__copy .hero__text {
  position: relative;
  z-index: 1;
}

.hero__text {
  max-width: 34ch;
  margin: 16px 0 0;
  font-size: 0.82rem;
  font-weight: 600;
  line-height: 1.5;
}

.stats {
  display: flex;
  gap: 18px;
  margin: 22px 0 0;
  padding: 0;
  list-style: none;
}

.stats li {
  display: flex;
  flex-direction: column;
  padding: 7px 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.55);
}

.stats strong {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1rem;
}

.stats span {
  font-size: 0.55rem;
  font-weight: 700;
  text-transform: uppercase;
}

.hero__photo {
  min-height: 260px;
  border: 8px solid rgba(255, 255, 255, 0.6);
  border-radius: 46% 54% 48% 52% / 52% 46% 54% 48%;
}

/* Sobre */
.intro {
  padding: 42px 32px 30px;
  text-align: center;
}

.intro .display {
  margin: 0;
  font-size: 1.9rem;
}

.intro__text {
  max-width: 52ch;
  margin: 12px auto 0;
  color: var(--muted);
  font-size: 0.8rem;
  line-height: 1.6;
}

.intro__photos {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  gap: 12px;
  margin-top: 24px;
}

.intro__photo {
  min-height: 130px;
  border-radius: 18px;
}

/* Seções de cardápio */
.menu-section {
  padding: 36px 24px 46px;
  text-align: center;
}

.menu-section .display {
  margin: 0;
  font-size: 2rem;
}

.menu-section__sub {
  margin: 8px auto 0;
  color: var(--muted);
  font-size: 0.78rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 26px;
  text-align: left;
}

.card__art {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 14px 12px 0;
  min-height: 230px;
}

.tone--teal {
  background: var(--teal);
}

.tone--orange {
  background: #ff9f5a;
}

.tone--lime {
  background: var(--lime);
}

.card__photo {
  width: 100%;
  min-height: 150px;
  border-radius: 14px 14px 0 0;
}

.card__meta {
  position: relative;
  padding: 12px 4px 0;
}

.card__meta h3 {
  margin: 0;
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 0.92rem;
}

.card__meta p {
  margin: 4px 0 0;
  color: var(--muted);
  font-size: 0.68rem;
  line-height: 1.4;
}

.card__price {
  display: block;
  margin-top: 8px;
  font-weight: 800;
  font-size: 0.78rem;
}

.card__thumb {
  position: absolute;
  right: 4px;
  bottom: 0;
  width: 34px;
  height: 34px;
  border-radius: 50%;
}

/* Contato */
.contact {
  padding: 44px 32px 46px;
  background: var(--dark);
  color: #fff;
  text-align: center;
}

.contact .display {
  margin: 0;
  font-size: 1.9rem;
}

.contact__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  margin: 26px 0 30px;
  text-align: left;
}

.contact__key {
  color: var(--yellow);
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.contact__grid p {
  margin: 6px 0 0;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #e7e7e7;
}

.contact__cta {
  padding: 12px 22px;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 18px 32px;
  font-size: 0.7rem;
  color: var(--muted);
  background: var(--paper);
}

@media (max-width: 620px) {
  .scene {
    padding: 24px 12px;
  }

  .garnish {
    display: none;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 34px 20px 42px;
  }

  .hero__photo {
    min-height: 180px;
  }

  .cards,
  .contact__grid {
    grid-template-columns: 1fr;
  }

  .card__art {
    min-height: 200px;
  }
}
</style>