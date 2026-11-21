<template>
  <main class="landing">
    <header class="topbar">
      <a class="brand" href="#" aria-label="Vitrine de sites">V<span>.</span></a>
      <span class="topbar-label">VITRINE DE PROJETOS</span>
    </header>

    <section class="intro">
      <p class="eyebrow">DESENVOLVIMENTO WEB · PORTFÓLIO</p>
      <h1>Projetos que ganham<br /><span>vida na web.</span></h1>
      <p class="description">
        Uma seleção de páginas demonstrativas. Escolha um projeto para explorar
        seu layout, seus recursos e sua experiência de navegação.
      </p>
    </section>

    <section class="projects" aria-labelledby="projects-title">
      <div class="section-heading">
        <h2 id="projects-title">Projetos disponíveis</h2>
        <span>03 EXPERIMENTOS</span>
      </div>

      <div class="project-grid">
        <RouterLink to="/site1" class="project-card card-one">
          <div class="card-top"><span>01 / INSTITUCIONAL</span><span class="arrow">↗</span></div>
          <div class="preview preview-one"><div class="preview-window"><i></i><i></i><i></i><b></b><b></b></div></div>
          <div class="card-bottom"><div><h3>Site 01</h3><p>Uma experiência institucional.</p></div><span class="visit">Explorar ↗</span></div>
        </RouterLink>

        <RouterLink to="/site2" class="project-card card-two">
          <div class="card-top"><span>02 / APRESENTAÇÃO</span><span class="arrow">↗</span></div>
          <div class="preview preview-two"><div class="preview-window"><i></i><b></b><b></b><b></b></div></div>
          <div class="card-bottom"><div><h3>Site 02</h3><p>Uma proposta visual diferente.</p></div><span class="visit">Explorar ↗</span></div>
        </RouterLink>

        <RouterLink to="/site3" class="project-card card-three">
          <div class="card-top"><span>03 / LANDING PAGE</span><span class="arrow">↗</span></div>
          <div class="preview preview-three"><div class="preview-window"><i></i><i></i><b></b><b></b></div></div>
          <div class="card-bottom"><div><h3>Site 03</h3><p>Uma landing page demonstrativa.</p></div><span class="visit">Explorar ↗</span></div>
        </RouterLink>
      </div>
    </section>

    <footer><span>VITRINE DE SITES</span><span>DESENVOLVIDO POR WENDERSON</span></footer>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');

:global(*) { box-sizing: border-box; }
:global(body) { margin: 0; background: #f4f3ef; color: #20211f; font-family: 'Manrope', sans-serif; }
.landing { max-width: 1180px; min-height: 100vh; margin: 0 auto; padding: 0 44px; }
.topbar { height: 82px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #deddd7; }
.brand { color: #20211f; font-size: 31px; font-weight: 800; text-decoration: none; letter-spacing: -3px; }
.brand span { color: #e16c45; }
.topbar-label, .eyebrow, .section-heading > span, .card-top, footer { font-family: 'DM Mono', monospace; font-size: 10px; letter-spacing: 1.2px; }
.topbar-label { color: #77776f; }
.intro { padding: 88px 0 78px; max-width: 690px; }
.eyebrow { color: #d66b48; margin: 0 0 22px; }
h1 { font-size: clamp(44px, 7vw, 76px); line-height: 1.04; letter-spacing: -5px; margin: 0; font-weight: 700; }
h1 span { color: #d66b48; }
.description { max-width: 510px; color: #77776f; font-size: 15px; line-height: 1.8; margin: 25px 0 0; }
.section-heading { display: flex; align-items: center; justify-content: space-between; margin-bottom: 19px; }
.section-heading h2 { font-size: 17px; letter-spacing: -.4px; margin: 0; }
.section-heading > span { color: #929189; }
.project-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 17px; }
.project-card { min-width: 0; padding: 15px; border: 1px solid #e1e0da; background: #fbfaf7; color: inherit; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }
.project-card:hover { transform: translateY(-5px); box-shadow: 0 14px 30px #24231b12; }
.card-top { display: flex; justify-content: space-between; align-items: center; color: #85847c; font-size: 9px; }
.arrow { font-size: 17px; color: #d66b48; }
.preview { height: 178px; margin: 15px 0 18px; display: grid; place-items: center; overflow: hidden; }
.preview-one { background: #e9e4da; }
.preview-two { background: #dce4df; }
.preview-three { background: #e9dfd8; }
.preview-window { width: 72%; height: 76%; padding: 14px; background: #fbfaf7; box-shadow: 0 8px 20px #0000000d; display: flex; flex-direction: column; gap: 8px; }
.preview-window i { display: block; width: 34%; height: 5px; background: #d66b48; }
.preview-window b { display: block; height: 9px; width: 85%; background: #d9d7d0; }
.preview-one .preview-window b:nth-of-type(2) { width: 58%; }
.preview-two .preview-window { background: #334c43; }
.preview-two .preview-window i { background: #d8c6a4; }
.preview-two .preview-window b { background: #82958a; }
.preview-two .preview-window b:last-child { width: 62%; }
.preview-three .preview-window { background: #faf5ef; }
.preview-three .preview-window i { width: 48%; background: #b86d50; }
.preview-three .preview-window b { width: 90%; background: #ded0c4; }
.preview-three .preview-window b:last-child { width: 55%; }
.card-bottom { display: flex; align-items: end; justify-content: space-between; gap: 8px; }
.card-bottom h3 { margin: 0 0 5px; font-size: 17px; letter-spacing: -.5px; }
.card-bottom p { margin: 0; color: #85847c; font-size: 11px; }
.visit { color: #d66b48; font-size: 10px; font-weight: 700; white-space: nowrap; }
footer { display: flex; justify-content: space-between; color: #929189; border-top: 1px solid #deddd7; margin-top: 75px; padding: 22px 0 28px; font-size: 9px; }
@media (max-width: 760px) {
  .landing { padding: 0 22px; }
  .intro { padding: 66px 0 54px; }
  h1 { letter-spacing: -3px; }
  .project-grid { grid-template-columns: 1fr; }
  .preview { height: 190px; }
  footer { gap: 15px; flex-wrap: wrap; }
}
</style>
