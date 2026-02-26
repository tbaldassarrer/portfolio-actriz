import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Introduce tu nombre.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Introduce tu email.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Email no válido.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Escribe un mensaje.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Formulario correcto (luego conectamos envío real)");
    }
  };

  return (
    <main className="container pageSection">
      <h2 className="h2">Contacto</h2>

      <div className="contactLayout">
        <form className="contactForm" onSubmit={handleSubmit} noValidate>
          <div className="formGroup">
            <label>Nombre</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
            {errors.name && <span className="formError">{errors.name}</span>}
          </div>

          <div className="formGroup">
            <label>Email</label>
            <input
              type="text"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
            {errors.email && <span className="formError">{errors.email}</span>}
          </div>

          <div className="formGroup">
            <label>Mensaje</label>
            <textarea
              rows="5"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
            />
            {errors.message && (
              <span className="formError">{errors.message}</span>
            )}
          </div>

          <button type="submit" className="btnPrimary">
            Enviar mensaje
          </button>
        </form>

        <div className="contactInfo">
          <div className="infoItem">
            <span className="infoLabel">Email</span>
            <a href="mailto:contacto@ejemplo.com" className="infoLink">
              contacto@ejemplo.com
            </a>
          </div>

          <div className="infoItem">
            <span className="infoLabel">Instagram</span>
            <a
              href="https://instagram.com/usuario"
              target="_blank"
              rel="noreferrer"
              className="infoLink"
            >
              @usuario
            </a>
          </div>

          <div className="infoItem">
            <span className="infoLabel">WhatsApp</span>
            <a
              href="https://wa.me/34600000000"
              target="_blank"
              rel="noreferrer"
              className="infoLink"
            >
              +34 600 000 000
            </a>
          </div>

          <div className="infoItem">
            <span className="infoLabel">Teléfono</span>
            <a href="tel:+34600000000" className="infoLink">
              +34 600 000 000
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}