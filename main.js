let text = "X"
let h1 = document.getElementById("headingOne");
let btn = document.getElementById("btn");
let boxes = document.querySelectorAll(".boxes");
let box = document.querySelectorAll(".box");
let reload = () => {location.reload()}
boxes.forEach(item => {
    item.addEventListener("click", eo => {
        if (text == "X" && eo.target.classList.contains("box") && eo.target.innerText == "") {
            eo.target.innerText = text;
            text = "O"
            h1.innerText = text;
        } else if (text == "O" && eo.target.classList.contains("box") && eo.target.innerText == "") {
            eo.target.innerText = text;
            text = "X"
            h1.innerText = text;
        }
        if (box[0].innerText == box[1].innerText && box[1].innerText == box[2].innerText && box[0].innerText != '') {
            box[0].style.color = "#01ff01";
            box[1].style.color = "#01ff01";
            box[2].style.color = "#01ff01";
            box[0].style.background = "#61646b69";
            box[1].style.background = "#61646b69";
            box[2].style.background = "#61646b69";
            h1.innerText = `${box[0].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[3].innerText == box[4].innerText && box[4].innerText == box[5].innerText && box[3].innerText != '') {
            box[3].style.color = "#01ff01";
            box[4].style.color = "#01ff01";
            box[5].style.color = "#01ff01";
            box[3].style.background = "#61646b69";
            box[4].style.background = "#61646b69";
            box[5].style.background = "#61646b69";
            h1.innerText = `${box[3].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[6].innerText == box[7].innerText && box[7].innerText == box[8].innerText && box[6].innerText != '') {
            box[6].style.color = "#01ff01";
            box[7].style.color = "#01ff01";
            box[8].style.color = "#01ff01";
            box[6].style.background = "#61646b69";
            box[7].style.background = "#61646b69";
            box[8].style.background = "#61646b69";
            h1.innerText = `${box[6].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[0].innerText == box[3].innerText && box[3].innerText == box[6].innerText && box[0].innerText != '') {
            box[0].style.color = "#01ff01";
            box[3].style.color = "#01ff01";
            box[6].style.color = "#01ff01";
            box[0].style.background = "#61646b69";
            box[3].style.background = "#61646b69";
            box[6].style.background = "#61646b69";
            h1.innerText = `${box[0].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[1].innerText == box[4].innerText && box[4].innerText == box[7].innerText && box[1].innerText != '') {
            box[1].style.color = "#01ff01";
            box[4].style.color = "#01ff01";
            box[7].style.color = "#01ff01";
            box[1].style.background = "#61646b69";
            box[4].style.background = "#61646b69";
            box[7].style.background = "#61646b69";
            h1.innerText = `${box[1].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[2].innerText == box[5].innerText && box[5].innerText == box[8].innerText && box[2].innerText != '') {
            box[2].style.color = "#01ff01";
            box[5].style.color = "#01ff01";
            box[8].style.color = "#01ff01";
            box[2].style.background = "#61646b69";
            box[5].style.background = "#61646b69";
            box[8].style.background = "#61646b69";
            h1.innerText = `${box[2].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[0].innerText == box[4].innerText && box[4].innerText == box[8].innerText && box[0].innerText != '') {
            box[0].style.color = "#01ff01";
            box[4].style.color = "#01ff01";
            box[8].style.color = "#01ff01";
            box[0].style.background = "#61646b69";
            box[4].style.background = "#61646b69";
            box[8].style.background = "#61646b69";
            h1.innerText = `${box[0].innerText} Winner`;
            setTimeout(reload, 2000)
        } else if (box[2].innerText == box[4].innerText && box[4].innerText == box[6].innerText && box[2].innerText != '') {
            box[2].style.color = "#01ff01";
            box[4].style.color = "#01ff01";
            box[6].style.color = "#01ff01";
            box[2].style.background = "#61646b69";
            box[4].style.background = "#61646b69";
            box[6].style.background = "#61646b69";
            h1.innerText = `${box[2].innerText} Winner`;
            setTimeout(reload, 2000)
        }
    })
})
btn.addEventListener("click", () => {
    location.reload();
})