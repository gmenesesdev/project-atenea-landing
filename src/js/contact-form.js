// contact-form.js
// Importamos Toastify desde el paquete NPM
import Toastify from "toastify-js";

class FormValidator {
    constructor() {
        this.form = document.getElementById("contactForm");
        this.fields = {
            name: document.getElementById("name"),
            lastname: document.getElementById("lastname"),
            email: document.getElementById("email"),
            phone: document.getElementById("phone"),
            details: document.getElementById("details"),
        };
        this.errors = {
            name: document.getElementById("nameError"),
            lastname: document.getElementById("lastnameError"),
            email: document.getElementById("emailError"),
            phone: document.getElementById("phoneError"),
            details: document.getElementById("detailsError"),
            recaptcha: document.getElementById("recaptchaError"),
        };
        this.submitBtn = document.getElementById("submitBtn");
        this.submitText = document.getElementById("submitText");
        this.submitLoader = document.getElementById("submitLoader");

        // Variables de entorno públicas de Astro
        this.publicKey = import.meta.env.PUBLIC_EMAILJS_PUBLIC_KEY;
        this.serviceID = import.meta.env.PUBLIC_EMAILJS_SERVICE_ID;
        this.templateID = import.meta.env.PUBLIC_EMAILJS_TEMPLATE_ID;

        this.init();
    }

    init() {
        // Verificar que EmailJS esté disponible
        if (typeof emailjs === "undefined") {
            console.error("EmailJS no está cargado");
            return;
        }

        // Inicializar EmailJS
        emailjs.init({ publicKey: this.publicKey });

        // Validación en tiempo real
        Object.keys(this.fields).forEach((fieldName) => {
            const field = this.fields[fieldName];

            field.addEventListener("blur", () => {
                this.validateField(fieldName);
            });

            field.addEventListener("input", () => {
                if (field.classList.contains("border-red-500")) {
                    this.validateField(fieldName);
                }
            });
        });

        // Validación al enviar
        this.form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    validateField(fieldName) {
        const field = this.fields[fieldName];
        const errorElement = this.errors[fieldName];
        let isValid = true;
        let errorMessage = "";

        // Limpiar errores previos
        this.clearFieldError(field, errorElement);

        switch (fieldName) {
            case "name":
            case "lastname":
                if (!field.value.trim()) {
                    errorMessage = `${
                        fieldName === "name" ? "El nombre" : "El apellido"
                    } es obligatorio`;
                    isValid = false;
                } else if (field.value.trim().length < 2) {
                    errorMessage = `${
                        fieldName === "name" ? "El nombre" : "El apellido"
                    } debe tener al menos 2 caracteres`;
                    isValid = false;
                } else if (
                    !/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(field.value.trim())
                ) {
                    errorMessage = "Solo se permiten letras y espacios";
                    isValid = false;
                }
                break;

            case "email":
                if (!field.value.trim()) {
                    errorMessage = "El correo electrónico es obligatorio";
                    isValid = false;
                } else if (
                    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim())
                ) {
                    errorMessage =
                        "Por favor, introduce un correo electrónico válido";
                    isValid = false;
                }
                break;

            case "phone":
                if (!field.value.trim()) {
                    errorMessage = "El teléfono es obligatorio";
                    isValid = false;
                } else if (!/^[\d\s\-\+\(\)]{8,15}$/.test(field.value.trim())) {
                    errorMessage =
                        "Por favor, introduce un número de teléfono válido";
                    isValid = false;
                }
                break;

            case "details":
                if (!field.value.trim()) {
                    errorMessage = "Los detalles son obligatorios";
                    isValid = false;
                } else if (field.value.trim().length < 10) {
                    errorMessage =
                        "Los detalles deben tener al menos 10 caracteres";
                    isValid = false;
                } else if (field.value.trim().length > 500) {
                    errorMessage =
                        "Los detalles no pueden exceder 500 caracteres";
                    isValid = false;
                }
                break;
        }

        if (!isValid) {
            this.showFieldError(field, errorElement, errorMessage);
        }

        return isValid;
    }

    validateRecaptcha() {
        if (typeof grecaptcha === "undefined") {
            console.error("reCAPTCHA no está cargado");
            return false;
        }

        const recaptchaResponse = grecaptcha.getResponse();

        if (!recaptchaResponse) {
            this.showFieldError(
                null,
                this.errors.recaptcha,
                "Por favor, completa la verificación reCAPTCHA"
            );
            return false;
        }

        this.clearFieldError(null, this.errors.recaptcha);
        return true;
    }

    async handleSubmit() {
        let isFormValid = true;

        // Validar todos los campos
        Object.keys(this.fields).forEach((fieldName) => {
            if (!this.validateField(fieldName)) {
                isFormValid = false;
            }
        });

        // Validar reCAPTCHA
        if (!this.validateRecaptcha()) {
            isFormValid = false;
        }

        if (isFormValid) {
            await this.submitForm();
        } else {
            // Hacer scroll al primer error
            const firstError = this.form.querySelector(".border-red-500");
            if (firstError) {
                firstError.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                });
                firstError.focus();
            }
        }
    }

    async submitForm() {
        // Mostrar loader
        this.submitText.textContent = "Enviando...";
        this.submitLoader.classList.remove("hidden");
        this.submitBtn.disabled = true;

        try {
            // Enviar con EmailJS
            await emailjs.sendForm(this.serviceID, this.templateID, this.form);

            // --- Toast de Éxito con clases de Tailwind ---
            Toastify({
                text: "¡Mensaje enviado correctamente!",
                duration: 3000,
                gravity: "top",
                position: "right",
                className: "toast-success",
            }).showToast();

            // Limpiar formulario
            this.form.reset();
            if (typeof grecaptcha !== "undefined") {
                grecaptcha.reset();
            }

            // Limpiar errores visuales
            this.clearAllErrors();
        } catch (error) {
            console.error("Error al enviar el formulario:", error);

            // --- Toast de Error con clases de Tailwind ---
            Toastify({
                text: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
                duration: 4000,
                gravity: "top",
                position: "right",
                className: "toast-error",
            }).showToast();
        } finally {
            // Restaurar botón
            this.submitText.textContent = "Enviar";
            this.submitLoader.classList.add("hidden");
            this.submitBtn.disabled = false;
        }
    }

    showFieldError(field, errorElement, message) {
        if (field) {
            field.classList.add("border-red-500");
            field.classList.remove("border-atenea-icon");
        }
        errorElement.textContent = message;
        errorElement.classList.remove("hidden");
    }

    clearFieldError(field, errorElement) {
        if (field) {
            field.classList.remove("border-red-500");
            field.classList.add("border-atenea-icon");
        }
        errorElement.textContent = "";
        errorElement.classList.add("hidden");
    }

    clearAllErrors() {
        Object.keys(this.fields).forEach((fieldName) => {
            const field = this.fields[fieldName];
            const errorElement = this.errors[fieldName];
            this.clearFieldError(field, errorElement);
        });
        this.clearFieldError(null, this.errors.recaptcha);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
    new FormValidator();
});