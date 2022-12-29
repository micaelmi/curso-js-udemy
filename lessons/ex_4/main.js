// function myApp() { // Opção mais complexa
//     const display = document.getElementById('display');
//     const date = new Date();
//     const day = date.getDate();
//     const monthNumber = date.getMonth();
//     const year = date.getFullYear();
//     const hours = date.getHours();
//     const minutes = date.getMinutes();
//     const seconds = date.getSeconds();
//     const dayOfWeekNumber = date.getDay();

//     function getDayOfWeek() {
//         let day;
//         switch (dayOfWeekNumber) {
//             case 0: day = 'Domingo'; break;
//             case 1: day = 'Segunda-feira'; break;
//             case 2: day = 'Terça-feira'; break;
//             case 3: day = 'Quarta-feira'; break;
//             case 4: day = 'Quinta-feira'; break;
//             case 5: day = 'Sexta-feira'; break;
//             case 6: day = 'Sábado'; break;
//         }
//         return day;
//     }

//     function getMonth() {
//         let month;
//         switch (monthNumber) {
//             case 0: month = 'Janeiro'; break;
//             case 1: month = 'Fevereiro'; break;
//             case 2: month = 'Março'; break;
//             case 3: month = 'Abril'; break;
//             case 4: month = 'Maio'; break;
//             case 5: month = 'Junho'; break;
//             case 6: month = 'Julho'; break;
//             case 7: month = 'Agosto'; break;
//             case 8: month = 'Setembro'; break;
//             case 9: month = 'Outubro'; break;
//             case 10: month = 'Novembro'; break;
//             case 11: month = 'Dezembro'; break;
//         }
//         return month;
//     }

//     function formatTime(num) {
//         return num < 10 ? '0' + num : num;
//     }

//     const dayOfWeek = getDayOfWeek();
//     const month = getMonth();

//     display.textContent = `${dayOfWeek}, ${day} de ${month} de ${year} 
//     ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
// }
// myApp();

function showDate() { // Opção simplificada
    const display = document.getElementById('display');
    const date = new Date();

    display.textContent = date.toLocaleString('pt-BR', { dateStyle: 'full', timeStyle: 'medium' });
}
showDate();