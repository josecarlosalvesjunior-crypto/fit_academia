document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const loginScreen = document.getElementById("login-screen");
    const appContainer = document.getElementById("app-container");
    const menuToggle = document.getElementById("menuToggle");
    const sidebar = document.querySelector(".sidebar");
    
    // 1. LOGIN SIMULADO
    // Esconde a tela de login e mostra o painel principal ao clicar em Entrar
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            loginScreen.classList.add("hidden");
            appContainer.classList.remove("hidden");
        });
    }

    // 2. NAVEGAÇÃO ENTRE AS TELAS (SPA - Single Page Application)
    // Faz a troca de abas dinamicamente sem recarregar a página
    const menuItems = document.querySelectorAll(".menu-item, .navigate-btn");
    const sections = document.querySelectorAll(".app-section");

    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSectionId = item.getAttribute("data-target");

            // Atualiza o estado visual do menu lateral
            document.querySelectorAll(".menu-item").forEach(menuLink => {
                if(menuLink.getAttribute("data-target") === targetSectionId) {
                    menuLink.classList.add("active");
                } else {
                    menuLink.classList.remove("active");
                }
            });

            // Exibe apenas a seção selecionada e esconde as outras
            sections.forEach(section => {
                if (section.id === targetSectionId) {
                    section.classList.remove("hidden");
                } else {
                    section.classList.add("hidden");
                }
            });

            // Fecha o menu lateral automaticamente no mobile após o clique
            if (window.innerWidth <= 768) {
                sidebar.classList.remove("open");
            }
        });
    });

    // 3. MENU HAMBÚRGUER (MOBILE)
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // 4. MODAL DE CHECK-IN / AGENDAMENTO
    const btnCheckin = document.getElementById("btnCheckin");
    const successModal = document.getElementById("success-modal");
    const closeModal = document.getElementById("closeModal");

    if (btnCheckin && successModal) {
        btnCheckin.addEventListener("click", () => {
            successModal.classList.remove("hidden");
        });
    }

    if (closeModal && successModal) {
        closeModal.addEventListener("click", () => {
            successModal.classList.add("hidden");
        });
    }
});