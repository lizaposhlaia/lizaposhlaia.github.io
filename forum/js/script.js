if (document.querySelector('#bth-modal') !== null) {

    const modalBth = document.querySelectorAll('.bth-modal');
    const modalBody = document.querySelectorAll('.body-modal');
    const body = document.querySelector('body');
    const modalBodyClose = document.querySelectorAll('.body-close-modal');

   //console.log(modalBody[0].attributes.data.value);

    //console.log(document.querySelectorAll('*[data]'));

    modalBth.forEach(elModalBth => {
        elModalBth.addEventListener("click", function (e) {
            //console.log(e.target.attributes.data.value);

            modalBody.forEach(elModalBody => {
                if (elModalBody.attributes.data.value == e.target.attributes.data.value) {
                    if (elModalBody.classList.contains('modal-active')) {
                        closeModal(elModalBody);
                        checkActivModalBth(e.target.attributes.data.value);
                    }
                    else {
                        openModal(elModalBody);
                        checkActivModalBth(e.target.attributes.data.value);
                    }
                }
            })
        })
    })
    
    modalBodyClose.forEach(modalBodyClose => {
        modalBodyClose.addEventListener("click", function (e) {
            //console.log(e.target.attributes.data.value);

            modalBody.forEach(modalBody => {
                if (modalBody.attributes.data.value == e.target.attributes.data.value) {
                    if (modalBody.classList.contains('modal-active')) {
                        closeModal(modalBody);
                        checkActivModalBth(e.target.attributes.data.value);
                    }
                }
            })
        })
    })

    function checkActivModalBth(attr) {
        console.log(attr, modalBth);
        modalBth.forEach(el => {
            if (el.attributes.data.value == attr) {
                if (el.classList.contains('modal-active')) el.classList.remove('modal-active');
                else el.classList.add('modal-active');
            }
        });
    }
    
    function openModal(modalBody) {
        modalBody.classList.add('modal-active');
        //body.classList.add('_lock');
    }
    
    function closeModal(modalBody) {
        modalBody.classList.remove('modal-active');
        //body.classList.remove('_lock');
    }
    

}


