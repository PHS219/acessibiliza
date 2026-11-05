window.Acessibiliza = {
    key: 'acessibilizaSite',
    
    defaults: {
        dark: false,
        contrast: false,
        favorites: [],
        history: [],
        profile: ['mobility', 'vision'],
        rating: 0
    },

    get() {
        try {
            return {
                ...this.defaults,
                ...JSON.parse(localStorage.getItem(this.key) || '{}')
            };
        } catch {
            return { ...this.defaults };
        }
    },

    save(s) {
        localStorage.setItem(this.key, JSON.stringify(s));
        this.apply();
    },

    update(p) {
        this.save({ ...this.get(), ...p });
    },

    apply() {
        let s = this.get();
        document.body.classList.toggle('dark', s.dark);
        document.body.classList.toggle('contrast', s.contrast);
    },

    toast(m) {
        let t = document.querySelector('.toast');
        t.textContent = m;
        t.classList.add('show');
        setTimeout(() => t.classList.remove('show'), 1800);
    },

    init(page = '') {
        this.apply();

        // Ativa o link da página atual no menu
        document.querySelectorAll('[data-page]').forEach(a => {
            a.classList.toggle('active', a.dataset.page === page);
        });

        // Configura os botões de tema (modo escuro / alto contraste)
        document.querySelectorAll('[data-theme]').forEach(b => {
            b.onclick = () => {
                let s = this.get();
                let k = b.dataset.theme;
                this.update({ [k]: !s[k] });
            };
        });

        // Configura os botões de favoritar
        document.querySelectorAll('[data-favorite]').forEach(b => {
            let id = b.dataset.favorite;
            let s = this.get();
            
            // Define o ícone inicial (coração cheio ou vazio)
            b.textContent = s.favorites.includes(id) ? '♥' : '♡';
            
            b.onclick = e => {
                e.preventDefault();
                s = this.get();
                let f = new Set(s.favorites);
                
                // Adiciona ou remove dos favoritos
                f.has(id) ? f.delete(id) : f.add(id);
                this.update({ favorites: [...f] });
                
                // Atualiza o ícone e mostra a mensagem (toast)
                b.textContent = f.has(id) ? '♥' : '♡';
                this.toast('Favoritos atualizados');
            };
        });
    }
};