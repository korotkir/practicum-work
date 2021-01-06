let modalOpen = document.querySelector('.open-modal')
let parent = document.querySelector('.navbar')

function modalParam() {
    if(param.iconClose === false) {
        document.querySelector('.close').remove()
    }
    return modal
}

function modalWindow() {
    const modal = document.createElement('div')
    modal.classList.add('modal-overlay')
    modal.insertAdjacentHTML('afterbegin', `
            <div style="width: ${param.width}; height: ${param.height}" class="modal-window animate__animated animate__backInDown">
                <div class="modal-title"><p><b>${param.title}</b></p><img class="close" src="img/close.svg" alt="" data-close="true"></div>
                <div class="modal-body"><p>${param.content}</p></div>
                <div class="modal-footer">
                    <button class=" btn btn-${param.button}" data-close="true">Закрыть</button>
                </div>
            </div> 
    `)
    document.body.insertBefore(modal, parent)
    modal.setAttribute('data-close', true)
    modal.addEventListener('click', listener)

    return modalParam()
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



