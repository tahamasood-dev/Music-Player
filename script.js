/* =========================================================
   1. DATA  - edit these lists to change the content
   col = three ink colours used for the cover art
   root = base note in Hz, scale = notes (semitones), bpm = speed
   ========================================================= */
const artists = [
  { name: "The Weeknd", wiki: "The_Weeknd",     genre: "R&B / Synth-pop",  from: "Toronto, Canada",     bio: "Canadian singer-songwriter Abel Tesfaye, known for dark, cinematic R&B and 80s-flavoured synth-pop." },
  { name: "Coldplay", wiki: "Coldplay",       genre: "Rock / Pop",       from: "London, UK",          bio: "British band formed in London in 1996, known for anthemic, piano-led songs and huge live shows." },
  { name: "Billie Eilish", wiki: "Billie_Eilish",  genre: "Alt-pop",          from: "Los Angeles, USA",    bio: "Singer-songwriter who broke out in 2019 with a quiet, bass-heavy pop sound made with her brother Finneas." },
  { name: "Dua Lipa", wiki: "Dua_Lipa",       genre: "Dance-pop",        from: "London, UK",          bio: "British pop singer known for disco-inspired, upbeat dance-pop." },
  { name: "Daft Punk", wiki: "Daft_Punk",      genre: "Electronic / House", from: "Paris, France",     bio: "French electronic duo who shaped modern house and dance music before splitting in 2021." },
  { name: "Arctic Monkeys", wiki: "Arctic_Monkeys", genre: "Indie rock",       from: "Sheffield, UK",       bio: "Indie rock band formed in Sheffield in 2002, known for sharp lyrics and heavy guitar riffs." },
  { name: "Tame Impala", wiki: "Tame_Impala",    genre: "Psychedelic pop",  from: "Perth, Australia",    bio: "The psychedelic project of Australian musician Kevin Parker." },
  { name: "Bad Bunny", wiki: "Bad_Bunny",      genre: "Latin trap / Reggaeton", from: "Puerto Rico",   bio: "Puerto Rican artist who helped take Latin trap and reggaeton to a global audience." },
  { name: "Taylor Swift",   wiki: "Taylor_Swift",   genre: "Pop / Country-pop", from: "Pennsylvania, USA", bio: "American singer-songwriter known for story-driven songwriting and for reinventing her sound from album to album." },
  { name: "Ed Sheeran",     wiki: "Ed_Sheeran",     genre: "Pop / Folk-pop",    from: "England, UK",       bio: "English singer-songwriter who builds songs live with just a guitar and a loop pedal." },
  { name: "Kendrick Lamar", wiki: "Kendrick_Lamar", genre: "Hip-hop",           from: "Compton, USA",      bio: "Rapper from Compton, California, known for detailed storytelling and a Pulitzer Prize for music in 2018." },
  { name: "Imagine Dragons",wiki: "Imagine_Dragons",genre: "Pop rock",          from: "Las Vegas, USA",    bio: "Rock band formed in Las Vegas in 2008, known for big, stadium-sized choruses." },
  { name: "Adele",          wiki: "Adele",          genre: "Soul / Pop",        from: "London, UK",        bio: "English singer known for powerful ballads and a deep, soulful voice." },
  { name: "Bruno Mars",     wiki: "Bruno_Mars",     genre: "Pop / Funk",        from: "Honolulu, USA",     bio: "Hawaiian-born singer who blends pop with funk, soul and R&B." },
  { name: "Post Malone",    wiki: "Post_Malone",    genre: "Hip-hop / Pop",     from: "New York, USA",     bio: "American rapper and singer who mixes hip-hop, pop and rock." },
  { name: "Rihanna",        wiki: "Rihanna",        genre: "Pop / R&B",         from: "Barbados",          bio: "Barbadian singer and businesswoman with a long run of global pop and R&B hits." },
  { name: "Linkin Park",    wiki: "Linkin_Park",    genre: "Rock / Nu metal",   from: "California, USA",   bio: "American band formed in 1996 that mixed rock, rap and electronics." },
  { name: "Eminem",         wiki: "Eminem",         genre: "Hip-hop",           from: "Detroit, USA",      bio: "Detroit rapper known for fast, intricate rhymes and one of the best-selling artists of all time." },
  { name: "Atif Aslam",     wiki: "Atif_Aslam",     genre: "Pop / Playback",    from: "Pakistan",          bio: "Pakistani singer and actor, known for his voice in Urdu and Hindi songs." },
  { name: "Nusrat Fateh Ali Khan", wiki: "Nusrat_Fateh_Ali_Khan", genre: "Qawwali", from: "Faisalabad, Pakistan", bio: "Legendary Pakistani qawwali singer who took Sufi devotional music to audiences around the world." }
];

// ar = index in the artists list above. Add your own albums here!
const P = "#ff4fa3", B = "#2a3cff", Y = "#ffd400", K = "#14142b", W = "#e8edf1";
const albums = [
  { t: "After Hours", song: "Blinding Lights",       ar: 0, cat: "R&B",        col: [P, K, B], root: 146.8, scale: [0,3,7,10,12], bpm: 108, wave: "sawtooth" },
  { t: "Starboy", song: "Starboy",           ar: 0, cat: "R&B",        col: [Y, K, P], root: 164.8, scale: [0,3,5,7,10],  bpm: 96,  wave: "square" },
  { t: "Dawn FM", song: "Take My Breath",           ar: 0, cat: "Pop",        col: [B, P, Y], root: 174.6, scale: [0,4,7,9,11],  bpm: 118, wave: "sawtooth" },
  { t: "Parachutes", song: "Yellow",        ar: 1, cat: "Rock",       col: [Y, B, W], root: 196,   scale: [0,2,4,7,9],   bpm: 84,  wave: "triangle" },
  { t: "A Rush of Blood to the Head", song: "The Scientist", ar: 1, cat: "Rock", col: [P, Y, K], root: 220, scale: [0,2,5,7,9],  bpm: 92,  wave: "triangle" },
  { t: "Music of the Spheres", song: "My Universe", ar: 1, cat: "Pop",     col: [B, Y, P], root: 207.7, scale: [0,4,7,11,12], bpm: 110, wave: "sine" },
  { t: "Happier Than Ever", song: "Happier Than Ever", ar: 2, cat: "Pop",        col: [Y, P, W], root: 185,   scale: [0,3,5,8,10],  bpm: 76,  wave: "sine" },
  { t: "When We All Fall Asleep", song: "bad guy", ar: 2, cat: "Pop",  col: [K, P, Y], root: 123.5, scale: [0,1,5,7,8],   bpm: 100, wave: "sawtooth" },
  { t: "Future Nostalgia", song: "Levitating",  ar: 3, cat: "Pop",        col: [P, B, Y], root: 164.8, scale: [0,2,4,7,9],   bpm: 118, wave: "square" },
  { t: "Discovery", song: "One More Time",         ar: 4, cat: "Electronic", col: [B, P, Y], root: 196,   scale: [0,4,7,9,12],  bpm: 124, wave: "square" },
  { t: "Random Access Memories", song: "Get Lucky", ar: 4, cat: "Electronic", col: [Y, K, W], root: 146.8, scale: [0,3,7,10,14], bpm: 112, wave: "triangle" },
  { t: "AM", song: "Do I Wanna Know?",                ar: 5, cat: "Rock",       col: [K, Y, P], root: 130.8, scale: [0,3,5,7,10],  bpm: 98,  wave: "sawtooth" },
  { t: "Currents", song: "The Less I Know the Better",          ar: 6, cat: "Electronic", col: [P, Y, B], root: 174.6, scale: [0,2,5,7,10],  bpm: 100, wave: "sine" },
  { t: "Un Verano Sin Ti", song: "Me Porto Bonito",  ar: 7, cat: "Latin",      col: [Y, B, P], root: 185,   scale: [0,3,7,8,12],  bpm: 96,  wave: "triangle" }
];

const SC = [[0,3,5,7,10], [0,2,4,7,9], [0,3,7,10,12], [0,2,5,7,9]];
const mk = (t, song, ar, cat, col, root, bpm, wave, sc = 0) => ({ t, song, ar, cat, col, root, bpm, wave, scale: SC[sc] });
albums.push(
  mk("1989",                  "Shake It Off",            8,  "Pop",     [P, Y, B], 196,   120, "square", 1),
  mk("folklore",              "cardigan",                8,  "Pop",     [W, K, P], 174.6,  80, "sine", 3),
  mk("Divide",                "Shape of You",            9,  "Pop",     [Y, P, K], 220,    96, "triangle", 0),
  mk("good kid, m.A.A.d city","Swimming Pools (Drank)",  10, "Hip-hop", [K, Y, P], 130.8,  74, "sawtooth", 2),
  mk("DAMN.",                 "HUMBLE.",                 10, "Hip-hop", [P, K, Y], 123.5,  76, "square", 0),
  mk("Evolve",                "Believer",                11, "Rock",    [B, P, W], 164.8, 125, "sawtooth", 3),
  mk("21",                    "Rolling in the Deep",     12, "Pop",     [K, B, Y], 185,   105, "triangle", 2),
  mk("25",                    "Hello",                   12, "Pop",     [W, P, B], 174.6,  79, "sine", 3),
  mk("24K Magic",             "24K Magic",               13, "Pop",     [Y, P, B], 207.7, 107, "square", 1),
  mk("beerbongs & bentleys",  "Better Now",              14, "Hip-hop", [B, K, P], 146.8,  98, "triangle", 0),
  mk("Anti",                  "Work",                    15, "R&B",     [P, W, K], 155.6,  92, "sawtooth", 2),
  mk("Hybrid Theory",         "In the End",              16, "Rock",    [K, B, P], 138.6, 105, "sawtooth", 0),
  mk("The Eminem Show",       "Without Me",              17, "Hip-hop", [Y, K, B], 146.8, 112, "square", 2),
  mk("Doorie",                "Doorie",                  18, "World",   [P, Y, W], 220,    88, "triangle", 3),
  mk("Mustt Mustt",           "Mustt Mustt",             19, "World",   [Y, B, K], 196,   100, "sine", 1)
);

const playlists = [
  { name: "Late Night Drive",  ids: [0, 1, 11, 12],   bg: "var(--yellow)" },
  { name: "Stadium Singalong", ids: [3, 4, 5],        bg: "var(--pink)" },
  { name: "Dance Floor",       ids: [9, 8, 13, 2],    bg: "#b9c4ff" },
  { name: "Quiet Hours",       ids: [6, 7, 10],       bg: "#ffffff" },
  { name: "Hip-Hop Heat",      ids: [17, 18, 23, 26], bg: "#ff9ccc" },
  { name: "Sing Along",        ids: [14, 16, 20, 21, 22], bg: "#fff3a0" },
  { name: "Desi Vibes",        ids: [27, 28],         bg: "#c4ffd9" }
];

/* =========================================================
   2. HELPERS
   ========================================================= */
const $ = (s) => document.querySelector(s);
const coverStyle = (al) => `--a:${al.col[0]};--b:${al.col[1]};--c:${al.col[2]}`;
// small round "face" badge. Shows the photo if loaded, otherwise the artist's initials
const faceHTML = (n, size = "") => {
  const a = artists[n];
  const inner = a.img ? `<img src="${a.img}" alt="${a.name}">` : a.name.split(" ").map((w) => w[0]).slice(0, 2).join("");
  return `<span class="face ${size}">${inner}</span>`;
};

// fetches each artist's photo from Wikipedia, then redraws the page
async function loadFaces() {
  await Promise.all(artists.map(async (a) => {
    try {
      const res = await fetch("https://en.wikipedia.org/api/rest_v1/page/summary/" + a.wiki);
      const data = await res.json();
      a.img = data.thumbnail ? data.thumbnail.source : null;
    } catch (err) { a.img = null; }      // offline: initials are shown instead
  }));
  renderGrid(curCat);
  renderArtist(curArtist);
}
let curCat = "All", curArtist = 0;

const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;

/* =========================================================
   3. BUILD THE PAGE FROM THE DATA
   ========================================================= */
function cardHTML(i) {
  const al = albums[i];
  return `<button class="card" data-i="${i}">
    <div class="art"><div class="cover" style="${coverStyle(al)}"></div>${faceHTML(al.ar)}</div>
    <strong>${al.t}</strong><span>${artists[al.ar].name}</span></button>`;
}

function renderGrid(cat = "All") {
  curCat = cat;
  const cats = ["All", ...new Set(albums.map((a) => a.cat))];
  $("#chips").innerHTML = cats.map((c) => `<button class="chip ${c === cat ? "on" : ""}" data-cat="${c}">${c}</button>`).join("");
  $("#grid").innerHTML = albums.map((a, i) => (cat === "All" || a.cat === cat ? cardHTML(i) : "")).join("");
  markNowPlaying();
}

function renderLists() {
  $("#lists").innerHTML = playlists.map((p, n) =>
    `<button class="list" data-p="${n}" style="background:${p.bg}"><b>${p.name}</b><span>${p.ids.length} albums &middot; tap to play</span></button>`).join("");
}

function renderArtist(n = 0) {
  curArtist = n;
  $("#artistPick").innerHTML = artists.map((a, i) => `<button class="${i === n ? "on" : ""}" data-a="${i}">${a.name}</button>`).join("");
  const a = artists[n];
  const mine = albums.map((al, i) => (al.ar === n ? i : -1)).filter((i) => i >= 0);
  $("#artistCard").innerHTML = `<div class="head">${faceHTML(n, "big")}<div><h3>${a.name}</h3><strong>${a.genre} &middot; ${a.from}</strong></div></div>
    <p>${a.bio}</p><div class="mini">${mine.map(cardHTML).join("")}</div>`;
  markNowPlaying();
}

function markNowPlaying() {
  document.querySelectorAll(".card").forEach((c) => c.classList.toggle("now-playing", +c.dataset.i === cur));
}

/* =========================================================
   4. THE PLAYER  (sound is generated in the browser - no mp3 files needed)
   ========================================================= */
let queue = albums.map((_, i) => i);   // the list of tracks that next/prev move through
let cur = -1, playing = false;
let ctx, master, timer, step = 0, elapsed = 0, beat = 0;
const DURATION = 60;                   // each fake track is 60 seconds long

function initAudio() {
  if (ctx) return;
  ctx = new (window.AudioContext || window.webkitAudioContext)();
  master = ctx.createGain();
  master.gain.value = +$("#vol").value;
  master.connect(ctx.destination);
}

// plays one short note (and a kick drum on every 4th step)
function playNote(al) {
  const t = ctx.currentTime;
  let semi = al.scale[(step * 2 + (step >> 3)) % al.scale.length];
  if (step % 4 === 3) semi += 12;
  const o = ctx.createOscillator(), g = ctx.createGain();
  o.type = al.wave;
  o.frequency.value = al.root * 2 ** (semi / 12);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.25, t + 0.02);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
  o.connect(g).connect(master);
  o.start(t); o.stop(t + 0.45);
  if (step % 4 === 0) {
    beat = 1;   // makes the background pulse
    const k = ctx.createOscillator(), kg = ctx.createGain();
    k.frequency.setValueAtTime(140, t);
    k.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    kg.gain.setValueAtTime(0.6, t);
    kg.gain.exponentialRampToValueAtTime(0.0001, t + 0.2);
    k.connect(kg).connect(master);
    k.start(t); k.stop(t + 0.25);
  }
  step++;
}

// The real-song player. It plays a 30-second official preview from Apple's iTunes Search API.
let seeking = false;                                    // true while you drag the progress bar
function setProgress(frac, secs) {
  if (seeking) return;
  const bar = $("#seek");
  bar.value = frac * 1000;
  bar.style.setProperty("--p", frac * 100 + "%");
  $("#time").textContent = fmt(secs);
}
const audio = new Audio();
audio.volume = 0.6;
audio.ontimeupdate = () => {
  if (!audio.duration) return;
  setProgress(audio.currentTime / audio.duration, audio.currentTime);
  $("#dur").textContent = fmt(audio.duration);
};
audio.onended = () => next();
audio.onerror = () => {
  if (cur < 0 || !playing) return;
  console.warn("Preview file failed to load");
  albums[cur].url = undefined;                     // forget it so we search again next time
  startPlayback();                                 // plays demo sound this time
};

// Asks Apple's search service for songs. Uses a <script> tag (JSONP) because browsers
// often block normal fetch() requests to it.
function itunesSearch(term) {
  return new Promise((resolve, reject) => {
    const cb = "itunes_" + Math.random().toString(36).slice(2);
    const tag = document.createElement("script");
    const cleanup = () => { delete window[cb]; tag.remove(); };
    window[cb] = (data) => { cleanup(); resolve(data); };
    tag.onerror = () => { cleanup(); reject(new Error("request blocked")); };
    setTimeout(() => { cleanup(); reject(new Error("timed out")); }, 8000);
    tag.src = `https://itunes.apple.com/search?term=${encodeURIComponent(term)}&entity=song&limit=25&callback=${cb}`;
    document.head.appendChild(tag);
  });
}

// Finds the audio for a song. Order: your own file first, then Apple's 30-second preview.
async function loadPreview(al) {
  if (al.file) { al.url = al.file; return al.url; }    // full song you added yourself
  if (al.url) return al.url;                            // already found earlier
  const artist = artists[al.ar].name;
  const words = artist.toLowerCase().split(" ").filter((w) => w.length > 3);   // e.g. "weeknd"
  const clean = (t) => t.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  const terms = [artist + " " + al.song, al.song, artist + " " + al.t];
  let failed = 0;
  for (const term of terms) {
    try {
      const data = await itunesSearch(term);
      const hits = data.results.filter((r) => r.previewUrl && words.some((w) => r.artistName.toLowerCase().includes(w)));
      const best = hits.find((r) => clean(r.trackName).startsWith(clean(al.song))) || hits[0];
      if (best) { al.url = best.previewUrl; return al.url; }
    } catch (err) { failed++; console.warn("Lookup failed for", term, err.message); }
  }
  al.why = failed === terms.length ? "could not reach Apple, check internet" : "no match found";
  return null;
}

function startPlayback() {
  const al = albums[cur];
  playing = true;
  if (al.url) {
    audio.play().catch((err) => {
      if (err.name === "AbortError") return;       // you clicked another song, ignore
      console.warn("Browser blocked playback - press play", err);
      playing = false; updateUI();                 // just wait for the next press of play
    });
  } else {
    // fallback: generated music
    initAudio();
    ctx.resume();
    clearInterval(timer);
    const ms = 60000 / al.bpm / 2;
    timer = setInterval(() => {
      playNote(al);
      elapsed += ms / 1000;
      setProgress(elapsed / DURATION, elapsed);
      if (elapsed >= DURATION) next();
    }, ms);
  }
  updateUI();
}

function pausePlayback() {
  playing = false;
  clearInterval(timer);
  audio.pause();
  updateUI();
}

function choose(i, newQueue) {
  if (newQueue) queue = newQueue;
  cur = i; elapsed = 0; step = 0;
  const al = albums[i];
  audio.pause(); clearInterval(timer);
  setProgress(0, 0);
  $("#dur").textContent = "0:30";
  $("#pTitle").textContent = al.song;
  $("#pArtist").textContent = artists[al.ar].name + " - " + al.t;
  $("#pCover").style.cssText = coverStyle(al);
  loadPreview(al).then((url) => {
    if (cur !== i) return;           // you clicked something else meanwhile
    if (url) audio.src = url;
    else $("#pArtist").textContent += " (" + (al.why || "no preview") + ", demo sound)";
    startPlayback();
  });
}

function toggle() {
  if (cur < 0) return choose(queue[0]);
  playing ? pausePlayback() : startPlayback();
}
function next() { choose(queue[(queue.indexOf(cur) + 1) % queue.length]); }
function prev() { choose(queue[(queue.indexOf(cur) - 1 + queue.length) % queue.length]); }

function updateUI() {
  $("#play").innerHTML = playing ? "&#10074;&#10074;" : "&#9654;";
  $("#heroPlay").textContent = playing ? "Pause" : "Play something";
  $("#disc").classList.toggle("spinning", playing);
  markNowPlaying();
}

/* =========================================================
   5. EVENTS (what happens when you click things)
   ========================================================= */
document.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  const chip = e.target.closest(".chip");
  const list = e.target.closest(".list");
  const art = e.target.closest("[data-a]");
  if (card) choose(+card.dataset.i, albums.map((_, i) => i));
  else if (chip) renderGrid(chip.dataset.cat);
  else if (list) { const ids = playlists[+list.dataset.p].ids; choose(ids[0], ids); }
  else if (art) renderArtist(+art.dataset.a);
});
$("#play").onclick = toggle;
$("#heroPlay").onclick = toggle;
$("#next").onclick = next;
$("#prev").onclick = prev;
// DRAG TO SEEK: move the bar to jump anywhere in the song
const seekBar = $("#seek");
const isReal = () => cur >= 0 && albums[cur].url && audio.duration;
seekBar.addEventListener("input", () => {            // fires while you drag
  seeking = true;
  const f = seekBar.value / 1000;
  seekBar.style.setProperty("--p", f * 100 + "%");
  $("#time").textContent = fmt(f * (isReal() ? audio.duration : DURATION));
});
seekBar.addEventListener("change", () => {           // fires when you let go
  const f = seekBar.value / 1000;
  if (isReal()) audio.currentTime = f * audio.duration;
  else elapsed = f * DURATION;
  seeking = false;
});
$("#vol").oninput = (e) => { audio.volume = +e.target.value; if (master) master.gain.value = +e.target.value; };

/* =========================================================
   6. SCROLL-DRIVEN 3D: layers of the vinyl separate as you scroll
   ========================================================= */
const disc = $("#disc");
function onScroll() {
  const p = Math.min(window.scrollY / 500, 1);          // 0 at top, 1 after 500px
  disc.style.setProperty("--spread", p);
  disc.style.setProperty("--rx", 58 - p * 28 + "deg");  // tilts toward the viewer
  disc.style.setProperty("--rz", -20 + p * 35 + "deg");  // turns a little
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* =========================================================
   7. MOUSE: tilt the vinyl and the album cards
   ========================================================= */
let mx = 0.5, my = 0.5;
document.addEventListener("pointermove", (e) => {
  mx = e.clientX / innerWidth; my = e.clientY / innerHeight;
  disc.style.setProperty("--ry", (mx - 0.5) * 24 + "deg");
  const cv = e.target.closest(".card .cover") || e.target.closest(".card")?.querySelector(".cover");
  if (cv) {
    const r = cv.getBoundingClientRect();
    cv.style.setProperty("--ty", ((e.clientX - r.left) / r.width - 0.5) * 22 + "deg");
    cv.style.setProperty("--tx", (0.5 - (e.clientY - r.top) / r.height) * 22 + "deg");
  }
});
document.addEventListener("pointerout", (e) => {
  const cv = e.target.closest(".card")?.querySelector(".cover");
  if (cv) { cv.style.setProperty("--tx", "0deg"); cv.style.setProperty("--ty", "0deg"); }
});

/* =========================================================
   8. 3D BACKGROUND: flying vinyl discs (canvas, no library)
   Each disc has x, y and depth z. Closer discs look bigger.
   Scrolling speeds them up, and the kick drum makes them pulse.
   ========================================================= */
const cvs = $("#bg"), g = cvs.getContext("2d");
const inks = [P, B, Y, W];
let cw, ch, lastY = scrollY, boost = 0;
const discs = Array.from({ length: 46 }, () => ({
  x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random(),
  c: inks[Math.floor(Math.random() * inks.length)]
}));
function resize() { cw = cvs.width = innerWidth; ch = cvs.height = innerHeight; }
resize(); addEventListener("resize", resize);

function frame() {
  g.clearRect(0, 0, cw, ch);
  boost += (Math.abs(scrollY - lastY) / 60 - boost) * 0.1;   // scroll speed
  lastY = scrollY;
  const speed = 0.0012 + (playing ? 0.0025 : 0) + Math.min(boost, 1) * 0.01;
  beat *= 0.9;
  discs.sort((a, b) => b.z - a.z);                            // draw far ones first
  for (const d of discs) {
    d.z -= speed;
    if (d.z <= 0.02) { d.z = 1; d.x = Math.random() * 2 - 1; d.y = Math.random() * 2 - 1; }
    const s = 1 / (d.z * 2.2 + 0.2);                          // perspective scale
    const px = cw / 2 + (d.x - (mx - 0.5) * 0.4) * cw * 0.6 * s;
    const py = ch / 2 + (d.y - (my - 0.5) * 0.4) * ch * 0.6 * s;
    const r = (26 + beat * 8) * s;
    g.globalAlpha = Math.min(0.4, (1 - d.z) * 0.5);          // fade in from far away
    g.fillStyle = d.c;
    g.beginPath(); g.ellipse(px, py, r, r * 0.38, -0.35, 0, 7); g.fill();
    g.globalAlpha *= 1.6; g.strokeStyle = "#fff"; g.lineWidth = 1.5;
    g.beginPath(); g.ellipse(px, py, r * 0.35, r * 0.13, -0.35, 0, 7); g.stroke();  // the record's centre hole
  }
  requestAnimationFrame(frame);
}
if (matchMedia("(prefers-reduced-motion: reduce)").matches) { frame = () => {}; }
frame();

renderGrid();
renderLists();
renderArtist(0);
loadFaces();

/* =========================================================
   9. CUSTOM CURSOR: a dot that follows the mouse + a ring that trails behind it
   (only on computers with a mouse, not on phones)
   ========================================================= */
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  document.documentElement.classList.add("has-cursor");
  const dot = document.createElement("div");
  const ring = document.createElement("div");
  dot.className = "cur-dot";
  ring.className = "cur-ring";
  document.body.append(ring, dot);

  let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
  document.addEventListener("pointermove", (e) => {
    x = e.clientX; y = e.clientY;
    dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    dot.style.opacity = ring.style.opacity = 1;
    // grow the ring when the mouse is over something you can click
    ring.classList.toggle("hot", !!e.target.closest("a, button, input, .card, .chip, .list"));
  });
  document.addEventListener("pointerdown", () => ring.classList.add("down"));
  document.addEventListener("pointerup", () => ring.classList.remove("down"));
  document.documentElement.addEventListener("mouseleave", () => { dot.style.opacity = ring.style.opacity = 0; });

  (function follow() {                         // the ring moves 18% of the way to the mouse each frame
    rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    requestAnimationFrame(follow);
  })();
}