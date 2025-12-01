// Tekosyygeneraattori JavaScript

// Tekosyyt ladataan JSON-tiedostosta
let tekosyytData = null;

// Lataa tekosyyt JSON-tiedostosta
async function lataaTekosyyt() {
    try {
        const vastaus = await fetch('tekosyyt.json');
        if (!vastaus.ok) {
            throw new Error('Tekosyiden lataus epäonnistui');
        }
        tekosyytData = await vastaus.json();
        paivitaTilastot();
    } catch (virhe) {
        console.error('Virhe ladattaessa tekosyitä:', virhe);
        // Varatekosyy jos lataus epäonnistuu
        tekosyytData = {
            syyt: ['Tekosyiden lataus epäonnistui. Yritä päivittää sivu.'],
            lisamausteita: []
        };
    }
}

// Palauttaa satunnaisen elementin listasta
function satunnainenValinta(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

// Generoi satunnainen tekosyy
function generoiTekosyy() {
    if (!tekosyytData) {
        return 'Ladataan tekosyitä...';
    }

    const syy = satunnainenValinta(tekosyytData.syyt);

    // 50% todennäköisyydellä lisätään lisämauste
    const lisaaLisamauste = Math.random() > 0.5;

    if (lisaaLisamauste && tekosyytData.lisamausteita.length > 0) {
        const lisamauste = satunnainenValinta(tekosyytData.lisamausteita);
        return `${syy} ${lisamauste}`;
    }

    return syy;
}

// Näytä uusi tekosyy
function naytaTekosyy() {
    const tekosyyElementti = document.getElementById('tekosyy');
    const uusiTekosyy = generoiTekosyy();

    // Lisää pieni fade-efekti
    tekosyyElementti.style.opacity = '0';

    setTimeout(() => {
        tekosyyElementti.textContent = uusiTekosyy;
        tekosyyElementti.style.opacity = '1';
    }, 150);
}

// Avaa Google Forms -lomake
function avaaMuokkauslomake() {
    const lomakeUrl = 'https://forms.gle/8bJXUtgej2EWbDMR9';
    window.open(lomakeUrl, '_blank');
}

// Päivitä tilastot
function paivitaTilastot() {
    if (tekosyytData) {
        document.getElementById('syyt-maara').textContent = tekosyytData.syyt.length;
        document.getElementById('lisamausteet-maara').textContent = tekosyytData.lisamausteita.length;
    }
}

// Alusta sovellus
async function alusta() {
    const nappi = document.getElementById('generoi-btn');
    const ehdotusNappi = document.getElementById('ehdotus-btn');
    
    // Näytä loading-tila
    nappi.disabled = true;
    nappi.textContent = 'Ladataan...';

    // Lataa tekosyyt ensin
    await lataaTekosyyt();
    
    // Palauta nappi normaalitilaan
    nappi.disabled = false;
    nappi.textContent = 'Anna tekosyy';
    nappi.addEventListener('click', naytaTekosyy);

    ehdotusNappi.addEventListener('click', avaaMuokkauslomake);
}

// Lisää siirtymistehoste tekosyy-tekstille ja alusta sovellus
document.addEventListener('DOMContentLoaded', () => {
    const tekosyyElementti = document.getElementById('tekosyy');
    tekosyyElementti.style.transition = 'opacity 0.3s ease';

    alusta();
});