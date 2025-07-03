// Dados dos Projetos

const dataProjects = [
{
    title: 'Adobe API Deploy',
    date: 'May 2025',
    description: `
        Full integration between <b>Adobe Sign</b> and <b>OpenText Content Server (xECM)</b>, automating the entire digital signature flow via API.<br><br>
        Key features:<br>
        • Sending documents for electronic signature directly from OTCS;<br>
        • Automatic download of the signed PDF and upload to the destination folder in Content Server;<br>
        • Secure authentication with OAuth2 (Adobe) and OTDS (OpenText);<br>
        • Asynchronous monitoring of signature status via Webhook;<br>
        • Support for multiple signers, detailed logs, and anti-duplication checks;<br>
        • Fully hands-off, focused on enterprise environments and compliance.<br><br>
        Backend built with Node.js/Express, minimal frontend in HTML/JS integrated via WebReport.
    `,
    videoSrc: 'https://streamable.com/e/xmrrch',
    repository: 'https://github.com/pbrnx/adobe-api-deploy',
    site: 'https://github.com/pbrnx/adobe-api-deploy'
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
    site: 'https://happvida.netlify.app/login'
},
{
    title: 'TranscriPy',
    date: 'April 2025',
    description: `TranscriPy is a command-line (CLI) application for transcribing audio using OpenAI's Whisper. It quickly converts files into text, supports multiple languages, formats (.txt and .srt), and GPU acceleration when available.<br><br>

    Developed in Python, the project uses FFmpeg, prompt_toolkit, and PyTorch.<br><br>Ideal for automating transcriptions of interviews, meetings, or podcasts directly from the terminal.`,
    videoSrc: 'https://streamable.com/e/ffgefn',
    repository: 'https://github.com/pbrnx/TranscriPy',
    site: 'https://github.com/pbrnx/TranscriPy'
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
    site: 'https://dashboard-controle-chamados.vercel.app/'
},
{
    title: 'YouTube Video Downloader',
    date: 'April 2024',
    description: `Web application with a Python backend that allows downloading YouTube videos in various resolutions, using the <code>yt_dlp</code> library and <code>FFmpeg</code> to merge audio and video when needed.<br><br>

    Works locally via browser (port 25565), with optional external network access through port forwarding. The interface lets users search by URL, select resolution, and start the download with a single click.`,
    videoSrc: 'https://streamable.com/e/pzhxw9?',
    repository: 'https://github.com/pbrnx/YOUTUBE-DOWNLOADER',
    site: 'https://youtube-downloader-9dqe.onrender.com'
},
]

// Open Modal

const openModal = () => {
    const closeModal = document.querySelector('.modal .ri-close-line')
    const modal = document.querySelector('.modal')
    const box = document.querySelectorAll('.cards-projects .box')
    const modalTitle = modal.querySelector('.title h2')
    const modalDescription = modal.querySelector('.info p')
    const modalDate = modal.querySelector('span')
    const modalLinkProject = modal.querySelector('.links a.link-project')
    const modalLinkRepository = modal.querySelector('.links a.link-repository')

    const iframe = modal.querySelector('.video iframe')

    box.forEach((item, index) => {

        const addData = () => {

            if (index != 5) {
                modal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                document.body.classList.add('transparent')
            }

            modalTitle.innerHTML = dataProjects[index].title
            modalDescription.innerHTML = dataProjects[index].description
            modalDate.innerHTML = dataProjects[index].date
            modalLinkProject.setAttribute('href', dataProjects[index].site) 
            modalLinkRepository.setAttribute('href', dataProjects[index].repository) 

            iframe.setAttribute('src', dataProjects[index].videoSrc + '?autoplay=1&amp;loop=0')

        }

        item.addEventListener('click', addData)

    })

    const closingModal = () => {
        modal.classList.add('hidden')
        document.body.style.overflow = 'visible';
        document.body.classList.remove('transparent')
        iframe.setAttribute('src', '')

    }

    closeModal.addEventListener('click', closingModal)

    document.addEventListener ('keydown', (event) => event.key === "Escape" ? closingModal() : '');

}

openModal()
