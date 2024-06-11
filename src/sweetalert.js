import Swal from "sweetalert2"

const popup = (titleText, text, showCancelButton = true, callback = null) => Swal.fire({
    titleText, text, showCancelButton
}).then(res => res.isConfirmed && callback && callback())

export default popup