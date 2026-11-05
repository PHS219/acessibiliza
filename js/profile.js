document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init("perfil");

        const state = Acessibiliza.get();

        const darkInput =
            document.querySelector("#dark");

        const contrastInput =
            document.querySelector("#contrast");

        const clearButton =
            document.querySelector("#clear");

        darkInput.checked =
            state.dark;

        contrastInput.checked =
            state.contrast;

        darkInput.onchange = (event) => {
            Acessibiliza.update({
                dark: event.target.checked
            });
        };

        contrastInput.onchange = (event) => {
            Acessibiliza.update({
                contrast: event.target.checked
            });
        };

        clearButton.onclick = () => {
            localStorage.removeItem(
                Acessibiliza.key
            );

            location.reload();
        };
    }
);