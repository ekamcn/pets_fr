import React from 'react';

export default function PaymentTermsPage() {
  const customerSupportEmail = import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL;
  const customerServicePhone = import.meta.env.VITE_CUSTOMER_SERVICE_PHONE;
  const companyName = import.meta.env.VITE_COMPANY_NAME;
  const companyAddress = import.meta.env.VITE_COMPANY_ADDRESS;
  const storeName = import.meta.env.VITE_STORE_TITLE;

  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Conditions de Paiement
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="payment-methods">
            Modalités de Paiement
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Lorsque vous passez commande sur notre site, votre carte est débitée
            en EUR immédiatement et non pas au moment de l&apos;expédition.
            Votre relevé de facturation apparaîtra sous la forme suivante :{' '}
            {storeName}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="accepted-payments">
            Modes de Paiement Acceptés
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Nous acceptons les paiements par carte bancaire (Visa, MasterCard,
            American Express). Pour les paiements par carte bancaire, les
            informations de votre carte de crédit seront traitées en toute
            sécurité par notre prestataire de services de paiement.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="payment-security">
            Sécurisation des Paiements
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Toutes les transactions effectuées sur notre site sont sécurisées
            grâce à un protocole de chiffrement SSL (Secure Socket Layer) qui
            garantit la confidentialité des informations transmises. Nous nous
            engageons à protéger les données personnelles de nos clients
            conformément au Règlement Général sur la Protection des Données
            (RGPD).
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="invoicing">
            Facturation
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Une fois votre commande passée, une facture détaillée vous sera
            envoyée par email. Veuillez vérifier les informations de facturation
            et de livraison pour garantir la bonne réception de votre commande.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="billing-accuracy">
            Exactitude des Informations de Facturation
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Vous êtes responsable de fournir des informations de facturation et
            de livraison exactes et à jour. En cas de modification de ces
            informations, vous devez nous en informer dans les plus brefs délais
            pour éviter tout retard ou problème de livraison.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="refunds">
            Remboursements
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Si vous souhaitez obtenir un remboursement, veuillez nous contacter
            à l&apos;adresse suivante :{' '}
            <a
              href={`mailto:${customerSupportEmail}`}
              className="underline underline-offset-4"
              aria-label="Contacter le support client par email"
            >
              {customerSupportEmail}
            </a>
            . Vous disposez d&apos;un délai de 30 jours à compter de la
            réception de votre commande pour exercer votre droit de
            rétractation.
          </p>
          <p className="leading-6 sm:leading-7 !text-sm mt-2">
            Le remboursement sera effectué sur le moyen de paiement utilisé lors
            de la commande et peut prendre entre{' '}
            {import.meta.env.VITE_REFUND_PROCESSING_TIME} jours ouvrables pour
            apparaître sur votre compte bancaire.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="complaints-disputes">
            Réclamations et Litiges
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            En cas de réclamation ou de litige concernant une transaction,
            veuillez nous contacter à l&apos;adresse email mentionnée ci-dessus.
            Nous nous efforcerons de résoudre toute réclamation dans les plus
            brefs délais.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold" id="terms-changes">
            Modifications des Conditions de Paiement
          </h2>
          <p className="leading-6 sm:leading-7 !text-sm">
            Nous nous réservons le droit de modifier les présentes conditions de
            paiement à tout moment. Toute modification sera publiée sur cette
            page et vous serez informé(e) par email. En continuant à utiliser
            notre site après la publication des modifications, vous acceptez
            celles-ci.
          </p>
          <p className="leading-6 sm:leading-7 !text-sm">
            Pour toute question concernant nos conditions de paiement, veuillez
            nous contacter à : {customerSupportEmail}
          </p>
          <p className="leading-6 sm:leading-7 !text-sm">
            Pour nous contacter, envoyez seulement un email à :{' '}
            {customerSupportEmail} ou par téléphone <br /> au:{' '}
            {customerServicePhone}, notre équipe se fera un plaisir de vous
            répondre {import.meta.env.VITE_SUPPORT_HOURS}.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="list-disc list-inside space-y-1 !text-sm pl-6">
            <li>Société : {companyName}</li>
            <li>SIREN : {import.meta.env.VITE_SIREN_NUMBER}</li>
            <li>Adresse : {companyAddress}</li>
            <li>
              Mail :{' '}
              <a
                href={`mailto:${customerSupportEmail}`}
                className="underline underline-offset-4"
                aria-label="Contacter le support client par email"
              >
                {customerSupportEmail}
              </a>
            </li>
            <li>
              Tel :{' '}
              <a
                href={`tel:${customerServicePhone}`}
                className="underline underline-offset-4"
                aria-label="Contacter le support client par téléphone"
              >
                {customerServicePhone}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
