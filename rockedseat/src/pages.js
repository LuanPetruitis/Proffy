const Database = require('./database/db')

const { subjects, weekdays, getSubjects } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return res.render("study.html", { filters, subjects, weekdays })
    }

    console.log('Não tem campos vazios')

    const query = `
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE  EXISTS (
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = classes.id
        AND class_schedule.weekday = ${filters.weekday}
        AND class_schedule.time_from <= ${filters.time}
        AND class_schedule.time_to > ${filters.time}
    )
    `
}

function giveClasses(req, res) {
    const dados = req.query

    const isNotEmpty = Object.keys(dados).length !== 0;
    // adcionar as listas aos proffys
    if (isNotEmpty) {
        dados.subject = getSubjects(dados.subject)

        proffys.push(dados)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", { subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    giveClasses
}