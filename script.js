/* ═══════════════════════════════════════════════
   Arthur Estrela — Portfolio Script
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    /* ── 1. Scroll reveal ────────────────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));


    /* ── 2. Custom cursor ────────────────────────────────────── */
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = `${e.clientX - 8}px`;
        cursor.style.top  = `${e.clientY - 8}px`;
    });
    document.querySelectorAll('a, button, .cursor-pointer, [onclick]').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(3.5)');
        el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
    });


    /* ── 3. About: language ticker ───────────────────────────── */
    const aboutLangs = [
        { name: 'HTML5',      color: '#e34c26' },
        { name: 'CSS3',       color: '#264de4' },
        { name: 'JavaScript', color: '#f0db4f' },
        { name: 'TypeScript', color: '#3178c6' },
        { name: 'Python',     color: '#3572A5' },
        { name: 'Java',       color: '#b07219' },
        { name: 'C++',        color: '#f34b7d' },
        { name: 'React',      color: '#61dafb' },
        { name: 'Tailwind',   color: '#38bdf8' },
        { name: 'Node.js',    color: '#3c873a' },
        { name: 'MySQL',      color: '#00758f' },
        { name: 'Cloud',      color: '#4285f4' },
    ];

    const track = document.getElementById('lang-track');
    if (track) {
        const makePills = () => aboutLangs.map(l => {
            const pill = document.createElement('span');
            pill.className = 'lang-pill';
            pill.innerHTML = `<span class="lang-dot" style="background:${l.color}"></span>${l.name}`;
            return pill;
        });
        [...makePills(), ...makePills()].forEach(p => track.appendChild(p));
    }


    /* ── 4. Tecnologias: carousel com ícones ─────────────────── */
    /*
        Os ícones vêm do CDN público do devicons (SVG hospedado no jsdelivr).
        Cada tech tem: nome exibido + slug do devicons.
    */
    const techs = [
        { name: 'Python',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Java',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'C++',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'HTML5',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'MySQL',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Cloud',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
        { name: 'React',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Git',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'Node.js',    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    ];

    function makeTechCard(tech) {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.innerHTML = `
            <img src="${tech.icon}" alt="${tech.name}" loading="lazy"
                 onerror="this.style.display='none'">
            <span>${tech.name}</span>
        `;
        return card;
    }

    const row1 = document.getElementById('tech-row-1');
    const row2 = document.getElementById('tech-row-2');

    if (row1 && row2) {
        // linha 1: todas as techs duplicadas para loop infinito
        [...techs, ...techs].forEach(t => row1.appendChild(makeTechCard(t)));

        // linha 2: ordem inversa para efeito visual diferente
        const reversed = [...techs].reverse();
        [...reversed, ...reversed].forEach(t => row2.appendChild(makeTechCard(t)));
    }

});


/* ── 5. About accordion ───────────────────────────────────── */
function toggleAbout() {
    const content = document.getElementById('about-content');
    const icon    = document.getElementById('about-icon');
    const isOpen  = content.style.maxHeight && content.style.maxHeight !== '0px';

    if (isOpen) {
        content.style.maxHeight = '0px';
        content.style.opacity   = '0';
        icon.style.transform    = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + 200 + 'px';
        content.style.opacity   = '1';
        icon.style.transform    = 'rotate(45deg)';
    }
}


/* ── 6. Formulário → Formspree ───────────────────────────── */
/*
   COMO USAR:
   1. Acesse https://formspree.io e crie uma conta gratuita
   2. Crie um novo form e copie o endpoint
   3. Substitua o valor abaixo pelo seu endpoint
*/
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI';

async function sendMessage(e) {
    e.preventDefault();
    const form     = document.getElementById('contact-form');
    const btn      = document.getElementById('send-btn');
    const feedback = document.getElementById('form-feedback');

    const data = {
        name:    form.name.value.trim(),
        email:   form.email.value.trim(),
        message: form.message.value.trim(),
    };

    btn.disabled    = true;
    btn.textContent = 'Enviando…';

    try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
            method:  'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body:    JSON.stringify(data),
        });
        if (res.ok) {
            form.reset();
            feedback.classList.remove('hidden');
            btn.textContent = 'Enviado ✓';
            setTimeout(() => {
                feedback.classList.add('hidden');
                btn.disabled    = false;
                btn.textContent = 'Enviar mensagem →';
            }, 5000);
        } else {
            throw new Error();
        }
    } catch {
        btn.disabled    = false;
        btn.textContent = 'Erro — tente novamente';
        setTimeout(() => { btn.textContent = 'Enviar mensagem →'; }, 3000);
    }
}   
