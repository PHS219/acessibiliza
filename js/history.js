document.addEventListener(
    "DOMContentLoaded",
    () => {
        Acessibiliza.init("historico");

        const history =
            Acessibiliza.get().history;

        const defaults = [
            {
                place: "Casa Girassol",
                date: "Hoje, 10:24",
                transport: "Cadeira motorizada"
            },
            {
                place: "Parque Augusta",
                date: "Ontem, 16:40",
                transport: "Caminhada"
            }
        ];

        const timeline =
            document.querySelector("#timeline");

        timeline.innerHTML = (
            history.length
                ? history
                : defaults
        )
            .map(
                (item) => `
                    <article class="card pad">
                        <span class="badge">
                            ${item.transport}
                        </span>

                        <h2>
                            ${item.place}
                        </h2>

                        <p class="muted">
                            ${item.date}
                        </p>
                    </article>
                `
            )
            .join("");
    }
);