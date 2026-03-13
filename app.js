const i18n = {
    pt: {
        subtitle: "Engenheiro de software",
        about_title: "Sobre",
        about_text: "Desenvolvedor de software com experiência em desenvolvimento backend e frontend de aplicações web responsivas e Desktops.",
        exp_title: "Expêriencia",
        tag_embedded: "Embarcados",
        siemens_role: "Engenheiro de Automação Industrial & Embarcados",
        siemens_desc: "Técnico em manutenção de sistemas de automação industrial e embarcados.",
        siemens_b1: "• Desenvolvi um software para teste de Telegramas em Ascii que transformou o trabalho manual em automático transformando 1 a 3 dias de trabalho manual em 1 hora.",
        siemens_b2: "• Realizei a maior migração de uma aplicações HMI (Dispositivo embarcado para visualização de dados de máquinas) de todo o Brasil.",
        siemens_b3: "• Desenvolvi e mantive scripts e Algoritmos de automação industrial de diferentes máquinas e plantas industriais.",
        siemens_b4: "• Identifiquei e atribuí 12 vulnerabilidades com CVEs em uma rede industrial complexa com mais de 184 dispositivos (computadores, remotas, PLCs e HMIs), abrangendo 7 redes distintas e 14 sub-redes; a análise estruturada da topologia permitiu priorização de riscos e aumento significativo da segurança.",
        chuva_role: "Engenheiro de software",
        chuva_desc: "Desenvolvedor fullstack em aplicações de controle de eventos universitarios.",
        chuva_b1: "• Desenvolvia a lógica de novas features e realizava manutenção de bugs com a linguagem PHP e o framework Drupal.",
        chuva_b2: "• Implementava a interface de úsuario com base em designs Figma utilizando Angular e Typescript.",
        chuva_b3: "• Utilizava a base de dados MySQL para armazenamento de dados.",
        chuva_b4: "• Escrevia testes de regressão visual utilizando cypress.",
        chuva_b5: "• Escrevia testes únitarios com PHPUnit e testes de aceitação com Gherkin e Cucumber.",
        chuva_b6: "• Utilizava git para versionamento e docker para conteinerização. Além de uma pipeline de ci/cd com github actions.",
        edu_title: "Escolaridade",
        edu_period: "2022 - 2025",
        edu_degree: "Bacharelado em ciência da computação"
    },
    en: {
        subtitle: "Software engineer",
        about_title: "About",
        about_text: "Software developer with experience in backend and frontend development of responsive web applications and Desktop apps.",
        exp_title: "Experience",
        tag_embedded: "Embedded",
        currently: "Present",
        siemens_role: "Siemens PDT Customer Service — Field Support",
        siemens_desc: "Technician for industrial automation and embedded systems maintenance.",
        siemens_bullet1: "• Perform maintenance of proprietary systems at client sites.",
        chuva_role: "Software Engineer",
        chuva_desc: "Fullstack developer on university event management applications.",
        chuva_b1: "• Developed new feature logic and performed bug maintenance using PHP and the Drupal framework.",
        chuva_b2: "• Implemented user interfaces based on Figma designs using Angular and TypeScript.",
        chuva_b3: "• Used MySQL database for data storage.",
        chuva_b4: "• Wrote visual regression tests using Cypress.",
        chuva_b5: "• Wrote unit tests with PHPUnit and acceptance tests with Gherkin and Cucumber.",
        chuva_b6: "• Used Git for version control and Docker for containerization, along with a CI/CD pipeline via GitHub Actions.",
        edu_title: "Education",
        edu_period: "2022 -\nPresent",
        edu_degree: "Bachelor's in Computer Science"
    }
};

let currentLang = 'pt';
function applyLang(lang) {
    currentLang = lang;
    const strings = i18n[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (strings[key] !== undefined) {
            // preserve newlines for edu-period
            el.innerHTML = strings[key].replace(/\n/g, '<br>');
        }
    });
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.getElementById('lang-label').textContent =
        lang === 'pt' ? '🇧🇷 PT/BR' : '🇺🇸 EN/US';
    document.querySelectorAll('.lang-option').forEach(opt => {
        opt.classList.toggle('active', opt.dataset.lang === lang);
    });
}

// Init
applyLang('pt');

/* ─────────────────────────────────────────
   Dark mode
───────────────────────────────────────── */
document.getElementById('btn-dark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

/* ─────────────────────────────────────────
   Language dropdown
───────────────────────────────────────── */
const btnLang = document.getElementById('btn-lang');
const dropdown = document.getElementById('lang-dropdown');

btnLang.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('open');
});

document.querySelectorAll('.lang-option').forEach(opt => {
    opt.addEventListener('click', () => {
        applyLang(opt.dataset.lang);
        dropdown.classList.remove('open');
    });
});

document.addEventListener('click', () => dropdown.classList.remove('open'));

/* ─────────────────────────────────────────
   PDF Download — uses browser print dialog
───────────────────────────────────────── */
document.getElementById('btn-pdf').addEventListener('click', () => {
    window.print();
});

// Ensure print-contacts renders correctly in all browsers
window.addEventListener('beforeprint', () => {
    document.getElementById('print-contacts').style.display = 'flex';
});
window.addEventListener('afterprint', () => {
    document.getElementById('print-contacts').style.display = '';
});