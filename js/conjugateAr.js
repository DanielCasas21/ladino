// Conjugate AR

function conjugateAr(verb) {
    const stem = verb.slice(0, -2);

    return `
    <div class="conjugation-section">
        <strong>Indikativo simple</strong><br><br>
        
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
        <strong>Indikativo kompuesto</strong><br><br>
        
        <div class="conjugation-columns">
            <div class="column">
                <strong>Partisipio prezente</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">esto ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">estas ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">esta ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">estamos ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">estash ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">estan ${stem}<span class="ending">an</ando></td></tr>
                </table>
            </div>
            
            <div class="column">
                <strong>Partisipio pasado</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">estava ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">estavas ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">estava ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">estavamos ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">estavash ${stem}<span class="ending">ando</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">estavan ${stem}<span class="ending">ando</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Pasado perfekto</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">tengo ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">tienes ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">tiene ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">tenemos ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">tenesh ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">tenen ${stem}<span class="ending">ado</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Pluskuanperfekto</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">aviya ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">aviyas ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">aviya ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">aviyamos ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">aviyash ${stem}<span class="ending">ado</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">aviyan ${stem}<span class="ending">ado</span></td></tr>
                </table>
            </div>

            <div class="column">
                <strong>Futuro intensional</strong><br>
                <table class="conjugation-table">
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">vo/v'a ${verb}</td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">vas a ${verb}</td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">va ${verb}</td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">vamos a ${verb}</td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">vash a ${verb}</td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">van a ${verb}</td></tr>
                </table>
            </div>
        </div>

        <br>
        <strong>Subjuntivo</strong><br><br>

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
                    <tr class="row"><td class="pronoun">Yo</td><td class="form">${stem}<span class="ending">era</span></td></tr>
                    <tr class="row"><td class="pronoun">Tu</td><td class="form">${stem}<span class="ending">eras</span></td></tr>
                    <tr class="row"><td class="pronoun">El/eya</td><td class="form">${stem}<span class="ending">era</span></td></tr>
                    <tr class="row"><td class="pronoun">Mozotros/as</td><td class="form">${stem}<span class="ending">eramos</span></td></tr>
                    <tr class="row"><td class="pronoun">Vozotros/as</td><td class="form">${stem}<span class="ending">erash</span></td></tr>
                    <tr class="row"><td class="pronoun">Eyos/as</td><td class="form">${stem}<span class="ending">eran</span></td></tr>
                </table>
            </div>
        </div>

        <br>
        <strong>Imperativo</strong><br><br>

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

