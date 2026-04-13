
function calculateSum() {
    let n = document.getElementById("num").value;
    let sum = 0;

    // Loop from 1 to N
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Display result dynamically
    document.getElementById("result").innerHTML =
        "Sum from 1 to " + n + " is: " + sum;
}
