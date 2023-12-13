window.onload = (event) =>{
    leaderboard()
  };

function leaderboard()
{
    let params = new URL(document.location).searchParams;
     var id=params.get("id")
   fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderboard/${id}`).then(function(Response){
    return Response.json();
   }).then(function(info){
    var tableCode=
    "<table>\
    <tr>\
        <th>player</th><th>time</th><th>score</th>\
    </tr>";
    console.log(info);
    info.Leaderboard.forEach(function(currentplayer){
     tableCode+=`<tr><td>${currentplayer.Player}</td><td>${currentplayer.Time}</td><td>${currentplayer.Score}</td></tr>`
    })
 tableCode+= `</table> <br> <button> <a href="New leaderboard data.html?id=${id}"> add new player</a></button>`;
 document.getElementById("table").innerHTML = tableCode;

   }) 
  } 