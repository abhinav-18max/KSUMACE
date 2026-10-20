'use strict';
const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.navigation');
function closeMenu(){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open menu');nav.classList.remove('open');}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close menu':'Open menu');nav.classList.toggle('open',open);});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
// Loading sketch: stays until the page has loaded and the ink drawing has had time to finish.
const loader=document.querySelector('.loader');
if(loader){
 const minTime=reduced.matches?900:9400;
 document.documentElement.classList.add('is-loading');
 const hide=()=>{if(loader.classList.contains('done'))return;loader.classList.add('done');document.documentElement.classList.remove('is-loading');setTimeout(()=>loader.remove(),900);};
 const ready=()=>setTimeout(hide,Math.max(0,minTime-performance.now()));
 if(document.readyState==='complete')ready();else window.addEventListener('load',ready);
 loader.addEventListener('click',hide);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'||e.key==='Enter'||e.key===' ')hide();});
}
const sections=[...document.querySelectorAll('main section[id]')].filter(s=>nav.querySelector(`[href="#${s.id}"]`));
let frame=0;
function update(){
 frame=0;
 const header=document.querySelector('.header').offsetHeight;
 let active='home';
 for(const s of sections){if(s.getBoundingClientRect().top<header+170)active=s.id;}
 nav.querySelectorAll('a').forEach(a=>{const yes=a.hash==='#'+active;a.classList.toggle('active',yes);if(yes)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
}
function requestUpdate(){if(!frame)frame=requestAnimationFrame(update);}
window.addEventListener('scroll',requestUpdate,{passive:true});window.addEventListener('resize',requestUpdate);requestUpdate();
