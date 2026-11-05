window.PLACES = [
    {
        id: "casa",
        name: "Casa Girassol",
        category: "Restaurante",
        type: "Restaurante brasileiro",
        distance: "650 m",
        rating: 4.9,
        match: 98,
        icon: "🍴",
        visual: "",
        features: [
            "Entrada plana",
            "Cardápio visual",
            "Banheiro acessível",
            "Equipe preparada"
        ]
    },
    {
        id: "bistro",
        name: "Bistrô do Parque",
        category: "Restaurante",
        type: "Cozinha contemporânea",
        distance: "1,2 km",
        rating: 4.8,
        match: 94,
        icon: "🌿",
        visual: "green",
        features: [
            "Entrada plana",
            "Banheiro acessível",
            "Ambiente silencioso"
        ]
    },
    {
        id: "museu",
        name: "Museu Inclusivo",
        category: "Cultura",
        type: "Museu e centro cultural",
        distance: "1,6 km",
        rating: 4.8,
        match: 92,
        icon: "🏛",
        visual: "blue",
        features: [
            "Audiodescrição",
            "Piso tátil",
            "Elevador",
            "Banheiro acessível"
        ]
    },
    {
        id: "parque",
        name: "Parque Augusta",
        category: "Parque",
        type: "Parque urbano",
        distance: "1,8 km",
        rating: 4.7,
        match: 91,
        icon: "🌳",
        visual: "green",
        features: [
            "Caminho nivelado",
            "Área tranquila",
            "Banheiro acessível"
        ]
    }
];

window.placeCard = (place) => `
    <article class="card place-card">
        <div class="place-image ${place.visual}">
            <span>${place.icon}</span>

            <button
                class="icon-btn favorite"
                data-favorite="${place.id}"
                aria-label="Favoritar ${place.name}"
            >
                ♡
            </button>
        </div>

        <div class="place-body">
            <div class="place-title">
                <div>
                    <h3>${place.name}</h3>

                    <p>
                        ${place.type} · ${place.distance}
                    </p>
                </div>

                <span class="score">
                    ★ ${place.rating}
                </span>
            </div>

            <span
                class="badge"
                style="margin-top: 12px"
            >
                ${place.match}% compatível
            </span>

            <div class="pills">
                ${place.features
                    .slice(0, 3)
                    .map(
                        (feature) => `
                            <span>
                                ✓ ${feature}
                            </span>
                        `
                    )
                    .join("")}
            </div>

<a href="detalhes.html?id=${place.id}" class="btn btn-details">
                Ver detalhes
            </a>
        </div>
    </article>
`;