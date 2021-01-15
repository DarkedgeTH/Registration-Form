/* global sessionStorage */
'use strict'

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

// Writes session values on load
window.addEventListener('load', writeSessionValues)
