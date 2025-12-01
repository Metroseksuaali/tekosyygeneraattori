# Tekosyygeneraattori

Hauska ja moderni web-sovellus, joka generoi satunnaisia tekosyitä myöhästymisille ja muille tilanteille.

## Ominaisuudet

- 🎲 Satunnainen tekosyygeneraattori
- 💫 Yhdistää "syitä" ja "lisämausteita" luoviksi yhdistelmiksi
- 📝 Käyttäjät voivat ehdottaa uusia tekosyitä Google Formsin kautta
- 📊 Näyttää tilastot tekosyiden määrästä
- 🎨 Moderni, responsiivinen käyttöliittymä
- ♿ Saavutettava (ARIA-attribuutit, fokus-indikaattorit)
- 🌈 Violetti gradienttitausta ja tyylikkäät animaatiot

## Tekninen toteutus

### Rakenne

```
tekosyygeneraattori/
├── index.html          # Pääsivu
├── styles.css          # Tyylit ja animaatiot
├── script.js           # JavaScript-logiikka
├── tekosyyt.json       # Tekosyydata (157 syytä + 50 lisämaustetta)
├── ASENNUSOHJEET.md    # Käyttöönotto-ohjeet
└── claude.md           # Tämä tiedosto
```

### Tekniset ratkaisut

- **Vanilla JavaScript** - Ei riippuvuuksia
- **JSON-pohjainen data** - Helppo ylläpitää ja laajentaa
- **Async/await** - Moderni tiedon lataus
- **CSS Grid & Flexbox** - Responsiivinen layout
- **CSS Custom Properties** - Helppo muokata värejä
- **Progressiivinen lataus** - Näyttää "Ladataan..." -tilan

### Toiminnallisuus

1. **Tekosyiden lataus**
   - Lataa `tekosyyt.json` sivun ladatessa
   - Näyttää latausilmaisimen napin tekstissä
   - Virheidenkäsittely jos lataus epäonnistuu

2. **Tekosyyn generointi**
   - Valitsee satunnaisen syyn
   - 50% todennäköisyydellä lisää satunnaisen lisämausteen
   - Fade-animaatio uuden tekosyyn näyttämisessä

3. **Ehdotustoiminto**
   - Avaa Google Forms -lomakkeen uudessa välilehdessä
   - Sisältää ohjeet hyvän tekosyyn tekemiseen

4. **Tilastot**
   - Päivittyy automaattisesti JSON-datasta
   - Näyttää syiden ja lisämausteiden määrän

## Käyttöönotto

### Paikallinen testaus

Tarvitset web-palvelimen, koska JSON-tiedosto ladataan fetchillä:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# VS Code Live Server -laajennus
```

Avaa selaimessa: `http://localhost:8000`

### Julkaisu verkkoon

**GitHub Pages:**
1. Luo uusi repository GitHubiin
2. Lataa kaikki tiedostot
3. Mene Settings → Pages
4. Valitse branch ja tallenna
5. Sivusto on osoitteessa: `https://käyttäjänimi.github.io/repo-nimi/`

**Netlify:**
1. Vedä kansio osoitteeseen https://app.netlify.com/drop
2. Valmis!

**Vercel:**
1. Mene osoitteeseen https://vercel.com
2. Import tai vedä ja pudota
3. Automaattinen julkaisu

## Tekosyiden lisääminen

Muokkaa `tekosyyt.json` tiedostoa:

```json
{
  "syyt": [
    "uusi syy tähän"
  ],
  "lisamausteita": [
    "ja uusi lisämauste tähän"
  ]
}
```

Tilastot päivittyvät automaattisesti!

## Käyttäjien ehdotukset

Ehdotukset kerätään Google Formsin kautta (linkki `script.js` tiedostossa).

**Ehdotusten käsittely:**
1. Avaa Google Forms vastaukset
2. Tarkista ja hyväksy ehdotukset
3. Lisää hyväksytyt `tekosyyt.json` tiedostoon
4. Päivitä sivusto (git push tai uudelleenjulkaisu)

## Muokkaaminen

### Värit

Muokkaa `styles.css` tiedostoa:

```css
/* Päävärit */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Nappi */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ehdotusnappi */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
```

### Lisämausteen todennäköisyys

Muokkaa `script.js` riviltä 39:

```javascript
// 50% todennäköisyys
const lisaaLisamauste = Math.random() > 0.5;

// Muuta esim. 70% todennäköisyydeksi
const lisaaLisamauste = Math.random() > 0.3;
```

### Google Forms -linkki

Päivitä oma lomakkeesi `script.js` rivillä 82:

```javascript
const lomakeUrl = 'https://forms.gle/SINUN-LINKKI';
```

## Selainyhteensopivuus

- Chrome/Edge 88+
- Firefox 78+
- Safari 14+
- Mobile Safari 14+
- Chrome Android 88+

Tarvitsee tuen:
- `fetch()` API
- `async/await`
- CSS Grid
- CSS Custom Properties

## Lisenssi ja käyttöoikeudet

**Sallittu:**
- ✅ Koodin tarkastelu ja opiskelu
- ✅ Forkkaaminen ja muokkaaminen omaan käyttöön
- ✅ Käyttö oppimis- ja kehitystarkoituksiin

**Ei sallittu ilman lupaa:**
- ❌ Sivuston tai sen muokkausten hostaaminen julkisesti
- ❌ Käyttö kaupallisissa palveluissa tai projekteissa
- ❌ Jakeleminen osana maksullista tuotetta tai palvelua

Jos haluat hostata oman version tai käyttää kaupallisesti, ota yhteyttä.

## Tekijä

Luotu Claude Code:n avulla.

## Yhteenveto

Yksinkertainen mutta hauska projekti, joka demonstroi:
- Moderneja web-tekniikoita
- JSON-datanhallintaa
- Responsiivista suunnittelua
- Käyttäjävuorovaikutusta
- Ulkoisten palveluiden integraatiota (Google Forms)

Projekti on helppo laajentaa ja muokata omiin tarpeisiin!
