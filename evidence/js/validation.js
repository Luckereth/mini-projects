// Funkce pro validaci vstupních dat
function validateInput(firstName, lastName, age, phone) {
    if (!firstName || !lastName || !age || !phone) {
        alert("Všechna pole jsou povinná!");
        return false;
    }

    if (isNaN(age) || age <= 0) {
        alert("Věk musí být kladné číslo!");
        return false;
    }

    const phoneRegex = /^\+420\s*\d{9}$/; // Povoluje formát +420123456789
    if (!phoneRegex.test(phone)) {
        alert("Telefonní číslo musí mít formát: +420XXXXXXXXX!");
        return false;
    }

    return true;
}