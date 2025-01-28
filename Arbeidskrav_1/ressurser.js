const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ],
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

// funksjon der nå siden lastes inn kjører funksjonen showInfo med HTML som parameter, slik at det er innhold når siden lastes inn
window.onload = function() {
    showInfo('HTML')
}



// Funksjon der knappen blir hvit når kategorien som matches vises
function whiteButton(category) {
    // I nav taggen, finner den alle buttons og fjerner active
    document.querySelectorAll('nav button').forEach(button => {
        /* Her fjerner den active i css */
        button.classList.remove('active');
    })

    // Her legger den til active kun til knappen som er valgt og legger på css
    // Bruker template literals som finner knappen som er valgt, og tar imot category i parameter. Gjør knappen hvit som matcher og legger til kategorien active
    document.querySelector(`button[data-category="${category}"]`).classList.add('active');
}

// function updateButtonState(category) {
//     // Hent alle knappene i nav-elementet
//     const buttons = document.querySelectorAll('nav button');

//     // Gå gjennom alle knappene
//     buttons.forEach(button => {
//         // Sjekk om knappens data-category samsvarer med den valgte kategorien
//         if (button.dataset.category === category) {
//             // Hvis ja, legg til 'active'-klassen
//             button.classList.add('active');
//         } else {
//             // Hvis nei, fjern 'active'-klassen
//             button.classList.remove('active');
//         }
//     });
// }



// Deklarerer en funksjon som viser informasjon om forskjellige temaer inenfor webutvikling
function showInfo(category) {

    // bruker .filter for å se om det finnes en resource med samme kategori som er valgt
    const resource = resources.filter(resource => resource.category === category)[0];
    
    // tom variabel som senere oppdateres
    let resourcesHTML = "";
    if (resource) {
        resourcesHTML += `
            <article>
            <h3>${resource.category}</h3>
            <p>${resource.text}</p>
            <ul>
            <!-- bruker .map for å lage transformere arrayen til en streng
            bruker .join for å slå sammen strengene
            -->
            ${resource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
            </ul>
        </article>
        `;
    } else {
        return "Ingen data å hente :("
    }

    // Skriver ut artikkel kortet i HTML
    document.getElementById("info-section").innerHTML = resourcesHTML;

    // Kjører funksjonen med category som parameter
    whiteButton(category);
}