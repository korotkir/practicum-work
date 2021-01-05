let modalOpen = document.querySelector('.open-modal')
let parent = document.querySelector('.navbar')
let modalClose = document.querySelector('.close')

function modalWindow() {
    const modal = document.createElement('div')
    modal.classList.add('modal-overlay')
    modal.insertAdjacentHTML('afterbegin', `
            <div class="modal-window">
                <div class="modal-title"><p>Модальное окно</p><img class="close" src="img/close.svg" alt=""></div>
                <div class="modal-body"></div>
                <div class="modal-footer">
                    <button class="close btn btn-success">Закрыть</button>
                </div>
            </div>       
    `)
    console.log('click')
    document.body.insertBefore(modal, parent)
    return modal
}

let modal = {
    open() {
        return modalWindow()
    },
    close() {
        let element = document.querySelector('.modal-overlay')
        element.parentNode.removeChild(element)
    }
}

modalOpen.addEventListener('click', modal.open)
modalClose.addEventListener('click', modal.close)


