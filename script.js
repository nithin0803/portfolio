const codeforcerating=document.getElementById('codeforce__api')
const gitrating=document.getElementById('github__api')
const resumelink=document.getElementById('resume')
const linkedinme=document.getElementById('linkedin_page')
const gitme=document.getElementById('gitlogo')
const root=document.querySelector('html')
const Header=document.getElementById('header')
const home=document.getElementById('navhome')
const skills=document.getElementById('navSkills')
const liveActivity=document.getElementById('navLiveActivity')
const projects=document.getElementById('navProjects')

fetch(" https://codeforces.com/api/user.info?handles=Nithin08")
.then(response => response.json())
.then(data => {
    
    codeforcerating.innerHTML=`<h4>Current Rating  ${data.result[0].rating} </h4>
    <h4>maxRating ${data.result[0].maxRating}</h4>`
})

fetch("https://api.github.com/users/nithin0803")
.then(response => response.json())
.then(data =>{
    gitrating.innerHTML=`${data.public_repos}
    <h4> Public Repositories</h4>`
})

resumelink.onclick=function(){
    //location.href="https://drive.google.com/file/d/1gXbHcuKT3zlYQzYzk-DwCpGtQy3kHhqp/view?usp=sharing";
    window.open("https://drive.google.com/file/d/1gXbHcuKT3zlYQzYzk-DwCpGtQy3kHhqp/view?usp=sharing", "_blank");
}

linkedinme.onclick=function(){
    window.open('https://www.linkedin.com/in/nithin-b-85ba4016b/')
}

gitme.onclick=function(){
    window.open('https://github.com/nithin0803')
}
window.addEventListener('scroll',()=>{
    console.log(root.scrollTop)
    if (root.scrollTop>550){
        Header.classList.add("black__header");
        Header.classList.remove("transprent__headre");
        
        
    }
    else{
        Header.classList.add("transparent__header");
        Header.classList.remove("black__header");
        home.classList.add('selected')
        skills.classList.remove("selected")
        projects.classList.remove('selected')
        liveActivity.classList.remove('selected')
}
if (root.scrollTop>550 && root.scrollTop<1333.5999755859375){
    home.classList.remove('selected')
    skills.classList.add("selected")
    projects.classList.remove('selected')
    liveActivity.classList.remove('selected')

}



if (root.scrollTop>1000.5999755859375 && root.scrollTop<1333.5999755859375){
    skills.classList.remove('selected')
    liveActivity.classList.add('selected')
    projects.classList.remove('selected')
}
if(root.scrollTop>1433.5999755859375){
    skills.classList.remove('selected')
    liveActivity.classList.remove('selected')
    projects.classList.add('selected')
}

})