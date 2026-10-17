import "./style.css";
import { profile, projects } from "./data.js";
const projectCount = String(projects.length).padStart(2, "0");
const arrow = '<span aria-hidden="true">↗</span>';
document.querySelector("#app").innerHTML = `
<a class="skip" href="#main">Saltar al contenido</a>
<header><a class="logo" href="#inicio" aria-label="Lester David, inicio">LD<span class="logo-dot">.</span><span class="logo-label">SOFTWARE / PORTFOLIO</span></a><button class="menu-toggle" aria-expanded="false" aria-controls="nav">Menú <span>☰</span></button><nav id="nav"><a href="#proyectos">Proyectos</a><a href="#sobre-mi">Sobre mí</a><a class="nav-contact" href="#contacto">Hablemos ${arrow}</a></nav></header>
<main id="main"><section class="hero" id="inicio"><div class="hero-copy"><p class="eyebrow"><span class="status-dot"></span> DESARROLLO & GESTIÓN DE SOFTWARE</p><h1>Ideas claras.<br>Software con<br><span>propósito.</span></h1><p class="intro">Soy <strong>${profile.shortName}</strong>, estudiante de ${profile.degree}. Este es mi espacio para compartir lo que construyo y lo que viene después.</p><div class="hero-actions"><a class="button primary" href="#proyectos">Explorar proyectos <span>↓</span></a><a class="text-link" href="#contacto">Conectemos ${arrow}</a></div><div class="hero-note"><span>EN FORMACIÓN, EN MOVIMIENTO.</span><span>${profile.semester}</span></div></div><div class="hero-art" aria-hidden="true"><div class="art-top"><span>LD / DIGITAL SYSTEMS</span><span>01 — ${projectCount}</span></div><div class="orbital"><div class="orbit o1"></div><div class="orbit o2"></div><div class="orbit o3"></div><div class="core">&lt;LD /&gt;</div><span class="node n1"></span><span class="node n2"></span><span class="node n3"></span></div><div class="art-bottom"><span>IDEA → CÓDIGO → EXPERIENCIA</span><span class="cross">+</span></div></div></section>
<div class="section-strip"><span>PROYECTOS INTERACTIVOS. EXPLORACIÓN CONTINUA.</span><span>WEB / PRODUCTO / EXPERIENCIA</span></div>
<section class="projects section" id="proyectos"><div class="section-heading"><div><p class="eyebrow">01 / TRABAJO SELECCIONADO</p><h2>De la idea a la web<span>.</span></h2></div><p>Cinco proyectos, distintos contextos.<br>Una misma curiosidad por construir.</p></div><div class="filters" role="group" aria-label="Filtrar proyectos">${["Todos", ...new Set(projects.map((p) => p.category))].map((f, i) => `<button class="filter ${i === 0 ? "active" : ""}" aria-pressed="${i === 0}" data-filter="${f}">${f}${i === 0 ? ` <span>${projectCount}</span>` : ""}</button>`).join("")}</div><div class="project-grid">${projects.map((p) => `<article class="project-card" data-category="${p.category}"><button class="project-visual ${p.color}" data-project="${p.id}" aria-label="Ver detalles de ${p.name}"><div class="visual-top"><span>${p.type}</span><span>${p.number} / ${projectCount}</span></div><div class="visual-design"><div class="shape"></div><h3>${p.visual.replace("\n", "<br>")}</h3><p>${p.subtitle}</p></div><div class="visual-bottom"><span>IDENTIDAD VISUAL DEL PROYECTO</span><span class="round-arrow">↗</span></div></button><div class="project-info"><div><p>${p.category} <span>/ PROYECTO WEB</span></p><h3>${p.name}</h3></div><a class="project-open" href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Abrir ${p.name} en otra pestaña">${arrow}</a></div><p class="project-description">${p.description}</p><div class="project-actions"><a href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Ver demo de ${p.name}">Ver demo ${arrow}</a><a href="${p.repo}" target="_blank" rel="noopener noreferrer" aria-label="Ver código de ${p.name} en GitHub">Ver código ${arrow}</a></div></article>`).join("")}</div><p class="project-footnote">Las composiciones gráficas representan cada proyecto. Abre el sitio para explorar su versión publicada.</p></section>
<section class="about section" id="sobre-mi"><div class="about-title"><p class="eyebrow">02 / SOBRE MÍ</p><h2>Aprender.<br>Construir.<br><span>Seguir creciendo.</span></h2><div class="signature">Lester David <span>/ LD</span></div></div><div class="about-content"><p class="about-lead">Me interesa convertir ideas en experiencias digitales que se puedan usar, explorar y mejorar.</p><p>Soy ${profile.name}, estudiante de ${profile.semester} de ${profile.degree}. Mi portafolio reúne proyectos de turismo, presencia corporativa, educación, contenido y ecommerce: distintos escenarios para poner en práctica mi formación.</p><p>Estoy construyendo mi camino profesional con cada proyecto, combinando aprendizaje, desarrollo y atención a la experiencia de quien utiliza una web.</p><div class="education"><span class="small-label">FORMACIÓN ACTUAL</span><h3>${profile.degree}</h3><p>${profile.semester} <span>·</span> Etapa universitaria</p></div><div class="interests"><span>Desarrollo web</span><span>Experiencias digitales</span><span>Gestión de software</span></div></div></section>
<section class="contact section" id="contacto"><p class="eyebrow">03 / SIGUIENTE CONVERSACIÓN</p><div class="contact-heading"><h2>¿Tienes una idea?<br><span>Hablemos de ella.</span></h2><a class="contact-circle" href="mailto:${profile.email}" aria-label="Enviar un correo">↗</a></div><p class="contact-intro">Para conversar sobre proyectos, oportunidades o colaboraciones,<br>puedes contactarme directamente.</p><div class="contact-grid"><a class="contact-item" href="mailto:${profile.email}"><span>CORREO ELECTRÓNICO</span><strong>${profile.email}</strong><span class="contact-arrow">↗</span></a><a class="contact-item" href="https://wa.me/${profile.whatsapp}" target="_blank" rel="noopener noreferrer"><span>WHATSAPP</span><strong>${profile.phone}</strong><span class="contact-arrow">↗</span></a></div><button class="copy-email" id="copy-email">Copiar correo <span>⧉</span></button><p id="copy-status" class="sr-only" role="status"></p></section></main>
<footer><a class="logo" href="#inicio">LD<span class="logo-dot">.</span></a><p>© ${new Date().getFullYear()} ${profile.name}</p><a href="#inicio">Volver arriba ↑</a></footer>
<dialog id="project-dialog"><div class="dialog-top"><span class="eyebrow">DETALLES DEL PROYECTO</span><button class="dialog-close" aria-label="Cerrar detalles">✕</button></div><div id="dialog-content"></div></dialog>`;
document.querySelector(".menu-toggle").addEventListener("click", (e) => {
  const b = e.currentTarget;
  const open = b.getAttribute("aria-expanded") !== "true";
  b.setAttribute("aria-expanded", open);
  document.querySelector("nav").classList.toggle("open", open);
});
document.querySelectorAll("nav a").forEach((a) =>
  a.addEventListener("click", () => {
    document.querySelector("nav").classList.remove("open");
    document
      .querySelector(".menu-toggle")
      .setAttribute("aria-expanded", "false");
  }),
);
document.querySelectorAll(".filter").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((x) => {
      x.classList.toggle("active", x === b);
      x.setAttribute("aria-pressed", x === b);
    });
    document
      .querySelectorAll(".project-card")
      .forEach(
        (c) =>
          (c.hidden =
            b.dataset.filter !== "Todos" &&
            c.dataset.category !== b.dataset.filter),
      );
  }),
);
const dialog = document.querySelector("#project-dialog");
document.querySelectorAll("[data-project]").forEach((b) =>
  b.addEventListener("click", () => {
    const p = projects.find((p) => p.id === b.dataset.project);
    document.querySelector("#dialog-content").innerHTML =
      `<p class="dialog-category">${p.number} / ${p.type}</p><h2>${p.name}</h2><p>${p.details}</p><a class="button primary" href="${p.url}" target="_blank" rel="noopener noreferrer">Ver demo ${arrow}</a><a class="dialog-code" href="${p.repo}" target="_blank" rel="noopener noreferrer">Ver código en GitHub ${arrow}</a>`;
    dialog.showModal();
  }),
);
document
  .querySelector(".dialog-close")
  .addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    const r = dialog.getBoundingClientRect();
    if (
      e.clientX < r.left ||
      e.clientX > r.right ||
      e.clientY < r.top ||
      e.clientY > r.bottom
    )
      dialog.close();
  }
});
document.querySelector("#copy-email").addEventListener("click", async (e) => {
  const button = e.currentTarget;
  try {
    await navigator.clipboard.writeText(profile.email);
    button.innerHTML = "Correo copiado <span>✓</span>";
    document.querySelector("#copy-status").textContent =
      "Correo copiado al portapapeles";
  } catch {
    document.querySelector("#copy-status").classList.remove("sr-only");
    document.querySelector("#copy-status").textContent =
      "Copia este correo: " + profile.email;
  }
});
