// Dados dos Projetos

const dataProjects = [
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
            Backend desenvolvido em Node.js/Express, frontend mínimo em HTML/JS integrado via WebReport.
        `,
        videoSrc: 'https://streamable.com/e/xmrrch', // Se tiver vídeo demo, adicione o link aqui
        repository: 'https://github.com/pbrnx/adobe-api-deploy',
        site: 'https://github.com/pbrnx/adobe-api-deploy'
}
,
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

    ⚠️ A API roda na porta 3000, então certifique-se de que nenhuma outra aplicação esteja usando essa porta. O frontend pode rodar em outra porta (ex: 5173).
    `,
    videoSrc: 'https://streamable.com/e/mr63yd',

    repository: 'https://github.com/pbrnx/hAppVidaFitness', // substitua pela URL correta se necessário
    site: 'http://localhost:5173/' // ou o link do deploy, se existir
},

{
    title: 'TranscriPy',
    date: 'Abril de 2025',
    description: `TranscriPy é uma aplicação de linha de comando (CLI) para transcrição de áudios com Whisper da OpenAI. Permite converter arquivos em texto de forma rápida, com suporte a múltiplos idiomas, formatos (.txt e .srt) e aceleração por GPU quando disponível.<br><br>

    Desenvolvido em Python, o projeto utiliza FFmpeg, prompt_toolkit e PyTorch. Ideal para automatizar transcrições de entrevistas, reuniões ou podcasts diretamente do terminal.`,
    videoSrc: 'https://streamable.com/e/ffgefn', // link opcional para demonstração em vídeo
    repository: 'https://github.com/pbrnx/TranscriPy', // substitua pela URL real
    site: 'https://github.com/pbrnx/TranscriPy' 
},

{
    title: 'Youtube Video Downloader',
    date: 'Dezembro de 2024',
    description: `Aplicação web com back-end em Python que permite baixar vídeos do YouTube em diversas resoluções, utilizando a biblioteca <code>yt_dlp</code> e o <code>FFmpeg</code> para juntar áudio e vídeo quando necessário.<br><br>

    Funciona localmente via navegador (porta 25565), com opção de liberação para rede externa via port forwarding. A interface permite buscar vídeos pela URL, selecionar resolução e iniciar o download com um clique.`,
    videoSrc: '', // pode colocar link para gif, demo ou vídeo futuramente

    repository: 'https://github.com/seuusuario/youtube-video-downloader', // substitua pela real
    site: '' // app local, não tem site online
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
