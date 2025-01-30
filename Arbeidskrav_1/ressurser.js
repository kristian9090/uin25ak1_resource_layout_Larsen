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
// funksjon når siden lastes inn kjører funksjonen showInfo med HTML som parameter, slik at det er innhold når siden lastes inn
window.onload = function() {
    showInfo('HTML')
}

// Deklarerer funksjonen whiteButton med category i parameter
function whiteButton(category) {
    // Fjerner 'active' class fra alle knapper og legger til 'active' class til knappen som samsvarer med kategorien
    document.querySelectorAll('button').forEach(button => {
        // bruker .toggle for å legge til classen 'active' i knappen som er valgt
        //bruker button for å finne knappen, og .innerHTML for å manipulere innholdet i knappen og .includes for å se om kategorien er i knappen
        button.classList.toggle('active', button.innerHTML.includes(category));
    });
}
// Deklarerer en funksjon som viser informasjon om forskjellige temaer innenfor webutvikling
function showInfo(category) {

    // bruker .filter for å finne alle ressurser med samme kategori som er valgt i knappen
    const filteredResources = resources.filter(resource => resource.category === category);
    
    // tom variabel som senere oppdateres
    let resourcesHTML = "";
    filteredResources.forEach(resource => {
        resourcesHTML += `
            <article>
            <h3>${resource.category}</h3>
            <p>${resource.text}</p>
            <ul>
        `;
        // bruker .forEach for å gå gjennom kildene og legge til hver kilde som en listeelement
        resource.sources.forEach(source => {
            resourcesHTML += `<li><a href="${source.url}">${source.title}</a></li>`;
        });
        resourcesHTML += `
            </ul>
        </article>
        `;
    });

    // Skriver ut artikkel kortet i HTML
    document.getElementById("info-section").innerHTML = resourcesHTML;
   
    // Kjører funksjonen whiteButton med category som parameter
    whiteButton(category)
}
