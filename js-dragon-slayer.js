var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var damageThisRound = Math.floor(Math.random() * 5 + 1);
var totalDamage = 0;

while (slaying) {
    slaying = false;
        
        if (youHit = 1) {
            console.log("Victory! You just beat the dragon!");
            totalDamage += damageThisRound;
            if (totalDamage >= 4) {
                youHit = Math.floor(Math.random() * 2);
            }
        }
    
        else {
            console.log("Boo! Your attacks were horribly weak. The dragon is laughing at you!");
        }
}