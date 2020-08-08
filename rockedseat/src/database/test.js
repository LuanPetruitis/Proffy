const database = require('./db')
const createProffy = require('./createProffy')

database.then(async(db) => {
    // Inserir dados

    proffyValue = {
        name: 'Luan Rodrigues',
        avatar: 'https://avatars1.githubusercontent.com/u/62400514?s=460&u=01ca0d9b7dbac7332811e9e6a777d48cf71b5819&v=4',
        whatsapp: '82848492',
        bio: 'instrutor de educação física'
    }

    classValue = {
        subject: "1",
        cost: "20",
        // o proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        // class_id virá pelo banco de dados, após cadastrarmos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, { proffyValue, classValue, classScheduleValue })

    //Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
        //console.log(selectedProffys)

    // consultar as classes de um determinado professor
    // e trazer junto os dados do professor
    const selectClasseAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
        //console.log(selectClasseAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser maior ou igual ao horário solicitado
    // o time_to precisa menor
    const selectClassesScheludes = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1300"
        AND class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesScheludes)

})