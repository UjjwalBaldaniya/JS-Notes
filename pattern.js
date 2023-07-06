for (let i = 1; i <= 5; i++) {
    // document.write("*")
    for (let k = 1; k <= 5; k++) {
        if (i === 2 && k === 2) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 2 && k === 3) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 2 && k === 4) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 3 && k === 2) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 3 && k === 3) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 3 && k === 4) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 4 && k === 2) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 4 && k === 3) {
            document.write("&nbsp;&nbsp;");
        } else if (i === 4 && k === 4) {
            document.write("&nbsp;&nbsp;");
        } else {
            document.write("*");
        }
    }
    document.write("<br>");
}
document.write("<br>");

// ==============================

for (let i = 1; i <= 5; i++) {
    for (let j = 5; j > i; j--) {
        document.write("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= i; k++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");

// ==============================

for (let i = 5; i >= 1; i--) {
    for (let k = 1; k <= i; k++) {
        document.write("*");
    }
    document.write("<br>");
}
document.write("<br>");

// ==============================

let n = 5;
for (let i = 0; i <= n; i++) {
    for (let k = 0; k <= i; k++) {
        if (i === n) {
            document.write("*");
        } else {
            if (k == 0 || k == i) {
                document.write("*");
            } else {
                document.write("&nbsp;&nbsp;");
            }
        }
    }
    document.write("<br>");
}

// ==============================

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5 - i; j++) {
        document.write("&nbsp;&nbsp;");
    }
    for (let k = 1; k <= i; k++) {
        document.write("*");
    }
    for (let m = 1; m < i; m++) {
        document.write("*")
    }
    document.write("<br>");
}

// ==============================

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j < i; j++) {
        document.write("&nbsp;&nbsp");
    }

    for (let k = 5; k >= i; k--) {
        document.write("*");
    }

    for (let m = 5; m > i; m--) {
        document.write("*");
    }

    document.write("<br>");
}