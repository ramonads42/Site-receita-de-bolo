document.addEventListener('DOMContentLoaded', function() {
    const printBtn = document.getElementById('print');
    printBtn.addEventListener('click', function() {
        window.print();
    });
});