// SETA 
document.querySelector('.scroll-hint').addEventListener('click', function () {
    document.getElementById('servicos').scrollIntoView({ behavior: 'smooth' });
});

// SOLICITAR ORÇAMENTO
document.querySelector('.btn-orcamento[data-scroll]').addEventListener('click', function () {
    document.getElementById('orcamento').scrollIntoView({ behavior: 'smooth' });
});

// FORMULÁRIO
document.getElementById('btn-enviar').addEventListener('click', function () {

    const nome       = document.getElementById('nome').value.trim();
    const telefone   = document.getElementById('telefone').value.trim();
    const data       = document.getElementById('data').value.trim();
    const tipo       = document.getElementById('tipo').value.trim();
    const convidados = document.getElementById('convidados').value.trim();
    const mensagem   = document.getElementById('mensagem').value.trim();

    if (!nome || !telefone) {
        alert('Por favor, preencha pelo menos seu nome e telefone.');
        return;
    }

    const texto =
`Olá! Gostaria de solicitar um orçamento 🎉

*Nome:* ${nome}
*Telefone:* ${telefone}
*Data do evento:* ${data || 'A definir'}
*Tipo de evento:* ${tipo || 'Não informado'}
*Nº de convidados:* ${convidados || 'Não informado'}
*Mensagem:* ${mensagem || 'Nenhuma mensagem adicional'}`;

    const numero = '5566999542067';
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;
    window.open(url, '_blank');
});

// MENU HAMBURGUER 
const menuBtn = document.getElementById('menu-btn');
const navMenu = document.getElementById('nav-menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('aberto');
    navMenu.classList.toggle('aberto');
});

// fecha o menu ao clicar em um link
navMenu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
        menuBtn.classList.remove('aberto');
        navMenu.classList.remove('aberto');
    });
});
