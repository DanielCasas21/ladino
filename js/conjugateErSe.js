// Conjugate ER

function conjugateErSe(verb) {
    const stem = verb.slice(0, -4);
    const pronouns = ["me", "te", "se", "mos", "vos", "se"];

    return `
    <div class="conjugation-section">
        <div class="conjugation-columns">
            <div class="column">
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Infinitivo</td><td class="form">${verb}</td></tr>
                    <tr class="row"><td class="pronoun">Gerundio</td><td class="form">${stem}<span class="ending">iendo</span>(${pronouns[2]})</td></tr>
                    <tr class="row"><td class="pronoun">Partisipio</td><td class="form">${stem}<span class="ending">ido</span>(${pronouns[2]})</td></tr>
                </table>
            </div>
        </div>

        <br>

        <strong class="large-text">Indikativo</strong><br>
        
        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">o</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">es</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">e</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">emos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">esh</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">en</span></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Pasado Imperfekto</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">ia</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">ias</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">ia</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">iamos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">iash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">ian</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Pasado Simple</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">i</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">ites</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">io</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">imos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">itesh</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">ieron</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Futuro</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">ere</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">eras</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">era</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">eremos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">erash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">eran</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Kondisional</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">eriya</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">eriyas</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">eriya</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">eriyamos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">eriyash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">eriyan</span></td></tr>
                </table>
            </div>
        </div>

        <br>
        
        <strong class="large-text">Subjuntivo</strong><br>

        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">as</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">amos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">ash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">an</span></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Pasado Imperfekto</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td>${pronouns[0]}</td><td class="form">${stem}<span class="ending">iera</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td>${pronouns[1]}</td><td class="form">${stem}<span class="ending">ieras</span></td></tr>
                    <tr><td class="pronoun">El/eyTu</td><td>${pronouns[2]}</td><td class="form">${stem}<span class="ending">iera</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td>${pronouns[3]}</td><td class="form">${stem}<span class="ending">ieramos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td>${pronouns[4]}</td><td class="form">${stem}<span class="ending">ierash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td>${pronouns[5]}</td><td class="form">${stem}<span class="ending">ieran</span></td></tr>
                </table>
            </div>
        </div>

        <br>

        <strong class="large-text">Imperativo</strong><br>

        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">e</span></td></tr>
                    <tr><td class="pronoun">(El/eya)</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">amos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ed</span></td></tr>
                    <tr><td class="pronoun">(Eyos/as)</td><td class="form">${stem}<span class="ending">an</span></td></tr>
                </table>
            </div>
        </div>

    </div>
    `;
}

