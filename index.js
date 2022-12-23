
let ans = 0;
for (let i = 0; i < document.querySelectorAll(".all>.ele").length; i++) {
    document.querySelectorAll(".all>.ele")[i].addEventListener("click", function () {
        let text = this.innerText;
        console.log(this.classList);
        this.classList.add("elehover")
        setTimeout(() => {
            this.classList.remove("elehover")
        }, 300);
        let display = document.querySelector(".h3>p");
        let displayMain = document.querySelector(".h3>h3");

        if (text == "ENTER") {
            console.log(display.innerText.includes("√"));
            let displayAns = display.innerText;
            if (display.innerText.includes("√")) {
                let root = display.innerHTML.slice(display.innerHTML.indexOf("√") + 1);
                console.log((display.innerHTML.indexOf("√")));
                console.log(root);
                let underroot = Math.sqrt(root);
                console.log(underroot);
                console.log(displayAns);
                displayAns = display.innerHTML.replace("√" + root, underroot);
                console.log(displayAns);
            }
            displayAns = (displayAns).replace("ans", ans);
            displayMain.innerText = `${eval(displayAns).toFixed(2)}`
            ans = eval(displayAns).toFixed(2);
        }

        else if (text == "del") {
            if (display.innerText.length == 1) {
                display.innerText = "0"
            }
            else {
                let substring = display.innerText.slice(0, (display.innerText.length - 1))
                display.innerText = `${substring}`
            }
        }

        else if (text == "clear") {
            displayMain.innerText = "";
            display.innerText = "0";
        }

        else{
            if (text == "^") {
                text = "**";
                display.innerText = `${display.innerText}${text}`;
                return;
            }
            if ((display.innerText == 0 || display.innerText == "") && (text != 0)) {
                display.innerText = "";
            }
            else if (display.innerText == Infinity || display.innerText == NaN) {
                display.innerText = "";
            }
            display.innerText = `${display.innerText}${text}`;
        }
    });
};
