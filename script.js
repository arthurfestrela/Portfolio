/* ═══════════════════════════════════════════════
   Arthur Estrela — Portfolio
   ═══════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── Boot / entrada ──────────────────────────────────────────────── */
    const boot = document.getElementById('boot');
    const finishBoot = () => {
        boot.classList.add('done');
        document.body.classList.add('ready');
        setTimeout(() => boot.remove(), 900);
    };
    if (reduceMotion) {
        boot.remove();
        document.body.classList.add('ready');
    } else {
        setTimeout(finishBoot, 1050);
    }

    /* ── Tema ────────────────────────────────────────────────────────── */
    const html = document.documentElement;
    const toggleBtn = document.getElementById('theme-toggle');

    toggleBtn.addEventListener('click', () => {
        const next = html.classList.contains('light') ? 'dark' : 'light';
        html.classList.toggle('light', next === 'light');
        try { localStorage.setItem('theme', next); } catch (e) {}
    });

    /* ── Relógios (GMT-3) ────────────────────────────────────────────── */
    const navClock = document.getElementById('nav-clock');
    const heroClock = document.getElementById('hero-clock');
    const footClock = document.getElementById('footer-clock');

    function tick() {
        const t = new Date().toLocaleTimeString('pt-BR', {
            timeZone: 'America/Bahia',
            hour: '2-digit', minute: '2-digit', second: '2-digit',
        });
        if (navClock)  navClock.textContent = t;
        if (heroClock) heroClock.textContent = `${t} GMT-3`;
        if (footClock) footClock.textContent = `BA, Brasil — ${t}`;
    }
    tick();
    setInterval(tick, 1000);

    /* ── Barra de progresso de scroll ────────────────────────────────── */
    const progress = document.getElementById('progress');
    function updateProgress() {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
    }
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    /* ── Cursor customizado ──────────────────────────────────────────── */
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-ring');
    let mx = -100, my = -100, rx = -100, ry = -100;

    document.addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; });

    if (!reduceMotion) {
        (function animateCursor() {
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            dot.style.transform = `translate(${mx - 3}px, ${my - 3}px)`;
            ring.style.transform = `translate(${rx - ring.offsetWidth / 2}px, ${ry - ring.offsetHeight / 2}px)`;
            requestAnimationFrame(animateCursor);
        })();
    }

    document.querySelectorAll('a, button, .project, .field input, .field textarea').forEach((el) => {
        el.addEventListener('mouseenter', () => ring.classList.add('hovering'));
        el.addEventListener('mouseleave', () => ring.classList.remove('hovering'));
    });

    /* ── Reveal ao rolar ─────────────────────────────────────────────── */
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal, .cert').forEach((el) => revealObserver.observe(el));

    /* ── Faixa cobalt (marquee) ──────────────────────────────────────── */
    const bandItems = [
        'Disponível para projetos', 'Full Stack', 'React', 'TypeScript',
        'Node.js', 'UI Engineering', 'SaaS', 'Engenharia com IA',
    ];
    const bandTrack = document.getElementById('band-track');
    if (bandTrack) {
        const half = bandItems.map((t) => `<span>${t}<i>◆</i></span>`).join('');
        bandTrack.innerHTML = half + half; // duplicado para loop contínuo
    }

    /* ── Carrossel de tecnologias ────────────────────────────────────── */
    const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
    const techs = [
        { name: 'Python',     icon: `${DEVICON}/python/python-original.svg` },
        { name: 'Java',       icon: `${DEVICON}/java/java-original.svg` },
        { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
        { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
        { name: 'C++',        icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
        { name: 'HTML5',      icon: `${DEVICON}/html5/html5-original.svg` },
        { name: 'CSS3',       icon: `${DEVICON}/css3/css3-original.svg` },
        { name: 'MySQL',      icon: `${DEVICON}/mysql/mysql-original.svg` },
        { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
        { name: 'React',      icon: `${DEVICON}/react/react-original.svg` },
        { name: 'Git',        icon: `${DEVICON}/git/git-original.svg` },
        { name: 'Node.js',    icon: `${DEVICON}/nodejs/nodejs-original.svg` },
    ];

    function makeTechCard(tech) {
        const card = document.createElement('div');
        card.className = 'tech-card';
        card.innerHTML = `
            <img src="${tech.icon}" alt="${tech.name}" loading="lazy" onerror="this.style.display='none'">
            <span>${tech.name}</span>
        `;
        return card;
    }

    const row1 = document.getElementById('tech-row-1');
    const row2 = document.getElementById('tech-row-2');
    if (row1 && row2) {
        [...techs, ...techs].forEach((t) => row1.appendChild(makeTechCard(t)));
        const reversed = [...techs].reverse();
        [...reversed, ...reversed].forEach((t) => row2.appendChild(makeTechCard(t)));
    }

    /* ── Ticker de linguagens (Sobre) ────────────────────────────────── */
    const langs = [
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
    const pillTrack = document.getElementById('pill-track');
    if (pillTrack) {
        const makePills = () => langs.map((l) => {
            const pill = document.createElement('span');
            pill.className = 'pill';
            pill.innerHTML = `<i style="background:${l.color}"></i>${l.name}`;
            return pill;
        });
        [...makePills(), ...makePills()].forEach((p) => pillTrack.appendChild(p));
    }

    /* ── Tilt sutil nos cards de projeto ─────────────────────────────── */
    if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
        document.querySelectorAll('.project').forEach((card) => {
            card.addEventListener('mousemove', (e) => {
                const r = card.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                card.style.transform = `translateY(-6px) rotateX(${py * -3}deg) rotateY(${px * 3}deg)`;
                card.style.transition = 'transform 0.1s linear, border-color 0.4s, background 0.4s';
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
                card.style.transition = '';
            });
        });
    }

    /* ── Formulário de contato ───────────────────────────────────────── */
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/SEU_ID_AQUI';
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = document.getElementById('send-btn');
            const label = btn.querySelector('span');
            const feedback = document.getElementById('form-feedback');

            const data = {
                name: form.name.value.trim(),
                email: form.email.value.trim(),
                message: form.message.value.trim(),
            };

            btn.disabled = true;
            label.textContent = 'Enviando…';

            try {
                const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                    body: JSON.stringify(data),
                });
                if (!res.ok) throw new Error();
                form.reset();
                feedback.classList.add('show');
                label.textContent = 'Enviado';
                setTimeout(() => {
                    feedback.classList.remove('show');
                    btn.disabled = false;
                    label.textContent = 'Enviar mensagem';
                }, 5000);
            } catch {
                btn.disabled = false;
                label.textContent = 'Erro — tente novamente';
                setTimeout(() => { label.textContent = 'Enviar mensagem'; }, 3000);
            }
        });
    }

});