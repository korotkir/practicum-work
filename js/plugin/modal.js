let modalOpen = document.querySelector('.open-modal')
let parent = document.querySelector('.navbar')

function modalWindow() {
    const modal = document.createElement('div')
    modal.classList.add('modal-overlay')
    modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-window">
                <div class="modal-title"><p>Модальное окно</p><img class="close" src="img/close.svg" alt="" data-close="true"></div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button class=" btn btn-success" data-close="true">Закрыть</button>
                </div>
            </div> 
    `)
    document.body.insertBefore(modal, parent)
    modal.setAttribute('data-close', true)
    modal.addEventListener('click', listener)

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



