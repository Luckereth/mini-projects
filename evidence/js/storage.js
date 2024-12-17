let insuredPersons = JSON.parse(localStorage.getItem('insuredPersons')) || [];

// Funkce pro načtení a zobrazení tabulky pojištěnců
function getInsuredPersons() {
    return insuredPersons;
}


// Funkce pro uložení pojištěnce do paměti (localStorage)
function saveToStorage(insuredPerson) {
    insuredPersons.push(insuredPerson);
    localStorage.setItem('insuredPersons', JSON.stringify(insuredPersons));
}

// Funkce pro odstranění pojištěnce
function deleteInsuredPerson(deletedPerson) {
    insuredPersons = insuredPersons.filter(function(insuredPerson) {
        return insuredPerson.id !== deletedPerson.id;
    });
    localStorage.setItem('insuredPersons', JSON.stringify(insuredPersons));
}

