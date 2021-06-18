'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.header_menu-btn');
    const menuSidebar = document.querySelector('.sidebar_menu');
    const likeBtn = document.querySelectorAll('[data-action="like-btn"]');
    const likeIcon = document.querySelectorAll('.post-item_like-icon');
    const likeCount = document.querySelectorAll('.post-item_like-count');

    likeBtn.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            let count = +likeCount[i].textContent;

            likeIcon[i].classList.toggle('active');
            
            if (likeIcon[i].classList.contains('active')) {
                count++;
            }else {
                count--;
            }

            likeCount[i].textContent = count.toString();
        });
    });

    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        menuSidebar.classList.toggle('active');
    });
});