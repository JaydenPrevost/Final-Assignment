function submitgame()
{
    var GameName=document.getElementById("GameName").value;
    var Platform=document.getElementById("Platform").value;
    GameName=GameName.trim()
    Platform=Platform.trim()
    var Data=`{"name":"${GameName}","platform":"${Platform}"}`;
    fetch("https://lime-faithful-hippo.cyclic.app/api/games",{method:"POST",body:Data,headers: {"Content-type":"application/json; charset=UTF-8"}})
    .then((Response)=>Response.json())
    .then((jsondata)=>{console.log(jsondata);document.getElementById("Message").innerHTML=(jsondata.message)})
    .catch((error)=>{document.getElementById("Message").innerHTML=(error)})
    
}