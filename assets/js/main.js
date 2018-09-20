import { setHitokoto } from "./hitokoto";
import { header, leftSection, rightSection, rightSectionHome, rightSectionArchives,rightSectionGames,rightSectionAbout } from "./template";

$(document).ready(function(){
    setTemplate();
    setBackground();
    setHitokoto();
    changeRightSection();
});


function setBackground(){
    header();
}

function setTemplate(){
    $('main').empty().append(`<div class="container"></div>`);
    leftSection();
    $('nav li:nth-child(1) a').addClass('active');    
    rightSection();
    rightSectionHome();
    $('section.right *').addClass('animated fadeIn');
    if(window.console){
        console.log('\n %c Nekomimi v1.2.0 %c by Kannazuki Miya |  https://miya.moe ','color:#dcf2f8;background:#23b7e5;padding:5px 0;','color:#eee;background:rgba(252,248,227,.3);padding:5px 0;')
    }
}

function changeRightSection(){
    $('a#Home').click(function(){
        $('section.right').empty();
        $('nav li a').removeClass('active');
        rightSectionHome();
        $('a#Home').addClass('active');
        $('section.right *').addClass('animated fadeIn');
    });
    $('a#Archives').click(function(){
        $('section.right').empty();
        $('nav li a').removeClass('active');
        rightSectionArchives();
        $('a#Archives').addClass('active');
        $('section.right *').addClass('animated fadeIn');
    });
    $('a#Game').click(function(){
        $('section.right').empty();
        $('nav li a').removeClass('active');
        rightSectionGames();
        $('a#Game').addClass('active');
        $('section.right *').addClass('animated fadeIn');
    });
    $('a#About').click(function(){
        $('section.right').empty();
        $('nav li a').removeClass('active');
        rightSectionAbout();
        $('a#About').addClass('active');
        $('section.right *').addClass('animated fadeIn');
    });
}