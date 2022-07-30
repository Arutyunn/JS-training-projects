function censor(text) {
    const m = [];

    function changeScene(whatToChange, inChange = '') {

        text = text.replace(new RegExp(whatToChange, 'gi'), inChange)
        return text
    }

    return changeScene
}





const x = censor('badText1 text test text badText2')
x('badText1', '(*!*)')
x('badText2', '(*!*)')
console.log(x())