window.onload = init;

// Inicializace tabulky pojištěnců
function init() {
    loadInsuredPersons();
}


function loadInsuredPersons() {
    const insuredTable = document.getElementById("newInsured");
    const insuredPersons = getInsuredPersons();

    // Načtěte pojištěnce a přidejte animaci pro každý nový řádek
    insuredPersons.forEach(function (insuredPerson, index) {
        const newRow = addInsuredRow(insuredPerson, index);
        insuredTable.appendChild(newRow);

        // Přidejte třídu pro animaci
        setTimeout(() => {
            newRow.classList.add('animate');
        }, 1); // Malý timeout pro aktivaci animace
    });
}

// Funkce pro vytvoření nového řádku tabulky pro pojištěnce
function addInsuredRow(insuredPerson, index) {
    const newRow = document.createElement("tr");

    // Vytvoření buněk
    const nameCell = createCell(`${insuredPerson.firstName} ${insuredPerson.lastName}`);
    const phoneCell = createCell(insuredPerson.phone);
    const ageCell = createCell(insuredPerson.age);
    const deleteCell = createDeleteCell(insuredPerson, newRow);

    // Alternativní barvy pro řádky
    newRow.style.backgroundColor = index % 2 === 0 ? "#f2f2f2" : "#ffffff";

    // Přidání buněk do nového řádku
    newRow.appendChild(nameCell);
    newRow.appendChild(phoneCell);
    newRow.appendChild(ageCell);
    newRow.appendChild(deleteCell);

    return newRow;
}

// Pomocná funkce pro vytvoření buňky
function createCell(content) {
    const cell = document.createElement("td");
    cell.textContent = content;
    return cell;
}

// Funkce pro vytvoření buňky pro odstranění pojištěnce
function createDeleteCell(insuredPerson, row) {
    const deleteCell = document.createElement("td");
    const deleteButton = document.createElement("img");

    deleteButton.src = "/resources/trash-icon.png";
    deleteButton.alt = "Odstranit";
    deleteButton.style.cursor = "pointer";

    deleteButton.addEventListener('click', function () {
        // Přidání třídy pro animaci při mazání
        row.classList.add('slide-out');

        // Počkejte na dokončení animace, poté řádek smažte
        row.addEventListener('animationend', function () {
            deleteInsuredPerson(insuredPerson); // Zavolejte funkci pro smazání
            row.remove(); // Odstraňte řádek z DOM
        }, { once: true }); // Zajišťuje, že posluchač události bude odstraněn po prvním zavolání
    });

    deleteCell.appendChild(deleteButton);
    return deleteCell;
}


