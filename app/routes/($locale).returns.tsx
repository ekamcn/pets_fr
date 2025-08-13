import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Politiques de Remboursements
        </p>
        <p className="leading-6 sm:leading-7 !text-sm">
          Mis à jour le 1-7-2025
        </p>

        <div>
          <h2 className="!text-base font-semibold">
            Durée de la Politique de Retours
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre politique de retour dure 30 jours. Si 30 jours se sont écoulés
            depuis votre achat, nous ne pouvons malheureusement pas vous offrir
            de remboursement ou d&apos;échange, sauf dans les cas couverts par
            le droit de rétractation de 14 jours.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Conditions de Retour</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            L'article doit être inutilisé, dans son état d'origine, de
            préférence dans l'emballage d’origine. En cas d'article défectueux
            ou endommagé à la réception, veuillez nous envoyer la description et
            des photos/vidéos à{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Tout retour nécessite un reçu ou une preuve d’achat. Merci de ne pas
            renvoyer votre achat au fabricant. Nous vous indiquerons la
            procédure à suivre après validation de votre demande.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Droit de Rétractation</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Conformément à la législation européenne, vous disposez de 30 jours
            à compter de la réception de votre commande pour exercer votre droit
            de rétractation sans justification. Pour cela, contactez-nous par
            email à{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Frais de Retour</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les frais de retour sont à notre charge. Merci de nous contacter
            pour organiser un retour sans frais via nos bordereaux prépayés.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Délais et Processus de Remboursement
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Une fois l’article reçu et inspecté, vous serez informé par email de
            la décision. En cas d’approbation, le remboursement sera effectué
            sous 5 jours ouvrés sur le mode de paiement initial.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Comment Initier un Retour
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Envoyez un email à{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>{' '}
            avec votre numéro de commande, une copie de la facture, et une
            description du problème. Ensuite, envoyez le colis à :<br />
            {import.meta.env.VITE_COMPANY_ADDRESS}H.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Remboursements Tardifs ou Manquants
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Vérifiez votre compte bancaire, puis contactez votre société de
            carte de crédit et votre banque. Si vous n’avez toujours pas reçu le
            remboursement, contactez-nous à{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Articles de Vente</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Seuls les articles à prix régulier peuvent être remboursés. Les
            articles soldés ne sont pas remboursables.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Échange (le cas échéant)</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les articles défectueux ou endommagés peuvent être échangés contre
            un article identique. Veuillez nous envoyer une preuve (photo/vidéo)
            et le numéro de commande par email. Expédiez ensuite le produit à
            l’adresse figurant sur l’emballage d’origine.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Nous Contacter</h2>
          <p className="flex flex-col gap-2 !text-sm">
            <span>
              Email :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline underline-offset-4"
              >
                      {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </span>
            <span>
              Téléphone :{' '}
              <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a>
            </span>
            <span>
              Heures d'ouverture : Du lundi au vendredi de 8h à 18h (UTC+1)
            </span>
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Informations de l’Entreprise
          </h2>
          <ul className="!list-disc !list-inside pl-6 text-sm space-y-1">
            <li>Société : CLICKOUTIL SAS</li>
            <li>SIREN : 30337622200053</li>
            <li>
              Adresse : {import.meta.env.VITE_COMPANY_ADDRESS}H
            </li>
            <li>
              Email :{' '}
              <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              Téléphone :{' '}
              <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} className="underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
