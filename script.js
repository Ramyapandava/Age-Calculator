function calculateAge() {
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert("Please enter your date of birth.");
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();

    if (today.getMonth() < dobDate.getMonth() || 
        (today.getMonth() === dobDate.getMonth() && today.getDate() < dobDate.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = `You are ${age} years old.`;
}