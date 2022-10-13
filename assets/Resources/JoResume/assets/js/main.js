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
    pagebreak: { mode: ['avoid-all', 'css', 'legacy'] },
    // useCORS: true
    
  };



// Save the PDF



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
      document.querySelector('.swal2-popup').style.background = '#1b1a1a'
        document.querySelector('.swal2-popup').style.color = 'white'
        document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
        document.querySelector('.swal2-success-circular-line-left').style.background = '#1b1a1a' 
        document.querySelector('.swal2-success-circular-line-right').style.background = '#1b1a1a' 
        document.querySelector('.swal2-success-fix').style.background = '#1b1a1a' 
})


creator.addEventListener('click', () => {

    const toDataURL = url => fetch(url)
                            
    .then(response => response.blob())
                            
    .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
    }))
                          
                          
    toDataURL(document.getElementById("image-perfil").src)
    .then(dataUrl => {
        document.querySelector('.home__img-creator').src = dataUrl
    })

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
      document.querySelector('.swal2-popup').style.background = '#1b1a1a'
    document.querySelector('.swal2-popup').style.color = 'white'
        document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
        document.querySelector('.swal2-success-circular-line-left').style.background = '#1b1a1a' 
        document.querySelector('.swal2-success-circular-line-right').style.background = '#1b1a1a' 
        document.querySelector('.swal2-success-fix').style.background = '#1b1a1a' 
   
   
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
        document.querySelector('.swal2-popup').style.background = '#1b1a1a'
        document.querySelector('.swal2-popup').style.color = 'white'
        document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'

    



})



document.getElementById('perfil__input').addEventListener('change', readfichier);

var myImage 
function readfichier(){
    let file = document.getElementById("perfil__input").files[0];
    if(file === undefined){
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
            title: 'File Not Uploaded'
          })
            document.querySelector('.swal2-popup').style.background = '#1b1a1a'
            document.querySelector('.swal2-popup').style.color = 'white'
            document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'

    }else{

        const filename = file.name
    
        const extension = filename.split('.').pop();
    
        const allowedExtensions = ['jpg', 'jpeg', 'png'];
         
        if (!allowedExtensions.includes(extension)) {
           
            swalhat()
            
        }
    
        else{
        
            
            let reader = new FileReader();
          
           
            reader.onloadend = function() {
                 document.getElementById("image-perfil").src = reader.result;
              }
              reader.readAsDataURL(file);
          
            //   document.querySelector(".home__img-creator").src = reader.result;
          
            //set the image to template
          
            reader.onloadend = function () {
              
        
              auth.onAuthStateChanged(user => {
                  if(user){
                      fs.collection(user.uid).doc('_963').get().then(snapshot => {
                          // if(snapshot.data() != undefined){
          
                              // if(snapshot.data().name){
              
                                  let imagename = user.uid + '_963'
                              
                             
                              
                              const ref = firebase.storage().ref()
                              const metadata = {
                                  contentType: file.type
                                  };
                              const task = ref.child(imagename).put(file, metadata);
                              task.on('state_changed', function(snapshot){
                                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                                  progress = Math.round(progress, 2)
                                  console.log(`File uploaded : ${progress}%`)
                                  popup(`File uploaded : ${progress}%, Please Wait to update`)
                                  document.querySelector('.resume__left').click()
        
                                  if(progress === 100){
                                    document.querySelector('#home__title-creator').focus()
                                    document.querySelector('body').click()
        
        
                                    setTimeout(() => {
                                        var gfg_down =
                                        document.querySelectorAll(".popup");
                                        gfg_down.forEach(value => {
        
                                            value.parentNode.removeChild(value);
                                        })
                                        
                                    }, 999);
                                  }else if(progress > 100){
                                    document.querySelector('#home__title-creator').focus()
                                    document.querySelector('body').click()
        
        
                                    // setTimeout(() => {
                                        var gfg_down =
                                        document.querySelector(".popup");
                                        gfg_down.parentNode.removeChild(gfg_down);
                                  }
                                  else{
                                    document.querySelector('.resume__left').click()
        
                                  }
                                })
                                document.querySelector('.resume__left').click()
        
                                
                                task
                              .then(snapshot => snapshot.ref.getDownloadURL())
                              .then(newurl => {
                                  console.log(`New Url = ${newurl}`)
                                  myImage = newurl
        
                                if(snapshot.data() != undefined){
          
                                      fs.collection(user.uid).doc('_' + 963).update({
                                          url: newurl,
                                          name: imagename
                                          
                                      })
                                }
                                    document.getElementById("image-perfil").src = newurl;
                                    // document.querySelector(".home__img-creator").src = newurl;
                               
          
                                    document.querySelector(".home__img").src = newurl;
        
        
                                    setTimeout(() => {
                                        
                                        const Toast = Swal.mixin({
                                            toast: true,
                                            position: 'top-end',
                                            showConfirmButton: false,
                                            timer: 2700,
                                            timerProgressBar: true,
                                            didOpen: (toast) => {
                                              toast.addEventListener('mouseenter', Swal.stopTimer)
                                              toast.addEventListener('mouseleave', Swal.resumeTimer)
                                            }
                                          })
                                          
                                          Toast.fire({
                                            icon: 'success',
                                            title: 'File Uploaded'
                                          })
        
                                          document.querySelector('.swal2-popup').style.background = '#1b1a1a'
                                            document.querySelector('.swal2-popup').style.color = 'white'
                                            document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
                                            document.querySelector('.swal2-success-circular-line-left').style.background = '#1b1a1a' 
                                            document.querySelector('.swal2-success-circular-line-right').style.background = '#1b1a1a' 
                                            document.querySelector('.swal2-success-fix').style.background = '#1b1a1a' 
                                    }, 720);
        
                                    
                                    
                              })
                          // }
                          // }
                      })
                  
          
                  }
              })
            };
            
            // const ref = firebase.storage().ref()
            // const metadata = {
            //     contentType: 'image/jpg'
            //     };
            // const task = ref.child(name).put(file, metadata);
            
            
        
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'info',
                title: 'Please Wait, while File is uploading'
              })
        
              document.querySelector('.swal2-popup').style.background = '#1b1a1a'
                document.querySelector('.swal2-popup').style.color = 'white'
                document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
            }
    }
    


}

function swalhat(){
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4500,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'error',
        title: 'File Not Supported, Please Upload only Image Files'
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

``
var i = 1;
function duplicate() {
    const totalContainer = document.querySelectorAll("#new__education")
    if(totalContainer.length === 1){
        i = 2
    }
    if(document.querySelector('.education__content-creator')){

        var original = document.querySelector('.education__content-creator');
    }else{
        var original = document.querySelector('.new__education1')
    }

    var clone = original.cloneNode(true); // "deep" clone
     // there can only be one element with an ID

    clone.id = "new__education"; // there can only be one element with an ID

    clone.className = `education__content new__education${i}` 

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
    if(document.querySelector('.education__content-creator')){

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
    }else{

        const totalEducation = document.querySelectorAll('#new__education')
    
        if(totalEducation.length === 0){
    
            document.querySelector('.delete__education').disabled = true
            
        }else if (totalEducation.length === 1){
            console.log('cant change initial value')
            document.querySelector('.delete').disabled = false
            
        }
        else{
    
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

}
document.querySelector('.delete__education').addEventListener('click', deleteEducation)


function deleteEducation(){

    if(document.querySelector('.education__content-creator')){

        const totalEducation = document.querySelectorAll('#new__education')
         if(totalEducation.length === 0){
             document.querySelector('.delete__education').disabled = true
         }else if(totalEducation.length > 0){
             let deleteItem = document.querySelector(`.new__education${totalEducation.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }else{
        const totalEducation = document.querySelectorAll('#new__education')
         if(totalEducation.length === 0){
             document.querySelector('.delete__education').disabled = true
         }else if(totalEducation.length === 1){
            console.log('failed to delete')
            document.querySelector('.delete').disabled = true
            
         }
         
         else{
             let deleteItem = document.querySelector(`.new__education${totalEducation.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }


}



var j = 1;
function duplicate_experience() {
    const totalContainer = document.querySelectorAll("#new__experience")
    if(totalContainer.length === 1){
        j = 2
    }
    if(document.querySelector('.experience__content-creator')){

        var original_experience = document.querySelector('.experience__content-creator');
    }else{
        var original_experience = document.querySelector('.new__experience1');

    }

    var clone = original_experience.cloneNode(true); // "deep" clone
    clone.id = "new__experience";
     // there can only be one element with an ID
    clone.className = `experience__content new__experience${j}`
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
    if(document.querySelector('.experience__content-creator')){
        
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
    }else{
        const totalExperience = document.querySelectorAll('#new__experience')
    
        if(totalExperience.length === 0){
    
            document.querySelector('.delete__experience').disabled = true
    
        
        }else if (totalExperience.length === 1){
            console.log('cant change initial value')
            document.querySelector('.delete__experience').disabled = false
            
        }
        else{
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
}


document.querySelector('.delete__experience').addEventListener('click', deleteExperience)

function deleteExperience(){

    if(document.querySelector('.experience__content-creator')){

        const totalExperience = document.querySelectorAll('#new__experience')
         if(totalExperience.length === 0){
             document.querySelector('.delete__experience').disabled = true
         }else if(totalExperience.length > 0){
             document.querySelector('.delete__experience').disabled = false
             let deleteItem = document.querySelector(`.new__experience${totalExperience.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }else{

        const totalExperience = document.querySelectorAll('#new__experience')
         if(totalExperience.length === 0){
             document.querySelector('.delete__experience').disabled = true
         }else if(totalExperience.length === 1){
            console.log('failed to delete')
            document.querySelector('.delete__experience').disabled = true
            
         }
         else{
             let deleteItem = document.querySelector(`.new__experience${totalExperience.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }
}


var n = 1
function duplicate_certificate() {

    const totalContainer = document.querySelectorAll('#new__certificate')
    if(totalContainer.length === 1){
        n = 2
    }
    if(document.querySelector('.certificate__content-creator')){

        var original_certificate = document.querySelector('.certificate__content-creator');
    }else{
        var original_certificate = document.querySelector('.new__certificate1');

    }

    var clone = original_certificate.cloneNode(true); // "deep" clone
    clone.id = "new__certificate" ; // there can only be one element with an ID
    clone.className = `certificate__content new__certificate${n}`
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

    if(document.querySelector('.certificate__content-creator')){

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
    }else{

        const totalCertificate = document.querySelectorAll('#new__certificate')
    
        if(totalCertificate.length === 0){
            document.querySelector('.delete__certificate').disabled = true
        }else if (totalCertificate.length === 1){
            console.log('cant change initial value')
            document.querySelector('.delete__certificate').disabled = false
            
        }
        else{
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


}


document.querySelector('.delete__certificate').addEventListener('click', deletecertificate)

function deletecertificate(){

    if(document.querySelector('.certificate__content-creator')){

        const totalCertificate = document.querySelectorAll('#new__certificate')
         if(totalCertificate.length === 0){
             document.querySelector('.delete__certificate').disabled = true
         }else if(totalCertificate.length > 0){
             document.querySelector('.delete__certificate').disabled = false
             let deleteItem = document.querySelector(`.new__certificate${totalCertificate.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }else{
        const totalCertificate = document.querySelectorAll('#new__certificate')
         if(totalCertificate.length === 0){
             document.querySelector('.delete__certificate').disabled = true
         }else if(totalCertificate.length === 1){
            console.log('failed to delete')
            document.querySelector('.delete__certificate').disabled = true
            
         }
         else{
             document.querySelector('.delete__certificate').disabled = false
             let deleteItem = document.querySelector(`.new__certificate${totalCertificate.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }

    }
}

var x = 1

function duplicate_references() {

    const totalContainer = document.querySelectorAll('#new__references')
    if(totalContainer.length === 1){
        x = 2
    }
    if(document.querySelector('.references__content-creator')){
        
        var original_references = document.querySelector('.references__content-creator');
    }else{
        var original_references = document.querySelector('.new__references1');

    }

    var clone = original_references.cloneNode(true); // "deep" clone
    clone.id = "new__references"; // there can only be one element with an ID
    clone.className = `references__content new__references${x}`
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

    if(document.querySelector('.references__content-creator')){

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
    }else{
        
        const totalReferences = document.querySelectorAll('#new__references')
    
        if(totalReferences.length === 0){
            document.querySelector('.delete__refrences').disabled = true
    
        }else if (totalReferences.length === 1){
            console.log('cant change initial value')
            document.querySelector('.delete__refrences').disabled = false
            
        }
        
        else{
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
}


document.querySelector('.delete__refrences').addEventListener('click', deleterefrence)


function deleterefrence(){

    if(document.querySelector('.references__content-creator')){

        const totalReferences = document.querySelectorAll('#new__references')
         if(totalReferences.length === 0){
             document.querySelector('.delete__refrences').disabled = true
         }else if(totalReferences.length > 0){
             document.querySelector('.delete__refrences').disabled = false
             let deleteItem = document.querySelector(`.new__references${totalReferences.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }else{

        const totalReferences = document.querySelectorAll('#new__references')
         if(totalReferences.length === 0){
             document.querySelector('.delete__refrences').disabled = true
         }else if(totalReferences.length === 1){
            console.log('failed to delete')
            document.querySelector('.delete__refrences').disabled = true
            
         }
         
         else{
             document.querySelector('.delete__refrences').disabled = false
             let deleteItem = document.querySelector(`.new__references${totalReferences.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }

    }

}



var b = 1
function duplicate_languages() {
    const totalContainer = document.querySelectorAll('#new__language')
    if(totalContainer.length === 1){
        b = 2
    }
    if(document.querySelector('.languages__name-creator')){

        var original_languages = document.querySelector('.languages__name-creator');
    }else{
        var original_languages = document.querySelector('.new__language1');

    }

    var clone = original_languages.cloneNode(true); // "deep" clone
    clone.id = "new__language"; // there can only be one element with an ID
    clone.className = `languages__content new__language${b}`
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

    if(document.querySelector('.languages__name-creator')){

        const totalLanguages = document.querySelectorAll('#new__language')
    
        if(totalLanguages.length === 0){
            document.querySelector('.delete__languages').disabled = true
        }else if(totalLanguages.length > 0){
            document.querySelector('.delete__languages').disabled = false
            
            const inputLanguages = document.querySelector(`.new__language${totalLanguages.length}`)
    
            let languagaName = inputLanguages.querySelector('.languages__creator')
            languagaName.value = ""
        }
    }else{
        const totalLanguages = document.querySelectorAll('#new__language')
    
        if(totalLanguages.length === 0){
            document.querySelector('.delete__languages').disabled = true
        
        }else if (totalLanguages.length === 1){
            console.log('cant change initial value')
            document.querySelector('.delete__languages').disabled = false
            
        }
        else{
            document.querySelector('.delete__languages').disabled = false
            
            const inputLanguages = document.querySelector(`.new__language${totalLanguages.length}`)
    
            let languagaName = inputLanguages.querySelector('.languages__creator')
            languagaName.value = ""
        }

    }


}

document.querySelector('.delete__languages').addEventListener('click', deleteLanguage)


function deleteLanguage(){

    if(document.querySelector('.languages__name-creator')){

        const totalLanguages = document.querySelectorAll('#new__language')
         if(totalLanguages.length === 0){
             document.querySelector('.delete__languages').disabled = true
         }else if(totalLanguages.length > 0){
             document.querySelector('.delete__languages').disabled = false
             let deleteItem = document.querySelector(`.new__language${totalLanguages.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }

    }else{
        const totalLanguages = document.querySelectorAll('#new__language')
         if(totalLanguages.length === 0){
             document.querySelector('.delete__languages').disabled = true
         }else if(totalLanguages.length === 1){
            console.log('failed to delete')
            document.querySelector('.delete__languages').disabled = true
            
         }
         
         else{
             document.querySelector('.delete__languages').disabled = false
             let deleteItem = document.querySelector(`.new__language${totalLanguages.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }

}


var r = 1
function duplicate_interest() {
    const totalContainer = document.querySelectorAll('#new__intrest')
    if(totalContainer.length === 1){
        r = 2
    }
    if(document.querySelector('.interesets__content-creator')){

        var original_interest = document.querySelector('.interesets__content-creator');
    }else{
        var original_interest = document.querySelector('.new__intrest1');

    }

    var clone = original_interest.cloneNode(true); // "deep" clone
    clone.id = "new__intrest"; // there can only be one element with an ID
    clone.className = `interesets__content new__intrest${r}`
    
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

    if(document.querySelector('.interesets__content-creator')){
        
        const totalIntrest = document.querySelectorAll('#new__intrest')
    
        if(totalIntrest.length === 0){
            document.querySelector('.deleteIntrest').disabled = true
        }else if(totalIntrest.length > 0){
            document.querySelector('.deleteIntrest').disabled = false
    
            const inputIntrestContainer = document.querySelector(`.new__intrest${totalIntrest.length}`)
    
            let intrestName = inputIntrestContainer.querySelector('.interest__name-creator')
            intrestName.value = ""
        }
    }else{

        const totalIntrest = document.querySelectorAll('#new__intrest')
    
        if(totalIntrest.length === 0){
            document.querySelector('.deleteIntrest').disabled = true
        }else if (totalIntrest.length === 1){
            console.log('cant change initial value')
            document.querySelector('.deleteIntrest').disabled = false
            
        }

        else{
            document.querySelector('.deleteIntrest').disabled = false
    
            const inputIntrestContainer = document.querySelector(`.new__intrest${totalIntrest.length}`)
    
            let intrestName = inputIntrestContainer.querySelector('.interest__name-creator')
            intrestName.value = ""
        }

    }
}

document.querySelector('.deleteIntrest').addEventListener('click', deleteIntrest)


function deleteIntrest(){
    if(document.querySelector('.interesets__content-creator')){

        const totalIntrest = document.querySelectorAll('#new__intrest')
         if(totalIntrest.length === 0){
             document.querySelector('.deleteIntrest').disabled = true
         }else if(totalIntrest.length > 0){
             document.querySelector('.deleteIntrest').disabled = false
             let deleteItem = document.querySelector(`.new__intrest${totalIntrest.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }else{
        const totalIntrest = document.querySelectorAll('#new__intrest')
         if(totalIntrest.length === 0){
             document.querySelector('.deleteIntrest').disabled = true
         }else if(totalIntrest.length === 1){
            console.log('failed to delete')
            document.querySelector('.deleteIntrest').disabled = true
            
         }
         else{
             document.querySelector('.deleteIntrest').disabled = false
             let deleteItem = document.querySelector(`.new__intrest${totalIntrest.length}`)
             deleteItem.parentNode.removeChild(deleteItem)
        }
    }

}

var k = 1;


function duplicate_skills() {
    const totalContainer = document.querySelectorAll('#new__skills')
    if(totalContainer.length === 1){
        k = 2
    }

    if(document.querySelector('.skills__name-creator')){

        var original_skills = document.querySelector('.skills__name-creator');
    }else{
        var original_skills = document.querySelector('.new__skills1');

    }
    var clone = original_skills.cloneNode(true); // "deep" clone
    clone.id = "new__skills"; // there can only be one element with an ID
    clone.className = `skills__content new__skills${k}` 
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
    if(document.querySelector('.skills__name-creator')){

        const totalSkills = document.querySelectorAll('#new__skills')
    
        if(totalSkills.length === 0){
            document.querySelector('.delete__skills').disabled = true
        }else if(totalSkills.length > 0){
    
            document.querySelector('.delete__skills').disabled = false
    
            const inputSkillContainer = document.querySelector(`.new__skills${totalSkills.length}`)
            
            let skillsTitle = inputSkillContainer.querySelector('.skills__creator')
            skillsTitle.value = ""
        }
    }else{

        const totalSkills = document.querySelectorAll('#new__skills')
    
        if(totalSkills.length === 0){
            document.querySelector('.delete__skills').disabled = true
        }else if (totalSkills.length === 1){
            console.log('cant change initial value')
            document.querySelector('.delete__skills').disabled = false
            
        }
        else{
    
            document.querySelector('.delete__skills').disabled = false
    
            const inputSkillContainer = document.querySelector(`.new__skills${totalSkills.length}`)
            
            let skillsTitle = inputSkillContainer.querySelector('.skills__creator')
            skillsTitle.value = ""
        }
    }

}

document.querySelector('.delete__skills').addEventListener('click', deleteSkills)
function deleteSkills(){

    if(document.querySelector('.skills__name-creator')){

        const totalSkills = document.querySelectorAll('#new__skills')
         if(totalSkills.length === 0){
             document.querySelector('.delete__skills').disabled = true
         }else if(totalSkills.length > 0){
             document.querySelector('.delete__skills').disabled = false
             let deleteItemskills = document.querySelector(`.new__skills${totalSkills.length}`)
             deleteItemskills.parentNode.removeChild(deleteItemskills)
        }
    }else{

        const totalSkills = document.querySelectorAll('#new__skills')
         if(totalSkills.length === 0){
             document.querySelector('.delete__skills').disabled = true
         }else if(totalSkills.length === 1){
            console.log('failed to delete')
            document.querySelector('.delete__skills').disabled = true
            
         }
         else{
             document.querySelector('.delete__skills').disabled = false
             let deleteItemskills = document.querySelector(`.new__skills${totalSkills.length}`)
             deleteItemskills.parentNode.removeChild(deleteItemskills)
        }

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



auth.onAuthStateChanged(user => {
    if(user){
        console.log('User is Sign In')
    }else{
        console.log('User is Sign Out')
        
    }
})


auth.onAuthStateChanged(user => {
    if(user){

        const username = document.querySelector('.username')
        fs.collection('users').doc(user.uid).get().then(snapshot => {
            username.innerText = `Hello, ${snapshot.data().Name}`
        })
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5400,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
          icon: 'info',
          title: `Please wait while we fetch your saved Data `
        })
        
        document.querySelector('.swal2-popup').style.background = '#1b1a1a'
        document.querySelector('.swal2-popup').style.color = 'white'
        document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
    }else{
        console.log('User is Sign Out')
       

        
    }
})

function logout() {
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Save & Sign Out!',
        denyButtonText: `Don't save & Sign Out!`,
        
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            popup('Taking to Home Page in a while')
            datasaver()
            
            
            Swal.fire(
               
                `Data Saved & Signing off! `,
               
                ` `,
                'success'
              )

            document.querySelector('.swal2-popup').style.background = '#1b1a1a'
            document.querySelector('.swal2-popup').style.color = 'white'

            document.querySelector('.swal2-success-circular-line-left').style.background = '#1b1a1a'
            document.querySelector('.swal2-success-circular-line-left').style.color = '#white'
            document.querySelector('.swal2-success-circular-line-right').style.background = '#1b1a1a'
            document.querySelector('.swal2-success-circular-line-right').style.color = '#white'
            document.querySelector('.swal2-success-fix').style.background = '#1b1a1a'
            document.querySelector('.swal2-success-fix').style.color = '#white'
            console.log('Data saved and signing off')

            //   datasaver()
            setTimeout(() => {
            auth.signOut();

            location = '../../../index.html'
        }, 2400);
        } else if (result.isDenied) {
            Swal.fire(
                'Data not Saved & Signing off!',
                ' ',
                'info'
              )
              console.log('Data not saved and signing off')
            document.querySelector('.swal2-popup').style.background = '#1b1a1a'
            document.querySelector('.swal2-popup').style.color = 'white'

            
            
            setTimeout(() => {
            auth.signOut();

            location = '../../../index.html'
            popup('Taking to Home Page in a while')


        }, 963);
        }
      })

      document.querySelector('.swal2-popup').style.background = '#1b1a1a'
      document.querySelector('.swal2-popup').style.color = 'white'
    
    
}

function uploaderImage() {
    const ref = firebase.storage().ref();
    const file = document.querySelector(".uploadImage").files[0];
    const name = +new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
          const img = document.querySelector('.home__img')
          img.setAttribute('src', `${url}`)
          document.getElementById("image-perfil").src = url;
        //   document.querySelector(".home__img-creator").src = url;
          
          document.querySelector(".home__img").src = url;
        console.log(url);
      })
      .catch(err => {

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 4500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'info',
            title: `${err.message}`
          })
          document.querySelector('.swal2-popup').style.background = '#1b1a1a'
            document.querySelector('.swal2-popup').style.color = 'white'
            document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
    })
}
document.querySelector('.logout').addEventListener('click', logout)


function datasaver(){
    let uploadImage = document.querySelector('.uploadImage').files[0]
    
    let enteredName = document.querySelector('#home__title-creator').value
    let enteredProfession = document.querySelector('#home__profession-creator').value
    let enteredAddress = document.querySelector('#home__information-address-creator').value
    let enteredEmail = document.querySelector('#home__information-email-creator').value
    let enteredNumber = document.querySelector('#home__information-number-creator').value
    let enteredLinkedin = document.querySelector('#linkedin__text').value
    let enteredFacebook = document.querySelector('#facebook__text').value
    let enteredInstagram = document.querySelector('#instagram__text').value
    let enteredTwitter = document.querySelector('#twitter__text').value
    let enteredBio = document.querySelector('#profile__description-creator').value
    
    let educationTitle = []
    let eductaionInstitute = []
    let enteredEducationtitle = document.querySelectorAll('.education__title-creator')
    enteredEducationtitle.forEach(eductaion => {
        educationTitle.push(eductaion.value)
    })
    
    let enteredEducationName = document.querySelectorAll('.education__studies-creator')
    enteredEducationName.forEach(eductaion => {
        eductaionInstitute.push(eductaion.value)
    })

    
    let enteredEducationYear = document.querySelectorAll('.education__year-creator')
    let educationYear = []
    enteredEducationYear.forEach(eductaion => {
        educationYear.push(eductaion.value)
    })

    let experienceTitle = []
    let experienceLink = []
    let experienceinfo = []
    let enteredExperienceTitle = document.querySelectorAll('.experience__title-creator')
    let enteredExperienceLink = document.querySelectorAll('.experience__company-creator-time')
    let enteredExperienceinfo = document.querySelectorAll('.experience__description-creator')

    enteredExperienceTitle.forEach(experience => {
        experienceTitle.push(experience.value)
    })
    enteredExperienceLink.forEach(experience => {
        experienceLink.push(experience.value)
    })
    enteredExperienceinfo.forEach(experience => {
        experienceinfo.push(experience.value)
    })


    let certificateTitle = []
    let certificateLink = []
    let certifcateInfo = []

    let enteredCertificateTitle = document.querySelectorAll('.certificate__title-creator')
    let enteredCertificateLink = document.querySelectorAll('.certificate-link-creator')
    let enteredCertificateinfo = document.querySelectorAll('.certificate__description-creator')

    enteredCertificateTitle.forEach(certificate => {
        certificateTitle.push(certificate.value)
    })

    enteredCertificateLink.forEach(certificate => {
        certificateLink.push(certificate.value)
    })


    enteredCertificateinfo.forEach(certificate => {
        certifcateInfo.push(certificate.value)
    })

    let referencesPost = []
    let referencesName = []
    let referencesNumber = []
    let referencesEmail = []
    
    let enteredReferencesPost = document.querySelectorAll('.references__post-creator')
    let enteredReferencesName = document.querySelectorAll('.references__title-creator')
    let enteredReferencesNumber = document.querySelectorAll('.references__number-creator')
    let enteredReferencesEamil = document.querySelectorAll('.references__email-creator')

    enteredReferencesPost.forEach(references => {
        referencesPost.push(references.value)
    })

    enteredReferencesName.forEach(references => {
        referencesName.push(references.value)
    })

    enteredReferencesNumber.forEach(references => {
        referencesNumber.push(references.value)
    })

    enteredReferencesEamil.forEach(references => {
        referencesEmail.push(references.value)
    })


    let languageTitle = []
    let intrestTitle = []
    let skillsTitle = []

    let enteredLangugaeTitle = document.querySelectorAll('.languages__creator')
    let enteredSkillsTitle = document.querySelectorAll('.skills__creator')
    let enteredIntrestsTitle = document.querySelectorAll('.interest__name-creator')

    enteredLangugaeTitle.forEach(langugae => {
        languageTitle.push(langugae.value)
    })

    enteredSkillsTitle.forEach(skill => [
        skillsTitle.push(skill.value)
    ])

    enteredIntrestsTitle.forEach(intrest => {
        intrestTitle.push(intrest.value)
    })

   

    let url =  myImage;
    if(url === undefined){
        url = document.querySelector(".home__img").src
    }


    auth.onAuthStateChanged(user => {
        if(user){
            let name = user.uid + "_" + 963;
             
            // uploaderImage()
            fs.collection(user.uid).doc('_' + 963).set({
                
                name,
                enteredName,
                enteredProfession,
                enteredEmail,
                enteredAddress,
                enteredNumber,
                enteredLinkedin,
                enteredFacebook,
                enteredInstagram,
                enteredTwitter,
                enteredBio,
               url,
                educationTitle,
                educationYear,
                eductaionInstitute,
                experienceTitle,
                experienceLink,
                experienceinfo,
                certificateTitle,
                certificateLink,
                certifcateInfo,
                referencesPost,
                referencesName,
                referencesNumber,
                referencesEmail,
                languageTitle,
                skillsTitle,
                intrestTitle





            
            }).then(() => {

                
        

            }).catch(err => {
                console.log(err.message)
                console.log('Fail To Create User')
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 4500,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              Toast.fire({
                icon: 'info',
                title: `${err.message}`
              })

              document.querySelector('.swal2-popup').style.background = '#1b1a1a'
            document.querySelector('.swal2-popup').style.color = 'white'
            document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
            })

            fs.collection(user.uid).doc('_963').get().then(snapshot => {
                if(snapshot.data() != undefined){
                    if(snapshot.data().url === ""){
                    const ref = firebase.storage().ref();
                    const file = document.querySelector(".uploadImage").files[0];
                    
                    const metadata = {
                    contentType: file.type
                    };
                    const task = ref.child(name).put(file, metadata);
                    task
                    .then(snapshot => snapshot.ref.getDownloadURL())
                    .then(url => {

        
                        fs.collection(user.uid).doc('_' + 963).update({
                            
                        url
                        
        
                        })
                        const img = document.querySelector('.home__img')
                        img.setAttribute('src', `${url}`)
                        document.getElementById("image-perfil").src = url;
                        // document.querySelector(".home__img-creator").src = url;

                      
          
                        document.querySelector(".home__img").src = url;
                        
                        console.log(url);


                    })
                }
            }
            console.log('Data Saved')            
            }
            )
            .catch(err => {

                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 4500,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'info',
                    title: `${err.message}`
                  })
                  document.querySelector('.swal2-popup').style.background = '#1b1a1a'
                    document.querySelector('.swal2-popup').style.color = 'white'
                    document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
            })
            
                }

    })

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
        title: 'Data Successfully Saved'
      })
      document.querySelector('.swal2-popup').style.background = '#1b1a1a'
        document.querySelector('.swal2-popup').style.color = 'white'
        document.querySelector('.swal2-timer-progress-bar').style.background = '#bebcc5'
}






document.querySelector('.save').addEventListener('click', datasaver)


function renderData(userCode){
    let uploadImage = document.querySelector('#image-perfil')
    // let setImage = document.querySelector('.home__img-creator')
   
    let enteredName = document.querySelector('#home__title-creator')
    let enteredProfession = document.querySelector('#home__profession-creator')
    let enteredAddress = document.querySelector('#home__information-address-creator')
    let enteredEmail = document.querySelector('#home__information-email-creator')
    let enteredNumber = document.querySelector('#home__information-number-creator')
    let enteredLinkedin = document.querySelector('#linkedin__text')
    let enteredFacebook = document.querySelector('#facebook__text')
    let enteredInstagram = document.querySelector('#instagram__text')
    let enteredTwitter = document.querySelector('#twitter__text')
    let enteredBio = document.querySelector('#profile__description-creator')

    enteredName.value = userCode.data().enteredName
    enteredProfession.value = userCode.data().enteredProfession
    enteredAddress.value = userCode.data().enteredAddress
    enteredEmail.value = userCode.data().enteredEmail
    enteredNumber.value = userCode.data().enteredNumber
    enteredLinkedin.value = userCode.data().enteredLinkedin
    enteredFacebook.value = userCode.data().enteredFacebook
    enteredInstagram.value = userCode.data().enteredInstagram
    enteredTwitter.value = userCode.data().enteredTwitter
    enteredBio.innerText = userCode.data().enteredBio
    uploadImage.src = `${userCode.data().url}`
    // setImage.src = `${userCode.data().url}`
    document.getElementById("image-perfil").src = userCode.data().url;
    // document.querySelector(".home__img-creator").src = userCode.data().url;

    
          
    document.querySelector(".home__img").src = userCode.data().url;
    console.log(userCode.data().url)
    if(document.querySelector('.education__content-creator')){
        i = 1

    }else{
    }
    let educationheadingList = userCode.data().educationTitle
    let educationInstituteList = userCode.data().eductaionInstitute
    let educationYearList = userCode.data().educationYear
    
    let educationFilledData = document.querySelector('.education__container')
    let vis = 0
    educationFilledData.innerHTML = ""
    educationheadingList.forEach(heading => {
        educationFilledData.innerHTML += `
                            <div class="education__content new__education${i}" id="new__education">
                                                        <div class="education__time">
                                                            <span class="education__rounder"></span>
                                                            <span class="education__line"></span>
                                                        </div>
                        
                                                        <div class="education__data bd-grid">
                                                            <h3 class="education__title">
                                                                <input type="text" name="" id="education__title-creator" class="education__title-creator" placeholder="Degree Name" value = "${heading}">
                                                            </h3>
                                                            <span class="education__studies"><input type="text" name="" class="education__studies-creator" placeholder="Institute Name" value = "${educationInstituteList[vis]}"></span>
                                                            <span class="education__year"><input type="text" name="" class="education__year-creator" placeholder=" Year: 20XX-20XX" value = "${educationYearList[vis]}"></span>
                                                        </div>
                                                        
                                         
        
        `
    
        vis = vis+ 1;
        i++


    })
    

    if(document.querySelector('.experience__content-creator')){
        j = 1

    }else{
    }

    let experienceheadingList = userCode.data().experienceTitle
    let experienceLinkList = userCode.data().experienceLink
    let experienceinfoList = userCode.data().experienceinfo

    let experienceFilledData = document.querySelector('.experience__container')
    let expinfo = 0
    experienceFilledData.innerHTML = ""
    experienceheadingList.forEach(heading => {
        experienceFilledData.innerHTML += `
                    <div class="experience__content new__experience${j}" id = "new__experience">
                    <div class="experience__time">
                        <span class="experience__rounder"></span>
                        <span class="experience__line"></span>
                    </div>

                    <div class="experience__data bd-grid">
                        <h3 class="experience__title"><input type="text" name="" class="experience__title-creator" id="" placeholder="Project Title" value = "${heading}"></h3>
                        <span class="experience__company"><input type="text" name="" class="experience__company-creator-time" id="" placeholder="Project's Live Link" value = "${experienceLinkList[expinfo]}"> </span>
                        <p class="experience__description"><input type="text" name="" class="experience__description-creator" id="" placeholder="Some Details about this Projects" value = "${experienceinfoList[expinfo]}"></p>

                    </div>
                </div>
                        
        `

        expinfo = expinfo +1
        j++
    })

    if(document.querySelector('.certificate__content-creator')){
        n = 1

    }else{
    }

    let certificateheadingList = userCode.data().certificateTitle
    let certificateLinkList = userCode.data().certificateLink
    let certifcateInfoList = userCode.data().certifcateInfo

    let certificateFilledData = document.querySelector('.certificate__container')

    certificateFilledData.innerHTML = ""
    let certiinfo = 0
    certificateheadingList.forEach(heading => {
        certificateFilledData.innerHTML += `
        
        <div class="certificate__content new__certificate${n}" id = "new__certificate">
                                <h3 class="certficiate__title">
    
                                    <input type="text" name="" id="" class="certificate__title-creator" placeholder="Certifcate Title" value = "${heading}">
                                    <br>
                                    <input type="text" name="" id="" class="certificate-link-creator" placeholder="Certificate Valid Link" value = "${certificateLinkList[certiinfo]}">
    
                                </h3>
                                <p class="certificate__description">
                                    <input type="text" class="certificate__description-creator" name="" id="" placeholder="Tell Something about the Certificate" value = "${certifcateInfoList[certiinfo]}">
                                </p>
                            </div>
        
        `

    certiinfo = certiinfo + 1
    n++
    })


    if(document.querySelector('.references__content-creator')){
        x = 1

    }else{
    }
    let referencesPostLsist = userCode.data().referencesPost
    let referencesEmailList = userCode.data().referencesEmail
    let referencesNameList = userCode.data().referencesName
    let referencesNumberList = userCode.data().referencesNumber

    let referencesFilledData = document.querySelector('.references__container')
    let refinfo = 0
    referencesFilledData.innerHTML = ""
    referencesPostLsist.forEach(post => {
        referencesFilledData.innerHTML += `

                        <div class="references__content new__references${x}" id = "new__references">
                        <span class="references__subtitle">
                            <input type="text" name="" id="" class="references__post-creator" placeholder="Enter Post" value = "${post}">
                        </span>
                        <h3 class="references__title"><input type="text" class="references__title-creator" placeholder="Enter Name" value = "${referencesNameList[refinfo]}"></h3>
                        <ul class="references__contact">
                            <li><input type="text" name="" id="" class="references__number-creator" placeholder="Enter Number" value = "${referencesNumberList[refinfo]}"></li>
                            <li><input type="email" name="" id="" class="references__email-creator" placeholder="Enter Email" value = "${referencesEmailList[refinfo]}"></li>
                        </ul>
                    </div>
                                        
        `

        refinfo = refinfo + 1
        x++ 
    })

    if(document.querySelector('.languages__name-creator')){
        b = 1
    }else{

    }

    let languageTitleList = userCode.data().languageTitle
    let langugaeFilledData = document.querySelector('.languages__content-creator')
    // let langInfo = 0
    langugaeFilledData.innerHTML = ""

    languageTitleList.forEach(title => {
        langugaeFilledData.innerHTML += `
        
                            <li class="languages__name new__language${b}" id = "new__language">
                            <span class="languages__circle"></span> <input type="text" name="" id="" class="languages__creator" placeholder="Enter Language Name" value = "${title}">
                        </li>
        
        `
        b++
        
    })


    if(document.querySelector('.interesets__content-creator')){
        r = 1
    }else{

    }

    let intrestTitleList = userCode.data().intrestTitle
    let intrestFilledData = document.querySelector('.interests__container-creator')
    // let langInfo = 0
    intrestFilledData.innerHTML = ""

    intrestTitleList.forEach(title => {
        intrestFilledData.innerHTML += `
        
                            <div class="interesets__content new__intrest${r}" id = "new__intrest">
                            <i class="ri-star-line"></i>
                            <span class="interests__name"><input type="text" name="" id="" class="interest__name-creator" placeholder="Enter Skills" value = "${title}"></span>
                        </div>
        
        `
        r++
        
    })


    if(document.querySelector('.skills__name-creator')){
        k = 1
    }else{

    }

    let skillsTitleList = userCode.data().skillsTitle
    let skillsFilledData = document.querySelector('.skills__data')
    // let langInfo = 0
    skillsFilledData.innerHTML = ""

    skillsTitleList.forEach(title => {
        skillsFilledData.innerHTML += `
        
                            <li class="skills__name new__skills${k}" id = "new__skills">
                            <span class="skills__circle"></span> <input type="text" name="" id="" class="skills__creator" placeholder="Enter Interest" value = "${title}">
                        </li>
        
        `
        k++
        
    })


}

function displayContent(){
    auth.onAuthStateChanged(user => {
        if(user){
            fs.collection(user.uid).onSnapshot((snapshot) => {
                let changes = snapshot.docChanges()
                changes.forEach(change => {
                    if(change.type === 'added'){
                        renderData(change.doc)
                    }else if(change.type === 'removed'){
                        console.log('Developer Call')
                    }
                })
            })
        }
    })
}

displayContent()

