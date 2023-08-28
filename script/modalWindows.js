// TEMPLATE MODAL WINDOWS
function showModalWindowSuccess(message) {
  Swal.fire({
    position: "center",
    showConfirmButton: true,
    icon: "success",
    title: `${message}`,
    showConfirmButton: false,
    timer: 1500,
  });
}

function showModalWindowError(message) {
  Swal.fire({
    icon: "error",
    confirmButtonColor: "#333333",
    title: `${message}`,
  });
}
