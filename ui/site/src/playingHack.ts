
window.addEventListener('load', function () {
    var  ChangePlayerOnline = () => {
           setInterval(() => {
               let a = getRandomIntInclusive(100,1000);
               let b = getRandomIntInclusive(100,a);
               document.querySelector('nb_games_in_play').innerHTML = a.toString();
               document.querySelector('.nb_connected_players').innerHTML = b.toString();
           }, 30000)
   
       }
       function getRandomIntInclusive(min:number, max:number):number {
           min = Math.ceil(min);
           max = Math.floor(max);
           return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
         }
       ChangePlayerOnline();
   });