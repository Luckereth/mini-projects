// Funkce pro vymazání vstupních polí
function clearInputs() {
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("age").value = '';
    document.getElementById("phone").value = '';
}


// Zpracování po kliknutí na tlačítko Uložit
const savebtn = document.getElementById("saveBtn");

try {
    savebtn.addEventListener('click', function (event) {
        event.preventDefault(); // Zabráníme výchozímu chování formuláře

        const firstName = document.getElementById("firstName").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const age = document.getElementById("age").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Validace vstupních dat
        if (!validateInput(firstName, lastName, age, phone)) return;

        const newInsuredPerson = new InsuredPerson(firstName, lastName, age, phone);
        saveToStorage(newInsuredPerson);

        console.log(newInsuredPerson);
        clearInputs();

        alert("Nový pojištěnec byl vytvořen!")
    });
}
catch (error) {
    console.log('An error occurred: ', error.message);
}


