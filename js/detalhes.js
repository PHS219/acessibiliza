document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init("explorar");

        const id =
            new URLSearchParams(
                location.search
            ).get("id") || "casa";

        const place =
            PLACES.find(
                (item) => item.id === id
            ) || PLACES[0];

        const visual =
            document.querySelector("#visual");

        const name =
            document.querySelector("#name");

        const meta =
            document.querySelector("#meta");

        const score =
            document.querySelector("#score");

        const features =
            document.querySelector("#features");

        const routeLink =
            document.querySelector("#goRoute");

        visual.className =
            "card detail-visual " +
            place.visual;

        visual.textContent =
            place.icon;

        name.textContent =
            place.name;

        meta.textContent =
            place.type +
            " · " +
            place.distance;

        score.textContent =
            "★ " +
            place.rating;

        features.innerHTML =
            place.features
                .map(
                    (feature) => `
                        <div class="access-item">
                            <strong>
                                ✓ ${feature}
                            </strong>

                            <p class="muted">
                                Confirmado pela comunidade
                            </p>
                        </div>
                    `
                )
                .join("");

        routeLink.href =
            "rota.html?id=" +
            place.id;
    }
);