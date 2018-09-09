import { setHitokoto } from "./hitokoto";
import { header, leftSection, rightSection, rightSectionHome, rightSectionArchives,rightSectionGames,rightSectionAbout } from "./template";

$(document).ready(function(){
    setBackground();
    setTemplate();
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