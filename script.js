let data = document.querySelectorAll('.qst .show');

data.forEach((ele)=>{
    ele.addEventListener('click',()=> {
       

        ele.nextElementSibling.classList.toggle('active');
    })
})