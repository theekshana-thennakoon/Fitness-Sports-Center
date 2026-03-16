// Scroll reveal
const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: .1 });
document.querySelectorAll('.reveal').forEach(r => obs.observe(r));

// Form validation helper
function validate(id, check) {
    const el = document.getElementById(id);
    const ok = check(el.value);
    el.classList.toggle('is-invalid', !ok);
    el.classList.toggle('is-valid', ok);
    return ok;
}

// Formspree submission
document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();
    const n = validate('name', v => v.trim().length >= 2);
    const em = validate('email', v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    const m = validate('message', v => v.trim().length >= 10);
    if (!n || !em || !m) return;

    const btn = document.getElementById('subBtn');
    btn.disabled = true;
    btn.textContent = 'Sending...';

    try {
        const res = await fetch('https://formspree.io/f/mbdzzovq', {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value
            })
        });

        if (res.ok) {
            btn.style.display = 'none';
            document.getElementById('okMsg').classList.remove('d-none');
            document.getElementById('errMsg').classList.add('d-none');
            ['name', 'email', 'message'].forEach(id => {
                document.getElementById(id).value = '';
                document.getElementById(id).classList.remove('is-valid');
            });
        } else {
            throw new Error('Server error');
        }
    } catch {
        btn.disabled = false;
        btn.textContent = 'Send Message →';
        document.getElementById('errMsg').classList.remove('d-none');
    }
});

['name', 'email', 'message'].forEach(id => {
    document.getElementById(id).addEventListener('input', () => {
        document.getElementById(id).classList.remove('is-invalid');
    });
});