// import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

// TEMPLATE MODAL WINDOWS
export function showModalWindowSuccess(message) {
  Swal.fire({
    position: "center",
    showConfirmButton: true,
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
}

export function showModalWindowError(message) {
  Swal.fire({
    icon: "error",
    confirmButtonColor: "#333333",
    title: `${message}`,
  });
}
