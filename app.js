const jokes = document.querySelector('#jokes');
const newLi = document.createElement('li');
const btn = document.querySelector('button');



const getJokes = async () => {
    const config = {headers: {accept: 'application/json'}};
    const res = await axios.get('https://icanhazdadjoke.com/', config);
    return res.data.joke;

}
const addJoke = async () => {
    const jokeTxt = await getJokes();
    const newLi = document.createElement('li');
    newLi.append(jokeTxt)
    jokes.append(newLi)
}
btn.addEventListener('click', addJoke)