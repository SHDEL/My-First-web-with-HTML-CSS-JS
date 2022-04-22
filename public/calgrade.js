function grade() {
    let score = Number(document.getElementById('inpscore').value)
    if (score > 100) {
        document.getElementById("grade").innerHTML = "เกินไปละ"
    }
    else if (score >= 80) {
        document.getElementById("grade").innerHTML = "Grade A"
    }
    else if (score >= 70) {
        document.getElementById("grade").innerHTML = "Grade B"
    }
    else if (score >= 60) {
        document.getElementById("grade").innerHTML = "Grade C"
    }
    else if (score > 50) {
        document.getElementById("grade").innerHTML = "Grade D"
    }
    else if (score < 0) {
        document.getElementById("grade").innerHTML = "เกรดมันติดลบได้เหรอวะ"
    }
    else {
        document.getElementById("grade").innerHTML = "Grade F"
    }
}
function resetscore() {
    location.reload()
}