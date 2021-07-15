document.addEventListener('DOMContentLoaded', eve => {
//  ====================
// |  Page Navigation   |
//  ====================
  document.querySelectorAll('.nav').forEach(spaner => {
    spaner.addEventListener('click', evn => {
      document.querySelectorAll('.section').forEach(section => {
        if (section.id.includes(spaner.getAttribute('href'))) {
          window.open(`#${spaner.getAttribute('href')}`, '_self')
        }
      })
    })
  })

//  ====================
// |  Show Less Button  |
//  ====================


  // let showMore = document.getElementById('show')
  // showMore.addEventListener('click', () => {
  //   if (showMore.textContent === 'Show Less') {
  //     showMore.textContent = 'Show More'
  //     document.getElementById('moreGit').className = 'more-invisible'
  //   } else {
  //     showMore.textContent = 'Show Less'
  //     document.getElementById('moreGit').className = 'more-visible'
  //   }
  // })

//  ====================
// |   GitHub & Live    |
//  ====================


document.querySelectorAll('.linkSites').forEach(spaner => {
  spaner.addEventListener('click', () => {
        window.open(spaner.getAttribute('href'), '_blank')
  })
})


//  ====================
// |  Skills Selection  |
//  ====================

  let optionSelected = document.getElementById('option-selected')
  optionSelected.addEventListener('change', () => {
    document.querySelectorAll('.icon').forEach(icon => {
      if (optionSelected.value === 'All') {
        icon.classList.remove('invisible')
        icon.classList.remove('visible')
      } else if (optionSelected.value === icon.classList[1]) {
        icon.classList.remove('invisible')
        icon.classList.add('visible')
      } else {
        icon.classList.add('invisible')
        icon.classList.remove('visible')
      }
    })
  })

//  ====================
// |  Footer Contact    |
//  ====================

document.querySelectorAll('.footer-elem').forEach(contact => {
  contact.addEventListener('click', () => {
    window.open(contact.getAttribute('href'), '_blank')
  })
})
})


document.querySelector("#contact-button").addEventListener('click',()=>{ 
  window.open("#footer", '_self')
})
