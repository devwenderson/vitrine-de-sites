<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="about">
    <div class="container">
      <p class="eyebrow">Sobre o restaurante</p>
      <h1>Nossa história começa na mesa.</h1>
      <p class="about__text">
        O Sabor da Vila nasceu da vontade de cozinhar para as pessoas como se
        fossem da família. Começamos com quatro mesas e uma receita de frango na
        brasa; hoje seguimos com o mesmo cuidado: comida feita na hora, produto
        fresco e um lugar onde todo mundo se sente em casa.
      </p>

      <!-- Substitua esta div por <img> com foto da equipe ou do salão -->
      <div class="about__image ph" role="img" aria-label="Foto da equipe do restaurante"></div>

      <div class="about__values">
        <div>
          <h2>Nossa cozinha</h2>
          <p>Receitas simples, bem executadas e com espaço para pequenas novidades a cada estação.</p>
        </div>
        <div>
          <h2>Nosso lugar</h2>
          <p>Um salão acolhedor na Vila Madalena, com varanda para almoços longos e jantares tranquilos.</p>
        </div>
      </div>

      <RouterLink class="about__back" :to="{ path: '/site1', hash: '#cardapio' }">
        Conhecer o cardápio
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
:global(body) {
  margin: 0;
}

.about {
  min-height: 100vh;
  padding: 72px 0 90px;
  background: #fdf8f2;
  color: #241b17;
  font-family: 'DM Sans', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.55;
}

.container {
  width: min(900px, 100% - 48px);
  margin-inline: auto;
}

.eyebrow {
  margin: 0 0 12px;
  color: #b4532f;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1,
h2 {
  font-family: 'Fraunces', Georgia, 'Times New Roman', serif;
  font-weight: 600;
}

h1 {
  margin: 0;
  font-size: clamp(2.2rem, 4.5vw, 3.4rem);
  line-height: 1.15;
  letter-spacing: -0.025em;
}

.about__text {
  max-width: 62ch;
  margin: 20px 0 36px;
  color: #6f625a;
  font-size: 1.05rem;
}

.ph {
  background-color: #c9a27e;
}

.about__image {
  height: 300px;
  border-radius: 18px;
}

.about__values {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin: 40px 0;
}

.about__values h2 {
  margin: 0 0 8px;
  font-size: 1.2rem;
}

.about__values p {
  margin: 0;
  color: #6f625a;
}

.about__back {
  display: inline-flex;
  padding: 13px 22px;
  border-radius: 999px;
  background: #b4532f;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.about__back:hover {
  background: #8f3f22;
}

@media (max-width: 600px) {
  .container {
    width: min(900px, 100% - 40px);
  }

  .about__values {
    grid-template-columns: 1fr;
  }
}
</style>
