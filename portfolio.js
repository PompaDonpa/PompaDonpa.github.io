// Suggestion: Use <a> tags with the href and target attributes for your links -
// the default behavior works the same way your custom click listeners work!

document.addEventListener('DOMContentLoaded', eve => {
//  ====================
// |  Page Navigation   |
//  ====================
  document.querySelectorAll('.nav').forEach(spaner => {
    spaner.addEventListener('click', evn => {
      // I think you can simplify this! Instead of using querySelectorAll,
      // could you use querySelector to grab only the section you need?
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

  // Because you use #moreGit multiple times in the event listener,
  // I'd recommend storing the DOM element itself instead of just its innerHTML
  // That way, you don't have to use document.getElementById so many times.
  const moreMore = document.getElementById('moreGit').innerHTML

  let showMore = document.getElementById('show')
  showMore.addEventListener('click', () => { 
    if (showMore.textContent === 'Show Less') {
      showMore.textContent = 'Show More'
      document.getElementById('moreGit').innerHTML = ''
      // Hmmm... does the line below this do anything? .setAttribute() is a method, not a property!
      document.getElementById('moreGit').setAttribute = ('display', 'grid')
      // Remove console logs before publishing!
      console.log(document.getElementById('moreGit').attributes)
    } else {
      showMore.textContent = 'Show Less'
      document.getElementById('moreGit').innerHTML = moreMore
    }
  })

//  ====================
// |   GitHub & Live    |
//  ====================

  // Don't Repeat Yourself! You could define a single click handler function that you use for
  // each listener!
  
  let linkSnowman = document.getElementById('linkSnowman')
  linkSnowman.addEventListener('click', () => {
    let location = linkSnowman.getAttribute('href')
    window.open(location, '_blank')
  })

  let linkTrader = document.getElementById('linkTrader')
  linkTrader.addEventListener('click', () => {
    let location = linkTrader.getAttribute('href')
    window.open(location, '_blank')
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

// Potential additions: functionality for the .navigator button!
