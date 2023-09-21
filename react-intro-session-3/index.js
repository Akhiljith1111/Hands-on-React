document.getElementById("bored-bot").addEventListener("click",getIdea)

function getIdea(){
fetch("https://apis.scrimba.com/bored/api/activity")
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.body.classList.add("fun")
    document.getElementById("idea").textContent=data.activity
    document.getElementById("title").textContent = "Happy Bot"
})
}