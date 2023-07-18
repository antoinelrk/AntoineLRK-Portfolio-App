"use client"
import Style from './Contact.module.scss'
import { useState } from 'react'

export default () => {
    const [isChecked, setCheck] = useState(false)
    const [icon, setIcon] = useState(`<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/></svg>`)

    return (
        <section className={Style.Contact}>
            <h2 className={Style.sectionTitle}>Je suis également freelance</h2>
            <p><i>Vous</i> avez une idée? Contactons <i>nous</i></p>

            <form className={Style.contactForm}>
                <div className={Style.formGroup}>
                    <label htmlFor="pseudo">Prénom ou pseudonyme:</label>
                    <input type="text" name="pseudo" placeholder="John"/>
                </div>
                <div className={Style.formGroup}>
                    <label htmlFor="email">Votre adresse e-mail:</label>
                    <input type="email" name="email" placeholder="john@doe.fr"/>
                </div>
                <div className={`${Style.formGroup} ${Style.area}`}>
                    <textarea name="contactContent" id="contactContent" className={Style.contactArea} placeholder="Racontez moi !"></textarea>
                </div>

                <div className={`${Style.formGroup} ${Style.row}`}>
                    <input type="checkbox" checked={isChecked} />
                    <label onClick={() => setCheck(!isChecked)} for="acceptCc" className={`${Style.checkboxCustom}`}>
                        <p className={Style.formText}>J'accepte les <a href="">conditions de confidentialité</a></p>
                    </label>
                </div>

                <button disabled={!isChecked} className={Style.sendingButton}>
                    Envoyer
                    <div className={Style.sendButtonIcon}>
                        <figure dangerouslySetInnerHTML={ {__html: icon} }></figure>
                    </div>
                </button>
            </form>
        </section>
    )
}