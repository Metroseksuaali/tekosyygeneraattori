# Tekosyygeneraattori

Hauska web-sovellus, joka generoi satunnaisia tekosyitä myöhästymisille ja muille tilanteille.

## Demo

Avaa `index.html` selaimessa (vaatii web-palvelimen).

## Ominaisuudet

- 🎲 **157 erilaista tekosyytä** + 50 lisämaustetta
- 💫 Satunnainen yhdistely luoviksi selityksiksi
- 📝 Käyttäjät voivat ehdottaa uusia tekosyitä
- 📊 Tilastot tekosyiden määrästä
- 🎨 Moderni, responsiivinen design

## Pikalähtö

### Paikallinen testaus

```bash
# Python
python -m http.server 8000

# Node.js
npx serve

# Avaa selaimessa
http://localhost:8000
```

### Julkaisu

**GitHub Pages / Netlify / Vercel:**
- Vedä ja pudota tai linkitä repositoryyn
- Valmis!

## Tekosyiden lisääminen

Muokkaa `tekosyyt.json` tiedostoa:

```json
{
  "syyt": [
    "lisää uusi syy tähän"
  ],
  "lisamausteita": [
    "ja lisää uusi lisämauste tähän"
  ]
}
```

## Rakenne

```
tekosyygeneraattori/
├── index.html       # Pääsivu
├── styles.css       # Tyylit
├── script.js        # JavaScript-logiikka
├── tekosyyt.json    # Tekosyydata
├── LICENSE          # Käyttöoikeudet
└── claude.md        # Yksityiskohtainen dokumentaatio
```

## Google Forms -integraatio

Ehdotukset kerätään Google Formsin kautta. Päivitä oma lomakkeesi `script.js` tiedostoon:

```javascript
const lomakeUrl = 'https://forms.gle/SINUN-LINKKI';
```

## Lisenssi

Katso [LICENSE](LICENSE) tiedosto. Julkinen hostaaminen ja kaupallinen käyttö vaativat luvan.

## Teknologia

- Vanilla JavaScript (ei riippuvuuksia)
- CSS Grid & Flexbox
- JSON-pohjainen data
- Saavutettava (ARIA)

Katso [claude.md](claude.md) yksityiskohtaisempaa dokumentaatiota varten.
