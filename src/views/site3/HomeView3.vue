<script setup>
import { nextTick, watch } from 'vue'
import { useRoute } from 'vue-router'

const flavors = [
  { name: 'Morango da estação', description: 'Leve, frutado e feito com morangos selecionados.', price: 'R$ 9,00', tone: 'pink', tag: 'Queridinho' },
  { name: 'Chocolate belga', description: 'Chocolate intenso e cremosidade em cada colherada.', price: 'R$ 11,00', tone: 'chocolate', tag: 'Mais pedido' },
  { name: 'Baunilha artesanal', description: 'Baunilha natural, sabor delicado e textura aveludada.', price: 'R$ 10,00', tone: 'vanilla', tag: 'Clássico' },
]

const route = useRoute()
watch(
  () => route.hash,
  (hash) => {
    if (!hash) return
    nextTick(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
  },
  { immediate: true },
)
</script>

<template>
  <div class="landing">
    <section id="inicio" class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="eyebrow">Gelateria artesanal • Feita com carinho</p>
          <h1>Um dia mais doce começa com <em>uma colherada.</em></h1>
          <p class="hero__text">
            Sorvetes artesanais preparados com ingredientes selecionados,
            receitas especiais e muito sabor para compartilhar.
          </p>
          <div class="hero__actions">
            <a class="button button--primary" href="#sabores">Conheça os sabores</a>
            <a class="button button--light" href="https://wa.me/5500000000000" target="_blank" rel="noopener">Faça seu pedido</a>
          </div>
          <div class="hero__note"><span>✳</span> Produção artesanal todos os dias</div>
        </div>
        <div class="hero__art" role="img" aria-label="Ilustração de uma taça de sorvete com bolas coloridas">
          <div class="sun"></div>
          <div class="scoop scoop--pink"></div>
          <div class="scoop scoop--yellow"></div>
          <div class="scoop scoop--purple"></div>
          <div class="cone"></div>
          <span class="spark spark--one">✳</span>
          <span class="spark spark--two">✦</span>
        </div>
      </div>
    </section>

    <section class="promise">
      <div class="container promise__grid">
        <article><span>01</span><h2>Ingredientes de verdade</h2><p>Selecionamos ingredientes frescos para entregar sabor de verdade.</p></article>
        <article><span>02</span><h2>Feito artesanalmente</h2><p>Pequenos lotes, cuidado em cada etapa e receitas especiais.</p></article>
        <article><span>03</span><h2>Momentos felizes</h2><p>Um cantinho acolhedor para dividir bons momentos e sobremesas.</p></article>
      </div>
    </section>

    <section id="sabores" class="section flavors">
      <div class="container">
        <header class="section__header">
          <p class="eyebrow">Direto da nossa cozinha</p>
          <h2>Qual vai ser o seu sabor de hoje?</h2>
          <p>Conheça alguns dos favoritos da casa. Sempre temos novidades na vitrine!</p>
        </header>
        <div class="flavor__grid">
          <article v-for="flavor in flavors" :key="flavor.name" class="flavor">
            <div class="flavor__art" :class="'flavor__art--' + flavor.tone">
              <span class="flavor__tag">{{ flavor.tag }}</span>
              <div class="flavor__scoop"></div>
              <div class="flavor__cup"></div>
            </div>
            <div class="flavor__body">
              <div><h3>{{ flavor.name }}</h3><p>{{ flavor.description }}</p></div>
              <strong>{{ flavor.price }}</strong>
            </div>
          </article>
        </div>
        <p class="note">Sabores e preços ilustrativos. Consulte a disponibilidade na loja.</p>
      </div>
    </section>

    <section id="sobre" class="about">
      <div class="container about__grid">
        <div class="about__art" role="img" aria-label="Ilustração decorativa de sorvete e frutas">
          <span class="fruit fruit--one"></span><span class="fruit fruit--two"></span>
          <span class="about__scoop"></span><span class="about__cone"></span>
        </div>
        <div class="about__copy">
          <p class="eyebrow">Nossa história</p>
          <h2>Mais que sorvete: um motivo para fazer uma pausa.</h2>
          <p>A Gelato da Praça nasceu da vontade de transformar ingredientes simples em momentos especiais. Aqui, cada receita é preparada com cuidado para que cada visita tenha gostinho de quero mais.</p>
          <a class="text-link" href="#contato">Venha conhecer a loja <span>→</span></a>
        </div>
      </div>
    </section>

    <section id="contato" class="contact">
      <div class="container contact__inner">
        <div>
          <p class="eyebrow">Passe por aqui</p>
          <h2>Seu próximo sorvete favorito está esperando.</h2>
          <p>Venha visitar a gente ou fale conosco para saber mais sobre os sabores do dia.</p>
        </div>
        <div class="contact__details">
          <div><span>Endereço</span><strong>Rua das Flores, 120 — Centro</strong></div>
          <div><span>Horário</span><strong>Todos os dias, das 12h às 22h</strong></div>
          <a class="button button--light" href="https://wa.me/5500000000000" target="_blank" rel="noopener">Conversar pelo WhatsApp</a>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer__inner">
        <strong>Gelato da Praça</strong>
        <span>Um sabor especial em cada momento.</span>
        <span>© {{ new Date().getFullYear() }} Gelato da Praça.</span>
      </div>
    </footer>
  </div>
</template>

<style scoped>
:global(body) { margin: 0; }
.landing {
  --ink: #3b2925; --muted: #796760; --paper: #fffaf2;
  --accent: #d96751; --line: #f0e5d5;
  color: var(--ink); background: var(--paper);
  font-family: 'Nunito Sans', 'Segoe UI', sans-serif; line-height: 1.6;
}
.container { width: min(1120px, 100% - 48px); margin-inline: auto; }
.eyebrow { margin: 0 0 12px; color: var(--accent); font-size: .76rem; font-weight: 800; letter-spacing: .14em; text-transform: uppercase; }
h1,h2,h3 { margin: 0; font-family: 'DM Serif Display', Georgia, serif; font-weight: 400; line-height: 1.12; }
p { margin: 0; }
.hero { overflow: hidden; padding: 76px 0 82px; background: #fff1e6; }
.hero__grid { display: grid; grid-template-columns: 1.05fr .95fr; align-items: center; gap: 50px; }
.hero h1 { max-width: 12ch; font-size: clamp(2.8rem, 5.5vw, 4.8rem); }
.hero h1 em { color: var(--accent); font-style: normal; }
.hero__text { max-width: 48ch; margin-top: 22px; color: var(--muted); font-size: 1.05rem; }
.hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
.button { display: inline-flex; align-items: center; justify-content: center; padding: 13px 21px; border-radius: 999px; font-size: .9rem; font-weight: 800; text-decoration: none; }
.button--primary { background: var(--accent); color: #fff; }
.button--primary:hover { background: #bd503d; }
.button--light { background: #fff; color: var(--ink); }
.button--light:hover { background: #ffe1d2; }
.hero__note { margin-top: 28px; color: var(--muted); font-size: .88rem; font-weight: 700; }
.hero__note span { margin-right: 8px; color: var(--accent); }
.hero__art { position: relative; min-height: 390px; display: grid; place-items: center; }
.sun { position: absolute; width: 310px; height: 310px; border-radius: 50%; background: #f9d7a8; }
.scoop { position: absolute; z-index: 2; width: 145px; height: 132px; border-radius: 55% 55% 48% 48%; box-shadow: inset -12px -10px 0 #0000000d; }
.scoop--pink { background: #ef8b9b; transform: translate(-60px, -66px) rotate(-14deg); }
.scoop--yellow { background: #f5c65e; transform: translate(55px, -76px) rotate(12deg); }
.scoop--purple { width: 130px; height: 120px; background: #aa8bc4; transform: translate(0, -135px); }
.cone { position: absolute; top: 51%; width: 0; height: 0; border-left: 105px solid transparent; border-right: 105px solid transparent; border-top: 205px solid #c9874f; filter: drop-shadow(0 8px 0 #a9693e); }
.spark { position: absolute; z-index: 3; color: #d96751; font-size: 2rem; }
.spark--one { top: 12%; right: 8%; }.spark--two { bottom: 14%; left: 9%; }
.promise { padding: 48px 0; border-block: 1px solid var(--line); }
.promise__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 36px; }
.promise article > span { color: var(--accent); font-size: .8rem; font-weight: 800; }
.promise h2 { margin: 8px 0; font-size: 1.3rem; }
.promise p { color: var(--muted); font-size: .92rem; }
.section { padding: 88px 0; }
.section__header { max-width: 650px; margin: 0 auto 40px; text-align: center; }
.section__header h2 { font-size: clamp(2.1rem,4vw,3.2rem); }
.section__header > p:last-child { margin-top: 14px; color: var(--muted); }
.flavor__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
.flavor { overflow: hidden; border: 1px solid var(--line); border-radius: 20px; background: #fff; }
.flavor__art { position: relative; height: 220px; display: grid; place-items: center; overflow: hidden; }
.flavor__art--pink { background: #f9dce0; }.flavor__art--chocolate { background: #e9d8c8; }.flavor__art--vanilla { background: #f5e9c9; }
.flavor__tag { position: absolute; top: 16px; left: 16px; z-index: 3; padding: 6px 11px; border-radius: 999px; background: #fffaf2; color: var(--ink); font-size: .72rem; font-weight: 800; }
.flavor__scoop { position: absolute; z-index: 2; top: 42px; width: 116px; height: 105px; border-radius: 55% 55% 48% 48%; background: #ed8e9d; box-shadow: inset -10px -9px 0 #0000000d; }
.flavor__art--chocolate .flavor__scoop { background: #81513f; }.flavor__art--vanilla .flavor__scoop { background: #f3d99b; }
.flavor__cup { position: absolute; top: 126px; width: 100px; height: 65px; border-radius: 8px 8px 28px 28px; background: #fffaf2; clip-path: polygon(0 0,100% 0,82% 100%,18% 100%); }
.flavor__body { display: flex; align-items: flex-start; justify-content: space-between; gap: 12px; padding: 20px; }
.flavor h3 { font-size: 1.25rem; }.flavor p { margin-top: 7px; color: var(--muted); font-size: .86rem; }
.flavor__body strong { color: var(--accent); white-space: nowrap; }
.note { margin-top: 24px; color: var(--muted); text-align: center; font-size: .8rem; }
.about { padding: 80px 0; background: #f8eadb; }
.about__grid { display: grid; grid-template-columns: .9fr 1.1fr; align-items: center; gap: 72px; }
.about__art { position: relative; min-height: 330px; display: grid; place-items: center; border-radius: 24px; background: #f4c9a8; overflow: hidden; }
.about__scoop { position: absolute; top: 58px; width: 150px; height: 135px; border-radius: 55%; background: #f08c9d; z-index: 2; }
.about__cone { position: absolute; top: 166px; width: 0; height: 0; border-left: 95px solid transparent; border-right: 95px solid transparent; border-top: 165px solid #c9874f; }
.fruit { position: absolute; width: 48px; height: 48px; border-radius: 50%; background: #d96751; }.fruit--one { left: 18%; top: 20%; }.fruit--two { right: 17%; bottom: 18%; background: #f1c35e; }
.about__copy h2 { max-width: 16ch; font-size: clamp(2.2rem,4vw,3.3rem); }
.about__copy > p:not(.eyebrow) { max-width: 52ch; margin-top: 18px; color: var(--muted); }
.text-link { display: inline-flex; gap: 12px; margin-top: 24px; color: var(--accent); font-weight: 800; text-decoration: none; }
.contact { padding: 76px 0; background: #3b2925; color: #fffaf2; }
.contact .eyebrow { color: #f3a18e; }.contact h2 { max-width: 14ch; font-size: clamp(2.2rem,4vw,3.3rem); }
.contact__inner { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 60px; }
.contact__inner > div:first-child > p:last-child { margin-top: 16px; color: #d8c7bd; }
.contact__details { display: grid; gap: 18px; }.contact__details div { display: grid; gap: 3px; padding-bottom: 14px; border-bottom: 1px solid #59463f; }
.contact__details span { color: #d8c7bd; font-size: .8rem; }.contact__details strong { font-size: .95rem; }
.contact__details .button { justify-self: start; margin-top: 4px; }
.footer { padding: 26px 0; background: #291c19; color: #cdbbb1; font-size: .8rem; }
.footer__inner { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 12px; }.footer strong { color: #fff; font-family: 'DM Serif Display',serif; font-size: 1rem; }
@media (max-width: 800px) {
  .hero__grid,.about__grid,.contact__inner { grid-template-columns: 1fr; }
  .hero__art { min-height: 330px; }.about__art { min-height: 280px; }
  .about__grid { gap: 36px; }.flavor__grid { grid-template-columns: repeat(2,1fr); }
}
@media (max-width: 560px) {
  .container { width: min(1120px,100% - 36px); }.hero { padding: 54px 0; }
  .hero__art { min-height: 280px; transform: scale(.86); margin: -12px 0; }
  .promise__grid,.flavor__grid { grid-template-columns: 1fr; }.section { padding: 64px 0; }
  .flavor__art { height: 200px; }.footer__inner { flex-direction: column; }
}
</style>
