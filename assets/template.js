import { setHeader,setLeftSection,setRightSection,setRightSectionHome,setRightSectionArchives,setRightSectionGames } from '../options';

function header(){
    const random = Math.ceil(Math.random() * setHeader.background.length - 1);
    const a = `url('${setHeader.background[random]}')`;
    $('body').css("background-image",a);
}

function leftSection(){
    const avatar = `<div class="icon"><img src="${setLeftSection.icon}" alt="avatar"></div>`;
    const setNav = `<nav></nav>`;
    $('div.container').append(`<section class="left"></section>`);
    $('section.left').append(avatar,setNav);
    for(let i = 0;i < setLeftSection.links.length;i++){
        $('nav').append(`<li><a href="#" id="${setLeftSection.links[i]}">${setLeftSection.links[i]}</a></li>`);
    }
}

function rightSection(){
    $('div.container').append(`<section class="right"></section>`);
/*

            $('section.right').empty();
            for(let i = 0;i < setRightSection.game.length;i++){
                $('section.right').append(`<li><span>${setRightSection.game.name[i]}</span><span>${setRightSection.game.value[i]}</span></li>`);
            }


            $('section.right')
            .empty()
            .append(`<h3>${setRightSection.about.title}</h3><p>${setRightSection.about.text}</p>`);
            break;
    }
    */
}

function rightSectionHome(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.homeTitle}</h2></header>`).append(`<div class="items"></div>`);
    for(let i = 0;i < setRightSectionHome.length;i++){       
        $('div.items').append(`<a href="${setRightSectionHome[i].link}"   target="_blank" id=""><i class="fa fa-3x fa-home"></i><p>${setRightSectionHome[i].value}</p></a>`);
    }
}

function rightSectionArchives(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.archivesTitle}</h2></header>`).append(`<ul class="items archives"></ul>`);
    for(let i = 0;i < setRightSectionArchives.length;i++){
        $('ul.items').append(`<li><a href="${setRightSectionArchives[i].link}"><span class="archives-text">${setRightSectionArchives[i].value}</span><span class="archives-date"> / ${setRightSectionArchives[i].date}</span></a></li>`);
    }
}

function rightSectionGames(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.gamesTitle}</h2></header>`).append(`<ul class="items archives"></ul>`);
    for(let i = 0;i < setRightSectionArchives.length;i++){
        $('ul.items').append(`<li><span class="games-text">${setRightSectionGames[i].name}</span><span class="games-date"> / ${setRightSectionGames[i].value}</span></li>`);
    }
}

function rightSectionAbout(){
    $('section.right').append(`<header class="title"><h2>${setRightSection.about.title}</h2></header>`).append(`<p class="about-text">${setRightSection.about.text}</p>`);
}

export { header,leftSection,rightSection,rightSectionHome,rightSectionArchives,rightSectionGames,rightSectionAbout }