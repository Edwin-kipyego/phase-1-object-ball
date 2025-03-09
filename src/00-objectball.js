// Part 1: Building the Object
function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {number: 0,  shoe: 16, points: 22,rebounds: 12, assists: 12,  steals: 3, blocks: 1,slamDunks: 1 },
                "Reggie Evans": {number: 30, shoe: 14,  points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12,slamDunks: 7 },
                "Brook Lopez": {number: 11,shoe: 17,points: 17, rebounds: 19, assists: 10,steals: 3, blocks: 1, slamDunks: 15 },
                "Mason Plumlee": {number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
                "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2,  steals: 4, blocks: 11, slamDunks: 1 }
            }
},
away: {
    teamName: "Charlotte Hornets",
    colors:  ["Turquoise", "Purple"],
    players: {
        "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1,assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
        "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
        "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
        "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0},
        "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
    }
}
    }
}
console.log(gameObject());
 
// Step 2: Building Functions
// Calling Functions Within Functions
function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());

    function awayTeamName() {
        let object = gameObject();
        return object["away"]["teamName"];
      }

        console.log(awayTeamName());

        // Step 3: Building Functions

    
        function numPointsScored(playerName) { 
            let object = gameObject();
            for (let teamKey in object) {
                if (object[teamKey].players && object[teamKey].players[playerName]) {
                    return object[teamKey].players[playerName].points;
                }
            }
            return 0;
        }
        console.log(numPointsScored("Ben Gordon"));
        console.log(numPointsScored("Alan Anderson"));
        console.log(numPointsScored("Brendan Haywood"));

        
    function shoeSize(playerName) {
        let object = gameObject();
        for (let teamKey in object) {
            if (object[teamKey].players && object[teamKey].players[playerName]) {
                return object[teamKey].players[playerName].shoe;
            }
        }
        return 0;
    }

    console.log(shoeSize("Ben Gordon"));
    console.log(shoeSize("Brook Lopez"));

    function teamColors(teamName) {
        let object = gameObject();
        for (let teamKey in object) {
            if (object[teamKey].teamName === teamName) {
                return object[teamKey].colors;
            }
        }
        return "Team not found";
    }
    console.log(teamColors("Charlotte Hornets"));
    console.log(teamColors("Brooklyn Nets"));

    function teamNames() {
        let object = gameObject();
        return [object.home.teamName, object.away.teamName];
    }
    console.log(teamNames());

    function playerNumbers(teamName) {
        let object = gameObject();
        
        for (let teamKey in object) {
            if (object[teamKey].teamName === teamName) {
                return Object.values(object[teamKey].players).map(player => player.number);
            }
        }
        return "Team not found";
    }
    console.log(playerNumbers("Charlotte Hornets"));
    console.log(playerNumbers("Brooklyn Nets"));

    function playerStats(playerName) {
        let object = gameObject();
        for (let teamKey in object) {
            if (object[teamKey].players && object[teamKey].players[playerName]) {
                return object[teamKey].players[playerName];
            }
        }
        return "Player not found";
    }
    console.log(playerStats("Ben Gordon"));
    console.log(playerStats("Brook Lopez"));

    // bonus most points scored
    function mostPointsScored() {
        let object = gameObject();
        let topPlayer = {player: "", points: 0};
        let maxPoints = 0;

        Object.keys(object).forEach(teamKey => {
            let players = object[teamKey].players;

            Object.keys(players).forEach(player => {
                if (players[player].points > maxPoints) {
                    maxPoints = players[player].points;
                    topPlayer = player;

                }
            });
        });
return `${topPlayer} scored the most points with ${maxPoints} points`;
    }
    console.log(mostPointsScored());

    //winning team
    function winningTeam() {
        let object = gameObject();
        let teamScores ={};
        
        Object.keys(object).forEach(teamKey => {
            let teamName = object[teamKey].teamName;
            teamScores[teamName] = 0;
            let players = object[teamKey].players;
            Object.keys(players).forEach(player => {
                teamScores[teamName] += players[player].points;
            });
        });
        let winningTeam = Object.keys(teamScores).reduce((a, b) => teamScores[a] > teamScores[b] ? a : b);
        return `${winningTeam} won with ${teamScores[winningTeam]} points`;
    }
    console.log(winningTeam());

    //player with longest name
    function playerWithLongestName() {
        let object = gameObject();
        let longestName = "";

        Object.keys(object).forEach(teamKey => {
            let players = object[teamKey].players;

            Object.keys(players).forEach(player => {
                if (player.length > longestName.length) {
                    maxLength = player.length;
                    longestName = player;
                }
            });
        });
        return `The player with the longest name is ${longestName}`;

    }
    console.log(playerWithLongestName());

    //does long name stealATon

    function doesLongNameStealATon() {
        let object = gameObject();
        let longestName = "";
        let mostSteals = 0;
        let topStealer = "";

       Object.keys(object).forEach(teamKey => {
              let players = object[teamKey].players;
    
              Object.keys(players).forEach(player => {
                if (player.length > longestName.length) {
                     longestName = player;
                }
                if (players[player].steals > mostSteals) {
                     mostSteals = players[player].steals;
                     topStealer = player;
                }
              });
         });
         return longestName === topStealer;
    }
    console.log(doesLongNameStealATon());



    

   



            

                      



        
  




          
    

