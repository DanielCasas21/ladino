// Conjugate AR

function conjugateAr(verb) {
    const stem = verb.slice(0, -2);

    return `
    <div class="conjugation-section">
        <div class="conjugation-columns">
                <div class="column">
                    <table class="conjugation-table">
                        <tr class="row"><td class="pronoun">Infinitivo</td><td class="form">${verb}</td></tr>
                        <tr class="row"><td class="pronoun">Gerundio</td><td class="form">${stem}<span class="ending">ando</span></td></tr>
                        <tr class="row"><td class="pronoun">Partisipio</td><td class="form">${stem}<span class="ending">ado</span></td></tr>
                    </table>
                </div>
        </div>

        <br>

        <strong class="large-text">Indikativo</strong><br>
        
        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">o</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">as</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">amos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ash</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">an</span></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Pasado Imperfekto</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">ava</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">avas</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">ava</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">avamos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">avash</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">avan</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Pasado Simple</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">i</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">ates</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">o</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">imos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">atesh</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">aron</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Futuro</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">are</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">aras</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">ara</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">aremos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">arash</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">aran</span></td></tr>
                </table>
            </div>
        
            <div class="column">
                <strong>Kondisional</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">ariya</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">ariyas</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">ariya</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">ariyamos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ariyash</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">ariyan</span></td></tr>
                </table>
            </div>
        </div>

        <br>
        <strong class="large-text">Subjuntivo</strong><br>

        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">e</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">es</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">e</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">emos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">esh</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">en</span></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Pasado Imperfekto</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">ara</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">aras</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">ara</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">aramos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">arash</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">aran</span></td></tr>
                </table>
            </div>

        </div>

        <br>
        <strong class="large-text">Imperativo</strong><br>

        <div class="conjugation-columns">
            <div class="column">
                <strong>Prezente</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">a</span></td></tr>
                    <tr class="row"><td class="pronoun">(El/eya)</td><td class="form">${stem}<span class="ending">e</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">emos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">ad</span></td></tr>
                    <tr class="row"><td class="pronoun">(Eyos/as)</td><td class="form">${stem}<span class="ending">en</span></td></tr>
                </table>
            </div>
        </div>

    </div>
    `;
}

