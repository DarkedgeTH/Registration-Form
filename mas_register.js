/* global sessionStorage */
'use strict'

const sessionBox = document.getElementById('sessionBox')
const regForm = document.getElementById('regForm')
const mediaCB = document.getElementById('mediaCB')

/**
 * Bind event listeners to form elements
 */
window.addEventListener('load', function () {
  calcCart()
  document.getElementById('regSubmit').onclick = sessionTest
  document.getElementById('fnBox').onblur = calcCart
  document.getElementById('lnBox').onblur = calcCart
  document.getElementById('groupBox').onblur = calcCart
  document.getElementById('mailBox').onblur = calcCart
  document.getElementById('phoneBox').onblur = calcCart
  document.getElementById('banquetBox').onblur = calcCart
  document.getElementById('sessionBox').onchange = calcCart
  document.getElementById('mediaCB').onclick = calcCart
})

/**
 * Performs a validation test on the selection of the conference
 * session package and the conference discount number
 */
function sessionTest () {
  if (sessionBox.selectedIndex === -1) {
    sessionBox.setCustomValidity('Select a Session Package')
  } else {
    sessionBox.setCustomValidity('')
  }
}

/**
 * Calculates the cost of the registration and saves data
 * in session storage
 */
function calcCart () {
  sessionStorage.confName = regForm.elements.firstName.value + ' ' + regForm.elements.lastName.value
  sessionStorage.confGroup = regForm.elements.group.value
  sessionStorage.confMail = regForm.elements.email.value
  sessionStorage.confPhone = regForm.elements.phoneNumber.value
  sessionStorage.confBanquet = regForm.elements.banquetGuests.value
  sessionStorage.confBanquetCost = regForm.elements.banquetGuests.value * 55
  if (sessionBox.selectedIndex !== -1) {
    sessionStorage.confSession = regForm.elements.sessionBox.options[regForm.elements.sessionBox.selectedIndex].text
    sessionStorage.confSessionCost = regForm.elements.sessionBox.options[regForm.elements.sessionBox.selectedIndex].value
  } else {
    sessionStorage.confSession = ''
    sessionStorage.confSessionCost = 0
  }
  if (mediaCB.checked) {
    sessionStorage.confPack = 'yes'
    sessionStorage.confPackCost = 115
  } else {
    sessionStorage.confPack = 'no'
    sessionStorage.confPackCost = 0
  }
  sessionStorage.confTotal = parseFloat(sessionStorage.confSessionCost) + parseFloat(sessionStorage.confBanquetCost) + parseFloat(sessionStorage.confPackCost)
  writeSessionValues()
}

/**
 * Writes data values from session storage in to the
 * registration summary form
 */
function writeSessionValues () {
  document.getElementById('regName').innerHTML = sessionStorage.confName
  document.getElementById('regGroup').innerHTML = sessionStorage.confGroup
  document.getElementById('regEmail').innerHTML = sessionStorage.confMail
  document.getElementById('regPhone').innerHTML = sessionStorage.confPhone
  document.getElementById('regSession').innerHTML = sessionStorage.confSession
  document.getElementById('regBanquet').innerHTML = sessionStorage.confBanquet
  document.getElementById('regPack').innerHTML = sessionStorage.confPack
  document.getElementById('regTotal').innerHTML = sessionStorage.confTotal
}
