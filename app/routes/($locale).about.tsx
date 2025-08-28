import React from 'react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen py-8 !pl-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-10 tracking-wider p-4">
        <h1 className="!text-2xl sm:!text-3xl font-bold text-[#2c3e50] !my-1">
          🏁 À propos de {import.meta.env.VITE_STORE_TITLE}
        </h1>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold text-[#2c3e50] mt-4">
            🏁 À propos de {import.meta.env.VITE_STORE_TITLE}
          </h2>

          <p className="!text-sm leading-6 sm:leading-7 text-gray-700">
            Bienvenue chez <strong>{import.meta.env.VITE_STORE_TITLE}</strong>, la boutique en
            ligne pensée{' '}
            <strong>par des passionnés, pour des passionnés</strong>.
          </p>

          <p className="!text-sm leading-6 sm:leading-7 text-gray-700">
            Que vous rouliez en voiture ou en deux-roues, que vous soyez amateur
            de tuning, adepte de sensations fortes ou simplement soucieux de
            bien entretenir votre véhicule, <strong>{import.meta.env.VITE_STORE_TITLE}</strong>{' '}
            est là pour vous équiper avec{' '}
            <strong>style, efficacité et performance</strong>.
          </p>
        </div>

        <hr className="!my-7" />

        <div>
          <h2 className="!text-base font-semibold text-[#2c3e50] mt-6">
            🏎️ Notre mission
          </h2>
          <div className="flex flex-col gap-4 mt-2">
            <p className="!text-sm leading-6 sm:leading-7 text-gray-700">
              Chez <strong>{import.meta.env.VITE_STORE_TITLE}</strong>, nous savons que votre
              véhicule n’est pas qu’un moyen de transport : c’est une{' '}
              <strong>véritable extension de vous-même</strong>, un symbole de
              liberté, de puissance et de passion.
            </p>
            <p className="!text-sm leading-6 sm:leading-7 text-gray-700">
              C’est pourquoi nous vous proposons une sélection pointue de
              produits :
            </p>
            <ul className="list-disc list-inside !text-sm leading-6 sm:leading-7 text-gray-700 space-y-1">
              <li>
                <strong>Accessoires pratiques & innovants</strong>
              </li>
              <li>
                <strong>Équipements pour l’entretien et la performance</strong>
              </li>
              <li>
                <strong>
                  Articles esthétiques pour personnaliser votre style
                </strong>
              </li>
              <li>
                <strong>
                  Objets du quotidien pour les amoureux d’auto & moto
                </strong>
              </li>
            </ul>
          </div>
        </div>

        <hr className="!my-7" />

        <div>
          <h2 className="!text-base font-semibold text-[#2c3e50] mt-6">
            🔧 Nos engagements
          </h2>
          <ul className="list-disc list-inside !text-sm leading-6 sm:leading-7 text-gray-700 space-y-3 mt-2">
            <li>
              <strong>Qualité & fiabilité</strong>
              <p className="pl-5">
                Tous nos produits sont testés et sélectionnés pour leur{' '}
                <strong>
                  robustesse, leur utilité réelle et leur compatibilité
                </strong>{' '}
                avec les besoins des conducteurs exigeants.
              </p>
            </li>
            <li>
              <strong>Prix justes & accessibilité</strong>
              <p className="pl-5">
                Pas besoin de se ruiner pour se faire plaisir : nous vous
                offrons un <strong>excellent rapport qualité/prix</strong> sur
                l’ensemble de nos gammes.
              </p>
            </li>
            <li>
              <strong>Une passion réelle du terrain</strong>
              <p className="pl-5">
                Derrière chaque produit proposé, il y a une{' '}
                <strong>connaissance pratique du milieu auto/moto</strong>, une
                compréhension des vrais besoins des conducteurs.
              </p>
            </li>
          </ul>
        </div>

        <hr className="!my-7" />

        <div>
          <h2 className="!text-base font-semibold text-[#2c3e50] mt-6">
            🧑🔧 Une équipe qui vit moteur
          </h2>
          <p className="!text-sm leading-6 sm:leading-7 text-gray-700 mt-2">
            <strong>{import.meta.env.VITE_STORE_TITLE}</strong>, c’est une équipe de passionnés de
            mécanique, de route et de performance. Nous ne vendons pas
            simplement des accessoires : nous partageons un{' '}
            <strong>style de vie</strong>, une <strong>culture</strong>, une{' '}
            <strong>énergie</strong>.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold text-[#2c3e50] mt-6">
            🚚 Livraison rapide & service fiable
          </h2>
          <ul className="list-disc list-inside !text-sm leading-6 sm:leading-7 text-gray-700 space-y-1 mt-2">
            <li>Paiement sécurisé</li>
            <li>Livraison rapide avec suivi</li>
            <li>
              Service client réactif et disponible pour répondre à vos questions
            </li>
          </ul>
        </div>

        <hr className="!my-7" />

        <div>
          <h2 className="!text-base font-semibold text-[#2c3e50]">
            Merci de faire partie de la communauté {import.meta.env.VITE_STORE_TITLE} 🏍️
          </h2>

          <p className="!text-sm leading-6 sm:leading-7 text-gray-700 mt-2">
            Votre confiance nous permet de continuer à faire vivre cette
            passion, à vous proposer des produits toujours plus adaptés, et à
            bâtir une communauté de passionnés fiers de leurs machines.
          </p>

          <p className="!text-sm leading-6 sm:leading-7 text-gray-700 mt-2">
          <strong>{import.meta.env.VITE_STORE_TITLE}</strong>, c’est plus qu’une boutique :
            c’est une <strong>attitude, un mode de vie</strong>.
          </p>

          <p className="!text-sm leading-6 sm:leading-7 text-gray-700 !mt-4">
            Pour nous contacter, envoyez seulement un email à :{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}              
              className="text-blue-600 underline"
            >
             {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>{' '}
            ou par téléphone au :{' '}
            <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a>
            , notre équipe se fera un plaisir de vous répondre du lundi au
            vendredi de 8h à 18h (UTC+1).
          </p>

          <div className="mt-4">
            <ul className="text-gray-700 flex flex-col gap-2 list-disc pl-4 !text-sm leading-6 sm:leading-7">
              <li>
                <strong>Société : </strong>
                {import.meta.env.VITE_COMPANY_NAME}
              </li>
              <li>
                <strong>SIREN : </strong>
                {import.meta.env.VITE_SIREN_NUMBER}
              </li>
              <li>
                <strong>Adresse : </strong>
                {import.meta.env.VITE_COMPANY_ADDRESS}
              </li>
              <li>
                <strong>Email : </strong>
                <a
                  href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                  className="hover:underline"
                >
                   {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
                </a>
              </li>
              <li>
                <strong>Tel : </strong>
                <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
