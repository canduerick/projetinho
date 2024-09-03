function continuar() {
    const form = document.getElementById('programForm');
    const selectedPrograms = [];
    const checkboxes = form.querySelectorAll('input[name="program"]:checked');

    checkboxes.forEach((checkbox) => {
        selectedPrograms.push(checkbox.value);
    });

    if (selectedPrograms.length > 0) {
        alert('Você selecionou: ' + selectedPrograms.join(', '));
    } else {
        alert('Por favor, selecione pelo menos um programa.');
    }
}