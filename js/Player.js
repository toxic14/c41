class Player{

constructor(){

this.index=null;
this.distance=0;
this.name=null;
this.rank=null;

}

getCount(){

var playerCounted=database.ref('playerCount');

playerCounted.on("value",(data)=>{

playerCount=data.val();

})

}

readrank(){

var prank=database.ref('playerrank');

prank.on("value",(data)=>{

this.rank=data.val();

});
}

static updaterank(rankcount){

database.ref('/').update({playerrank:rankcount});

}

updateCount(count){

  database.ref('/').update({playerCount:count});

}

update(){

  var playerIndex="players/player" + this.index;
  database.ref(playerIndex).set({playerName:this.name,distance:this.distance});

}

static getplayerinfo(){

var info=database.ref('players');
info.on("value",(data)=>{

  allplayers = data.val();

});

}
}