window.onload = (event) =>{
    games()
  };

function games()
{
   fetch("https://lime-faithful-hippo.cyclic.app/api/games").then(function(Response){
    return Response.json();
   }).then(function(info){
    var tableCode=
    "<table>\
    <tr>\
        <th>games</th><th> Platform</th>\
    </tr>";
    console.log(info);
    info.forEach(function(Game){
      console.log(Game.GameName)
      tableCode+=`<tr><td><a href="leaderboard.html?id=${Game.id}"> ${Game.GameName}</a></td><td> ${Game.Platform} </td></tr>`
    })
 tableCode+= "</table>";
 document.getElementById("table").innerHTML = tableCode;

   }) 
  } 