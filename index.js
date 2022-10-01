'use strict';

const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const container = document.getElementById('container');

document.onclick = function(e)
{
    if(e.target.id !== 'nav' && e.target.id !== 'toggle')
    {
        toggle.classList.remove('active');
        nav.classList.remove('active');

    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
}
   