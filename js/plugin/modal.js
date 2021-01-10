// Modal window plugin

let parentModal = document.querySelector('.navbar')
let afterButton = document.querySelector('.down')
let parentButton = document.querySelector('.center-window')


// Сalls the call button of the modal window
function modalButton() {
        const button = document.createElement('button')
        button.id = 'btn-open-modal'
        button.classList.add('btn','btn-primary','btn-lg')
        button.innerHTML = 'Информация'
        parentButton.insertBefore(button, afterButton)
        return button
}

// Return Modal window
function modalWindow() {
    const modal = document.createElement('div')
    modal.classList.add('modal-overlay')
    modal.insertAdjacentHTML('afterbegin', `
            <div style="width: ${modalSettings.width}; height: ${modalSettings.height}" class="modal-window animate__animated animate__backInDown">
                <div class="modal-title"><p><b>${modalSettings.title}</b></p><img class="close" src="img/close.svg" alt="" data-close="true"></div>
                <div class="modal-body"><p>${modalSettings.content}</p></div>
                <div class="modal-footer">
                    <button class=" btn btn-${modalSettings.button}" data-close="true">Закрыть</button>
                </div>
            </div> 
    `)
    document.body.insertBefore(modal, parentModal)
    modal.setAttribute('data-close', true)
    modal.addEventListener('click', listener)

    iconClose()
    return modal
}

// Settings block

// Working
function working() {
    if (modalSettings.working === true) {
        modalButton().addEventListener('click', modalAction.open)
    }
}

// Opening and closing
let modalAction = {
    open() {
        return modalWindow()
    },
    close() {
        document.querySelector('.modal-overlay').remove()
    }
}

// Closing by attribute - "close"
let listener = event => {
    if (event.target.dataset.close) {
        modalAction.close()
    }
}

// Settings for close icon
function iconClose() {
    if(modalSettings.iconClose === false) {
        document.querySelector('.close').remove()
    }
}


working()





