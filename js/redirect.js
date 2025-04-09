(function() {
    // Carrega a configuração
    var destinationUrl = CONFIG.redirectUrl;

    // Função para ler do localStorage
    function getFromStorage(key) {
        return localStorage.getItem(key) || '';
    }

    // Função para adicionar parâmetros à URL
    function addParam(url, param, value) {
        return url + '&' + param + '=' + encodeURIComponent(value);
    }

    // Adiciona click_id (fbc do localStorage)
    var clickId = getFromStorage('fbc');
    if (clickId) {
        destinationUrl = addParam(destinationUrl, 'click_id', clickId);
    }

    // Adiciona link_id (fbp do localStorage)
    var linkId = getFromStorage('fbp');
    if (linkId) {
        destinationUrl = addParam(destinationUrl, 'link_id', linkId);
    }

    // Adiciona site_id (user_agent do localStorage)
    var siteId = getFromStorage('user_agent');
    if (siteId) {
        destinationUrl = addParam(destinationUrl, 'site_id', siteId);
    }

    // Redireciona após um breve delay
    setTimeout(function() {
        window.location.href = destinationUrl;
    }, 100);

    // Log para verificação (remover em produção)
    console.log('Redirecionando para:', destinationUrl);
})();