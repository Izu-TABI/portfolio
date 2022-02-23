$(window).on('load', function() {

    $("#star").animate({"width":"100%"}, 1000);
})

$(window).on('load',function(){
    //  ローディング画面を1.5秒待機してからフェードアウト　　
    $("#load").delay(1500).fadeOut('slow');
});

// 指定した位置にスクロール
let navSkills = document.querySelector('.h-nav-skills');
let navWorks = document.querySelector('.h-nav-works');
let navLinks = document.querySelector('.h-nav-links');


document.querySelector('.h-nav-skills').addEventListener('click', function() {
    const navSkillsTop = document.querySelector('.main-about-skills').getBoundingClientRect().top + window.pageYOffset;
    document.documentElement.scrollTop = navSkillsTop;
});

document.querySelector('.h-nav-works').addEventListener('click', function() {
    const navWorksTop = document.querySelector('.main-about-works').getBoundingClientRect().top + window.pageYOffset;
    document.documentElement.scrollTop = navWorksTop;
});
document.querySelector('.h-nav-links').addEventListener('click', function() {
    const navLinksTop = document.querySelector('.main-about-links').getBoundingClientRect().top + window.pageYOffset;
    document.documentElement.scrollTop = navLinksTop;
});
