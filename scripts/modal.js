// ========================
// ARRAYS DE PROJETOS EN/PT
// ========================

window.dataProjectsEN = [
  {
    title: 'Adobe API Deploy',
    date: 'May 2025',
    description: `
      Full integration between <b>Adobe Sign</b> and <b>OpenText Content Server (xECM)</b>, automating the entire digital signature workflow via API.<br><br>
      Main features:<br>
      • Send documents for electronic signature directly from OTCS;<br>
      • Automatically download the signed PDF and upload it to the target folder in Content Server;<br>
      • Secure authentication with OAuth2 (Adobe) and OTDS (OpenText);<br>
      • Asynchronous status monitoring via Webhook;<br>
      • Supports multiple signers, detailed logs, anti-duplication checks;<br>
      • 100% hands-off, enterprise-ready, compliance-focused.<br><br>
      Backend: Node.js/Express, minimal HTML/JS frontend via WebReport.
    `,
    videoSrc: 'https://streamable.com/e/xmrrch',
    repository: 'https://github.com/pbrnx/adobe-api-deploy',
    site: 'https://github.com/pbrnx/adobe-api-deploy',
    image: 'assets/projects/adobe.png'
  },
  {
    title: 'hAppVida Fitness',
    date: 'October 2023',
    description: `hAppVida Fitness is an academic React application that simulates a health and wellness platform. It supports user registration and login, with a simulated backend using <code>json-server</code>.<br><br>
    To test the app, use the default user from the <code>users.json</code> file:<br>
    <strong>Login:</strong> user@teste.com<br>
    <strong>Password:</strong> 12345<br><br>
    New users can also be registered through the interface.<br><br>
    The project was built with:<br><br>
    • React.js (frontend)<br>
    • json-server (mock RESTful API)<br>
    • Node.js (scripts and management)<br>
    • npm-run-all (simultaneous API and frontend execution)<br><br>
    The API runs on port 3000, so make sure no other app is using this port. The frontend may run on a different port (e.g., 5173).
    `,
    videoSrc: 'https://streamable.com/e/mr63yd',
    repository: 'https://github.com/pbrnx/hAppVidaFitness',
    site: 'https://happvida.netlify.app/login',
    image: 'assets/projects/happvida.png'
  },
  {
    title: 'TranscriPy',
    date: 'April 2025',
    description: `TranscriPy is a command-line (CLI) application for transcribing audio using OpenAI's Whisper. It quickly converts files into text, supports multiple languages, formats (.txt and .srt), and GPU acceleration when available.<br><br>
    Developed in Python, the project uses FFmpeg, prompt_toolkit, and PyTorch.<br><br>Ideal for automating transcriptions of interviews, meetings, or podcasts directly from the terminal.`,
    videoSrc: 'https://streamable.com/e/ffgefn',
    repository: 'https://github.com/pbrnx/TranscriPy',
    site: 'https://github.com/pbrnx/TranscriPy',
    image: 'assets/projects/transcripy.png'
  },
  {
    title: 'DPT Dashboard — Ticket Management',
    date: 'July 2025',
    description: `
        Interactive dashboard built for operational ticket tracking in the <b>Text Processing (DPT)</b> department at PwC.<br><br>
        The system was designed to replace manual spreadsheet controls, offering centralized, responsive, and highly customized visualization.<br><br>
        <b>Main features:</b><br>
        • Dynamic table with visual highlights by status (new, late, under review, assigned, not handled);<br>
        • Automatic sorting by deadline, sequence, and opening date (click on header);<br>
        • Filter by ticket flow stage and instant text search;<br>
        • Interactive legend: click icons to filter tickets by status;<br>
        • Automatic color logic with smooth row animations during filter/search;<br>
        • Clean and responsive layout, focused on streamlining the DPT team’s workflow.<br><br>
        <b>Stack:</b> HTML5, CSS3 (custom), JavaScript ES6+ (no frameworks).<br><br>
        Fully client-side project, ready for future API or database integrations. No sensitive data exposed in this version.
    `,
    videoSrc: 'https://streamable.com/e/wuh5c6',
    repository: 'https://github.com/pbrnx/Dashboard-Controle-Chamados',
    site: 'https://dashboard-controle-chamados.vercel.app/',
    image: 'assets/projects/dashdpt.png'
  },
  {
    title: 'YouTube Video Downloader',
    date: 'April 2024',
    description: `Web application with a Python backend that allows downloading YouTube videos in various resolutions, using the <code>yt_dlp</code> library and <code>FFmpeg</code> to merge audio and video when needed.<br><br>
    Works locally via browser (port 25565), with optional external network access through port forwarding. The interface lets users search by URL, select resolution, and start the download with a single click.`,
    videoSrc: 'https://streamable.com/e/pzhxw9?',
    repository: 'https://github.com/pbrnx/YOUTUBE-DOWNLOADER',
    site: 'https://youtube-downloader-9dqe.onrender.com',
    image: 'assets/projects/youtubedownloader.png'
  }
];

window.dataProjectsPT = [
  {
    title: 'Adobe API Deploy',
    date: 'Maio de 2025',
    description: `
      Integração completa entre <b>Adobe Sign</b> e <b>OpenText Content Server (xECM)</b>, automatizando todo o fluxo de assinatura digital via API.<br><br>
      Principais funcionalidades:<br>
      • Envio de documentos para assinatura eletrônica diretamente do OTCS;<br>
      • Download automático do PDF assinado e upload na pasta de destino no Content Server;<br>
      • Autenticação segura com OAuth2 (Adobe) e OTDS (OpenText);<br>
      • Monitoramento assíncrono do status da assinatura por Webhook;<br>
      • Suporte a múltiplos signatários, logs detalhados e checagem anti-duplicidade;<br>
      • Totalmente sem intervenção manual, focado em ambientes enterprise e compliance.<br><br>
      Backend em Node.js/Express, frontend mínimo em HTML/JS via WebReport.
    `,
    videoSrc: 'https://streamable.com/e/xmrrch',
    repository: 'https://github.com/pbrnx/adobe-api-deploy',
    site: 'https://github.com/pbrnx/adobe-api-deploy',
    image: 'assets/projects/adobe.png'
  },
  {
    title: 'hAppVida Fitness',
    date: 'Outubro de 2023',
    description: `hAppVida Fitness é uma aplicação acadêmica em React que simula o funcionamento de uma plataforma de saúde e bem-estar. Nela é possível realizar cadastro e login de usuários, com backend simulado via <code>json-server</code>.<br><br>
    Para testar a aplicação, utilize o usuário padrão do arquivo <code>users.json</code>:<br>
    <strong>Login:</strong> user@teste.com<br>
    <strong>Senha:</strong> 12345<br><br>
    Também é possível cadastrar novos usuários pela interface.<br><br>
    O projeto foi desenvolvido com:<br><br>
    • React.js (frontend)<br>
    • json-server (mock de API RESTful)<br>
    • Node.js (scripts e gerenciamento)<br>
    • npm-run-all (execução simultânea da API e frontend)<br><br>
    A API roda na porta 3000, então certifique-se de que nenhuma outra aplicação esteja usando essa porta. O frontend pode rodar em outra porta (ex: 5173).
    `,
    videoSrc: 'https://streamable.com/e/mr63yd',
    repository: 'https://github.com/pbrnx/hAppVidaFitness',
    site: 'https://happvida.netlify.app/login',
    image: 'assets/projects/happvida.png'
  },
  {
    title: 'TranscriPy',
    date: 'Abril de 2025',
    description: `TranscriPy é uma aplicação de linha de comando (CLI) para transcrição de áudios com Whisper da OpenAI. Permite converter arquivos em texto de forma rápida, com suporte a múltiplos idiomas, formatos (.txt e .srt) e aceleração por GPU quando disponível.<br><br>
    Desenvolvido em Python, o projeto utiliza FFmpeg, prompt_toolkit e PyTorch. <br><br>Ideal para automatizar transcrições de entrevistas, reuniões ou podcasts diretamente do terminal.`,
    videoSrc: 'https://streamable.com/e/ffgefn',
    repository: 'https://github.com/pbrnx/TranscriPy',
    site: 'https://github.com/pbrnx/TranscriPy',
    image: 'assets/projects/transcripy.png'
  },
  {
    title: 'Dashboard DPT — Controle de Chamados',
    date: 'Julho de 2025',
    description: `
        Dashboard interativo criado para o controle operacional de chamados na área de <b>Processamento de Texto (DPT)</b> da PwC.<br><br>
        O sistema foi projetado para substituir controles manuais em planilhas, trazendo uma visualização centralizada, responsiva e altamente customizada.<br><br>
        <b>Principais funcionalidades:</b><br>
        • Tabela dinâmica com destaque visual por status (novo, atrasado, dúvida, assumido, não tratado);<br>
        • Ordenação automática por prazo, sequência e data de abertura (basta clicar no cabeçalho);<br>
        • Filtro por etapa do fluxo de chamados e pesquisa instantânea por texto;<br>
        • Legenda interativa: clique nos ícones para filtrar chamados por status;<br>
        • Lógica de cores automática, com animação suave nas linhas ao filtrar ou buscar;<br>
        • Layout clean e responsivo, focado em facilitar a rotina do usuário DPT.<br><br>
        <b>Stack:</b> HTML5, CSS3 (custom), JavaScript ES6+ (sem frameworks).<br><br>
        Projeto 100% client-side e pronto para integração futura com APIs ou bases externas. Nenhum dado sensível exposto nesta versão.<br>
    `,
    videoSrc: 'https://streamable.com/e/wuh5c6',
    repository: 'https://github.com/pbrnx/Dashboard-Controle-Chamados',
    site: 'https://dashboard-controle-chamados.vercel.app/',
    image: 'assets/projects/dashdpt.png'
  },
  {
    title: 'Youtube Video Downloader',
    date: 'Abril de 2024',
    description: `Aplicação web com back-end em Python que permite baixar vídeos do YouTube em diversas resoluções, utilizando a biblioteca <code>yt_dlp</code> e o <code>FFmpeg</code> para juntar áudio e vídeo quando necessário.<br><br>
    Funciona localmente via navegador (porta 25565), com opção de liberação para rede externa via port forwarding. A interface permite buscar vídeos pela URL, selecionar resolução e iniciar o download com um clique.`,
    videoSrc: 'https://streamable.com/e/pzhxw9?',
    repository: 'https://github.com/pbrnx/YOUTUBE-DOWNLOADER',
    site: 'https://youtube-downloader-9dqe.onrender.com',
    image: 'assets/projects/youtubedownloader.png'
  }
];

// Inicializa com EN
window.dataProjects = window.dataProjectsEN;

// ========================
// FUNÇÃO DE RENDERIZAÇÃO
// ========================

// modal.js

// Função utilitária para criar HTML de um projeto
function getProjectCardHTML(proj, idx) {
  return `
    <div class="box" data-index="${idx}">
      <div class="cover">
        <img src="${proj.image}" alt="${proj.title}">
        <div class="details">
          <p>${proj.title}</p>
        </div>
      </div>
      <div class="description">
        <p>${proj.date}</p>
        <a data-i18n="see_more" href="javascript:void(0);">See more</a>
      </div>
    </div>
  `;
}

// Renderiza os projetos nos containers de destaque e todos os projetos
function renderProjects() {
  const highlightsContainer = document.querySelector('.highlights .cards-projects');
  const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
  if (!highlightsContainer || !allProjectsContainer) return;

  // Limpa ambos antes de renderizar para evitar duplicação
  highlightsContainer.innerHTML = '';
  allProjectsContainer.innerHTML = '';

  const data = window.dataProjects || [];

  // 3 primeiros = destaque
  data.slice(0, 3).forEach((proj, i) => {
    highlightsContainer.innerHTML += getProjectCardHTML(proj, i);
  });

  // Restante vai para "Todos os projetos"
  data.slice(3).forEach((proj, i) => {
    // índice correto = i+3
    allProjectsContainer.innerHTML += getProjectCardHTML(proj, i + 3);
  });

  // Traduz "See more" dos cards recém-injetados (de acordo com idioma)
  const lang = localStorage.getItem('lang') || 'en';
  document.querySelectorAll('[data-i18n="see_more"]').forEach(el => {
    el.innerHTML = translations[lang].see_more || "See more";
  });
}

// Modais dos projetos
function openModal() {
  const closeModal = document.querySelector('.modal .ri-close-line');
  const modal = document.querySelector('.modal');
  const boxes = document.querySelectorAll('.cards-projects .box');
  const modalTitle = modal.querySelector('.title h2');
  const modalDescription = modal.querySelector('.info p');
  const modalDate = modal.querySelector('span');
  const modalLinkProject = modal.querySelector('.links a.link-project');
  const modalLinkRepository = modal.querySelector('.links a.link-repository');
  const iframe = modal.querySelector('.video iframe');

  boxes.forEach(item => {
    item.onclick = () => {
      const idx = parseInt(item.getAttribute('data-index'), 10);
      const proj = window.dataProjects[idx];
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      document.body.classList.add('transparent');

      modalTitle.innerHTML = proj.title;
      modalDescription.innerHTML = proj.description;
      modalDate.innerHTML = proj.date;
      modalLinkProject.setAttribute('href', proj.site);
      modalLinkRepository.setAttribute('href', proj.repository);
      iframe.setAttribute('src', proj.videoSrc ? (proj.videoSrc + '?autoplay=1&loop=0') : '');
    };
  });

  function closingModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'visible';
    document.body.classList.remove('transparent');
    iframe.setAttribute('src', '');
  }

  closeModal.addEventListener('click', closingModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === "Escape") closingModal();
  });
}

// (Opcional) Se precisar, expose no window para debug
window.renderProjects = renderProjects;
window.openModal = openModal;
