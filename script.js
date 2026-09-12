const menu=document.querySelector('.menu');
const nav=document.querySelector('.main-nav');
if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
const form=document.querySelector('#enquiryForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const data=new FormData(form);const msg=`Awadh Classes Enquiry\n\nStudent: ${data.get('student')}\nParent/Guardian: ${data.get('parent')}\nClass: ${data.get('class')}\nBoard: ${data.get('board')}\nMobile: ${data.get('mobile')}\nLearning Mode: ${data.get('mode')}\nSubjects: ${data.get('subjects')}\nRequirements: ${data.get('message')||'Not specified'}`;window.open('https://wa.me/917275368938?text='+encodeURIComponent(msg),'_blank','noopener');});}
