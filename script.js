const output = document.getElementById("output");
const answer = document.getElementById("answer");
const entry = document.querySelectorAll(".character");
let captureText = [];
let numbers;
function replaceSquareroot(expr) {
    return expr
        // replace √number
        .replace(/√(\d+(\.\d+)?)/g, 'sqrt($1)');
}
entry.forEach(singleEntry => {
    singleEntry.addEventListener("click", () => {
        captureText.push(singleEntry.textContent)
        output.textContent = captureText.join("");
        if (singleEntry.textContent === "AC") {
            output.textContent = "";
            captureText = [];
        }

        if (/^[²x÷]/.test(captureText.join(""))) {
            output.textContent = `${singleEntry.textContent} Not supported as first entry!`
            captureText = [];
        }


        if (singleEntry.textContent === "=") {
            let expression = captureText.join("").match(/.+(?=\=)/g)[0];
            console.log(expression);
            const originalExp = expression
            expression = expression.replace("x", "*");
            expression = expression.replace("÷", "/");
            expression = expression.replace("²", "^2");
            expression = replaceSquareroot(expression);
            console.log(expression);
            evaluation = math.evaluate(expression)
            console.log(evaluation);
            output.textContent = `${originalExp}=${evaluation}`;
            captureText = [];

        }

    })
});