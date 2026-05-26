export const lessons = [
  {
    id: 1,
    slug: "camp-magnetic-notiuni",
    title: "Câmpul Magnetic",
    subtitle: "Noțiuni fundamentale",
    color: "blue",
    icon: "🧲",
    intro: `Câmpul magnetic este o perturbație a spațiului produsă de sarcini electrice în mișcare (curent electric) sau de magneți permanenți. Îl caracterizăm prin vectorul <strong>inductiei magnetice B</strong> — cu cât B e mai mare, cu atât câmpul e mai puternic.

Gândește-te la câmpul magnetic ca la "influența" unui magnet sau conductor: nu poți vedea câmpul, dar îi simți efectul când pui o busolă sau un fir prin care curge curent în zona respectivă.`,
    formulas: [
      { name: "Inductia magnetică — Conductor rectiliniu", math: "B = \\dfrac{\\mu_0 I}{2\\pi r}", desc: "B scade cu distanța r față de conductor" },
      { name: "Inductia magnetică — Solenoid", math: "B = \\mu_0 n I", desc: "n = numărul de spire pe unitate de lungime [spire/m]" },
      { name: "Permeabilitatea vidului", math: "\\mu_0 = 4\\pi \\times 10^{-7} \\text{ T·m/A}", desc: "Constantă universală" },
      { name: "Unitate de măsură", math: "[B] = \\text{T (Tesla)}", desc: "1 T = 1 kg/(A·s²)" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["B", "Inductia magnetică", "T (Tesla)"],
      ["I", "Intensitatea curentului", "A (Amper)"],
      ["r", "Distanța față de conductor", "m (metri)"],
      ["n", "Număr spire/metru (solenoid)", "m⁻¹"],
      ["μ₀", "Permeabilitatea vidului", "4π×10⁻⁷ T·m/A"],
    ],
    tips: [
      { type: "info", icon: "💡", text: "La conductor rectiliniu: dublezi I → B se dublează. Dublezi r → B se înjumătățește." },
      { type: "info", icon: "🔵", text: "La solenoid: câmpul este UNIFORM în interior și aproape zero la exterior." },
      { type: "warn", icon: "⚠️", text: "n ≠ N. n = N/L (spire pe metru), nu numărul total de spire!" },
      { type: "exam", icon: "🎯", text: "La test: convertește întotdeauna r în metri și I în amperi înainte de a calcula." },
    ],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Solenoid%2C_cross_section%2C_labeled.svg/400px-Solenoid%2C_cross_section%2C_labeled.svg.png", caption: "Secțiune transversală printr-un solenoid" },
    quiz: [
      {
        q: "Care este unitatea de măsură a inductiei magnetice B?",
        options: ["Weber (Wb)", "Tesla (T)", "Henry (H)", "Farad (F)"],
        correct: 1,
        explanation: "Tesla (T) este unitatea SI pentru inductia magnetică B. Weber este pentru fluxul magnetic."
      },
      {
        q: "Un conductor rectiliniu este parcurs de curent I = 4 A. La distanța r = 2 cm față de conductor, câmpul B este:",
        options: ["4×10⁻⁵ T", "2×10⁻⁵ T", "8×10⁻⁵ T", "1×10⁻⁵ T"],
        correct: 0,
        explanation: "B = μ₀I/(2πr) = (4π×10⁻⁷ × 4)/(2π × 0.02) = 4×10⁻⁵ T"
      },
      {
        q: "Cum variază câmpul magnetic al unui solenoid dacă dublăm numărul de spire pe unitate de lungime?",
        options: ["Se înjumătățește", "Rămâne constant", "Se dublează", "Se împătreşte"],
        correct: 2,
        explanation: "B = μ₀nI — B este direct proporțional cu n, deci dacă n se dublează, B se dublează."
      },
      {
        q: "Ce reprezintă μ₀ = 4π×10⁻⁷ T·m/A?",
        options: ["Permitivitatea electrică a vidului", "Permeabilitatea magnetică a vidului", "Rezistivitatea vidului", "Constanta lui Faraday"],
        correct: 1,
        explanation: "μ₀ este permeabilitatea magnetică a vidului — arată cât de ușor se formează câmpul magnetic în vid."
      },
      {
        q: "Un solenoid are n = 500 spire/m și este parcurs de I = 2 A. Câmpul B în interior este:",
        options: ["4π×10⁻⁴ T", "2π×10⁻⁴ T", "π×10⁻⁴ T", "8π×10⁻⁴ T"],
        correct: 0,
        explanation: "B = μ₀nI = 4π×10⁻⁷ × 500 × 2 = 4π×10⁻⁴ T ≈ 1.26×10⁻³ T"
      },
    ],
    problems: [
      {
        title: "Conductor rectiliniu lung",
        difficulty: "Ușor",
        text: "Un conductor rectiliniu lung este parcurs de un curent I = 5 A. Determinați inductia magnetică la distanța r = 10 cm față de conductor.",
        given: "I = 5 A, r = 10 cm = 0,1 m, μ₀ = 4π×10⁻⁷ T·m/A",
        ask: "B = ?",
        steps: [
          "Identificăm formula pentru conductor rectiliniu: B = μ₀I / (2πr)",
          "Substituim valorile: B = (4π×10⁻⁷ × 5) / (2π × 0,1)",
          "Simplificăm: B = (4π×10⁻⁷ × 5) / (2π × 0,1) = (20π×10⁻⁷) / (0,2π)",
          "B = 20×10⁻⁷ / 0,2 = 100×10⁻⁷ = 10⁻⁵ T",
        ],
        answer: "B = 10⁻⁵ T = 10 μT"
      },
      {
        title: "Solenoid — determinarea curentului",
        difficulty: "Mediu",
        text: "Un solenoid de lungime L = 20 cm are N = 400 spire și produce un câmp magnetic B = 2,51×10⁻³ T în interior. Calculați intensitatea curentului care parcurge solenoidul.",
        given: "L = 20 cm = 0,2 m, N = 400 spire, B = 2,51×10⁻³ T",
        ask: "I = ?",
        steps: [
          "Calculăm n = N/L = 400/0,2 = 2000 spire/m",
          "Din formula B = μ₀nI extragem I: I = B / (μ₀n)",
          "I = 2,51×10⁻³ / (4π×10⁻⁷ × 2000)",
          "I = 2,51×10⁻³ / (8π×10⁻⁴) = 2,51×10⁻³ / (25,12×10⁻⁴)",
          "I ≈ 1 A",
        ],
        answer: "I = 1 A"
      }
    ]
  },

  {
    id: 2,
    slug: "forte-magnetice",
    title: "Forțele Magnetice",
    subtitle: "Forța Ampere și Forța Lorentz",
    color: "blue",
    icon: "⚡",
    intro: `Câmpul magnetic exercită forțe. Există două situații importante: forța pe un <strong>conductor parcurs de curent</strong> (forța Ampere) și forța pe o <strong>particulă încărcată în mișcare</strong> (forța Lorentz).

Cheia: forța magnetică este întotdeauna <strong>perpendiculară</strong> atât pe direcția câmpului B, cât și pe direcția curentului/vitezei. Asta înseamnă că nu efectuează lucru mecanic — schimbă direcția, nu viteza.`,
    formulas: [
      { name: "Forța Ampere (pe conductor)", math: "F = B I l \\sin\\alpha", desc: "α = unghiul dintre conductor și câmpul B; max la α = 90°" },
      { name: "Forța Lorentz (pe particulă)", math: "F_L = q v B \\sin\\alpha", desc: "q = sarcina particulei, v = viteza" },
      { name: "Raza traiectoriei circulare", math: "r = \\dfrac{mv}{qB}", desc: "Când v ⊥ B, particula descrie cerc" },
      { name: "Perioada mișcării circulare", math: "T = \\dfrac{2\\pi m}{qB}", desc: "T nu depinde de viteză! (ciclotron)" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["F", "Forța magnetică", "N (Newton)"],
      ["B", "Inductia magnetică", "T (Tesla)"],
      ["I", "Intensitatea curentului", "A (Amper)"],
      ["l", "Lungimea conductorului în câmp", "m"],
      ["α", "Unghiul conductor-câmp", "grade sau radiani"],
      ["q", "Sarcina particulei", "C (Coulomb)"],
      ["v", "Viteza particulei", "m/s"],
      ["m", "Masa particulei", "kg"],
    ],
    tips: [
      { type: "info", icon: "✋", text: "Regula mâinii drepte (sensul forței): degetul arătător → B, degetul mijlociu → I, policele → F." },
      { type: "info", icon: "💡", text: "Forța este maximă când conductorul/particula se mișcă perpendicular pe B (α = 90°, sin90° = 1)." },
      { type: "info", icon: "🔵", text: "Forța este ZERO când conductorul este paralel cu B (α = 0°, sin0° = 0)." },
      { type: "warn", icon: "⚠️", text: "Forța Lorentz nu efectuează lucru mecanic — modifică direcția mișcării, nu modulul vitezei." },
      { type: "exam", icon: "🎯", text: "La probleme cu traiectorie circulară: forța Lorentz = forța centripetă → qvB = mv²/r → r = mv/(qB)." },
    ],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Lorentz_force_particle.svg/350px-Lorentz_force_particle.svg.png", caption: "Forța Lorentz acționează perpendicular pe v și B" },
    quiz: [
      {
        q: "Un conductor de lungime l = 0,5 m, parcurs de I = 4 A, se află perpendicular pe un câmp B = 0,3 T. Forța pe conductor este:",
        options: ["0,3 N", "0,6 N", "0,15 N", "1,2 N"],
        correct: 1,
        explanation: "F = BIl·sin90° = 0,3 × 4 × 0,5 × 1 = 0,6 N"
      },
      {
        q: "Când forța magnetică pe un conductor este zero?",
        options: ["Când curentul este maxim", "Când conductorul este paralel cu B", "Când conductorul este perpendicular pe B", "Niciodată"],
        correct: 1,
        explanation: "F = BIl·sinα — când α = 0° (conductor paralel cu B), sin0° = 0, deci F = 0."
      },
      {
        q: "Un electron se mișcă cu v = 2×10⁶ m/s perpendicular pe un câmp B = 0,1 T. Raza traiectoriei este: (m_e = 9,1×10⁻³¹ kg, e = 1,6×10⁻¹⁹ C)",
        options: ["0,114 mm", "1,14 cm", "11,4 cm", "0,0114 mm"],
        correct: 1,
        explanation: "r = mv/(qB) = (9,1×10⁻³¹ × 2×10⁶)/(1,6×10⁻¹⁹ × 0,1) = 18,2×10⁻²⁵/1,6×10⁻²⁰ ≈ 0,0114 m = 1,14 cm"
      },
      {
        q: "Ce se întâmplă cu perioada de rotație T a unei particule în câmp uniform dacă îi dublăm viteza?",
        options: ["T se dublează", "T se înjumătățește", "T rămâne constantă", "T crește de 4 ori"],
        correct: 2,
        explanation: "T = 2πm/(qB) — T nu depinde de viteză! Acesta este principiul ciclotroanelor."
      },
    ],
    problems: [
      {
        title: "Forța pe un conductor în câmp magnetic",
        difficulty: "Ușor",
        text: "Un conductor de lungime l = 30 cm se află într-un câmp magnetic uniform B = 0,5 T. Conductorul este parcurs de I = 3 A și face un unghi α = 30° cu direcția câmpului. Calculați forța magnetică.",
        given: "l = 0,3 m, B = 0,5 T, I = 3 A, α = 30°",
        ask: "F = ?",
        steps: [
          "Aplicăm formula forței Ampere: F = BIl·sinα",
          "F = 0,5 × 3 × 0,3 × sin30°",
          "sin30° = 0,5",
          "F = 0,5 × 3 × 0,3 × 0,5 = 0,225 N",
        ],
        answer: "F = 0,225 N"
      },
      {
        title: "Mișcarea unui proton în câmp magnetic",
        difficulty: "Mediu",
        text: "Un proton (m = 1,67×10⁻²⁷ kg, q = 1,6×10⁻¹⁹ C) se mișcă cu viteza v = 5×10⁶ m/s perpendicular pe un câmp magnetic B = 0,2 T. Calculați raza traiectoriei și perioada de rotație.",
        given: "m = 1,67×10⁻²⁷ kg, q = 1,6×10⁻¹⁹ C, v = 5×10⁶ m/s, B = 0,2 T",
        ask: "r = ? T = ?",
        steps: [
          "Raza: r = mv/(qB) = (1,67×10⁻²⁷ × 5×10⁶)/(1,6×10⁻¹⁹ × 0,2)",
          "r = 8,35×10⁻²¹ / 3,2×10⁻²⁰ = 0,261 m ≈ 26,1 cm",
          "Perioada: T = 2πm/(qB) = 2π × 1,67×10⁻²⁷/(1,6×10⁻¹⁹ × 0,2)",
          "T = 2π × 1,67×10⁻²⁷/3,2×10⁻²⁰ = 2π × 5,22×10⁻⁸ ≈ 3,28×10⁻⁷ s",
        ],
        answer: "r ≈ 26 cm, T ≈ 0,33 μs"
      }
    ]
  },

  {
    id: 3,
    slug: "inductie-electromagnetica",
    title: "Inducția Electromagnetică",
    subtitle: "Fluxul magnetic · Legea Faraday · Legea Lenz",
    color: "purple",
    icon: "🌀",
    intro: `<strong>Inducția electromagnetică</strong> este fenomenul prin care variația câmpului magnetic dintr-un circuit produce o tensiune electrică (forță electromotoare — FEM). Acesta este principiul generatoarelor electrice și al transformatoarelor.

Intuiție: câmpul magnetic și câmpul electric sunt înrudite — un câmp magnetic variabil "creează" câmp electric. Asta înseamnă că poți produce curent electric din mișcare.`,
    formulas: [
      { name: "Fluxul magnetic", math: "\\Phi = B S \\cos\\alpha", desc: "α = unghiul dintre B și normala la suprafață S" },
      { name: "FEM indusă (Legea Faraday)", math: "e = -\\dfrac{\\Delta\\Phi}{\\Delta t}", desc: "FEM = rata de variație a fluxului; semnul '−' = Legea Lenz" },
      { name: "FEM pentru bobină cu N spire", math: "e = -N\\dfrac{\\Delta\\Phi}{\\Delta t}", desc: "Fiecare spiră contribuie cu propria variație de flux" },
      { name: "Unitate flux magnetic", math: "[\\Phi] = \\text{Wb (Weber)} = \\text{V·s}", desc: "1 Wb = 1 T·m²" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["Φ", "Fluxul magnetic", "Wb (Weber)"],
      ["B", "Inductia magnetică", "T"],
      ["S", "Aria suprafeței", "m²"],
      ["α", "Unghi B față de normală", "grade"],
      ["e", "FEM indusă", "V (Volt)"],
      ["N", "Numărul de spire", "—"],
    ],
    tips: [
      { type: "info", icon: "💡", text: "Fluxul este maxim când B ⊥ suprafață (α = 0°, cosα = 1) și zero când B ∥ suprafață (α = 90°)." },
      { type: "info", icon: "🌀", text: "Fluxul se modifică dacă se schimbă B, aria S sau unghiul α (rotind bobina)." },
      { type: "warn", icon: "⚠️", text: "Legea Lenz: curentul indus se opune variației fluxului care l-a produs. De aceea semnul '−' în formula Faraday." },
      { type: "exam", icon: "🎯", text: "La test: dacă se cere FEM, calculezi ΔΦ = Φ₂ − Φ₁, apoi e = −ΔΦ/Δt (sau e = NΔΦ/Δt ca valoare absolută)." },
    ],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Faraday%27s_law_of_induction.svg/350px-Faraday%27s_law_of_induction.svg.png", caption: "Variația fluxului magnetic induce FEM" },
    quiz: [
      {
        q: "Fluxul magnetic printr-o suprafață de 0,2 m² aflată perpendicular pe un câmp B = 0,5 T este:",
        options: ["0,1 Wb", "0,25 Wb", "2,5 Wb", "0 Wb"],
        correct: 0,
        explanation: "Φ = BS·cosα = 0,5 × 0,2 × cos0° = 0,1 Wb (perpendicular pe B înseamnă α = 0 între B și normala la suprafață)."
      },
      {
        q: "O bobină cu N = 100 spire are fluxul printr-o spiră care variază de la 0,02 Wb la 0,06 Wb în 0,1 s. FEM indusă este:",
        options: ["40 V", "0,4 V", "4 V", "400 V"],
        correct: 0,
        explanation: "e = N·ΔΦ/Δt = 100 × (0,06−0,02)/0,1 = 100 × 0,4 = 40 V"
      },
      {
        q: "Ce spune Legea Lenz?",
        options: [
          "FEM indusă este proporțională cu variația fluxului",
          "Curentul indus se opune cauzei care l-a produs",
          "Fluxul magnetic este constant în orice circuit",
          "FEM este direct proporțională cu B"
        ],
        correct: 1,
        explanation: "Legea Lenz: curentul indus creează un câmp care se opune variației fluxului — este motivul semnului '−' în formula Faraday."
      },
      {
        q: "O spiră plană de arie S = 0,1 m² se află într-un câmp B = 0,3 T. Câmpul dispare în 0,05 s. FEM medie indusă este:",
        options: ["0,6 V", "0,15 V", "6 V", "1,5 V"],
        correct: 0,
        explanation: "ΔΦ = 0 − BS = −0,3×0,1 = −0,03 Wb. e = −ΔΦ/Δt = 0,03/0,05 = 0,6 V"
      },
    ],
    problems: [
      {
        title: "Bobină în câmp variabil",
        difficulty: "Mediu",
        text: "O bobină cu N = 200 spire și aria fiecărei spire S = 5 cm² se află perpendicular pe un câmp magnetic care crește uniform de la B₁ = 0,1 T la B₂ = 0,5 T în intervalul Δt = 0,2 s. Calculați FEM medie indusă.",
        given: "N = 200, S = 5 cm² = 5×10⁻⁴ m², B₁ = 0,1 T, B₂ = 0,5 T, Δt = 0,2 s, α = 0°",
        ask: "e = ?",
        steps: [
          "Calculăm variația fluxului printr-o spiră: ΔΦ = (B₂−B₁)·S·cosα",
          "ΔΦ = (0,5−0,1) × 5×10⁻⁴ × 1 = 0,4 × 5×10⁻⁴ = 2×10⁻⁴ Wb",
          "Aplicăm legea Faraday pentru N spire: e = N·ΔΦ/Δt",
          "e = 200 × 2×10⁻⁴ / 0,2 = 200 × 10⁻³ = 0,2 V",
        ],
        answer: "e = 0,2 V"
      },
      {
        title: "Determinarea variației câmpului",
        difficulty: "Mediu",
        text: "O spiră circulară cu raza r = 10 cm se rotește cu 90° față de câmpul magnetic B = 0,4 T în Δt = 0,05 s (trece de la poziția perpendiculară la paralelă față de câmp). Calculați FEM medie.",
        given: "r = 0,1 m → S = πr² = π×0,01 ≈ 0,0314 m², B = 0,4 T, α₁ = 0°, α₂ = 90°, Δt = 0,05 s",
        ask: "e = ?",
        steps: [
          "Φ₁ = BS·cos0° = 0,4 × 0,0314 × 1 = 0,01256 Wb",
          "Φ₂ = BS·cos90° = 0,4 × 0,0314 × 0 = 0 Wb",
          "ΔΦ = Φ₂ − Φ₁ = −0,01256 Wb",
          "e = −ΔΦ/Δt = 0,01256/0,05 ≈ 0,251 V",
        ],
        answer: "e ≈ 0,25 V"
      }
    ]
  },

  {
    id: 4,
    slug: "inductanta",
    title: "Inductanța și Autoinducția",
    subtitle: "Bobina ca element de circuit",
    color: "purple",
    icon: "🔄",
    intro: `<strong>Inductanța L</strong> caracterizează proprietatea unui circuit de a se opune variației curentului electric. Când curentul printr-o bobină se modifică, se modifică și câmpul magnetic, deci și fluxul, ceea ce induce o FEM care se opune acestei variații.

Analogie mecanică: inductanța este ca <strong>inerția</strong> în mecanică — o bobină "nu vrea" ca curentul să se schimbe brusc, la fel cum un corp greu nu vrea să-și schimbe viteza brusc.`,
    formulas: [
      { name: "Inductanța", math: "L = \\dfrac{N\\Phi}{I}", desc: "L = inductanța [H], NΦ = fluxul total al bobinei" },
      { name: "Inductanța solenoidului", math: "L = \\dfrac{\\mu_0 N^2 S}{l} = \\mu_0 n^2 V", desc: "Depinde de forma și dimensiunile bobinei" },
      { name: "FEM de autoinducție", math: "e_L = -L \\dfrac{\\Delta I}{\\Delta t}", desc: "Se opune variației curentului" },
      { name: "Energia câmpului magnetic", math: "W_m = \\dfrac{L I^2}{2}", desc: "Energia stocată în câmpul magnetic al bobinei" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["L", "Inductanța", "H (Henry)"],
      ["N", "Numărul de spire", "—"],
      ["Φ", "Fluxul printr-o spiră", "Wb"],
      ["I", "Curentul prin bobină", "A"],
      ["e_L", "FEM de autoinducție", "V"],
      ["W_m", "Energia câmpului magnetic", "J"],
    ],
    tips: [
      { type: "info", icon: "💡", text: "1 H = 1 V·s/A. Bobinele uzuale au inductanțe de ordinul μH (10⁻⁶ H) până la H." },
      { type: "info", icon: "🔄", text: "Dacă curentul este constant (DC stabil), ΔI/Δt = 0, deci e_L = 0 — bobina nu 'face nimic' în circuit DC permanent." },
      { type: "warn", icon: "⚠️", text: "La deconectarea bruscă, ΔI/Δt este foarte mare → e_L poate fi periculoasă (scântei, deteriorare echipamente)." },
      { type: "exam", icon: "🎯", text: "La energie: W_m = LI²/2 — analog cu energia cinetică W_c = mv²/2 (L joacă rolul masei, I joacă rolul vitezei)." },
    ],
    quiz: [
      {
        q: "O bobină cu L = 0,5 H este parcursă de un curent care variază cu 10 A/s. FEM de autoinducție este:",
        options: ["0,05 V", "20 V", "5 V", "0,5 V"],
        correct: 2,
        explanation: "e_L = L·ΔI/Δt = 0,5 × 10 = 5 V"
      },
      {
        q: "Energia stocată în câmpul magnetic al unei bobine cu L = 0,2 H parcursă de I = 3 A este:",
        options: ["0,3 J", "0,9 J", "0,6 J", "1,8 J"],
        correct: 1,
        explanation: "W_m = LI²/2 = 0,2 × 9/2 = 0,9 J"
      },
      {
        q: "Inductanța unui solenoid depinde de:",
        options: [
          "Curentul prin solenoid",
          "Tensiunea aplicată",
          "Numărul de spire și dimensiunile geometrice",
          "Frecvența curentului"
        ],
        correct: 2,
        explanation: "L = μ₀N²S/l — depinde doar de geometrie (N, S, l), nu de I sau U."
      },
      {
        q: "Ce se întâmplă cu FEM de autoinducție dacă curentul prin bobină este constant?",
        options: ["Este maximă", "Este zero", "Oscilează", "Este egală cu tensiunea sursei"],
        correct: 1,
        explanation: "e_L = −L·ΔI/Δt. Dacă I = const., ΔI/Δt = 0, deci e_L = 0."
      },
    ],
    problems: [
      {
        title: "Inductanța unui solenoid",
        difficulty: "Ușor",
        text: "Un solenoid are lungimea l = 50 cm, N = 1000 spire și secțiunea transversală S = 4 cm². Calculați inductanța sa.",
        given: "l = 0,5 m, N = 1000, S = 4×10⁻⁴ m², μ₀ = 4π×10⁻⁷ H/m",
        ask: "L = ?",
        steps: [
          "Aplicăm formula: L = μ₀N²S/l",
          "L = 4π×10⁻⁷ × 10⁶ × 4×10⁻⁴ / 0,5",
          "L = 4π×10⁻⁷ × 4×10² / 0,5",
          "L = 4π×10⁻⁷ × 8×10² = 32π×10⁻⁵ ≈ 1×10⁻³ H = 1 mH",
        ],
        answer: "L ≈ 1 mH"
      },
      {
        title: "Energia câmpului magnetic",
        difficulty: "Mediu",
        text: "O bobină cu inductanța L = 0,4 H este parcursă de un curent care crește liniar de la 0 la 5 A în 0,1 s. a) Calculați FEM de autoinducție. b) Calculați energia stocată în câmpul magnetic la I = 5 A.",
        given: "L = 0,4 H, I₁ = 0 A, I₂ = 5 A, Δt = 0,1 s",
        ask: "e_L = ? și W_m = ?",
        steps: [
          "a) ΔI/Δt = (5−0)/0,1 = 50 A/s",
          "e_L = L·ΔI/Δt = 0,4 × 50 = 20 V",
          "b) W_m = LI²/2 = 0,4 × 25/2 = 5 J",
        ],
        answer: "e_L = 20 V; W_m = 5 J"
      }
    ]
  },

  {
    id: 5,
    slug: "condensatorul",
    title: "Condensatorul și Câmpul Electric",
    subtitle: "Câmp electric uniform · Capacitate · Dielectrici",
    color: "green",
    icon: "⚡",
    intro: `Un <strong>condensator</strong> este un dispozitiv format din două plăci conductoare (armături) separate printr-un izolator (dielectric). El stochează energie sub formă de câmp electric.

<strong>Capacitatea electrică C</strong> arată cât de multă sarcină poate stoca condensatorul la o anumită tensiune. Un condensator cu capacitate mare stochează mai multă sarcină la aceeași tensiune.`,
    formulas: [
      { name: "Câmpul electric uniform", math: "E = \\dfrac{U}{d} = \\dfrac{F}{q}", desc: "Între plăcile unui condensator plan; d = distanța dintre plăci" },
      { name: "Capacitatea electrică", math: "C = \\dfrac{Q}{U}", desc: "C = sarcina stocată per unitate de tensiune" },
      { name: "Condensator plan (fără dielectric)", math: "C_0 = \\dfrac{\\varepsilon_0 S}{d}", desc: "ε₀ = 8,85×10⁻¹² F/m (permitivitatea vidului)" },
      { name: "Condensator plan (cu dielectric)", math: "C' = \\varepsilon_r C_0 = \\dfrac{\\varepsilon_r \\varepsilon_0 S}{d}", desc: "εᵣ > 1 — dielectricul mărește capacitatea" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["C", "Capacitatea electrică", "F (Farad)"],
      ["Q", "Sarcina electrică", "C (Coulomb)"],
      ["U", "Tensiunea (d.d.p.)", "V (Volt)"],
      ["E", "Câmpul electric", "N/C = V/m"],
      ["S", "Aria armăturilor", "m²"],
      ["d", "Distanța dintre armături", "m"],
      ["ε₀", "Permitivitatea vidului", "8,85×10⁻¹² F/m"],
      ["εᵣ", "Permitivitatea relativă", "adimensional"],
    ],
    tips: [
      { type: "info", icon: "💡", text: "1 F este o capacitate enormă. În practică se folosesc μF (10⁻⁶), nF (10⁻⁹) și pF (10⁻¹²)." },
      { type: "info", icon: "🟢", text: "Dielectricul (material izolator) introdus între plăci mărește capacitatea de εᵣ ori față de vid." },
      { type: "warn", icon: "⚠️", text: "Câmpul electric E dintre plăci este uniform (aceeași valoare în orice punct). Nu confunda E cu V (tensiunea)!" },
      { type: "exam", icon: "🎯", text: "La probleme: din Q = CU poți afla oricare din cele 3 mărimi dacă știi celelalte două." },
    ],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Capacitor_schematic_with_dielectric.svg/350px-Capacitor_schematic_with_dielectric.svg.png", caption: "Condensator plan cu dielectric" },
    quiz: [
      {
        q: "Un condensator cu C = 10 μF este conectat la U = 100 V. Sarcina stocată este:",
        options: ["10⁻³ C", "10⁻² C", "10⁻⁴ C", "10 C"],
        correct: 0,
        explanation: "Q = CU = 10×10⁻⁶ × 100 = 10⁻³ C = 1 mC"
      },
      {
        q: "Un condensator plan are armăturile la distanța d = 2 mm și tensiunea U = 100 V. Câmpul electric între plăci este:",
        options: ["50 000 V/m", "200 V/m", "50 V/m", "5 V/m"],
        correct: 0,
        explanation: "E = U/d = 100/(2×10⁻³) = 50 000 V/m = 50 kV/m"
      },
      {
        q: "Se introduce un dielectric cu εᵣ = 4 între plăcile unui condensator. Capacitatea devine:",
        options: ["C/4", "C", "4C", "C/2"],
        correct: 2,
        explanation: "C' = εᵣ·C₀ = 4C — dielectricul mărește capacitatea de εᵣ ori."
      },
      {
        q: "Cum variază capacitatea unui condensator plan dacă dublăm distanța d dintre armături?",
        options: ["Se dublează", "Se înjumătățește", "Rămâne constantă", "Se împătreşte"],
        correct: 1,
        explanation: "C₀ = ε₀S/d — C este invers proporțional cu d. Dacă d × 2, atunci C ÷ 2."
      },
    ],
    problems: [
      {
        title: "Câmpul electric și sarcina",
        difficulty: "Ușor",
        text: "Un condensator plan cu armăturile de arie S = 200 cm² și distanța d = 1 mm este conectat la U = 50 V. Calculați: a) capacitatea C₀, b) câmpul electric E, c) sarcina Q.",
        given: "S = 200 cm² = 0,02 m², d = 1 mm = 10⁻³ m, U = 50 V, ε₀ = 8,85×10⁻¹² F/m",
        ask: "C₀ = ?, E = ?, Q = ?",
        steps: [
          "a) C₀ = ε₀S/d = 8,85×10⁻¹² × 0,02/10⁻³ = 8,85×10⁻¹² × 20 = 1,77×10⁻¹⁰ F = 177 pF",
          "b) E = U/d = 50/10⁻³ = 50 000 V/m = 50 kV/m",
          "c) Q = C₀U = 1,77×10⁻¹⁰ × 50 = 8,85×10⁻⁹ C = 8,85 nC",
        ],
        answer: "C₀ ≈ 177 pF, E = 50 kV/m, Q ≈ 8,85 nC"
      },
      {
        title: "Efectul dielectricului",
        difficulty: "Mediu",
        text: "Un condensator plan fără dielectric are C₀ = 50 pF. Se introduce un dielectric cu εᵣ = 5. Condensatorul este conectat la U = 200 V. Calculați noua capacitate și sarcina stocată.",
        given: "C₀ = 50 pF, εᵣ = 5, U = 200 V",
        ask: "C' = ?, Q = ?",
        steps: [
          "C' = εᵣ·C₀ = 5 × 50 pF = 250 pF",
          "Q = C'·U = 250×10⁻¹² × 200 = 5×10⁻⁸ C = 50 nC",
        ],
        answer: "C' = 250 pF, Q = 50 nC"
      }
    ]
  },

  {
    id: 6,
    slug: "gruparea-condensatoarelor",
    title: "Gruparea Condensatoarelor",
    subtitle: "Serie · Paralel · Energia condensatorului",
    color: "green",
    icon: "🔋",
    intro: `Condensatoarele pot fi conectate în <strong>paralel</strong> (creștem capacitatea totală) sau în <strong>serie</strong> (scadem capacitatea, dar suportăm tensiuni mai mari).

Regula de bază: <strong>în paralel — tensiunile sunt egale</strong>, sarcinile se adună. <strong>În serie — sarcinile sunt egale</strong>, tensiunile se adună.`,
    formulas: [
      { name: "Condensatoare în paralel", math: "C_{ec} = C_1 + C_2 + \\cdots", desc: "U egale pe fiecare: U = U₁ = U₂; Q total = Q₁+Q₂" },
      { name: "Condensatoare în serie", math: "\\dfrac{1}{C_{ec}} = \\dfrac{1}{C_1} + \\dfrac{1}{C_2} + \\cdots", desc: "Q egale pe fiecare: Q = Q₁ = Q₂; U total = U₁+U₂" },
      { name: "Energia condensatorului", math: "W = \\dfrac{CU^2}{2} = \\dfrac{Q^2}{2C} = \\dfrac{QU}{2}", desc: "Trei forme echivalente — alege pe cea care îți dă datele" },
    ],
    table: [
      ["", "PARALEL", "SERIE"],
      ["Tensiune", "U₁ = U₂ = U", "U = U₁ + U₂"],
      ["Sarcină", "Q = Q₁ + Q₂", "Q₁ = Q₂ = Q"],
      ["Capacitate", "Ceq = C₁+C₂", "1/Ceq = 1/C₁+1/C₂"],
      ["Rezultat", "Ceq > oricare Ci", "Ceq < oricare Ci"],
    ],
    tips: [
      { type: "info", icon: "💡", text: "Paralel = mai mare capacitate (ca bateriile în paralel — mai multă energie stocată la aceeași tensiune)." },
      { type: "info", icon: "💡", text: "Serie = mai mică capacitate, dar suportă tensiune totală mai mare (ca bateriile în serie — tensiune mai mare)." },
      { type: "warn", icon: "⚠️", text: "La seria de 2 condensatoare: Ceq = C₁C₂/(C₁+C₂) — formulă rapidă. La n condensatoare identice: Ceq = C/n." },
      { type: "exam", icon: "🎯", text: "La energie: W = CU²/2. Dacă știi Q și nu U, folosești W = Q²/(2C). Dacă știi Q și U, folosești W = QU/2." },
    ],
    quiz: [
      {
        q: "Două condensatoare C₁ = 3 μF și C₂ = 6 μF sunt conectate în paralel. Capacitatea echivalentă este:",
        options: ["2 μF", "9 μF", "18 μF", "0,5 μF"],
        correct: 1,
        explanation: "Paralel: Ceq = C₁+C₂ = 3+6 = 9 μF"
      },
      {
        q: "Același C₁ = 3 μF și C₂ = 6 μF sunt conectate în serie. Capacitatea echivalentă este:",
        options: ["9 μF", "0,5 μF", "2 μF", "18 μF"],
        correct: 2,
        explanation: "Serie: Ceq = C₁C₂/(C₁+C₂) = 18/9 = 2 μF"
      },
      {
        q: "Un condensator C = 20 μF este încărcat la U = 100 V. Energia stocată este:",
        options: ["0,1 J", "200 J", "0,2 J", "2000 J"],
        correct: 0,
        explanation: "W = CU²/2 = 20×10⁻⁶ × 10000/2 = 0,1 J"
      },
      {
        q: "La gruparea în serie a condensatoarelor, ce mărime este aceeași pe fiecare?",
        options: ["Tensiunea", "Sarcina", "Energia", "Câmpul electric"],
        correct: 1,
        explanation: "La serie, prin fiecare condensator trece același curent de încărcare → sarcina Q este aceeași."
      },
    ],
    problems: [
      {
        title: "Grupare mixtă serie-paralel",
        difficulty: "Mediu",
        text: "Trei condensatoare C₁ = 6 μF, C₂ = 3 μF, C₃ = 4 μF. C₁ și C₂ sunt în serie, iar combinația lor este în paralel cu C₃. Tensiunea sursei U = 12 V. Calculați capacitatea echivalentă și energia totală stocată.",
        given: "C₁ = 6 μF, C₂ = 3 μF, C₃ = 4 μF, U = 12 V",
        ask: "Ceq = ?, W = ?",
        steps: [
          "Pas 1: C₁ și C₂ în serie: C₁₂ = C₁C₂/(C₁+C₂) = 6×3/(6+3) = 18/9 = 2 μF",
          "Pas 2: C₁₂ și C₃ în paralel: Ceq = C₁₂+C₃ = 2+4 = 6 μF",
          "Pas 3: Energia totală: W = CeqU²/2 = 6×10⁻⁶ × 144/2 = 4,32×10⁻⁴ J = 0,432 mJ",
        ],
        answer: "Ceq = 6 μF, W ≈ 0,432 mJ"
      },
      {
        title: "Condensatoare în serie — tensiunile",
        difficulty: "Mediu",
        text: "Două condensatoare C₁ = 4 μF și C₂ = 2 μF sunt conectate în serie la U = 12 V. Calculați: a) capacitatea echivalentă, b) sarcina Q, c) tensiunile U₁ și U₂.",
        given: "C₁ = 4 μF, C₂ = 2 μF, U = 12 V",
        ask: "Ceq, Q, U₁, U₂",
        steps: [
          "a) Ceq = C₁C₂/(C₁+C₂) = 8/6 = 4/3 μF ≈ 1,33 μF",
          "b) Q = Ceq·U = (4/3)×10⁻⁶ × 12 = 16×10⁻⁶ C = 16 μC",
          "c) U₁ = Q/C₁ = 16×10⁻⁶/(4×10⁻⁶) = 4 V",
          "   U₂ = Q/C₂ = 16×10⁻⁶/(2×10⁻⁶) = 8 V",
          "Verificare: U₁+U₂ = 4+8 = 12 V ✓",
        ],
        answer: "Ceq ≈ 1,33 μF, Q = 16 μC, U₁ = 4 V, U₂ = 8 V"
      }
    ]
  },

  {
    id: 7,
    slug: "curent-alternativ-notiuni",
    title: "Curentul Alternativ",
    subtitle: "Sinusoide · Osciloscop · Valori eficace · Defazaj",
    color: "orange",
    icon: "〜",
    intro: `<strong>Curentul alternativ (CA)</strong> este curentul a cărui intensitate și sens se schimbă periodic în timp, după o lege sinusoidală. Este tipul de curent din priză (50 Hz în România).

<strong>Osciloscopul</strong> este instrumentul care afișează tensiunea în timp — pe ecran vedem forma de undă. De pe osciloscop citim amplitudinea și perioada.`,
    formulas: [
      { name: "Tensiunea sinusoidală", math: "u(t) = U_m \\sin(\\omega t + \\varphi)", desc: "Uₘ = amplitudinea (valoarea de vârf)" },
      { name: "Curentul sinusoidal", math: "i(t) = I_m \\sin(\\omega t + \\varphi)", desc: "Iₘ = amplitudinea curentului" },
      { name: "Valoarea eficace", math: "U = \\dfrac{U_m}{\\sqrt{2}} \\approx 0{,}707 \\cdot U_m", desc: "Valoarea DC echivalentă ca efect termic" },
      { name: "Frecvența și pulsația", math: "f = \\dfrac{1}{T} \\qquad \\omega = 2\\pi f", desc: "[f] = Hz, [ω] = rad/s, [T] = s" },
      { name: "Defazajul", math: "\\varphi = \\dfrac{2\\pi \\cdot \\Delta t}{T} = 360° \\cdot \\dfrac{\\Delta t}{T}", desc: "Δt = decalajul temporal dintre cele două sinusoide" },
      { name: "Citire osciloscop", math: "U_m = n_y \\cdot k_y \\quad T = n_x \\cdot k_x", desc: "n = număr de diviziuni, k = scara (V/div sau s/div)" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["Uₘ, Iₘ", "Amplitudinea (valoarea de vârf)", "V, A"],
      ["U, I", "Valorile eficace", "V, A"],
      ["T", "Perioada", "s"],
      ["f", "Frecvența", "Hz"],
      ["ω", "Pulsația", "rad/s"],
      ["φ", "Defazajul", "rad sau grade"],
      ["ky", "Scara verticală (osciloscop)", "V/div"],
      ["kx", "Scara orizontală (osciloscop)", "s/div sau ms/div"],
    ],
    tips: [
      { type: "info", icon: "🇷🇴", text: "În România: tensiunea de rețea este U = 230 V (eficace), f = 50 Hz, deci Uₘ = 230√2 ≈ 325 V." },
      { type: "info", icon: "📺", text: "La osciloscop: numeri diviziunile pe verticală pentru amplitudine, pe orizontală pentru perioadă. Apoi înmulțești cu scara." },
      { type: "warn", icon: "⚠️", text: "Multimetrul afișează valorile EFICACE (U, I). Osciloscopul afișează valorile de VÂRF (Uₘ). Nu confunda!" },
      { type: "exam", icon: "🎯", text: "Defazaj: dacă unda de curent e 'în față' față de tensiune cu Δt, atunci φ = 2πΔt/T (radiani)." },
    ],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Sine_voltage.svg/400px-Sine_voltage.svg.png", caption: "Tensiune sinusoidală: amplitudine Uₘ și perioadă T" },
    quiz: [
      {
        q: "Tensiunea din priza de 230 V reprezintă:",
        options: ["Valoarea de vârf Uₘ", "Valoarea medie", "Valoarea eficace U", "Valoarea minimă"],
        correct: 2,
        explanation: "230 V este valoarea eficace (RMS). Valoarea de vârf este Uₘ = 230√2 ≈ 325 V."
      },
      {
        q: "Pe osciloscop, un semnal are amplitudinea de 3 diviziuni pe verticală cu scara ky = 5 V/div. Valoarea eficace U este:",
        options: ["15 V", "10,6 V", "21,2 V", "7,5 V"],
        correct: 1,
        explanation: "Uₘ = ny·ky = 3×5 = 15 V. U = Uₘ/√2 = 15/1,414 ≈ 10,6 V"
      },
      {
        q: "Un semnal cu T = 20 ms are frecvența f egală cu:",
        options: ["20 Hz", "50 Hz", "200 Hz", "0,05 Hz"],
        correct: 1,
        explanation: "f = 1/T = 1/(20×10⁻³) = 50 Hz — frecvența rețelei electrice din România."
      },
      {
        q: "Două sinusoide au același T = 10 ms. Decalajul temporal este Δt = 1 ms. Defazajul φ în grade este:",
        options: ["18°", "36°", "90°", "45°"],
        correct: 1,
        explanation: "φ = 360° × Δt/T = 360° × 1/10 = 36°"
      },
    ],
    problems: [
      {
        title: "Citirea osciloscopului",
        difficulty: "Ușor",
        text: "Pe un osciloscop se observă o sinusoidă. Pe verticală: amplitudinea = 4 diviziuni, ky = 2 V/div. Pe orizontală: o perioadă = 5 diviziuni, kx = 2 ms/div. Calculați Uₘ, U, T, f și ω.",
        given: "ny = 4 div, ky = 2 V/div; nx = 5 div, kx = 2 ms/div",
        ask: "Uₘ, U, T, f, ω",
        steps: [
          "Uₘ = ny·ky = 4×2 = 8 V",
          "U = Uₘ/√2 = 8/√2 ≈ 5,66 V",
          "T = nx·kx = 5×2 ms = 10 ms = 0,01 s",
          "f = 1/T = 1/0,01 = 100 Hz",
          "ω = 2πf = 2π×100 ≈ 628 rad/s",
        ],
        answer: "Uₘ = 8 V, U ≈ 5,66 V, T = 10 ms, f = 100 Hz, ω ≈ 628 rad/s"
      },
      {
        title: "Defazajul dintre două sinusoide",
        difficulty: "Mediu",
        text: "Pe un osciloscop se văd două sinusoide cu aceeași perioadă T = 20 ms. Sinusoida curentului este decalată față de tensiune cu Δt = 2,5 ms (curentul e înaintea tensiunii). Calculați defazajul în grade și radiani. Ce tip de circuit este?",
        given: "T = 20 ms, Δt = 2,5 ms (curentul înaintea tensiunii)",
        ask: "φ în grade și radiani; tipul circuitului",
        steps: [
          "φ = 360° × Δt/T = 360° × 2,5/20 = 45°",
          "φ = 2π × Δt/T = 2π × 2,5/20 = π/4 rad ≈ 0,785 rad",
          "Curentul e înaintea tensiunii → circuitul este CAPACITIV (condensatorul avansează curentul).",
        ],
        answer: "φ = 45° = π/4 rad; circuit capacitiv"
      }
    ]
  },

  {
    id: 8,
    slug: "circuite-rlc-serie",
    title: "Circuite RLC Serie",
    subtitle: "Reactanțe · Impedanță · Defazaj",
    color: "orange",
    icon: "⚙️",
    intro: `Într-un circuit RLC serie, <strong>același curent</strong> trece prin rezistor, bobină și condensator. Dar fiecare element "opune" rezistență curentului alternativ în mod diferit.

Rezistorul disipă energie. Bobina și condensatorul stochează și returnează energie, dar cu defazaje opuse — de aceea se "compensează" parțial. Suma acestor efecte se numește <strong>impedanță Z</strong>.`,
    formulas: [
      { name: "Reactanța inductivă", math: "X_L = \\omega L", desc: "Crește cu frecvența — bobina 'blochează' frecvențele mari" },
      { name: "Reactanța capacitivă", math: "X_C = \\dfrac{1}{\\omega C}", desc: "Scade cu frecvența — condensatorul 'blochează' frecvențele mici" },
      { name: "Impedanța (RLC serie)", math: "Z = \\sqrt{R^2 + (X_L - X_C)^2}", desc: "Impedanța totală a circuitului" },
      { name: "Curentul eficace", math: "I = \\dfrac{U}{Z}", desc: "Analog cu Legea lui Ohm" },
      { name: "Tensiunile pe elemente", math: "U_R = IR,\\; U_L = IX_L,\\; U_C = IX_C", desc: "Tensiunile se compun fazorial, nu aritmetic!" },
      { name: "Defazajul tensiune-curent", math: "\\tan\\varphi = \\dfrac{X_L - X_C}{R}", desc: "φ > 0 = inductiv; φ < 0 = capacitiv" },
      { name: "Factorul de putere", math: "\\cos\\varphi = \\dfrac{R}{Z}", desc: "cosφ = 1 → rezistiv pur; cosφ = 0 → reactiv pur" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate"],
      ["XL", "Reactanța inductivă", "Ω"],
      ["XC", "Reactanța capacitivă", "Ω"],
      ["Z", "Impedanța", "Ω"],
      ["I", "Curentul eficace", "A"],
      ["UR, UL, UC", "Tensiunile pe elemente", "V"],
      ["φ", "Defazajul U față de I", "rad / grade"],
      ["cosφ", "Factorul de putere", "adimensional (0...1)"],
    ],
    tips: [
      { type: "info", icon: "⚠️", text: "ATENȚIE: U ≠ UR+UL+UC! Tensiunile se compun fazorial: U = √(UR² + (UL−UC)²)" },
      { type: "info", icon: "💡", text: "Dacă XL > XC → circuit inductiv (curentul urmează tensiunea, φ > 0)." },
      { type: "info", icon: "💡", text: "Dacă XC > XL → circuit capacitiv (curentul precede tensiunea, φ < 0)." },
      { type: "warn", icon: "⚠️", text: "La test: nu uita conversiile! L în henry, C în farad, ω în rad/s. 1 mH = 10⁻³ H, 1 μF = 10⁻⁶ F." },
      { type: "exam", icon: "🎯", text: "Pași standard: calculezi XL și XC → calculezi Z → calculezi I = U/Z → calculezi UR, UL, UC." },
    ],
    image: { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/RLC_series_circuit_v1.svg/350px-RLC_series_circuit_v1.svg.png", caption: "Circuit RLC serie" },
    quiz: [
      {
        q: "Un circuit RLC serie are R = 30 Ω, XL = 60 Ω, XC = 20 Ω. Impedanța Z este:",
        options: ["50 Ω", "110 Ω", "70 Ω", "10 Ω"],
        correct: 0,
        explanation: "Z = √(R²+(XL−XC)²) = √(900+1600) = √2500 = 50 Ω"
      },
      {
        q: "Circuitul din problema anterioară (XL = 60 Ω, XC = 20 Ω) este de tip:",
        options: ["Capacitiv", "Rezistiv pur", "Inductiv", "La rezonanță"],
        correct: 2,
        explanation: "XL > XC → circuit inductiv. Tensiunea precede curentul."
      },
      {
        q: "La un circuit RLC serie, tensiunea pe rezistor este UR = 40 V, pe bobină UL = 80 V, pe condensator UC = 50 V. Tensiunea totală U este:",
        options: ["170 V", "50 V", "60 V", "90 V"],
        correct: 1,
        explanation: "U = √(UR²+(UL−UC)²) = √(1600+(80−50)²) = √(1600+900) = √2500 = 50 V"
      },
      {
        q: "Reactanța inductivă XL la frecvența f = 100 Hz pentru L = 0,1 H este:",
        options: ["10π Ω ≈ 31,4 Ω", "100 Ω", "2π Ω", "10 Ω"],
        correct: 0,
        explanation: "XL = ωL = 2πf·L = 2π×100×0,1 = 20π ≈ 62,8 Ω... Recalculare: XL = 2π×100×0,1 = 20π ≈ 62,8 Ω"
      },
    ],
    problems: [
      {
        title: "Circuit RLC serie complet",
        difficulty: "Mediu",
        text: "Un circuit RLC serie are R = 40 Ω, L = 0,1 H, C = 100 μF, conectat la U = 100 V, f = 50 Hz. Calculați XL, XC, Z, I, UR, UL, UC și cosφ.",
        given: "R = 40 Ω, L = 0,1 H, C = 100 μF = 10⁻⁴ F, U = 100 V, f = 50 Hz",
        ask: "XL, XC, Z, I, UR, UL, UC, cosφ",
        steps: [
          "ω = 2πf = 2π×50 = 100π ≈ 314 rad/s",
          "XL = ωL = 314×0,1 = 31,4 Ω",
          "XC = 1/(ωC) = 1/(314×10⁻⁴) = 1/0,0314 ≈ 31,8 Ω",
          "Z = √(40²+(31,4−31,8)²) = √(1600+0,16) ≈ 40 Ω (aproape rezonanță!)",
          "I = U/Z = 100/40 = 2,5 A",
          "UR = IR = 2,5×40 = 100 V; UL = IXL = 2,5×31,4 ≈ 78,5 V; UC = IXC = 2,5×31,8 ≈ 79,5 V",
          "cosφ = R/Z = 40/40 = 1 (practic la rezonanță)",
        ],
        answer: "I ≈ 2,5 A, Z ≈ 40 Ω, cosφ ≈ 1"
      },
      {
        title: "Determinarea elementelor circuitului",
        difficulty: "Dificil",
        text: "Un circuit RL serie (fără condensator) este conectat la U = 220 V, f = 50 Hz. Curentul măsurat este I = 4 A, factorul de putere cosφ = 0,8. Calculați R, XL, Z și L.",
        given: "U = 220 V, I = 4 A, cosφ = 0,8, f = 50 Hz",
        ask: "R, XL, Z, L",
        steps: [
          "Z = U/I = 220/4 = 55 Ω",
          "cosφ = R/Z → R = Z·cosφ = 55×0,8 = 44 Ω",
          "sinφ = √(1−cos²φ) = √(1−0,64) = √0,36 = 0,6",
          "XL = Z·sinφ = 55×0,6 = 33 Ω",
          "XL = ωL → L = XL/ω = 33/(2π×50) = 33/314 ≈ 0,105 H ≈ 105 mH",
        ],
        answer: "Z = 55 Ω, R = 44 Ω, XL = 33 Ω, L ≈ 105 mH"
      }
    ]
  },

  {
    id: 9,
    slug: "rlc-paralel-rezonanta",
    title: "RLC Paralel și Rezonanța",
    subtitle: "Circuit paralel · Rezonanță serie și paralel",
    color: "red",
    icon: "📡",
    intro: `Într-un circuit RLC <strong>paralel</strong>, aceeași tensiune apare pe toate ramurile, iar curenții pe ramuri se compun fazorial.

<strong>Rezonanța</strong> apare când reactanța inductivă egalează reactanța capacitivă: XL = XC. Este un fenomen important — la rezonanță, circuitul serie are impedanță minimă și curent maxim, iar circuitul paralel are curent minim prin sursă.`,
    formulas: [
      { name: "Curenții în RLC paralel", math: "I_R = \\frac{U}{R}, \\; I_L = \\frac{U}{X_L}, \\; I_C = \\frac{U}{X_C}", desc: "Tensiunea este aceeași pe fiecare ramură" },
      { name: "Curentul total (paralel)", math: "I = \\sqrt{I_R^2 + (I_C - I_L)^2}", desc: "IC și IL sunt în opoziție de fază" },
      { name: "Condiția de rezonanță", math: "X_L = X_C \\Rightarrow \\omega_0 = \\dfrac{1}{\\sqrt{LC}}", desc: "Pulsația de rezonanță" },
      { name: "Frecvența de rezonanță", math: "f_0 = \\dfrac{1}{2\\pi\\sqrt{LC}}", desc: "Nu depinde de R!" },
      { name: "La rezonanță SERIE", math: "Z_{min} = R \\quad I_{max} = \\dfrac{U}{R}", desc: "Impedanță minimă → curent maxim" },
      { name: "La rezonanță PARALEL", math: "I_{min} = \\dfrac{U}{R} \\quad \\cos\\varphi = 1", desc: "Curentul prin sursă este minim" },
    ],
    table: [
      ["", "RLC SERIE", "RLC PARALEL"],
      ["Ce e egal", "Curentul I", "Tensiunea U"],
      ["Compunere fazorială", "Tensiunile U", "Curenții I"],
      ["La rezonanță", "I este MAXIM", "I (sursă) este MINIM"],
      ["Z la rezonanță", "Z = R (minim)", "Z = R (maxim)"],
      ["Condiție rezonanță", "XL = XC", "XL = XC (same)"],
    ],
    tips: [
      { type: "info", icon: "📡", text: "Rezonanța este folosită în radiorecepție — circuitul rezonant 'selectează' frecvența radio dorită." },
      { type: "warn", icon: "⚠️", text: "IC și IL se scad (nu se adună) pentru că sunt în opoziție de fază: IC precede U cu 90°, IL urmează U cu 90°." },
      { type: "info", icon: "💡", text: "f₀ = 1/(2π√LC) — frecvența de rezonanță este aceeași pentru serie și paralel cu aceleași L și C." },
      { type: "exam", icon: "🎯", text: "La test: SERIE = curent maxim la rezonanță; PARALEL = curent minim la rezonanță. Nu inversa!" },
    ],
    quiz: [
      {
        q: "La rezonanța în serie, curentul prin circuit este:",
        options: ["Zero", "Maxim (I = U/R)", "Egal cu U/Z unde Z = XL", "Minim"],
        correct: 1,
        explanation: "La rezonanță, XL = XC, deci Z = R (minim) → I = U/R (maxim)."
      },
      {
        q: "Un circuit LC are L = 0,1 H și C = 10 μF. Frecvența de rezonanță f₀ este:",
        options: ["159 Hz", "50 Hz", "1000 Hz", "31,8 Hz"],
        correct: 0,
        explanation: "f₀ = 1/(2π√LC) = 1/(2π√(0,1×10⁻⁵)) = 1/(2π×10⁻³) = 1000/(2π) ≈ 159 Hz"
      },
      {
        q: "Ce se întâmplă cu curentul prin sursă la rezonanța unui circuit RLC paralel?",
        options: ["Este maxim", "Este egal cu suma curenților pe ramuri", "Este minim", "Este zero"],
        correct: 2,
        explanation: "La paralel, la rezonanță IC = IL (se anulează fazorial), curentul prin sursă este minim = U/R."
      },
      {
        q: "Într-un RLC paralel la U = 50 V: IR = 5 A, IL = 7 A, IC = 4 A. Curentul total prin sursă este:",
        options: ["16 A", "5,83 A", "2 A", "√74 A"],
        correct: 1,
        explanation: "I = √(IR²+(IC−IL)²) = √(25+(4−7)²) = √(25+9) = √34 ≈ 5,83 A"
      },
    ],
    problems: [
      {
        title: "Rezonanța în serie",
        difficulty: "Mediu",
        text: "Un circuit RLC serie are R = 10 Ω, L = 50 mH, C = 20 μF. Calculați: a) frecvența de rezonanță, b) impedanța la rezonanță, c) curentul maxim la U = 100 V.",
        given: "R = 10 Ω, L = 50 mH = 0,05 H, C = 20 μF = 20×10⁻⁶ F, U = 100 V",
        ask: "f₀, Z₀, Imax",
        steps: [
          "a) f₀ = 1/(2π√LC) = 1/(2π√(0,05×20×10⁻⁶))",
          "   √(LC) = √(10⁻⁶) = 10⁻³ s",
          "   f₀ = 1/(2π×10⁻³) = 1000/(2π) ≈ 159 Hz",
          "b) La rezonanță Z = R = 10 Ω",
          "c) Imax = U/R = 100/10 = 10 A",
        ],
        answer: "f₀ ≈ 159 Hz, Z = 10 Ω, Imax = 10 A"
      },
      {
        title: "Circuit RLC paralel",
        difficulty: "Mediu",
        text: "Un circuit RLC paralel este conectat la U = 120 V, f = 50 Hz. R = 60 Ω, XL = 40 Ω, XC = 30 Ω. Calculați IR, IL, IC și curentul total I.",
        given: "U = 120 V, R = 60 Ω, XL = 40 Ω, XC = 30 Ω",
        ask: "IR, IL, IC, I total",
        steps: [
          "IR = U/R = 120/60 = 2 A",
          "IL = U/XL = 120/40 = 3 A",
          "IC = U/XC = 120/30 = 4 A",
          "I = √(IR²+(IC−IL)²) = √(4+(4−3)²) = √(4+1) = √5 ≈ 2,24 A",
        ],
        answer: "IR = 2 A, IL = 3 A, IC = 4 A, I ≈ 2,24 A"
      }
    ]
  },

  {
    id: 10,
    slug: "puteri-bobina-reala",
    title: "Puteri în CA și Bobina Reală",
    subtitle: "P · Q · S · cosφ · Problema cu bobina reală",
    color: "red",
    icon: "⚡",
    intro: `În curentul alternativ există trei tipuri de putere: <strong>activă P</strong> (cea care face lucru mecanic/termic), <strong>reactivă Q</strong> (oscilează între sursă și circuit, nu se consumă) și <strong>aparentă S</strong> (produsul U·I).

<strong>Bobina reală</strong> nu este ideală — are și o rezistență interioară R₁ (rezistența sârmei). La test apare frecvent problema cu o bobină reală în serie cu un rezistor — trebuie să decompunem tensiunile fazorial.`,
    formulas: [
      { name: "Puterea aparentă", math: "S = U \\cdot I", desc: "[S] = VA (volt-amper)" },
      { name: "Puterea activă", math: "P = U \\cdot I \\cdot \\cos\\varphi", desc: "[P] = W (watt) — puterea utilă" },
      { name: "Puterea reactivă", math: "Q = U \\cdot I \\cdot \\sin\\varphi", desc: "[Q] = var (volt-amper reactiv)" },
      { name: "Triunghiul puterilor", math: "S^2 = P^2 + Q^2", desc: "Relație pitagoreică între cele 3 puteri" },
      { name: "Puterea pe rezistor", math: "P_R = I^2 R = \\dfrac{U_R^2}{R}", desc: "Doar rezistorul disipă energie!" },
      { name: "Bobina reală — tensiunea", math: "U_{AB}^2 = U_{R_1}^2 + U_L^2", desc: "Tensiune pe bobina reală = componentă activă + inductivă" },
    ],
    table: [
      ["Simbol", "Mărime", "Unitate", "Ce face"],
      ["S", "Puterea aparentă", "VA", "Produsul brut U·I"],
      ["P", "Puterea activă", "W", "Se consumă, produce căldură/lucru"],
      ["Q", "Puterea reactivă", "var", "Oscilează, nu se consumă"],
      ["cosφ", "Factorul de putere", "—", "P/S; ideal = 1"],
    ],
    tips: [
      { type: "info", icon: "💡", text: "Factorul de putere cosφ: ideal este 1 (circuit rezistiv pur). Companiile electrice cer cosφ > 0,9." },
      { type: "info", icon: "🔄", text: "Bobina reală = R₁ (rezistența proprie) în serie cu L ideal. Tensiunea pe ea are componentă activă (UR1 = UAB·cosβ) și inductivă." },
      { type: "warn", icon: "⚠️", text: "Probleme tipice de test: date UAB (pe bobina reală), UBC (pe rezistor), UAC (totală) → calculezi cosβ din relația fazorială." },
      { type: "exam", icon: "🎯", text: "Formula cheie pentru bobina reală: UAC² = UAB² + UBC² + 2·UAB·UBC·cosβ (lege cosinus)." },
    ],
    quiz: [
      {
        q: "Un circuit CA are U = 230 V, I = 10 A, cosφ = 0,8. Puterea activă P este:",
        options: ["2300 W", "1840 W", "1380 W", "2875 W"],
        correct: 1,
        explanation: "P = U·I·cosφ = 230×10×0,8 = 1840 W"
      },
      {
        q: "Puterea reactivă Q pentru circuitul de mai sus este:",
        options: ["2300 var", "1840 var", "1380 var", "0 var"],
        correct: 2,
        explanation: "sinφ = √(1−0,64) = 0,6. Q = U·I·sinφ = 230×10×0,6 = 1380 var"
      },
      {
        q: "Relația dintre S, P și Q este:",
        options: ["S = P + Q", "S = P − Q", "S² = P² + Q²", "S = P/cosφ (singura corectă)"],
        correct: 2,
        explanation: "S² = P² + Q² — triunghiul puterilor. Și S = P/cosφ este corectă, dar S² = P²+Q² este relația fundamentală."
      },
      {
        q: "O bobină reală are tensiunea UAB = 45 V, cu componentă activă UR1 = 25 V. Componenta inductivă UL este:",
        options: ["20 V", "70 V", "√(45²−25²) V ≈ 37,4 V", "25 V"],
        correct: 2,
        explanation: "UAB² = UR1² + UL² → UL = √(45²−25²) = √(2025−625) = √1400 ≈ 37,4 V"
      },
    ],
    problems: [
      {
        title: "Puterile într-un circuit RL",
        difficulty: "Mediu",
        text: "Un circuit RL serie este conectat la U = 220 V, I = 5 A, cosφ = 0,75. Calculați puterea activă P, puterea reactivă Q, puterea aparentă S și rezistența R.",
        given: "U = 220 V, I = 5 A, cosφ = 0,75",
        ask: "P, Q, S, R",
        steps: [
          "S = U·I = 220×5 = 1100 VA",
          "P = S·cosφ = 1100×0,75 = 825 W",
          "sinφ = √(1−0,75²) = √(1−0,5625) = √0,4375 ≈ 0,661",
          "Q = S·sinφ = 1100×0,661 ≈ 727 var",
          "P = I²R → R = P/I² = 825/25 = 33 Ω",
        ],
        answer: "S = 1100 VA, P = 825 W, Q ≈ 727 var, R = 33 Ω"
      },
      {
        title: "Bobina reală + rezistor (problema de test)",
        difficulty: "Dificil",
        text: "O bobină reală (AB) este conectată în serie cu un rezistor R₂ = 40 Ω (BC). Se măsoară: UAB = 45 V, UBC = 40 V, UAC = 75 V. Calculați: cosβ, UR1, I, R₁, XL, cosα (factorul de putere al circuitului).",
        given: "UAB = 45 V, UBC = 40 V, UAC = 75 V, R₂ = 40 Ω",
        ask: "cosβ, UR1, I, R₁, XL, cosα",
        steps: [
          "Pas 1 — cosβ din legea cosinus: UAC² = UAB² + UBC² + 2·UAB·UBC·cosβ",
          "75² = 45² + 40² + 2×45×40×cosβ → 5625 = 2025+1600+3600·cosβ",
          "3600·cosβ = 2000 → cosβ = 2000/3600 = 5/9 ≈ 0,556",
          "Pas 2 — Componenta activă pe bobină: UR1 = UAB·cosβ = 45×5/9 = 25 V",
          "Pas 3 — Curentul: I = UBC/R₂ = 40/40 = 1 A",
          "Pas 4 — Rezistența bobinei: R₁ = UR1/I = 25/1 = 25 Ω",
          "Pas 5 — Componenta inductivă: UL = √(UAB²−UR1²) = √(2025−625) = √1400 ≈ 37,4 V → XL = UL/I = 37,4 Ω",
          "Pas 6 — Factorul de putere: cosα = (UBC+UR1)/UAC = (40+25)/75 = 65/75 = 13/15 ≈ 0,867",
        ],
        answer: "cosβ = 5/9, UR1 = 25 V, I = 1 A, R₁ = 25 Ω, XL ≈ 37,4 Ω, cosα ≈ 0,867"
      }
    ]
  },
];
