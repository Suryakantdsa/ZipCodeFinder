const zipcode = document.getElementById("zipcode")
const city = document.getElementById("city")
const pin = document.getElementById("pin")
const dist = document.getElementById("dist")
const state = document.getElementById("state")
const longi = document.getElementById("longi")
const lati = document.getElementById("lati")
const btnLook = document.getElementById("btn-look")
const btnAnother = document.getElementById("diff-btn")
const err = document.getElementById("err")

const userInput = document.querySelector(".user-input")
const userOutput = document.querySelector(".user-output")

console.log(btnLook)
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'f7945d3019msh48a35a004f348c5p120d00jsndda86bc7ef25',
        'X-RapidAPI-Host': 'community-zippopotamus.p.rapidapi.com'
    }
};


btnLook.addEventListener("click", () => {

    fetch(`https://community-zippopotamus.p.rapidapi.com/us/${zipcode.value}`, options)
        .then(response => response.json())
        .then(response => {
            if (response.places) {
                console.log("sucess")
                userInput.style.display = "none"
                userOutput.style.display = ""
                // console.log(response.places["place name"])
                city.textContent = response.places[0]["place name"]
                pin.textContent = zipcode.value
                state.textContent = response.places[0]["state abbreviation"]
                dist.textContent = response.places[0]["state"]
                longi.textContent = response.places[0]["latitude"]
                lati.textContent = response.places[0]["longitude"]
            }
            else {
                console.log("failed")
                err.style.display = ""
                userInput.style.display = "none"

            }


        })
        .catch(err => console.error(err));

})
document.getElementById("diff-btn").addEventListener("click", () => {
    console.log("check anau=iotger")
    zipcode.value = ``
    userInput.style.display = ""
    userOutput.style.display = "none"
})
document.getElementById("err-btn").addEventListener("click", () => {
    console.log("check anau=iotger")
    zipcode.value = ``
    userInput.style.display = ""
    userOutput.style.display = "none"
    err.style.display="none"
})

