
async function mc_go(){
    let output = document.getElementById("mc-output")
    output.innerText = "\nFetching.."
	let x = await fetch(
        "https://api.ashcon.app/mojang/v2/user/" + (
            document.getElementById("mc_user").value
        )
    )
    api = await x.json()
	console.log("x: "+x)
	console.log("api: "+api)
    output.innerHTML = ""
    output.innerHTML +="<br>Username: "+ api.username
    output.innerHTML +="<br>UUID: "+ api.uuid
    output.innerHTML +="<br>Age: "+ api.created_at
    output.innerHTML +="<br>Slim: "+ api.textures.slim
    output.innerHTML +="<br>Skin: <img class='skin' src='"+api.textures.skin.url+"'>"
    output.innerHTML +="<br>Cape: <img class='skin' src='"+api.textures.cape.url+"'>"
}