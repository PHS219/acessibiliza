document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init();

        const id =
            new URLSearchParams(
                location.search
            ).get("id") || "casa";

        const place =
            PLACES.find(
                (item) => item.id === id
            ) || PLACES[0];

        document.querySelector(
            "#destination"
        ).textContent = place.name;

        document
            .querySelectorAll("[data-transport]")
            .forEach((button) => {
                button.onclick = () => {
                    document
                        .querySelectorAll(
                            "[data-transport]"
                        )
                        .forEach((option) => {
                            option.classList.remove(
                                "active"
                            );
                        });

                    button.classList.add(
                        "active"
                    );

                    sessionStorage.setItem(
                        "transport",
                        button.dataset.transport
                    );
                };
            });

        document.querySelector(
            "#finish"
        ).onclick = () => {
            const state =
                Acessibiliza.get();

            Acessibiliza.update({
                history: [
                    {
                        place: place.name,
                        date: new Date().toLocaleString(
                            "pt-BR"
                        ),
                        transport:
                            sessionStorage.getItem(
                                "transport"
                            ) ||
                            "Cadeira motorizada"
                    },
                    ...state.history
                ]
            });

            location.href =
                "avaliar.html";
        };
    }
);