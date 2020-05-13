(function() {
      'use strict'

      window.onload = () => {

        let text_container = document.querySelector('.text-container')
        let current_text_string = 0 // das wird quasi als index für den text_array benutzt.

        let text_array = [ // muss wegen der asynchronen update_text Funktion früher als die Funktion selbst initialisert werden
          'Hello', 'Hallo', 'Merhaba', 'Ciao']//, 'sweet', 'und', 'sexy', 'und', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🦝', '🐻', '🐼', '🦘', '🦡', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙈', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🦆', '🦢', '🦅', '🦉', '🦚', '🦜', '🦇', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🦋', '🐌', '🐚', '🐞', '🐜', '🦗', '🕷', '🕸', '🦂', '🦟', '🦠', '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦀', '🐡', '🐠', '🐟', '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🐘', '🦏', '🦛', '🐪', '🐫', '🦙', '🦒', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐', '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🦔', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌺', '🌸', '🌼', '🌻', '🌞', '🌝', '🌛', '🌜', '🌚'
        

        let update_text = async () => {
          text_container.innerHTML = text_array[current_text_string]

          if (current_text_string <= text_array.length - 1) {
              current_text_string = current_text_string + 1 // erhöht den index vom text_array um 1, solange man nicht am Ende des text_array ist.
          } else {
            current_text_string = 0 // wenn am Ende, dann wieder von vorn.
          }
        }

        let fade_in = async () => {
          text_container.style.opacity = 1
          text_container.style.transform = 'translateY(0)'
        }

        let fade_out = async () => {
          // mit dem fade_out 1500ms warten, dass man den Text lesen kann.
          setTimeout(() => {
            text_container.style.opacity = 0
            text_container.style.transform = 'translateY(0.25em)'
          }, 1500)
        }

        setInterval(() => {
          update_text().then(fade_in).then(fade_out) // erklärt sich glaub ich von selbst.
        }, 2000) // 2000ms ist die länge für einen ganzen Durchgang: fade_in (dauert laut der css transition 250ms) und fade_out wartet 1500ms und braucht dann noch 250ms für die Animation. Also 250ms + 1500ms + 250ms = 2000ms.

      }

    })()
