// =================Loader=====================

onload = () => {
    const load =document.getElementById('load')
    setTimeout(() =>{
        load.style.display='none'
    },3690)

    
}

function loader(){
    const load =document.getElementById('load')
    setTimeout(() =>{
        load.style.display='none'
    },963)
}


/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')





/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)



/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


function scaleCv(){
    document.body.classList.add('scale-cv')
}

function removeScale(){
    document.body.classList.remove('scale-cv')
}

let areaCv = document.getElementById('area-cv')

let resumeButton = document.getElementById('resume-button')
let creator = document.querySelector('.generate-pdf')

let opt = {
    margin:       -1.5,
   
    filename:     'Resume.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 4 },
    jsPDF:        { format: 'a4', orientation: 'portrait' },
    enableLinks: true,
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    
  };



function generateResume(){
    html2pdf(areaCv, opt)
}


resumeButton.addEventListener('click', () => {
    scaleCv()

    generateResume()

    setTimeout(removeScale, 5000)
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3639,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Download Initiated'
      })
})


creator.addEventListener('click', () => {
    load.style.display='block'
    loader()
    document.querySelector('.home-show').style.display='none'

    setTimeout(() => {
        document.querySelector('.result').style.display='block'
        document.querySelector('.creator').style.display='none'

       updater()
        
    }, 639);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3639,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Succesfully Created'
      })
   
   
})

document.querySelector('.editing-pdf').addEventListener('click', ()=> {
    load.style.display='block'
    document.querySelector('.home-show').style.display='block'

    loader()
    

    setTimeout(() => {
        document.querySelector('.result').style.display='none'
        document.querySelector('.creator').style.display='block'
        
        
        
    }, 369);
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3639,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'info',
        title: 'Data Reterived'
      })

    



})




document.getElementById('perfil__input').addEventListener('change', readfichier);


function readfichier(){
    let file = document.getElementById("perfil__input").files[0];

    console.log(file);
  
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    console.log(reader.result);
  
    //set the image to template
  
    reader.onloadend = function () {
      document.getElementById("image-perfil").src = reader.result;
      document.querySelector(".home__img-creator").src = reader.result;

    };

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3639,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'File Uploaded, Now Drag Down'
      })

}

function updater(){

    const name = document.getElementById('home__title-creator').value
    const profession = document.getElementById('home__profession-creator').value
    const address = document.getElementById('home__information-address-creator').value
    const email = document.getElementById('home__information-email-creator').value
    const number = document.getElementById('home__information-number-creator').value


    const linkedin = document.getElementById('linkedin__text').value
    const facebook = document.getElementById('facebook__text').value
    const instagram = document.getElementById('instagram__text').value
    const twitter = document.getElementById('twitter__text').value


    const nameUpdate = document.querySelector('.title-result')
    const professionUpdate = document.querySelector('.profession-result')
    const addressUpdate = document.querySelector('.address')
    const emailUpdate = document.querySelector('.email-sender')
    const numberUpdate = document.querySelector('.number')


    const linkedinUpdate = document.querySelector('.social__link-linkedin')

    

    linkedinUpdate.href=  `https://www.linkedin.com/in/${linkedin}`
    linkedinUpdate.innerHTML = `
                        <i class='bx bxl-linkedin-square social__icon' ></i> @${linkedin}
                        
                        `



    const instagramUpdate = document.querySelector('.social__link-instagram')

    

    instagramUpdate.href=  `https://www.instagram.com/${instagram}`
    instagramUpdate.innerHTML = `
                        <i class='bx bxl-instagram social__icon' ></i> @${instagram}

                        
                        `


    const twitterUpdate = document.querySelector('.social__link-twitter')

    

    twitterUpdate.href=  `https://www.twitter.com/${twitter}`
    twitterUpdate.innerHTML = `
                        <i class='bx bxl-twitter social__icon' ></i> @${twitter}
                        
                        
                        `

    const facebookUpdate = document.querySelector('.social__link-facebook')


    facebookUpdate.href=  `https://www.facebook.com/${facebook}`
    facebookUpdate.innerHTML = `
                        <i class='bx bxl-facebook social__icon' ></i> @${facebook}
                        
                        `

    nameUpdate.innerHTML=`${name}`
    professionUpdate.innerHTML=`${profession}`
    addressUpdate.innerHTML=`${address}`
    emailUpdate.href= 'mailto:'+email
    emailUpdate.innerHTML=`${email}`
    numberUpdate.innerHTML=`${number}`

    const about = document.getElementById('profile__description-creator').value

    const aboutUpdate = document.querySelector('.profile__description-result')
    aboutUpdate.innerHTML =`${about}`


    let educationtitle = document.getElementsByClassName('education__title-creator')
    let educationdegree = document.getElementsByClassName('education__studies-creator')
    let educationyear = document.getElementsByClassName('education__year-creator')
    let title =[]
    for (let e of educationtitle){
 
            title.push(e.value)


            
        
    }
    

    let degree =[]
    for (let j of educationdegree){
 
            degree.push(j.value)


            
        
    }

    let year =[]
    for (let k of educationyear){
 
            year.push(k.value)


            
        
    }


    const education__content = document.querySelector('.education__container-result')
    let education = ""

    for (var z=0; z<title.length; z++){
         education = education + `
        
                    <div class="education__content">
                    <div class="education__time">
                        <span class="education__rounder"></span>
                        <span class="education__line"></span>
                    </div>

                    <div class="education__data bd-grid">
                        <h3 class="education__title">
                            ${title[z]}
                        </h3>
                        <span class="education__studies">${degree[z]}</span>
                        <span class="education__year">${year[z]}</span>
                    </div>
                    
                </div>
            `
    }

    education = education+`<span class="education__rounder education__rounder-last-result"></span>`

    education__content.innerHTML = education

    const experiencetitle = document.getElementsByClassName('experience__title-creator')
    const experiencetime = document.getElementsByClassName('experience__company-creator-time') 
    const experiencename = document.getElementsByClassName('experience__company-creator-name') 
    const experiencecompany = document.getElementsByClassName('experience__description-creator')

    let exptitle = []
    for(let a of experiencetitle){
        exptitle.push(a.value)
    }

    let exptime = []
    for(let b of experiencetime){
        exptime.push(b.value)
    }

    let expname = []
    for(d of experiencename){
        expname.push(d.value)
    }


    let expcompany = []
    for(let c of experiencecompany){
        expcompany.push(c.value)
    }




    const experience__content = document.querySelector('.experience__container-result')
    let experience = ""
    for (var j=0; j<exptitle.length; j++){
        experience = experience + `
                        
                                <div class="experience__content">
                                <div class="experience__time">
                                    <span class="experience__rounder"></span>
                                    <span class="experience__line"></span>
                                </div>

                                <div class="experience__data bd-grid">
                                    <h3 class="experience__title"><a href="${exptime[j]}" target="_blank">${exptitle[j]}<i class="ri-arrow-right-up-fill certificate__link-icon"></i></a></h3>
                                    <p class="experience__description">${expcompany[j]}</p>

                                </div>
                            </div>
                        `
    }


    experience = experience + `<span class="experience__rounder experience__rounder-last-result"></span>`
    experience__content.innerHTML = experience



    const certificatetitle = document.getElementsByClassName('certificate__title-creator')
    const certificatelink = document.getElementsByClassName('certificate-link-creator')
    const certificatedescp = document.getElementsByClassName('certificate__description-creator')

    let certiTitle = []
    for(let k of certificatetitle){
        certiTitle.push(k.value)
    }

    let certiLink = []
    for(let l of certificatelink){
        certiLink.push(l.value)
    }
    
    let certiDescp = []
    for(m of certificatedescp){
        certiDescp.push(m.value)
    }


    const certificate__content = document.querySelector('.certificate__container-result')
    let certificate = ""
    for(jo=0; jo<certiTitle.length; jo++){
        certificate = certificate + `
                                        <div class="certificate__content">
                                        <a class="certficiate__title" href="${certiLink[jo]}" target = "_blank">

                                            ${certiTitle[jo]}<i class="ri-arrow-right-up-fill certificate__link-icon"></i>
                                        </a>
                                        <p class="certificate__description">
                                            ${certiDescp[jo]}
                                        </p>
                                    </div>
                                    
        
        
                                    `

    
    }

    certificate__content.innerHTML = certificate

    const referencespost = document.getElementsByClassName('references__post-creator')
    const referencestitle = document.getElementsByClassName('references__title-creator')
    const referencesnumber = document.getElementsByClassName('references__number-creator')
    const referencesemail = document.getElementsByClassName('references__email-creator')


    let referPost = []
    for(n of referencespost){
        referPost.push(n.value)
    }

    let referTitle = []
    for(o of referencestitle){
        referTitle.push(o.value)
    }

    let referNumber = []
    for(p of referencesnumber){
        referNumber.push(p.value)
    }

    let referEmail = []
    for(q of referencesemail){
        referEmail.push(q.value)
    }

    const references__content = document.querySelector('.references__container-result')
    let references = ""
    for(ni=0; ni<referTitle.length; ni++){
        references = references + `
                                    <div class="references__content bd-grid">
                                    <span class="references__subtitle">
                                        ${referPost[ni]}
                                    </span>
                                    <h3 class="references__title">${referTitle[ni]}</h3>
                                    <ul class="references__contact">
                                        <li>Phone: ${referNumber[ni]}</li>
                                        <li>Email: <a href = "mailto:${referEmail[ni]}">${referEmail[ni]}</a></li>
                                    </ul>
                                </div>
                                    
                                        `


    
    }

    references__content.innerHTML = references

    const languagesname = document.getElementsByClassName('languages__creator')
    let langName = []

    for(r of languagesname){
        langName.push(r.value)
    }
    const languages__creator = document.querySelector('.languages__content-result')
    let languages =""
    for(ta=0; ta<langName.length; ta++){
        languages = languages + `
                                <li class="languages__name">
                                <span class="languages__circle"></span> ${langName[ta]}
                            </li>
        
                                    `

    }
    languages__creator.innerHTML = languages

    const interestTitle = document.getElementsByClassName('interest__name-creator')

    let interTitle = []

    for(t of interestTitle){
        interTitle.push(t.value)
    }
    

    const interesets__content = document.querySelector('.interests__container-result')
    let interest = ""
    for(joni=0; joni<interTitle.length; joni++){
        interest = interest + `
                                <div class="interesets__content">
                                <i class="ri-star-line"></i>
                                <span class="interests__name"> ${interTitle[joni]}</span>
                            </div>
        
                                    `
    }

    interesets__content.innerHTML = interest

    const skillsName = document.getElementsByClassName('skills__creator')
    let skills = []
    for(v of skillsName){
        skills.push(v.value)
    }

    const skills__content = document.querySelector('.skills__data-result')
    let skilled = ""
    for(jg=0; jg<skills.length; jg++){
        skilled = skilled + `
                                <li class="skills__name">
                                <span class="skills__circle"></span> ${skills[jg]}
                            </li>
                            
                            `
    }
    skills__content.innerHTML = skilled


}   

var original = document.querySelector('.education__content-creator');

var i = 1;
function duplicate() {

    var clone = original.cloneNode(true); // "deep" clone
     // there can only be one element with an ID

    clone.id = "new__education"; // there can only be one element with an ID

    clone.className = `new__education${i}` 

    original.parentNode.appendChild(clone);
    i++;

    document.querySelector('.delete__education').onclick = () => {
        i -= 1
        if(i === 0){
            i = 1
        }
    }
    changeEducation()
}


function changeEducation(){

    const totalEducation = document.querySelectorAll('#new__education')

    if(totalEducation.length === 0){

        document.querySelector('.delete__education').disabled = true
        
    }else if(totalEducation.length > 0){

        document.querySelector('.delete__education').disabled = false
        const inputEducationContainer = document.querySelector(`.new__education${totalEducation.length}`)

        let eductationTitle = inputEducationContainer.querySelector('.education__title-creator')
        eductationTitle.value = ""
        
        let eductaionInstitute = inputEducationContainer.querySelector('.education__studies-creator')
        eductaionInstitute.value = ""

        let educationYear = inputEducationContainer.querySelector('.education__year-creator')
        educationYear.value = ""
    }
}
document.querySelector('.delete__education').addEventListener('click', deleteEducation)


function deleteEducation(){
    const totalEducation = document.querySelectorAll('#new__education')
     if(totalEducation.length === 0){
         document.querySelector('.delete__education').disabled = true
     }else if(totalEducation.length > 0){
         document.querySelector('.delete__education').disabled = false
         let deleteItem = document.querySelector(`.new__education${totalEducation.length}`)
         deleteItem.parentNode.removeChild(deleteItem)
}

}


var original_experience = document.querySelector('.experience__content-creator');

var j = 1;
function duplicate_experience() {

    var clone = original_experience.cloneNode(true); // "deep" clone
    clone.id = "new__experience";
     // there can only be one element with an ID
    clone.className = `new__experience${j}`
    original_experience.parentNode.appendChild(clone);
    j++;

    document.querySelector('.delete__experience').onclick = () => {
        j -= 1
        if(j === 0){
            j = 1
        }
    }
    changeExperience()

}


function changeExperience(){
    const totalExperience = document.querySelectorAll('#new__experience')

    if(totalExperience.length === 0){

        document.querySelector('.delete__experience').disabled = true

    }else if(totalExperience.length > 0){
        document.querySelector('.delete__experience').disabled = false

        const inputExperienceContainer = document.querySelector(`.new__experience${totalExperience.length}`)

        let experienceTitle = inputExperienceContainer.querySelector('.experience__title-creator')
        experienceTitle.value = ""

        let experienceCompany = inputExperienceContainer.querySelector('.experience__company-creator-time')
        experienceCompany.value = ""

        let experienceDescp = inputExperienceContainer.querySelector('.experience__description-creator')
        experienceDescp.value = ""

    }
}


document.querySelector('.delete__experience').addEventListener('click', deleteExperience)
function deleteExperience(){
    const totalExperience = document.querySelectorAll('#new__experience')
     if(totalExperience.length === 0){
         document.querySelector('.delete__experience').disabled = true
     }else if(totalExperience.length > 0){
         document.querySelector('.delete__experience').disabled = false
         let deleteItem = document.querySelector(`.new__experience${totalExperience.length}`)
         deleteItem.parentNode.removeChild(deleteItem)
}
}


var original_certificate = document.querySelector('.certificate__content-creator');
var n = 1
function duplicate_certificate() {
    var clone = original_certificate.cloneNode(true); // "deep" clone
    clone.id = "new__certificate" ; // there can only be one element with an ID
    clone.className = `new__certificate${n}`
    original_certificate.parentNode.appendChild(clone);
    n++;

    document.querySelector('.delete__certificate').onclick = () => {
        n -= 1
        if(n === 0){
            n = 1
        }
    }
    changeCertificate()
}

function changeCertificate(){

    const totalCertificate = document.querySelectorAll('#new__certificate')

    if(totalCertificate.length === 0){
        document.querySelector('.delete__certificate').disabled = true
    }else if(totalCertificate.length > 0){
        document.querySelector('.delete__certificate').disabled = false
        const inputCertificateContainer = document.querySelector(`.new__certificate${totalCertificate.length}`)

        let certifiTitle = inputCertificateContainer.querySelector('.certificate__title-creator')
        certifiTitle.value = ""

        let certiflink = inputCertificateContainer.querySelector('.certificate-link-creator')
        certiflink.value = ""

        let certifidescp = inputCertificateContainer.querySelector('.certificate__description-creator')
        certifidescp.value = ""
    }

}


document.querySelector('.delete__certificate').addEventListener('click', deletecertificate)

function deletecertificate(){
    const totalCertificate = document.querySelectorAll('#new__certificate')
     if(totalCertificate.length === 0){
         document.querySelector('.delete__certificate').disabled = true
     }else if(totalCertificate.length > 0){
         document.querySelector('.delete__certificate').disabled = false
         let deleteItem = document.querySelector(`.new__certificate${totalCertificate.length}`)
         deleteItem.parentNode.removeChild(deleteItem)
}
}

var x = 1
var original_references = document.querySelector('.references__content-creator');

function duplicate_references() {
    var clone = original_references.cloneNode(true); // "deep" clone
    clone.id = "new__references"; // there can only be one element with an ID
    clone.className = `new__references${x}`
    original_references.parentNode.appendChild(clone);
    x++;

    document.querySelector('.delete__refrences').onclick = () => {
        x -= 1
        if(x === 0){
            x = 1
        }
    }
    changeRefernces()
}

function changeRefernces(){
    const totalReferences = document.querySelectorAll('#new__references')

    if(totalReferences.length === 0){
        document.querySelector('.delete__refrences').disabled = true

    }else if(totalReferences.length > 0){
        document.querySelector('.delete__refrences').disabled = false

        const inputReferenceContainer = document.querySelector(`.new__references${totalReferences.length}`)
        
        let refrenceTitle = inputReferenceContainer.querySelector('.references__post-creator')
        refrenceTitle.value = ""

        let referncePost = inputReferenceContainer.querySelector('.references__title-creator')
        referncePost.value = ""

        let refenceNumber = inputReferenceContainer.querySelector('.references__number-creator')
        refenceNumber.value = ""

        let refrenceEmail = inputReferenceContainer.querySelector('.references__email-creator')
        refrenceEmail.value = ""
    }
}


document.querySelector('.delete__refrences').addEventListener('click', deleterefrence)


function deleterefrence(){
    const totalReferences = document.querySelectorAll('#new__references')
     if(totalReferences.length === 0){
         document.querySelector('.delete__refrences').disabled = true
     }else if(totalReferences.length > 0){
         document.querySelector('.delete__refrences').disabled = false
         let deleteItem = document.querySelector(`.new__references${totalReferences.length}`)
         deleteItem.parentNode.removeChild(deleteItem)
}

}



var original_languages = document.querySelector('.languages__name-creator');
var b = 1
function duplicate_languages() {
    var clone = original_languages.cloneNode(true); // "deep" clone
    clone.id = "new__language"; // there can only be one element with an ID
    clone.className = `new__language${b}`
    original_languages.parentNode.appendChild(clone);
    b++;
    document.querySelector('.delete__languages').onclick = () => {
        b -= 1
        if(b === 0){
            b = 1
        }
    }
    changeLanguage()
}

function changeLanguage(){
    const totalLanguages = document.querySelectorAll('#new__language')

    if(totalLanguages.length === 0){
        document.querySelector('.delete__languages').disabled = true
    }else if(totalLanguages.length > 0){
        document.querySelector('.delete__languages').disabled = false
        
        const inputLanguages = document.querySelector(`.new__language${totalLanguages.length}`)

        let languagaName = inputLanguages.querySelector('.languages__creator')
        languagaName.value = ""
    }


}

document.querySelector('.delete__languages').addEventListener('click', deleteLanguage)


function deleteLanguage(){
    const totalLanguages = document.querySelectorAll('#new__language')
     if(totalLanguages.length === 0){
         document.querySelector('.delete__languages').disabled = true
     }else if(totalLanguages.length > 0){
         document.querySelector('.delete__languages').disabled = false
         let deleteItem = document.querySelector(`.new__language${totalLanguages.length}`)
         deleteItem.parentNode.removeChild(deleteItem)
}

}


var original_interest = document.querySelector('.interesets__content-creator');
var r = 1
function duplicate_interest() {
    var clone = original_interest.cloneNode(true); // "deep" clone
    clone.id = "new__intrest"; // there can only be one element with an ID
    clone.className = `new__intrest${r}`
    
    original_interest.parentNode.appendChild(clone);
    r++;

    document.querySelector('.deleteIntrest').onclick = () => {
        r -= 1
        if(r === 0){
            r = 1
        }
    }
    changeIntrest()
}

function changeIntrest() {
    const totalIntrest = document.querySelectorAll('#new__intrest')

    if(totalIntrest.length === 0){
        document.querySelector('.deleteIntrest').disabled = true
    }else if(totalIntrest.length > 0){
        document.querySelector('.deleteIntrest').disabled = false

        const inputIntrestContainer = document.querySelector(`.new__intrest${totalIntrest.length}`)

        let intrestName = inputIntrestContainer.querySelector('.interest__name-creator')
        intrestName.value = ""
    }
}

document.querySelector('.deleteIntrest').addEventListener('click', deleteIntrest)


function deleteIntrest(){
    const totalIntrest = document.querySelectorAll('#new__intrest')
     if(totalIntrest.length === 0){
         document.querySelector('.deleteIntrest').disabled = true
     }else if(totalIntrest.length > 0){
         document.querySelector('.deleteIntrest').disabled = false
         let deleteItem = document.querySelector(`.new__intrest${totalIntrest.length}`)
         deleteItem.parentNode.removeChild(deleteItem)
}

}

var k = 1;

var original_skills = document.querySelector('.skills__name-creator');

function duplicate_skills() {
    var clone = original_skills.cloneNode(true); // "deep" clone
    clone.id = "new__skills"; // there can only be one element with an ID
    clone.className = `new__skills${k}` 
    k++
    original_skills.parentNode.appendChild(clone);
    document.querySelector('.delete__skills').onclick = () => {
        k -= 1
        if(k === 0){
            k = 1
        }
    }
    changeSkills()
}

function changeSkills(){
    const totalSkills = document.querySelectorAll('#new__skills')

    if(totalSkills.length === 0){
        document.querySelector('.delete__skills').disabled = true
    }else if(totalSkills.length > 0){

        document.querySelector('.delete__skills').disabled = false

        const inputSkillContainer = document.querySelector(`.new__skills${totalSkills.length}`)
        
        let skillsTitle = inputSkillContainer.querySelector('.skills__creator')
        skillsTitle.value = ""
    }
}

document.querySelector('.delete__skills').addEventListener('click', deleteSkills)
function deleteSkills(){
    const totalSkills = document.querySelectorAll('#new__skills')
     if(totalSkills.length === 0){
         document.querySelector('.delete__skills').disabled = true
     }else if(totalSkills.length > 0){
         document.querySelector('.delete__skills').disabled = false
         let deleteItemskills = document.querySelector(`.new__skills${totalSkills.length}`)
         deleteItemskills.parentNode.removeChild(deleteItemskills)
}

}
/*==================== DARK LIGHT THEME ====================*/ 
const themeswitchButton = document.getElementById('theme-switcher')
const darkswitchTheme = 'dark-theme'
const iconswitchTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedswitchTheme = localStorage.getItem('selected-switch-theme')
const selectedswitchIcon = localStorage.getItem('selected--switch-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentswitchTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentswitchIcon = () => themeswitchButton.classList.contains(iconTheme) ?'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedswitchTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedswitchTheme === 'dark' ? 'add' : 'remove'](darkswitchTheme)
  themeswitchButton.classList[selectedswitchIcon === 'ri-moon-line' ? 'add' : 'remove'](iconswitchTheme)
}

// Activate / deactivate the theme manually with the button
themeswitchButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkswitchTheme)
    themeswitchButton.classList.toggle(iconswitchTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentswitchTheme())
    localStorage.setItem('selected-icon', getCurrentswitchIcon())
})


var widths = [0, 809, 3840];

function resizeFn() {
    if (window.innerWidth<widths[1]) {
       
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Your Screen Size must be greator than 810px for editing',
            footer: 'Screen size below than 810px Allowed to see what we made finally'
          })




    }
}
window.onresize = resizeFn;
resizeFn();


function happy(){
    Swal.fire({
        title: '<strong><em>Thanking You</em></strong>',
        icon: 'Success',
        html:
          '<b>Keep Smiling It Suits You</b>', 
        showCloseButton: true,
        showCancelButton: false,
        focusConfirm: true,
        confirmButtonText:
          'Close'        
        
      })
  }
