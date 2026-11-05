document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init("explorar");

        let selected = [];

        const q =
            document.querySelector("#q");

        const results =
            document.querySelector("#results");

        const count =
            document.querySelector("#count");

        function render() {
            const term =
                q.value.toLowerCase();

            const list = PLACES.filter((place) => {
                const searchableText = (
                    place.name +
                    " " +
                    place.category +
                    " " +
                    place.type +
                    " " +
                    place.features.join(" ")
                ).toLowerCase();

                const matchesSearch =
                    searchableText.includes(term);

                const matchesFilters =
                    selected.every((filter) =>
                        place.features.includes(filter)
                    );

                return matchesSearch && matchesFilters;
            });

            count.textContent =
                list.length +
                " locais encontrados";

            results.innerHTML = list.length
                ? list
                    .map(placeCard)
                    .join("")
                : `
                    <div class="card pad">
                        <h2>Nenhum resultado</h2>

                        <p class="muted">
                            Altere a busca ou os filtros.
                        </p>
                    </div>
                `;

            Acessibiliza.init("explorar");
        }

        q.oninput = render;

        document
            .querySelectorAll("[data-filter]")
            .forEach((input) => {
                input.onchange = () => {
                    selected = [
                        ...document.querySelectorAll(
                            "[data-filter]:checked"
                        )
                    ].map((filter) => filter.value);

                    render();
                };
            });

        render();
    }
);