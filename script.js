function fetchred(q){
    fetch(`https://www.reddit.com/search/?q=${q}`)
    .then(() => {
        console.log(res => console.log(res))
    })

}

fetchred("burger");