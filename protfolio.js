function subForm(){
let name = document.getElementById("name").value;
let email = document.getElementById("email").value;
let msg = document.getElementById("msg").value;
console.log(name,email,msg);
let email_arr = email.split("");

if(name!='' && email!='' && msg!='' && email_arr.includes(".com" && "@")){
let data = {
    "data":{

    "Name":name,
    "Email":email,
    "Message":msg,
    }
}
fetch("https://api.apispreadsheets.com/data/vFByWUG8p9ZcmzDK/", {
	method: "POST",
	body: JSON.stringify(data),
}).then(res =>{
	if (res.status === 201){
		// SUCCESS
       
        alert("Your Data Submited Thank you");
        window.location.reload();
        
	}
	else{
		// ERROR
        alert("server not responding");
	}
})

} else{
            alert("Fill the data before submited or check the data formate");
        }
    }