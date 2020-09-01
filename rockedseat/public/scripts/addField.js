 // Procurar o botão

 document.querySelector('#add-time')

 // Quando clicar no botão

 .addEventListener('click', cloneField)

 //  Executar uma ação
 function cloneField() {
     var time_from = document.getElementById('time_from')
     var time_to = document.getElementById('time_to')
     if (time_from.value == "" || time_to.value == "") {
         alert("É necessário preencher o campo de hora antes de adicionar outro!")
     } else {
         // Duplicar os campos  
         const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

         // Pegar os campos
         const fields = newFieldContainer.querySelectorAll('input')

         // Para cada campo Limpar

         fields.forEach(function(field) {
             // pegar o field do momento e limpa
             field.value = ""
         })

         // Colocar na página
         document.querySelector('#schedule-items').appendChild(newFieldContainer)

     }
 };