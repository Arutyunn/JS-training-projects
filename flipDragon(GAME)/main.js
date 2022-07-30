const dragonA = document.querySelector('.snakeA')
const dragonB = document.querySelector('.snakeB')
const dragonC = document.querySelector('.snakeC')
const dragonD = document.querySelector('.snakeD')
const stadion = document.querySelector('.stadion')
const fon = document.querySelector('.fon')
const bird = document.querySelector('.bird')
const gameOWER = document.querySelector('.gameOverBlock')

let balls = 0;
if (stadion.style.display === 'block') {
    document.addEventListener('keydown', jump)

    function jump(event) {
        if (event.key === ' ') {
            const birdLocation = Number(bird.style.bottom.split('').filter(e => e.toUpperCase() === e.toLowerCase()).join(''))
            if (birdLocation <= 430) {
                bird.style.bottom = `${birdLocation+30}px`
            }
        }
    }

    setInterval(() => {
        const birdLocationY = Number(bird.style.bottom.split('').filter(e => e.toUpperCase() === e.toLowerCase()).join(''))
        if (birdLocationY >= 10) {
            bird.style.bottom = `${birdLocationY-10}px`
        }
    }, 80)
    setTimeout(run1(), 10)

    setTimeout(run2(), 10)

    function run2() {
        const birdLocationX = valid(bird.style.left)
        const birdLocationY = valid(bird.style.bottom)
        const dragonLocat = valid(dragonC.style.left)
        const dragonLocatB = valid(dragonD.style.left)
        const dragonHight = valid(dragonC.style.height)
        const dragonHightB = valid(dragonD.style.height)
        const fonLok = valid(fon.style.right)
        fon.style.right = `${fonLok+1}px`
        dragonC.style.left = `${dragonLocat-1}px`;
        dragonD.style.left = `${dragonLocat-1}px`;


        if ((birdLocationX + 80 === dragonLocat && (460 - birdLocationY) <= dragonHight) ||
            (birdLocationX + 40 === dragonLocat && (460 - birdLocationY) <= dragonHight) ||
            birdLocationX === (dragonLocat + 50) && (460 - birdLocationY) <= dragonHight) {
            crash()
        }
        if ((birdLocationX + 80 === dragonLocatB && birdLocationY <= dragonHightB) ||
            (birdLocationX + 40 === dragonLocatB && birdLocationY <= dragonHightB) ||
            birdLocationX === (dragonLocatB + 50) && birdLocationY <= dragonHightB) {
            crash()
        }
        if (dragonLocat === -50) {
            balls += 1
            const randomHeig = Math.ceil(Math.random() * (350 - 40) + 40);
            dragonC.style.height = `${randomHeig}px`
            dragonD.style.height = `${500-randomHeig-135}px`
            dragonC.style.left = '500px'
            dragonD.style.left = '500px'
        }
        if (fonLok === 500) {
            fon.style.right = "0px"
        }
        setTimeout(run2, 10)
    }

    function run1() {
        const birdLocationX = valid(bird.style.left)
        const birdLocationY = valid(bird.style.bottom)


        const dragonLocation = valid(dragonA.style.left)
        const dragonLocationB = valid(dragonB.style.left)
        const dragonHight = valid(dragonA.style.height)
        const dragonHightB = valid(dragonB.style.height)

        if ((birdLocationX + 80 === dragonLocation && (460 - birdLocationY) <= dragonHight) ||
            (birdLocationX + 40 === dragonLocation && (460 - birdLocationY) <= dragonHight) ||
            birdLocationX === dragonLocation && (460 - birdLocationY) <= dragonHight) {
            crash()
        }
        if ((birdLocationX + 80 === dragonLocationB && birdLocationY <= dragonHightB) ||
            (birdLocationX + 40 === dragonLocationB && birdLocationY <= dragonHightB) ||
            (birdLocationX === dragonLocationB && birdLocationY <= dragonHightB)) {
            crash()
        }
        dragonA.style.left = `${dragonLocation-1}px`;
        dragonB.style.left = `${dragonLocation-1}px`;
        if (dragonLocation === -50) {
            balls += 1
            const randomHeight = Math.ceil(Math.random() * (350 - 40) + 40);
            dragonA.style.height = `${randomHeight}px`
            dragonB.style.height = `${500-randomHeight-135}px`
            dragonA.style.left = '500px'
            dragonB.style.left = '500px'
        }
        setTimeout(run1, 10)
    }

    function restart() {
        location.reload()
    }

    function crash() {
        run1 = null
        run2 = null
        const score = document.querySelector('.score1')
        score.innerText = `SCORE [${balls}]`
        const record = localStorage.getItem('record') || 0;
        localStorage.setItem('record', balls >= record ? JSON.stringify(balls) : record)
        const scoreRecord = document.querySelector('.scoreRecord')
        scoreRecord.innerText = `RECORD [${balls>record?balls:record}]`
        stadion.innerText = ' '
        stadion.style.display = 'none'
        gameOWER.style.display = 'block'
        document.querySelector('.restart').addEventListener('click', restart)

    }

    function valid(num) {
        return (Number(num.split('').filter(e => e.toUpperCase() === e.toLowerCase()).join('')))
    }
}