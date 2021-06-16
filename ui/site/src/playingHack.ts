
window.addEventListener('load', function () {
    const ChangePlayerOnline = () => {
        setInterval(() => {
            const forGamesInPlay = getRandomIntInclusive(100, 1000);
            const forPlayers = getRandomIntInclusive(100, forGamesInPlay);
            const nb_games_in_play = document.querySelector('#nb_games_in_play');
            const nb_connected_players = document.querySelector('#nb_games_in_play');
            if (nb_games_in_play !== null && nb_connected_players !== null) {
                nb_games_in_play.innerHTML = forGamesInPlay.toString();
                nb_connected_players.innerHTML = forPlayers.toString();
            }
        }, 30000)

    }
    function getRandomIntInclusive(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }
    ChangePlayerOnline();
});