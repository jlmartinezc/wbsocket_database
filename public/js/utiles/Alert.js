export class Alert {
    renderAlert ( menssage, type) {     
        const toast = `
        <div class="position-fixed bottom-0 end-0 p-3" style="z-index: 11">
            <div class="toast align-items-center text-white ${type} border-0" data-bs-delay="2500" role="alert" aria-live="assertive" aria-atomic="true">
                <div class="d-flex">
                    <div class="toast-body">${menssage}</div>
                    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
            </div>
        </div>`;

        document.getElementById('popUpMessages').innerHTML = toast;

        const toastElList = [].slice.call(document.querySelectorAll('.toast'))
        const toastList = toastElList.map((toastEl) => new bootstrap.Toast(toastEl));
        toastList.forEach(toast => toast.show()) 
    };
}