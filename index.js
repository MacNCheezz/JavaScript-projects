    let homeScore = 0;
    let guestScore = 0;

    function increment(team, value) {
        if (team === 'home'){
            homeScore += value;
            document.getElementById('home-score').textContent = homeScore;
        } else if (team === 'guest') {
            guestScore += value;
            document.getElementById('guest-score').textContent = guestScore;
        }
    }
    function res(){
        document.getElementById('home-score').textContent = '0';
        document.getElementById('guest-score').textContent = '0';
    }