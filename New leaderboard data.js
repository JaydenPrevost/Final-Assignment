function submitplayer(){
    var PlayerName=document.getElementById("PlayerName").value;
    var Time=document.getElementById("Time").value;
    var score=document.getElementById("Score").value;
    score=score.trim()
    PlayerName=PlayerName.trim()
    Time=Time.trim()
    if (Time== "")
    {
        Time = null
    }
    let params = new URL(document.location).searchParams;
     var id=params.get("id")
     var data
     if (Time == null)
     {
        data=`{"gameID":"${id}","player":"${PlayerName}","score":"${score}","time":${Time}}`
     }
     else
     {
        data=`{"gameID":"${id}","player":"${PlayerName}","score":"${score}","time":"${Time}"}`
     }
     fetch(`https://lime-faithful-hippo.cyclic.app/api/leaderboard/${id}`,{method:"POST",body:data,headers: {"Content-type":"application/json; charset=UTF-8"}})
     .then((response)=>response.json())
     .then((jsondata)=>{
        alert(jsondata.message)
     })
     .catch((error)=>{
        alert(error)
     })
}