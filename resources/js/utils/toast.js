import Swal from "sweetalert2";

const Toast = Swal.mixin({
    toast: true,
    iconColor: "white",
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
    position: "top-end",
    color: "white",
});

export const showToast = (title, icon = "success", background= "#2e8b57") => {
    (async () => {
        await Toast.fire({
            icon: icon,
            title: title,
            background: background,
        });
    })();
};
