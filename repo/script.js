const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Função para atualizar o modo escuro
const updateDarkMode = (isDarkMode) => {
    body.classList.toggle('dark-mode', isDarkMode);
    darkModeToggle.textContent = isDarkMode ? '☀️ Dia' : '🌙 Noite';
    darkModeToggle.setAttribute('aria-pressed', isDarkMode);
    localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
};

// Inicialização do modo escuro
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
updateDarkMode(isDarkMode);

// Alternar o modo ao clicar no botão
darkModeToggle.addEventListener('click', () => updateDarkMode(!body.classList.contains('dark-mode')));
