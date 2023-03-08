
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': "API_KEY",
        'X-RapidAPI-Host': 'numbersapi.p.rapidapi.com'
    }
};

const please = () => {
    number = document.getElementById("input").value
    fetch(`https://numbersapi.p.rapidapi.com/${number}/math?fragment=true&json=true`, options)
        .then(res => {
            if (!res.ok) {
                throw Error(res.statusText)
            } return res.json()
        })
        .then(response => console.log(response.text))
        .catch(err => console.error(err));
}



