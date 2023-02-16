import React from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const [formData, setFormData] = React.useState(
        {nomComplet: "", courriel: "", telephone: "", sujet: "", message: ""}
    );
    const [formErrors, setFormErrors] = React.useState({});
    const [isSubmit, setIsSubmit] = React.useState(false);
    const [messageEmail, setMessageEmail] = React.useState("");
    const form = React.useRef();

    function setFormDataFunction (name, value) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleChange(event) 
    {
        setFormDataFunction(event.target.name, event.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormErrors(validate(formData));
        setIsSubmit(true);
    }

    React.useEffect(() => {
        if(Object.keys(formErrors).length === 0 && isSubmit) {

            emailjs.sendForm("service_2s7e4jl", "template_0zifut1", form.current, "4IRHtGupq7svOiu7V")
                .then(() => {
                    setMessageEmail("Courriel envoyé! Nous vous contacterons sous peu.");
                }, (error) => {
                    setMessageEmail("Erreur lors de l'envoi du courriel! Veuillez réessayer.");
                });
            setIsSubmit(false);
        }
    });

    const validate = (values) => {
        const errors = {}
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const telephoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

        if (!values.nomComplet) {
            errors.nomComplet = "Nom Complet est réquis!";
        }

        if (!values.courriel) {
            errors.courriel = "Courriel est réquis!";
        }else if (!emailRegex.test(values.courriel)) {
            errors.courriel = "Le courriel entré n'est pas valide!";
        }
        
        if (!values.telephone) {
            errors.telephone = "Contact est réquis!";
        } else if (!telephoneRegex.test(values.telephone)) {
            errors.telephone = "Contact entré incorrect!";
        }

        if (!values.sujet) {
            errors.sujet = "sujet est réquis!";
        }

        if (!values.message) {
            errors.message = "Message est réquis!";
        }

        return errors;
    };

    return(
        <div className="container content">
            <h1>Nous joindre</h1>
            <div className="col6">
                <p>
                    <strong>Information générales</strong>
                    <br></br>
                    <a href="mailto:onmyways63@gmail.com">onmyways63@gmail.com</a>
                </p>
            </div>
            <div className="col6 last">
                {Object.keys(formErrors).length === 0 && isSubmit ? <div className="messageEmail">{messageEmail}</div> : <div className="messageEmail">{messageEmail}</div>}
            
                <form ref={form} className="form">
                    <label className="label" htmlFor="NomComplet">
                        Nom complet <span className="error">* {formErrors.nomComplet}</span>
                    </label>
                    <input 
                            type="text"
                            placeholder="jhon default"
                            onChange={handleChange}
                            name="nomComplet"
                            id="NomComplet"
                            value={formData.nomComplet}
                            className="input"
                        />

                    <label className="label" htmlFor="Courriel">
                        Courriel <span className="error">* {formErrors.courriel}</span>
                    </label>
                    <input 
                            type="email"
                            placeholder="jhoneDefault@mycourriel.com"
                            onChange={handleChange}
                            name="courriel"
                            id="Courriel"
                            value={formData.courriel}
                            className="input"
                        />

                    <label className="label" htmlFor="Telephone">
                        Téléphone <span className="error">* {formErrors.telephone}</span>
                    </label>
                    <input 
                            type="text"
                            placeholder="888 888 8888"
                            onChange={handleChange}
                            name="telephone"
                            id="Telephone"
                            maxLength={12}
                            value={formData.telephone}
                            className="input"
                        />

                    <label className="label" htmlFor="Sujet">
                        Sujet <span className="error">* {formErrors.sujet}</span>
                    </label>
                    <input 
                            type="text"
                            placeholder="Conception de site Web"
                            onChange={handleChange}
                            name="sujet"
                            id="Sujet"
                            value={formData.sujet}
                            className="input"
                        />

                    <label className="label" htmlFor="Message">
                        Message <span className="error">* {formErrors.message}</span>
                    </label>
                    <textarea 
                            type="text"
                            placeholder="Expliquez-nous votre projet..."
                            onChange={handleChange}
                            name="message"
                            id="Message"
                            value={formData.message}
                            className="input"
                        />

                    <input 
                        type="submit"
                        value="Envoyer"
                        className="submit"
                        onClick={handleSubmit}
                    />
                </form>
            </div>
            <div className="clear"></div>
        </div>
    )
}