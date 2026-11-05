document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init("ranking");

        document.querySelector("#ranking").innerHTML = [
            ...PLACES
        ]
            .sort(
                (placeA, placeB) =>
                    placeB.rating - placeA.rating
            )
            .map(placeCard)
            .join("");
    }
);