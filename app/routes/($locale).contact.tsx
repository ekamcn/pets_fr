import React from 'react';
import Form from '~/components/Form';
 
export default function ContactPage() {
  return (
    <div className="bg-white py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl lg:!text-3xl font-bold text-center">Contact</p>
 
        <div className="flex flex-col gap-4">
          <p className="!text-base font-bold">INFORMATIONS DE CONTACT</p>
 
          <p className="leading-6 sm:leading-7 !text-sm">
            Pour éviter tout risque de placement en spams, il est préférable
            d'utiliser le mail de contact :{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline underline-offset-2"
            >
                   {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>{' '}
            plutôt que ce formulaire de contact.
          </p>
 
          <p className="leading-6 sm:leading-7 !text-sm">
            Vous pouvez également nous contacter par téléphone au{' '}
            <a
              href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`}
              className="underline underline-offset-4"
            >
              {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}
            </a>
            , notre équipe se fera un plaisir de vous répondre{' '}
            <strong> du lundi au vendredi de 8h à 18h (UTC+1).</strong>
          </p>
 
          <ul className="text-sm !list-disc !pl-4">
            <li>
              <strong>Société</strong> : {import.meta.env.VITE_COMPANY_NAME}
            </li>
            <li>
              <strong>SIREN</strong> : 30337622200053
            </li>
            <li>
            <strong>Adresse</strong> : {import.meta.env.VITE_COMPANY_ADDRESS}
            </li>
          </ul>
 
          <p className="leading-6 sm:leading-7 !text-sm">
            Vous pouvez utiliser ce formulaire de contact si vous ne parvenez
            pas à envoyer un email directement.
          </p>
 
          <p className="leading-6 sm:leading-7 !text-sm">
            <strong>
              Nous répondons à 100% des e-mails dans les 24 heures.
            </strong>
          </p>
 
          <p className="leading-6 sm:leading-7 !text-sm">
            Assurez-vous de vérifier vos spams si vous attendez toujours une
            réponse après 48h et que vous avez utilisé ce formulaire de contact.
          </p>
 
          <p className="leading-6 sm:leading-7 !text-sm">
            Au plaisir de vous lire.
          </p>
        </div>
 
        {/* Centered Form */}
        <div className="flex justify-center">
          <Form />
        </div>
      </div>
    </div>
  );
}
 
 