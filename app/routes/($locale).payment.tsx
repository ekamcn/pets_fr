import React from 'react';

export default function PaymentTermsPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">Conditions de Paiement</p>

        <div>
          <h2 className="!text-sm font-semibold">Modalités de Paiement</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Lorsque vous passez commande sur notre site, votre carte est débitée en EUR immédiatement et non pas au moment de l'expédition. Votre relevé de facturation apparaîtra sous la forme suivante : espritautomoto
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Modes de Paiement Acceptés</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Nous acceptons les paiements par carte bancaire (Visa, MasterCard, American Express). Pour les paiements par carte bancaire, les informations de votre carte de crédit seront traitées en toute sécurité par notre prestataire de services de paiement.
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Sécurisation des Paiements</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Toutes les transactions effectuées sur notre site sont sécurisées grâce à un protocole de chiffrement SSL (Secure Socket Layer) qui garantit la confidentialité des informations transmises. Nous nous engageons à protéger les données personnelles de nos clients conformément au Règlement Général sur la Protection des Données (RGPD).
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Facturation</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Une fois votre commande passée, une facture détaillée vous sera envoyée par email. Veuillez vérifier les informations de facturation et de livraison pour garantir la bonne réception de votre commande.
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Exactitude des Informations de Facturation</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Vous êtes responsable de fournir des informations de facturation et de livraison exactes et à jour. En cas de modification de ces informations, vous devez nous en informer dans les plus brefs délais pour éviter tout retard ou problème de livraison.
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Remboursements</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Si vous souhaitez obtenir un remboursement, veuillez nous contacter à l'adresse suivante :{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline underline-offset-2">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>. Vous disposez d'un délai de 30 jours à compter de la réception de votre commande pour exercer votre droit de rétractation.
          </p>
          <p className="leading-6 sm:leading-7 !text-sm mt-2">
            Le remboursement sera effectué sur le moyen de paiement utilisé lors de la commande et peut prendre entre 3 et 5 jours ouvrables pour apparaître sur votre compte bancaire.
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Réclamations et Litiges</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            En cas de réclamation ou de litige concernant une transaction, veuillez nous contacter à l'adresse email mentionnée ci-dessus. Nous nous efforcerons de résoudre toute réclamation dans les plus brefs délais.
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Modifications des Conditions de Paiement</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Nous nous réservons le droit de modifier les présentes conditions de paiement à tout moment. Toute modification sera publiée sur cette page et vous serez informé(e) par email. En continuant à utiliser notre site après la publication des modifications, vous acceptez celles-ci.
          </p>
        </div>

        <div>
          <h2 className="!text-sm font-semibold">Nous Contacter</h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Pour toute question concernant nos conditions de paiement, veuillez nous contacter à :{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline underline-offset-2">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
          </p>
          <p className="leading-6 sm:leading-7 !text-sm mt-2">
            Pour nous contacter, envoyez seulement un email à :{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline underline-offset-2">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>{' '}
            ou par téléphone au :{' '}
<a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a>, notre équipe se fera un plaisir de vous répondre  du lundi au vendredi de 8h à 18h (UTC+1).
          </p>
        </div>

        <div>
          <ul className="!text-sm !list-disc !list-inside">
            <li>Société : CLICKOUTIL SAS</li>
            <li>SIREN : 30337622200053</li>
            <li>Adresse : {import.meta.env.VITE_COMPANY_ADDRESS}</li>
            <li>Mail : <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline underline-offset-2">{import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}</a></li>
            <li>Téléphon :<a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
