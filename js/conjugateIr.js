// Conjugate IR

function conjugateIr(verb) {
    const stem = verb.slice(0, -2);
    return `
    <div class="conjugation-section">
        <div class="conjugation-columns">
            <div class="column">
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Infinitivo</td><td class="form">${verb}</td></tr>
                    <tr class="row"><td class="pronoun">Gerundio</td><td class="form">${stem}<span class="ending">iendo</span></td></tr>
                    <tr class="row"><td class="pronoun">Partisipio</td><td class="form">${stem}<span class="ending">ido</span></td></tr>
                </table>
            </div>
        </div>

        <br>
        <strong class="large-text">Indikativo</strong><br>
        
        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">o</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">es</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">e</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">imos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ish</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">en</span></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Pasado Imperfekto</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">ia</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">ias</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">ia</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">iamos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">iash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">ian</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Pasado Simple</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">i</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">ites</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">io</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">imos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">itesh</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">ieron</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Futuro</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">ire</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">iras</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">ira</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">iremos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">irash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">iran</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Kondisional</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">iri(y)a</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">iri(y)as</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">iri(y)a</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">iri(y)amos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">iri(y)ash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">iri(y)an</span></td></tr>
                </table>
            </div>
        </div>

        <br>
        
        <strong class="large-text">Subjuntivo</strong><br>

        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">as</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">amos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">an</span></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Pasado Imperfekto</strong><br>
                <table class="conjugation-table">
                    <tr><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">iera</span></td></tr>
                    <tr><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">ieras</span></td></tr>
                    <tr><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">iera</span></td></tr>
                    <tr><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">ieramos</span></td></tr>
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ierash</span></td></tr>
                    <tr><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">ieran</span></td></tr>
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
                    <tr><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">id</span></td></tr>
                    <tr><td class="pronoun">(Eyos/as)</td><td class="form">${stem}<span class="ending">an</span></td></tr>
                </table>
            </div>
        </div>

    </div>
    `;
}