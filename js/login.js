document.addEventListener(
    "DOMContentLoaded",
    function () {
        Acessibiliza.init();

        const form =
            document.getElementById("login-form");

        const nameInput =
            document.getElementById("login-name");

        const emailInput =
            document.getElementById("login-email");

        const passwordInput =
            document.getElementById("login-password");

        const rememberInput =
            document.getElementById(
                "remember-account"
            );

        const showPasswordButton =
            document.getElementById(
                "show-password"
            );

        const googleLoginButton =
            document.getElementById(
                "google-login"
            );

        const guestLoginButton =
            document.getElementById(
                "guest-login"
            );

        const forgotPasswordButton =
            document.getElementById(
                "forgot-password"
            );

        const readPageButton =
            document.getElementById(
                "read-login-page"
            );

        const assistantStatus =
            document.getElementById(
                "assistant-status"
            );

        const savedState =
            Acessibiliza.get();

        if (savedState.user) {
            nameInput.value =
                savedState.user.name || "";

            emailInput.value =
                savedState.user.email || "";
        }

        showPasswordButton.addEventListener(
            "click",
            function () {
                const showingPassword =
                    passwordInput.type === "text";

                passwordInput.type =
                    showingPassword
                        ? "password"
                        : "text";

                showPasswordButton.setAttribute(
                    "aria-pressed",
                    String(!showingPassword)
                );

                showPasswordButton.setAttribute(
                    "aria-label",
                    showingPassword
                        ? "Mostrar senha"
                        : "Ocultar senha"
                );
            }
        );

        form.addEventListener(
            "submit",
            function (event) {
                event.preventDefault();

                if (!form.checkValidity()) {
                    form.reportValidity();
                    return;
                }

                Acessibiliza.update({
                    user: {
                        name: nameInput.value.trim(),
                        email: emailInput.value.trim()
                    },
                    loggedIn: true,
                    rememberAccount:
                        rememberInput.checked,
                    loginProvider: "local"
                });

                Acessibiliza.toast(
                    "Login realizado com sucesso."
                );

                window.setTimeout(
                    function () {
                        window.location.href =
                            "../home.html";
                    },
                    450
                );
            }
        );

        guestLoginButton.addEventListener(
            "click",
            function () {
                Acessibiliza.update({
                    user: {
                        name: "Visitante",
                        email: ""
                    },
                    loggedIn: true,
                    loginProvider: "guest"
                });

                Acessibiliza.toast(
                    "Acessando como visitante."
                );

                window.setTimeout(
                    function () {
                        window.location.href =
                            "../home.html";
                    },
                    450
                );
            }
        );

        googleLoginButton.addEventListener(
            "click",
            function () {
                Acessibiliza.update({
                    user: {
                        name: "Usuário Google",
                        email: "usuario@google.demo"
                    },
                    loggedIn: true,
                    loginProvider: "google-demo"
                });

                Acessibiliza.toast(
                    "Entrada demonstrativa com Google."
                );

                window.setTimeout(
                    function () {
                        window.location.href =
                            "../home.html";
                    },
                    450
                );
            }
        );

        forgotPasswordButton.addEventListener(
            "click",
            function () {
                Acessibiliza.toast(
                    "Recuperação simulada no MVP."
                );
            }
        );

        readPageButton.addEventListener(
            "click",
            function () {
                const text = [
                    "Página de login do Acessibiliza.",
                    "Você pode entrar com seus dados,",
                    "usar a entrada demonstrativa",
                    "com Google ou continuar",
                    "como visitante."
                ].join(" ");

                if (
                    "speechSynthesis" in window &&
                    "SpeechSynthesisUtterance" in window
                ) {
                    window.speechSynthesis.cancel();

                    const utterance =
                        new SpeechSynthesisUtterance(
                            text
                        );

                    utterance.lang = "pt-BR";
                    utterance.rate = 0.95;

                    utterance.onstart =
                        function () {
                            assistantStatus.textContent =
                                "Reproduzindo orientação.";
                        };

                    utterance.onend =
                        function () {
                            assistantStatus.textContent =
                                "Orientação concluída.";
                        };

                    utterance.onerror =
                        function () {
                            assistantStatus.textContent =
                                "Não foi possível reproduzir a orientação.";
                        };

                    window.speechSynthesis.speak(
                        utterance
                    );
                } else {
                    assistantStatus.textContent =
                        "A leitura por voz não está disponível neste navegador.";
                }
            }
        );
    }
);