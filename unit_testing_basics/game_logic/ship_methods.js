function checkForShip(player,cordinates){
    var shipPresent,ship;
    for(var i=0;i<player.ships.length;i++){
        ship = player.ships[i];

        shipPresent = ship.locations.filter(function(actualCordinate){
            return(actualCordinate[0]===cordinates[0]&&(actualCordinate[1]===cordinates[1]))
        })[0];
        if(shipPresent){
            return ship;
        }
    }
    return false;

}

function damageShip(ship,cordinates){
    ship.damage.push(cordinates);

}

function fire(player,cordinates){

    var ship = checkForShip(player,cordinates);
    if(ship){
        damageShip(ship,cordinates)
    }
};
module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;