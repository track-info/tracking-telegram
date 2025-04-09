(function() {
    // Função para ler cookies
    function getCookie(name) {
        var value = "; " + document.cookie;
        var parts = value.split("; " + name + "=");
        if (parts.length == 2) return parts.pop().split(";").shift();
    }

    // Função para salvar no localStorage
    function saveToStorage(key, value) {
        if (value) localStorage.setItem(key, value);
    }

    // Captura _fbc (Facebook Click ID)
    var fbc = getCookie('_fbc');
    if (fbc) {
        saveToStorage('fbc', fbc);
    }

    // Captura _fbp (Facebook Browser ID)
    var fbp = getCookie('_fbp');
    if (fbp) {
        saveToStorage('fbp', fbp);
    }

    // Captura User-Agent
    var userAgent = navigator.userAgent;
    saveToStorage('user_agent', userAgent);

    // Log para verificação (remover em produção)
    console.log('Dados salvos no localStorage:');
    console.log('fbc:', localStorage.getItem('fbc'));
    console.log('fbp:', localStorage.getItem('fbp'));
    console.log('user_agent:', localStorage.getItem('user_agent'));
})();