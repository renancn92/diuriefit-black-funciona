function doGet() {
  // Lê o arquivo do site chamado 'pagina.html'
  var saida = HtmlService.createTemplateFromFile('pagina').evaluate();
  
  // Ajusta o visual para celular e computador
  saida.addMetaTag('viewport', 'width=device-width, initial-scale=1.0');
  
  // Define o título na aba do navegador (DIURIEFIT BLACK FUNCIONA  ? ORIGINAL, VALOR, É CONFIÁVEL ?)
  saida.setTitle("DIURIEFIT BLACK FUNCIONA  ? ORIGINAL, VALOR, É CONFIÁVEL ?");
  
  return saida;
}

