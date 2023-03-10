
let api_key = ""

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': api_key,
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

const pleaseWork = () => {
    let number = document.getElementById("input").value.trim()
    fetch(`https://numbersapi.p.rapidapi.com/${number}/math?fragment=true&json=true`, options)
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            } return res.json()
        })
        .then(response => document.getElementById("output").innerHTML = (response.text))
        
        .catch(err => console.error(err));
}