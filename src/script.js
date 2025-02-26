const head = document.createElement('div');
head.innerHTML = `
    <header class="p-3 bg-dark text-white">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        
                <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><a href="https://cyberbarmaley.github.io/cyberded/index.html" class="nav-link px-2 text-white">Главная</a></li>
                    <li><a href="https://cyberbarmaley.github.io/cyberded/bando.html" class="nav-link px-2 text-white">Общежитие</a></li>
                    <li><a href="https://cyberbarmaley.github.io/cyberded/answers.html" class="nav-link px-2 text-white">Ответы</a></li>
                    <li><a href="https://cyberbarmaley.github.io/cyberded/learn.html" class="nav-link px-2 text-white">Учеба</a></li>
                </ul>
        
            </div>
        </div>
    </header>
`;
document.body.prepend(head);

const basement = document.createElement('div');
basement.innerHTML = `
    <footer class="py-5 text-center text-body-secondary bg-body-tertiary">
        <p class="text-secondary"> Сайт был создан с целью помощи 4 группе. Не совершайте чужих ошибок. </br> Developed by CyberBarmaley. </p>
    </footer>
`;
document.body.append(basement);

function downloadFiles() {
    document.getElementById('materials').click();
}
