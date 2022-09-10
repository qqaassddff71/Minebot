const matieres = ["noteEs1", "noteEs2", "noteEps1", "noteEps2", "noteLva1", "noteLva2", "noteLvb1", "noteLvb2", "noteHg1", "noteHg2", "noteEmc1", "noteEmc2", "noteSpe1", "noteFr", "noteSpe2", "noteSpe3", "notePhilo", "noteGo"]
const coeff = [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 8, 10, 16, 16, 8, 10]
var option1 = false
var option2 = false

document.addEventListener("keyup", validingInput)
window.addEventListener('load', validingInput)

function validingInput() {
    
    let casesValides = 0
    for (let i = 0; i < matieres.length; i++) {
        
        let cell = document.getElementById(matieres[i])

        if (cell.value) {
            if (parseFloat(cell.value) >= 0 && parseFloat(cell.value) <= 20) {
                casesValides++;
                cell.classList.remove('bg-danger')
                cell.classList.remove('bg-warning')
                cell.classList.add('bg-success')
            } else {
                casesValides--;
                cell.classList.remove('bg-danger')
                cell.classList.remove('bg-succes')
                cell.classList.add('bg-warning')
            }
        } else {
            casesValides--;
            cell.classList.add('bg-danger')
            cell.classList.remove('bg-warning')
            cell.classList.remove('bg-succes')
        }
    }

    cell = document.getElementById("noteOption1")
    if (document.getElementById("noteOption1").value) {
        if (parseFloat(cell.value) >= 0 && parseFloat(cell.value) <= 20) {
            cell.classList.remove('bg-info')
            cell.classList.remove('bg-warning')
            cell.classList.add('bg-success')
            option1 = true
        } else {
            option1 = false
            cell.classList.remove('bg-info')
            cell.classList.remove('bg-succes')
            cell.classList.add('bg-warning')
        }
    } else {
        option1 = false
        cell.classList.add('bg-info')
        cell.classList.remove('bg-warning')
        cell.classList.remove('bg-succes')
    }

    cell = document.getElementById("noteOption2")
    if (document.getElementById("noteOption2").value) {
        console.log(parseFloat(cell.value))
        if (parseFloat(cell.value) >= 0 && parseFloat(cell.value) <= 20) {
            cell.classList.remove('bg-info')
            cell.classList.remove('bg-warning')
            cell.classList.add('bg-success')
            option2 = true
        } else {
            option2 = false
            cell.classList.remove('bg-info')
            cell.classList.remove('bg-succes')
            cell.classList.add('bg-warning')
        }
    } else {
        option2 = false
        cell.classList.add('bg-info')
        cell.classList.remove('bg-warning')
        cell.classList.remove('bg-succes')
    }

    if (casesValides == matieres.length) {
        updateResults()
    } else {
        clearResults()
    }
}

function calculFinal() {
    var noteTotal = 0


    for (let i = 0; i < matieres.length; i++) {

        let cell = document.getElementById(matieres[i])
        let cellCoeff = coeff[i]
        noteTotal = noteTotal + (parseFloat(cell.value) * cellCoeff)

    }

    if (!option1 && !option2) {
        console.log("aucune option")
        return document.getElementById("total").innerHTML = noteTotal / 100
    } else if (option1 && !option2) {
        console.log("option 1")
        return document.getElementById("total").innerHTML = (noteTotal + parseFloat(document.getElementById("noteOption1").value) * 2) / 102
    } else if (option1 && option2) {
        console.log("deux options")
        return document.getElementById("total").innerHTML = (noteTotal + parseFloat(document.getElementById("noteOption1").value) * 2 + parseFloat(document.getElementById("noteOption2").value) * 2) / 104
    } else {
        console.log("option2")
        return document.getElementById("total").innerHTML = (noteTotal + parseFloat(document.getElementById("noteOption2").value) * 2) / 102
    }
}

function updateResults() {
    let result = Math.round(calculFinal() * 100) / 100
    document.getElementById("total").innerHTML = result
    mentionCell = document.getElementById("mention")
    if (result < 10) {
        mentionCell.innerHTML = "Malheureusement tu n'as pas le bac"
    } else if (result >= 10 && result < 12) {
        mentionCell.innerHTML = "Tu as le bac !"
    } else if (result >= 12 && result < 14) {
        mentionCell.innerHTML = "Bravo, tu as le bac avec mention Assez bien"
    } else if (result >= 14 && result < 16) {
        mentionCell.innerHTML = "Bien joué, tu as le bac avec la mention bien !"
    } else {
        mentionCell.innerHTML = "Wow impressionnant, tu as le bac avec la mention Très bien !!"
    }
}

function clearResults() {
    document.getElementById("mention").innerHTML = ""
    document.getElementById("total").innerHTML = ""

}