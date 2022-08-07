const url = 'https://api.adviceslip.com/advice'

const url_teste = 'https://api.adviceslip.com/advice/117'

let text = document.getElementById('advice_text')
let id = document.getElementById('advice_id')


const sort = () => {
fetch(url)

.then(resp => resp.json())
.then(data => {
        const advice_text = data.slip.advice
        const advice_id = data.slip.id
        text.innerHTML = `"${advice_text}"`
        id.innerHTML = `ADVICE #${advice_id}`
        }
    )
}






