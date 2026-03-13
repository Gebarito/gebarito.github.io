const i18n = {
    pt: {
        subtitle: "Engenheiro de software",
        about_title: "Sobre",
        about_text: "Graduado em ciência da computação, tenho expêriencia profissional em desenvolvimento web fullstack e em embarcados na área de automação industrial.\nJá explorava a área da computação e desenvolvimento desde antes disso, no ensino médio em 2018 já estudava, desenvolvia projetos pessoais e tinha programação como hobby.\n",
        exp_title: "Expêriencia",
        objective_title: "Objetivo",
        objective_text: "Busco uma oportunidade como Desenvolvedor de software onde possa desenvolver minhas habilidades profissionais e contribuir para a empresa e minha área de estudo.",
        tag_embedded: "Embarcados",
        siemens_role: "Engenheiro de Automação Industrial & Embarcados",
        siemens_desc: "<i>Estágio</i>",
        siemens_b1: "• Desenvolvi um software para teste de Telegramas em Ascii que transformou o trabalho manual em automático transformando 1 a 3 dias de trabalho manual em 1 hora.",
        siemens_b2: "• Realizei a maior migração de uma aplicações HMI (Dispositivo embarcado para visualização de dados de máquinas) de todo o Brasil.",
        siemens_b3: "• Desenvolvi e mantive scripts e Algoritmos de automação industrial de diferentes máquinas e plantas industriais.",
        siemens_b4: "• Identifiquei e atribuí 12 vulnerabilidades com CVEs em uma rede industrial complexa com mais de 184 dispositivos (computadores, remotas, PLCs e HMIs), abrangendo 7 redes distintas e 14 sub-redes; a análise estruturada da topologia permitiu priorização de riscos e aumento significativo da segurança.",
        chuva_role: "Desenvolvedor web fullstack - Estágio",
        chuva_desc: "<i>Estágio</i>",
        chuva_b1: "• Desenvolvia a lógica de novas features e realizava manutenção de bugs com a linguagem PHP e o framework Drupal.",
        chuva_b2: "• Implementava a interface de úsuario com base em designs Figma utilizando Angular e Typescript.",
        chuva_b3: "• Utilizava a base de dados MySQL para armazenamento de dados.",
        chuva_b4: "• Escrevia testes de regressão visual utilizando cypress.",
        chuva_b5: "• Escrevia testes únitarios com PHPUnit e testes de aceitação com Gherkin e Cucumber.",
        chuva_b6: "• Utilizava git para versionamento e docker para conteinerização. Além de uma pipeline de ci/cd com github actions.",
        edu_title: "Escolaridade",
        edu_period: "2022 - 2025",
        edu_degree: "Tive a oportunidade de estudar a teoria e prática da computação em disciplinas como: Estrutura de dados e Algoritmos, Sistemas Operacionais, Banco de dados, Engenharia de software.\nAlém disso participei de hackathons da receita federal, onde pude dar um novo proposito a chips e leds de dispositivos apreendidos e do NASA Space Apps.Participei duas vezes da fêira de ciências da faculdade, já tendo chegado ao pódio uma vez da área de atuação do projeto."
    },
    en: {
        subtitle: "Software engineer",
        about_title: "About",
        about_text: "Computer Science graduate with professional experience in fullstack web development and embedded systems in industrial automation.\nI had been exploring computing and development even before that — back in high school in 2018 I was already studying, building personal projects and coding as a hobby.\n",
        exp_title: "Experience",
        objective_title: "Objective",
        objective_text: "I am looking for an opportunity as a Software Developer where I can grow my professional skills and contribute to the company and my field of study.",
        tag_embedded: "Embedded",
        currently: "Present",
        siemens_role: "Industrial Automation & Embedded Systems Engineer",
        siemens_desc: "<i>Internship</i>",
        siemens_b1: "• Developed a Telegram testing software in ASCII that turned a manual process into an automated one, reducing 1 to 3 days of manual work to 1 hour.",
        siemens_b2: "• Carried out the largest HMI application migration (embedded device for machine data visualization) in all of Brazil.",
        siemens_b3: "• Developed and maintained industrial automation scripts and algorithms for different machines and industrial plants.",
        siemens_b4: "• Identified and assigned 12 vulnerabilities with CVEs in a complex industrial network with over 184 devices (computers, remote units, PLCs and HMIs), spanning 7 distinct networks and 14 subnets; structured topology analysis enabled risk prioritization and significant security improvements.",
        chuva_role: "Fullstack web developer - Internship",
        chuva_desc: "<i>Internship</i>",
        chuva_b1: "• Developed new feature logic and performed bug maintenance using PHP and the Drupal framework.",
        chuva_b2: "• Implemented user interfaces based on Figma designs using Angular and TypeScript.",
        chuva_b3: "• Used MySQL database for data storage.",
        chuva_b4: "• Wrote visual regression tests using Cypress.",
        chuva_b5: "• Wrote unit tests with PHPUnit and acceptance tests with Gherkin and Cucumber.",
        chuva_b6: "• Used Git for version control and Docker for containerization, along with a CI/CD pipeline via GitHub Actions.",
        edu_title: "Education",
        edu_period: "2022 - 2025",
        edu_degree: "I had the opportunity to study both the theory and practice of computing in subjects such as: Data Structures and Algorithms, Operating Systems, Databases, and Software Engineering.\nI also participated in hackathons held by the Brazilian Federal Revenue, where I helped repurpose chips and LEDs from seized devices, as well as the NASA Space Apps Challenge. I participated twice in the university science fair, reaching the podium once in my project's area."
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