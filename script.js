/*
  LA NAVIDAD DE LA TÍA
  Personaliza los títulos y mensajes en el arreglo SURPRISES.
  Los días se desbloquean usando la fecha local del dispositivo.
*/
const SURPRISES = [
  { title: "¡Arranca la misión navideña!", body: "Bienvenida al calendario oficial de la tía. Hay 24 días para repartir sonrisas, descubrir recuerdos y confirmar que la Navidad es un estado mental.", extra: "Nivel de espíritu navideño: en evaluación. 🎄", icon: "🎄" },
  { title: "El comité de la tía se reúne", body: "Hoy se abre oficialmente la sesión extraordinaria para decidir quién trae los polvorones y quién se los come antes de tiempo.", extra: "Se aceptan alegaciones acompañadas de chocolate.", icon: "🍫" },
  { title: "Premio a la frase del año", body: "Este premio reconoce una frase de la tía que merece estar escrita en una placa de oro. La organización todavía está recopilando pruebas.", extra: "La tía no puede votar por sí misma. Bueno… puede intentarlo.", icon: "🏆" },
  { title: "Un recuerdo desbloqueado", body: "Hoy toca rescatar un recuerdo bonito. Cambia este texto por una anécdota vuestra que todavía os haga reír cuando la contáis.", extra: "Los recuerdos buenos no caducan.", icon: "📸" },
  { title: "Inspección oficial de Navidad", body: "Se informa a la tía de que queda nombrada inspectora de luces, decoración y ambiente navideño. El cargo es vitalicio y no está remunerado.", extra: "Aunque se aceptan bombones como complemento salarial.", icon: "✨" },
  { title: "Un pequeño chute de cariño", body: "Por si hoy nadie te lo ha dicho: haces que muchos momentos sean mejores solo por estar. Este calendario también es una forma de recordártelo.", extra: "Abrazo virtual enviado con éxito. 💌", icon: "💌" },
  { title: "Domingo de manta y película", body: "Tu misión de hoy: elegir una película navideña, preparar algo rico y no sentir ni una pizca de culpa por descansar.", extra: "Las tareas domésticas no cuentan como película.", icon: "🎬" },
  { title: "La foto del delito", body: "Aquí debería ir una foto vuestra especialmente absurda. De esas que no se pueden publicar sin convocar una reunión familiar primero.", extra: "Próximamente: exposición de pruebas.", icon: "🤳" },
  { title: "Diploma de paciencia", body: "Por tu paciencia, tus consejos y por aguantar las historias familiares que empiezan con «no te vas a creer lo que ha pasado…».", extra: "Diploma honorífico concedido por unanimidad.", icon: "📜" },
  { title: "El test importantísimo", body: "Pregunta del día: ¿qué es más navideño? A) Las luces. B) Los villancicos. C) Comer algo rico. D) Todo lo anterior y repetir postre.", extra: "Respuesta correcta: la que incluya postre.", icon: "❓" },
  { title: "Hoy mandas tú", body: "Hoy tienes permiso oficial para elegir el plan, la música y el postre. La democracia familiar ha hablado.", extra: "La organización recomienda chocolate.", icon: "👑" },
  { title: "Mitad de camino", body: "¡Ya llevamos doce días! Este calendario está hecho de pequeños detalles, pero sobre todo de ganas de sacarte una sonrisa.", extra: "Quedan doce sorpresas por descubrir.", icon: "🎁" },
  { title: "Una canción para ti", body: "Pon esa canción que siempre te cambia el humor o que te lleva a un recuerdo bonito. Si te apetece, dedica hoy tres minutos a escucharla sin hacer nada más.", extra: "Banda sonora del día: la que tú elijas. 🎶", icon: "🎵" },
  { title: "El ranking de la tía", body: "Categorías propuestas: mejor consejo, mejor abrazo, mejor anécdota y mejor capacidad para encontrar cosas que nadie más encuentra.", extra: "Ganadora de todas las categorías: pendiente de deliberación.", icon: "🥇" },
  { title: "Un mensaje sin motivo", body: "No hace falta que sea tu cumpleaños ni una fecha especial para recordarte que te quiero y que me alegro de tenerte en mi vida.", extra: "Hoy el regalo es decírtelo.", icon: "❤️" },
  { title: "La anécdota censurada", body: "Hoy toca recordar esa historia que siempre acaba con alguien diciendo «¡no cuentes eso!». Puedes cambiar este texto por vuestra anécdota familiar favorita.", extra: "Clasificación: apta para sobremesas largas.", icon: "🤫" },
  { title: "Premio a la mejor compañía", body: "Hay personas con las que hasta un plan sencillo se convierte en un buen recuerdo. Gracias por formar parte de los míos.", extra: "Este premio no necesita envoltorio.", icon: "🌟" },
  { title: "Modo Navidad: activado", body: "Instrucciones para hoy: respirar, disfrutar de algo pequeño y recordar que no todo tiene que salir perfecto para ser especial.", extra: "Nivel de exigencia: bajito. Nivel de cariño: altísimo.", icon: "🧣" },
  { title: "La tía tiene talento", body: "Tu misión es nombrar tres cosas que se te dan genial. No vale responder «nada», porque esa respuesta queda automáticamente anulada.", extra: "La modestia hoy está de vacaciones.", icon: "💫" },
  { title: "Cuenta atrás emocional", body: "Ya casi estamos en Navidad. Ojalá estos pequeños detalles hayan hecho que algún día normal se sintiera un poquito más especial.", extra: "Y todavía queda alguna sorpresa…", icon: "⏳" },
  { title: "Una pausa para agradecer", body: "Gracias por las veces que has estado, por las cosas que haces sin anunciarlas y por todos esos detalles que quizá no te digo lo suficiente.", extra: "Hoy te toca recibir un poquito de todo ese cariño.", icon: "🌷" },
  { title: "El tráiler de Nochebuena", body: "Próximamente: comida rica, conversaciones cruzadas, risas inesperadas y alguien diciendo que ya no puede comer más antes de aceptar otro trocito.", extra: "Basada en hechos familiares reales.", icon: "🍽️" },
  { title: "Mañana es el gran día", body: "Última parada antes de Navidad. Gracias por seguir abriendo estos sobres y por dejarte sorprender. Guarda un poquito de ilusión para mañana.", extra: "Pista: la última sorpresa viene con mucho cariño.", icon: "🔔" },
  { title: "Feliz Navidad, tía ❤️", body: "Esta web, los sobres y cada pequeño detalle tienen una intención muy sencilla: recordarte lo mucho que te quiero. Ojalá tengas una Navidad llena de calma, risas, abrazos y momentos que se queden contigo mucho tiempo. Gracias por ser tú.", extra: "La última sorpresa es un abrazo enorme. ¡Feliz Navidad!", icon: "🎄" }
];

const $ = (id) => document.getElementById(id);
const now = new Date();
const year = now.getMonth() === 11 && now.getDate() > 25 ? now.getFullYear() + 1 : now.getFullYear();
const christmas = new Date(year, 11, 25, 0, 0, 0);
const localMonth = now.getMonth(); // 0 = enero
const localDay = now.getDate();
const isDecember = localMonth === 11;
const activeDay = isDecember ? Math.min(localDay, 24) : (localMonth === 11 && localDay > 24 ? 24 : 0);

function updateCountdown() {
  const current = new Date();
  const targetYear = (current.getMonth() === 11 && current.getDate() >= 25) ? current.getFullYear() + 1 : current.getFullYear();
  const target = new Date(targetYear, 11, 25, 0, 0, 0);
  let diff = Math.max(0, target.getTime() - current.getTime());
  const dayMs = 24 * 60 * 60 * 1000;
  const hourMs = 60 * 60 * 1000;
  const minuteMs = 60 * 1000;
  const d = Math.floor(diff / dayMs); diff -= d * dayMs;
  const h = Math.floor(diff / hourMs); diff -= h * hourMs;
  const m = Math.floor(diff / minuteMs); diff -= m * minuteMs;
  const s = Math.floor(diff / 1000);
  $("days").textContent = String(d);
  $("hours").textContent = String(h).padStart(2, "0");
  $("minutes").textContent = String(m).padStart(2, "0");
  $("seconds").textContent = String(s).padStart(2, "0");
  $("countdown-title").textContent = current.getMonth() === 11 && current.getDate() === 25
    ? "¡Hoy es Navidad!"
    : "La cuenta atrás para Navidad";
}
updateCountdown();
setInterval(updateCountdown, 1000);

function getAvailableDay(date) {
  if (date.getMonth() !== 11) return 0;
  return Math.max(0, Math.min(24, date.getDate()));
}
const today = getAvailableDay(new Date());
$("today-note").textContent = today === 0
  ? "La primera sorpresa se desbloquea el 1 de diciembre."
  : today < 24
    ? `Hoy toca el sobre ${today}. ¡Vuelve mañana para el siguiente!`
    : "¡Has llegado al último sobre! Feliz Navidad.";

function showSurprise(day) {
  const surprise = SURPRISES[day - 1];
  $("surprise").scrollIntoView({ behavior: "smooth", block: "center" });
  $("surprise").querySelector(".surprise-icon").textContent = surprise.icon;
  $("surprise-title").textContent = surprise.title;
  $("surprise-body").textContent = surprise.body;
  $("surprise-extra").textContent = surprise.extra || "";
}

const grid = $("envelopes");
for (let day = 1; day <= 24; day++) {
  const button = document.createElement("button");
  button.className = "envelope";
  button.type = "button";
  const locked = day > today;
  button.disabled = locked;
  if (day === today) button.classList.add("is-today");
  if (day < today) button.classList.add("is-opened");
  button.setAttribute("aria-label", locked ? `Sobre ${day}, todavía cerrado` : `Abrir sorpresa del día ${day}`);
  button.innerHTML = `<span class="symbol" aria-hidden="true">${locked ? "✉" : (day === 24 ? "🎄" : "✦")}</span><span class="number">${String(day).padStart(2, "0")}</span><span class="label">${locked ? "CERRADO" : (day === today ? "HOY" : "ABRIR")}</span>`;
  button.addEventListener("click", () => showSurprise(day));
  grid.appendChild(button);
}

if (today > 0) {
  showSurprise(today);
} else {
  $("surprise").querySelector(".surprise-icon").textContent = "🎁";
  $("surprise-title").textContent = "La primera sorpresa te espera";
  $("surprise-body").textContent = "Vuelve el 1 de diciembre para abrir el primer sobre. Mientras tanto, la cuenta atrás ya está en marcha.";
  $("surprise-extra").textContent = "Pista: esta web está hecha especialmente para ti.";
}
