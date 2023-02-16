import React from "react";
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <div>

            <h1 className="header-h1">Concepteur de produits digitaux</h1>
            <h2 className="header-h2">
                <span>Startups</span>
                <span> & </span>
                <span>Entreprise</span>
            </h2>
            
            <section id='en-tete'>

            </section>

            <section id='sur-mesure'>
            <div className='content'>
                <h2>Site Web et logiciel
                <br></br>
                <span>sur mesure</span>
                </h2>
                <p>Notre équipe vous accompagne tout au long de votre projet afin de vous guarantir une tranquilité d'esprit.
                Vous obtenez à la fin un produit performant, tenant compte des nouvelles normes et totalement sur mersure.</p>
                <ul>
                    <li>Conception de site Web</li>
                    <li>Optimisation de site Web (performance, SEO etc.)</li>
                    <li>Design graphique</li>
                    <li>Conception d'application mobile et multiplatforme (Windows, Mac, Linux)</li>
                    <li>Visibilité et dévéloppement de marque sur les réseaux sociaux</li>
                    <li>Community management</li>
                </ul>
            </div>
            </section>

            {/*<section id='digital-marketing'>

            </section>

            <section id='realisations'>

            </section> */}

            <section id='nous-joindre'>
                <div className='content'>
                    <Link to='/nous-joindre'>
                        <h2>
                            Réalisons
                            <br></br>
                            <span>votre projet</span>
                            <br></br>
                            Nous-joindre!
                        </h2>
                    </Link>
                </div>
            </section>
        </div>
    )
}