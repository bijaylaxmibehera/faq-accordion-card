const btns=document.querySelectorAll('.btn');



btns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        let parent=btn.parentElement;
        parent.parentElement.classList.toggle('active')


    })
})