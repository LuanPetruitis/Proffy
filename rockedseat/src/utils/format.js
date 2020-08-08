const subjects = [
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Artes",
    "Geografia",
    "História",
    "Matemática",
    "Portugues",
    "Quimica",
]

const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
]

function getSubjects(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}

module.exports = (
    subjects,
    weekdays,
    getSubjects
)