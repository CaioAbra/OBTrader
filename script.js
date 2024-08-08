$(document).ready(function () {
    if ($(window).width() <= 768) {
        $('.bg_0').css('background-image', 'url("src/img/BG-HEADER-MOBILE.webp")');
    } else {
        $('.bg_0').css('background-image', 'url("src/img/bg_0.webp")');
    }

    $(window).resize(function () {
        if ($(window).width() <= 768) {
            $('.bg_0').css('background-image', 'url("src/img/BG-HEADER-MOBILE.webp")');
        } else {
            $('.bg_0').css('background-image', 'url("src/img/bg_0.webp")');
        }
    });

    $(window).scroll(function () {
        let section = $('.increase .computer');
        let image = $('.efeito');
        let windowHeight = $(window).height();
        let scrollTop = $(window).scrollTop();
        let sectionOffset = section.offset().top;
        let sectionHeight = section.height();

        let sectionMiddle = sectionOffset + sectionHeight / 2;
        let viewportMiddle = scrollTop + windowHeight / 2;

        if (viewportMiddle > sectionOffset && viewportMiddle < sectionOffset + sectionHeight) {
            let progress = (viewportMiddle - sectionOffset) / sectionHeight;
            let scale = 1 - (0.3 * progress);
            scale = Math.max(0.3, scale);

            if ($(window).width() < 768) {
                image.css('transform', 'scale(1.5) translateY(50%)');
            } else {
                //desk
                image.css('transform', 'scale(.7) translateY(-13%)');
            }



        } else {

            if ($(window).width() < 768) {
                image.css('transform', 'scale(1) translateY(50%)');
            } else {
                image.css('transform', 'scale(1) translateY(-17%)');
            }
        }
    });

    $('.accordion-header').click(function () {
        const target = $(this).data('target'); // Obtém o ID do item correspondente
        const $body = $(target);
        const $header = $(this); // Armazena o header clicado

        // Verifica se o corpo está aberto
        if ($body.hasClass('open')) {
            // Se estiver aberto, fecha-o
            $body.slideUp(300, function () {
                $body.removeClass('open'); // Remove a classe "open" do corpo
                $header.removeClass('open'); // Remove a classe "open" do header correspondente
                $header.find('.icon').text('+'); // Muda ícone para +
            });
        } else {
            // Se não estiver aberto, fecha todos os outros
            $('.accordion-body').slideUp(300).removeClass('open');
            $('.accordion-header').removeClass('open'); // Remove a classe "open" de todos os headers
            $('.accordion-header .icon').text('+'); // Reseta todos os ícones para +

            // Abre o corpo atual
            $body.slideDown(300, function () {
                $body.addClass('open'); // Adiciona a classe "open" ao corpo atual
                $header.addClass('open'); // Adiciona a classe "open" ao header correspondente
                $header.find('.icon').text('-'); // Muda ícone para -
            });
        }
    });

});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navBar = document.getElementById('nav'); // Seleciona o elemento <nav>

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
    navBar.classList.toggle('active'); // Usa vanilla JavaScript para adicionar/remover a classe 'active'
});