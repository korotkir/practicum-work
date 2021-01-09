let modalOpen = document.getElementById('btn-open-modal')
let parent = document.querySelector('.navbar')

function modalParam() {
    if(modalSettings.iconClose === false) {
        document.querySelector('.close').remove()
    }
}

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
    document.body.insertBefore(modal, parent)
    modal.setAttribute('data-close', true)
    modal.addEventListener('click', listener)

    modalParam()
    return modal
}

let modalAction = {
    open() {
        return modalWindow()
    },
    close() {
        document.querySelector('.modal-overlay').remove()
    }
}

let listener = event => {
    if (event.target.dataset.close) {
        modalAction.close()
    }
}


modalOpen.addEventListener('click', modalAction.open)



