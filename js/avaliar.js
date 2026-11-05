document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init();

        let rating = 0;

        document
            .querySelectorAll(".star")
            .forEach((button, index) => {
                button.onclick = () => {
                    rating = index + 1;

                    document
                        .querySelectorAll(".star")
                        .forEach((star, starIndex) => {
                            star.classList.toggle(
                                "active",
                                starIndex < rating
                            );
                        });
                };
            });

        document.querySelector("#review").onsubmit = (event) => {
            event.preventDefault();

            if (!rating) {
                return Acessibiliza.toast(
                    "Selecione uma nota"
                );
            }

            Acessibiliza.toast(
                "Avaliação publicada"
            );

            setTimeout(
                () => {
                    location.href = "../index.html";
                },
                500
            );
        };
    }
);