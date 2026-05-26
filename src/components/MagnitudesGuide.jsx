const magnitudeGuides = {
  1: [
    { symbol: 'B', name: 'Inducția magnetică', meaning: 'arată cât de puternic este câmpul magnetic într-un punct.', example: 'Lângă un magnet de frigider B este mic; într-un RMN B este enorm, de ordinul tesla.' },
    { symbol: 'I', name: 'Intensitatea curentului', meaning: 'arată câtă sarcină electrică trece prin conductor într-o secundă.', example: 'Dacă mărești curentul prin fir de la 2 A la 4 A, câmpul magnetic produs de fir se dublează.' },
    { symbol: 'r', name: 'Distanța față de conductor', meaning: 'este depărtarea punctului analizat față de firul prin care trece curentul.', example: 'La 2 cm de fir câmpul este mai mare decât la 10 cm, fiindcă ești mai aproape de sursă.' },
    { symbol: 'n', name: 'Spire pe metru', meaning: 'arată cât de deasă este bobina, nu câte spire are în total.', example: 'O bobină cu 500 spire pe 0,5 m are n = 1000 spire/m.' },
    { symbol: 'μ₀', name: 'Permeabilitatea vidului', meaning: 'este constanta care leagă electricitatea de magnetism în vid sau aer.', example: 'În calcule o iei ca valoare fixă: μ₀ = 4π×10⁻⁷ T·m/A.' },
  ],
  2: [
    { symbol: 'F', name: 'Forța magnetică', meaning: 'este împingerea sau tragerea produsă de câmpul magnetic.', example: 'Într-un motor, această forță împinge conductorii bobinei și produce rotația.' },
    { symbol: 'B', name: 'Inducția magnetică', meaning: 'spune cât de intens este câmpul care acționează asupra conductorului sau particulei.', example: 'Dacă B se dublează, forța magnetică se dublează.' },
    { symbol: 'I', name: 'Curentul prin conductor', meaning: 'arată cât curent trece prin firul aflat în câmp magnetic.', example: 'Un fir parcurs de 6 A este împins mai tare decât unul parcurs de 2 A.' },
    { symbol: 'l', name: 'Lungimea activă a conductorului', meaning: 'este porțiunea de fir care se află efectiv în câmpul magnetic.', example: 'Dacă doar 20 cm din fir sunt între polii magnetului, folosești l = 0,20 m.' },
    { symbol: 'α', name: 'Unghiul față de câmp', meaning: 'arată cât de perpendicular este conductorul sau viteza pe direcția câmpului magnetic.', example: 'La 90° forța e maximă; la 0° forța devine zero.' },
    { symbol: 'q', name: 'Sarcina particulei', meaning: 'arată cât de încărcată electric este particula.', example: 'Un proton are q = +e, un electron are q = -e; semnul schimbă sensul forței.' },
    { symbol: 'v', name: 'Viteza particulei', meaning: 'arată cât de repede se mișcă particula prin câmp.', example: 'O particulă mai rapidă este deviată de o forță magnetică mai mare.' },
    { symbol: 'm', name: 'Masa particulei', meaning: 'arată cât de greu este de curbat traiectoria particulei.', example: 'La aceeași viteză, un proton descrie un cerc mai mare decât un electron.' },
  ],
  3: [
    { symbol: 'Φ', name: 'Fluxul magnetic', meaning: 'măsoară câte linii de câmp magnetic trec printr-o suprafață.', example: 'Fluxul este mare când bobina este orientată perpendicular pe câmp.' },
    { symbol: 'B', name: 'Inducția magnetică', meaning: 'arată intensitatea câmpului care trece prin suprafață.', example: 'Dacă apropii un magnet mai puternic de bobină, B crește și fluxul crește.' },
    { symbol: 'S', name: 'Aria suprafeței', meaning: 'este mărimea suprafeței prin care trece câmpul magnetic.', example: 'O spiră mai mare prinde mai mult flux decât o spiră mică.' },
    { symbol: 'α', name: 'Unghiul față de normală', meaning: 'arată orientarea suprafeței față de câmp.', example: 'Când α = 0°, câmpul intră drept prin suprafață; când α = 90°, fluxul este zero.' },
    { symbol: 'e', name: 'FEM indusă', meaning: 'este tensiunea care apare când fluxul magnetic se schimbă.', example: 'Miști un magnet printr-o bobină și apare tensiune la bornele bobinei.' },
    { symbol: 'N', name: 'Numărul de spire', meaning: 'arată câte bucle are bobina.', example: 'Cu 200 spire obții o FEM de 200 ori mai mare decât cu o singură spiră, pentru aceeași variație de flux.' },
  ],
  4: [
    { symbol: 'L', name: 'Inductanța', meaning: 'arată cât de mult se opune bobina schimbării curentului.', example: 'O bobină cu L mare face curentul să crească și să scadă mai lent.' },
    { symbol: 'N', name: 'Numărul de spire', meaning: 'arată câte înfășurări are bobina.', example: 'Mai multe spire înseamnă de obicei inductanță mai mare.' },
    { symbol: 'Φ', name: 'Fluxul printr-o spiră', meaning: 'este cantitatea de câmp magnetic care trece printr-o singură spiră.', example: 'Dacă fluxul prin fiecare spiră crește, bobina produce o tensiune de autoinducție.' },
    { symbol: 'I', name: 'Curentul prin bobină', meaning: 'este curentul care creează câmpul magnetic al bobinei.', example: 'Când I crește, energia stocată în câmpul magnetic crește.' },
    { symbol: 'e_L', name: 'FEM de autoinducție', meaning: 'este tensiunea produsă de bobină ca reacție la schimbarea propriului curent.', example: 'La întreruperea curentului, bobina poate produce o scânteie de tensiune mare.' },
    { symbol: 'W_m', name: 'Energia magnetică', meaning: 'este energia stocată în câmpul magnetic al bobinei.', example: 'Într-un releu sau electromagnet, energia câmpului apare cât timp circulă curent.' },
  ],
  5: [
    { symbol: 'C', name: 'Capacitatea electrică', meaning: 'arată câtă sarcină poate stoca un condensator la o anumită tensiune.', example: 'Un condensator de 1000 μF stochează mai multă sarcină decât unul de 10 μF la aceeași tensiune.' },
    { symbol: 'Q', name: 'Sarcina electrică', meaning: 'este cantitatea de electricitate acumulată pe armăturile condensatorului.', example: 'Când încarci condensatorul, o armătură primește +Q și cealaltă -Q.' },
    { symbol: 'U', name: 'Tensiunea', meaning: 'arată diferența de potențial dintre cele două armături.', example: 'Un condensator la 12 V are o separare energetică mai mare a sarcinilor decât la 3 V.' },
    { symbol: 'E', name: 'Câmpul electric', meaning: 'arată forța electrică exercitată asupra unei sarcini în spațiul dintre armături.', example: 'Între plăcile condensatorului, câmpul împinge sarcinile pozitive spre placa negativă.' },
    { symbol: 'S', name: 'Aria armăturilor', meaning: 'este suprafața plăcilor condensatorului.', example: 'Plăci mai mari pot stoca mai multă sarcină, deci C crește.' },
    { symbol: 'd', name: 'Distanța dintre armături', meaning: 'este separarea dintre cele două plăci.', example: 'Dacă apropii plăcile, capacitatea crește.' },
    { symbol: 'ε₀', name: 'Permitivitatea vidului', meaning: 'este constanta electrică a vidului.', example: 'O folosești ca valoare fixă în formula condensatorului plan.' },
    { symbol: 'εᵣ', name: 'Permitivitatea relativă', meaning: 'arată cât de mult mărește dielectricul capacitatea față de vid.', example: 'Un material izolator între plăci poate face condensatorul să stocheze mai multă sarcină.' },
  ],
  6: [
    { symbol: 'C_eq', name: 'Capacitatea echivalentă', meaning: 'este condensatorul unic care ar înlocui gruparea fără să schimbe comportarea circuitului.', example: 'Doi condensatori de 10 μF în paralel se comportă ca unul de 20 μF.' },
    { symbol: 'C₁, C₂', name: 'Capacitățile condensatorilor', meaning: 'sunt valorile fiecărui condensator din grupare.', example: 'În formule introduci separat C₁ = 4 μF și C₂ = 6 μF.' },
    { symbol: 'Q', name: 'Sarcina', meaning: 'arată sarcina electrică stocată de condensator sau grupare.', example: 'În serie, condensatorii au aceeași sarcină Q, chiar dacă tensiunile sunt diferite.' },
    { symbol: 'U', name: 'Tensiunea', meaning: 'arată diferența de potențial aplicată pe condensator sau pe grupare.', example: 'În paralel, fiecare condensator are aceeași tensiune ca sursa.' },
    { symbol: 'paralel', name: 'Grupare în paralel', meaning: 'condensatorii sunt legați la aceleași două borne.', example: 'Capacitățile se adună: C_eq = C₁ + C₂.' },
    { symbol: 'serie', name: 'Grupare în serie', meaning: 'condensatorii sunt legați unul după altul.', example: 'Capacitatea echivalentă devine mai mică decât fiecare condensator luat separat.' },
  ],
  7: [
    { symbol: 'Uₘ, Iₘ', name: 'Valorile maxime', meaning: 'sunt vârfurile tensiunii și curentului alternativ.', example: 'La priză, 230 V este valoare eficace; vârful tensiunii este aproximativ 325 V.' },
    { symbol: 'U, I', name: 'Valorile eficace', meaning: 'sunt valorile echivalente pentru efect termic, folosite în probleme și aparate.', example: 'Când spui că priza are 230 V, te referi la U eficace.' },
    { symbol: 'T', name: 'Perioada', meaning: 'este timpul pentru o oscilație completă.', example: 'La 50 Hz, perioada este T = 1/50 s = 0,02 s.' },
    { symbol: 'f', name: 'Frecvența', meaning: 'arată câte oscilații au loc într-o secundă.', example: 'Rețeaua electrică europeană are f = 50 Hz.' },
    { symbol: 'ω', name: 'Pulsația', meaning: 'este frecvența exprimată în radiani pe secundă.', example: 'Pentru f = 50 Hz, ω = 2πf ≈ 314 rad/s.' },
    { symbol: 'φ', name: 'Defazajul', meaning: 'arată cât este deplasată tensiunea față de curent.', example: 'La o bobină, curentul rămâne în urmă față de tensiune.' },
    { symbol: 'ky', name: 'Scara verticală', meaning: 'arată câți volți corespund unei diviziuni pe osciloscop.', example: 'Dacă ky = 5 V/div și semnalul are 3 diviziuni, amplitudinea este 15 V.' },
    { symbol: 'kx', name: 'Scara orizontală', meaning: 'arată cât timp corespunde unei diviziuni pe osciloscop.', example: 'Dacă kx = 2 ms/div și o perioadă are 10 diviziuni, T = 20 ms.' },
  ],
  8: [
    { symbol: 'X_L', name: 'Reactanța inductivă', meaning: 'este opoziția bobinei la curent alternativ.', example: 'Crește cu frecvența: la frecvențe mari bobina se opune mai mult.' },
    { symbol: 'X_C', name: 'Reactanța capacitivă', meaning: 'este opoziția condensatorului la curent alternativ.', example: 'Scade cu frecvența: la frecvențe mari condensatorul lasă curentul să treacă mai ușor.' },
    { symbol: 'Z', name: 'Impedanța', meaning: 'este opoziția totală a circuitului RLC la curent alternativ.', example: 'Se folosește ca rezistența în legea lui Ohm: I = U/Z.' },
    { symbol: 'I', name: 'Curentul eficace', meaning: 'este curentul real de lucru din circuitul de curent alternativ.', example: 'Un ampermetru de CA îți arată de obicei valoarea eficace.' },
    { symbol: 'U_R, U_L, U_C', name: 'Tensiunile pe elemente', meaning: 'sunt tensiunile pe rezistor, bobină și condensator.', example: 'În RLC serie, aceste tensiuni nu se adună simplu, ci fazorial.' },
    { symbol: 'φ', name: 'Defazajul', meaning: 'arată dacă tensiunea totală este înaintea sau în urma curentului.', example: 'Dacă X_L > X_C, circuitul este inductiv și tensiunea precede curentul.' },
    { symbol: 'cosφ', name: 'Factorul de putere', meaning: 'arată ce parte din puterea aparentă devine putere utilă.', example: 'cosφ = 1 înseamnă circuit rezistiv sau rezonanță ideală.' },
  ],
  9: [
    { symbol: 'X_L = X_C', name: 'Condiția de rezonanță', meaning: 'bobina și condensatorul se compensează ca efect în curent alternativ.', example: 'La această frecvență, circuitul este acordat pe semnalul dorit.' },
    { symbol: 'f₀', name: 'Frecvența de rezonanță', meaning: 'este frecvența la care apare rezonanța.', example: 'Un radio schimbă f₀ ca să selecteze alt post.' },
    { symbol: 'ω₀', name: 'Pulsația de rezonanță', meaning: 'este aceeași idee ca f₀, dar exprimată în rad/s.', example: 'Se folosește mai ușor în formulele cu X_L = ωL și X_C = 1/(ωC).' },
    { symbol: 'I_R, I_L, I_C', name: 'Curenții pe ramuri', meaning: 'sunt curenții prin rezistor, bobină și condensator în paralel.', example: 'La paralel, curentul total se obține din compunerea acestor curenți, nu prin adunare simplă.' },
    { symbol: 'I', name: 'Curentul total', meaning: 'este curentul cerut de circuit de la sursă.', example: 'La rezonanță paralel, curentul prin sursă poate fi minim.' },
    { symbol: 'L, C', name: 'Inductanța și capacitatea', meaning: 'sunt elementele care stabilesc frecvența de rezonanță.', example: 'Dacă schimbi C într-un circuit radio, schimbi postul recepționat.' },
  ],
  10: [
    { symbol: 'S', name: 'Puterea aparentă', meaning: 'este produsul brut dintre tensiune și curent, adică ce trebuie să suporte sursa.', example: 'Un transformator se dimensionează în VA sau kVA, nu doar în W.' },
    { symbol: 'P', name: 'Puterea activă', meaning: 'este puterea care se transformă în lucru util, lumină sau căldură.', example: 'Factura de energie se bazează pe puterea activă consumată în timp.' },
    { symbol: 'Q', name: 'Puterea reactivă', meaning: 'este puterea care circulă între sursă și câmpurile bobinelor sau condensatoarelor.', example: 'Motoarele mari cer putere reactivă, chiar dacă ea nu produce lucru mecanic direct.' },
    { symbol: 'cosφ', name: 'Factorul de putere', meaning: 'arată cât de eficient este folosit curentul tras din rețea.', example: 'cosφ = 0,8 înseamnă că doar 80% din puterea aparentă devine putere activă.' },
    { symbol: 'R₁', name: 'Rezistența bobinei reale', meaning: 'este rezistența firului de cupru din bobină.', example: 'O bobină reală se încălzește fiindcă are R₁, nu este ideală.' },
    { symbol: 'X_L', name: 'Reactanța bobinei', meaning: 'este partea inductivă a bobinei reale.', example: 'Ea produce defazajul și componenta de tensiune U_L.' },
  ],
};

export default function MagnitudesGuide({ lesson, accent }) {
  const items = magnitudeGuides[lesson.id];

  if (!items?.length) return null;

  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: accent, marginBottom: 14 }}>
        Ce înseamnă mărimile
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 12,
      }}>
        {items.map(item => (
          <div key={`${lesson.id}-${item.symbol}`} style={{
            background: '#07122a',
            border: '1px solid #1a2d48',
            borderRadius: 10,
            padding: '14px 16px',
          }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'baseline', marginBottom: 8 }}>
              <code style={{
                color: accent,
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 6,
                padding: '1px 7px',
                fontSize: '0.9rem',
                fontFamily: 'JetBrains Mono, monospace',
                flexShrink: 0,
              }}>
                {item.symbol}
              </code>
              <strong style={{ color: '#e2e8f0', fontSize: '0.92rem' }}>{item.name}</strong>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.86rem', lineHeight: 1.6, marginBottom: 8 }}>
              {item.meaning}
            </p>
            <p style={{ color: '#64748b', fontSize: '0.82rem', lineHeight: 1.55 }}>
              Exemplu: {item.example}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
