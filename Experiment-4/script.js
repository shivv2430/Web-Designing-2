function setupInputs() {
    // 1. Get number of subjects from input field
    const numSubjectsInput = document.getElementById("subjects");
    const n = parseInt(numSubjectsInput.value);

    // Validation (Using Condition)
    if (isNaN(n) || n < 1 || n > 20) {
        alert("Please enter a valid number of subjects (1-20)");
        return;
    }

    let total = 0;
    let isValid = true;

    // 2. Using a LOOP to take marks for each subject via prompt()
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt("Enter marks for Subject " + i + "\n(Range: 0 - 100)"));

        // Validate each mark (Using Condition)
        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid input! Please enter a number between 0 and 100.");
            isValid = false;
            break;
        }
        total += marks; // Accumulate total
    }

    // Only display if all inputs were valid
    if (isValid) {
        displayResults(total, n);
    }
}

// Function to calculate and show results (Demonstrates: Logic & Operators)
function displayResults(total, n) {
    const average = total / n; // Arithmetic Operator
    const gradeInfo = getGradeInfo(average);
    const isPass = average >= 40;

    // 3. Update Result Card DYNAMICALLY
    document.getElementById("res-total").innerText = total;
    document.getElementById("res-average").innerText = average.toFixed(2) + "%";

    const gradeBadge = document.getElementById("res-grade");
    gradeBadge.innerText = `Grade: ${gradeInfo.grade}`;
    gradeBadge.style.color = gradeInfo.color;
    gradeBadge.style.backgroundColor = gradeInfo.bg;

    const statusBadge = document.getElementById("res-status");
    statusBadge.innerText = isPass ? "PASSED" : "FAILED";
    statusBadge.className = `status-badge ${isPass ? 'pass' : 'fail'}`;

    // Switch View: Hide Input and Show Report
    toggleStep("step-1", false);
    toggleStep("result-section", true);
}

// Helper function using nested IF-ELSE for grading
function getGradeInfo(avg) {
    if (avg >= 90) return { grade: "A+", color: "#10b981", bg: "#d1fae5" };
    else if (avg >= 75) return { grade: "A", color: "#10b981", bg: "#d1fae5" };
    else if (avg >= 60) return { grade: "B", color: "#3b82f6", bg: "#dbeafe" };
    else if (avg >= 40) return { grade: "C", color: "#f59e0b", bg: "#fef3c7" };
    else return { grade: "F", color: "#ef4444", bg: "#fee2e2" };
}

// Function to start over
function resetApp() {
    document.getElementById("subjects").value = "";
    toggleStep("step-1", true);
    toggleStep("result-section", false);
}

// Simple transition helper
function toggleStep(id, show) {
    const el = document.getElementById(id);
    if (!el) return;
    if (show) el.classList.remove("hidden");
    else el.classList.add("hidden");
}