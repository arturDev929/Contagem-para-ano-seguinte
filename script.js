// Data alvo: 1 de Janeiro de 2026, 00:00:00
const anoNovo2026 = new Date('July 25, 2026 00:00:00').getTime();
        
// Elementos DOM
const anoAtualElemento = document.getElementById('ano-atual');
const diasElemento = document.getElementById('dias');
const horasElemento = document.getElementById('horas');
const minutosElemento = document.getElementById('minutos');
const segundosElemento = document.getElementById('segundos');
const milisegundosElemento = document.getElementById('milisegundos');
const fireworksElemento = document.getElementById('fireworks');
const felizElemento = document.getElementById('feliz');
        
function atualizarContagem() {
    // Data e hora atual
    const agora = new Date().getTime();
            
    // Diferença entre agora e o ano novo
    const diferenca = anoNovo2026 - agora;
            
    if (diferenca <= 0) {
        // Ano novo chegou
        anoAtualElemento.textContent = '2026';
        felizElemento.textContent = 'Feliz Ano Novo!';
        diasElemento.textContent = '00';
        horasElemento.textContent = '00';
        minutosElemento.textContent = '00';
        segundosElemento.textContent = '00';
        milisegundosElemento.textContent = '000';
        fireworksElemento.style.display = 'block';
        clearInterval(intervalo);
        return;
    }
            
    // Cálculos de tempo
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);
    const milisegundos = Math.floor(diferenca % 1000);
            
    // Atualizar elementos HTML
    diasElemento.textContent = dias.toString().padStart(2, '0');
    horasElemento.textContent = horas.toString().padStart(2, '0');
    minutosElemento.textContent = minutos.toString().padStart(2, '0');
    segundosElemento.textContent = segundos.toString().padStart(2, '0');
    milisegundosElemento.textContent = milisegundos.toString().padStart(3, '0');
}
        
// Atualizar a contagem a cada milisegundo
const intervalo = setInterval(atualizarContagem, 1);
        
// Chamar a função imediatamente
atualizarContagem();
