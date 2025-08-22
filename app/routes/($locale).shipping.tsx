import React from 'react';

export default function ShippingPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Politiques de livraison
        </p>
        <p className="leading-6 sm:leading-7 !text-sm">
          POLITIQUE D'EXPÉDITION
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">1. Méthode de Livraison</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous proposons une seule option de livraison pour répondre à vos
            besoins :
          </p>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6 ">
            <li>
              Par Colissimo (livraison à domicile, point de retrait, bureau de
              poste, 2 à 4 jours ouvrés), en Livraison Express : Cette option
              est gratuite pour toutes les commandes, quel que soit le montant.
            </li>
          </ul>
          <p className="!text-sm leading-6 sm:leading-7">
            Certaines commandes peuvent être liées à plusieurs fournisseurs, les
            articles sont alors envoyés séparément.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">2. Zones de Livraison</h2>
          <p>Nous livrons dans les zones géographiques suivantes :</p>
          <ul className="!list-disc l!ist-inside space-y-1 !text-sm !pl-6">
            <li>France</li>
            <li>Belgique</li>
            <li>Luxembourg</li>
            <li>Suisse</li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">3. Délais de Livraison</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les délais de livraison estimés sont les suivants :
          </p>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>France, Belgique, Luxembourg, Suisse :</li>
            <li>Livraison standard: 2 à 4 jours ouvrés.</li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">4. Frais de Livraison</h2>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              Gratuit: Les frais de livraison sont gratuits, peu importe le
              montant de la commande.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            5. Traitement des Commandes
          </h2>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              La plupart des commandes sont traitées et expédiées dans les 48
              heures. Dans les périodes de forte activité, la préparation de la
              commande peut prendre 72h soit 3 jours ouvrés.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">6. Suivi des Commandes</h2>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              Une fois votre commande expédiée, vous recevrez un numéro de suivi
              par email, vous permettant de suivre l’acheminement de votre
              colis.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            7. Problèmes de Livraison
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Si vous rencontrez un problème de livraison (colis non reçu, retard,
            colis endommagé) :
          </p>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              Contactez-nous par email à{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>{' '}
              dans un délai de 30 jours suivant la date de livraison prévue.
            </li>
            <li>
              Fournissez votre numéro de commande, le numéro de suivi et une
              description du problème rencontré.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">8. Retours et Échanges</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre politique de retour dure 30 jours. Si 30 jours se sont écoulés
            depuis votre achat, nous ne pouvons malheureusement pas vous offrir
            un remboursement ou un échange.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour pouvoir bénéficier d’un retour, votre article doit être
            inutilisé et dans le même état où vous l’avez reçu. Il doit être
            également dans l’emballage d’origine.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour effectuer un retour, vous devez nous présenter un reçu ou une
            preuve d’achat. Veuillez ne pas renvoyer votre achat chez le
            fabricant.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Remboursements : Une fois que nous aurons reçu et inspecté l’article
            retourné, nous vous enverrons un email pour vous confirmer que nous
            l’avons bien reçu. Nous vous informerons également de notre décision
            quant à l’approbation ou au rejet de votre demande de remboursement.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Si votre demande est approuvée, alors votre remboursement sera
            traité, et un crédit sera automatiquement appliqué à votre carte de
            crédit ou à votre méthode originale de paiement, dans un délai d’un
            certain nombre de jours.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Remboursements en retard ou manquants (le cas échéant) :
          </p>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              Si vous n’avez pas encore reçu votre remboursement, veuillez
              d’abord consulter votre compte bancaire à nouveau.
            </li>
            <li>
              Ensuite, contactez l’entité émettrice de votre carte de crédit,
              car il pourrait y avoir un délai avant que votre remboursement ne
              soit officiellement affiché.
            </li>
            <li>
              Ensuite, contactez votre banque. Il y a souvent un délai de
              traitement nécessaire avant qu’un remboursement ne soit affiché.
            </li>
          </ul>

          <p className="!text-sm leading-6 sm:leading-7">
            Si après avoir effectué toutes ces étapes, vous n’avez toujours pas
            reçu votre remboursement, veuillez nous contacter à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline underline-offset-4"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Articles soldés (le cas échéant) :
          </p>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              Seuls les articles à prix courant peuvent être remboursés.
              Malheureusement, les articles soldés ne sont pas remboursables.
            </li>
          </ul>
          <p className="!text-sm leading-6 sm:leading-7">
            Échanges (le cas échéant) :
          </p>
          <ul className="!list-disc list-inside space-y-1 !text-sm !pl-6">
            <li>
              Nous remplaçons un article seulement s’il est défectueux ou
              endommagé. Si dans ce cas vous souhaitez l’échanger contre le même
              article, envoyez-nous un email à{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
              .
            </li>
            <li>
              Expédition : Pour retourner un produit, envoyez-nous un email à
              contact@espritautomoto.com, puis l’envoyer par la poste à : 330
              route des Chevaliers Tireurs,73190 SAINT BALDOPH
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <p className="!text-sm leading-6 sm:leading-7">
            Les frais de retour sont pris en charge par notre société avec nos
            bordereaux de retour. Si vous recevez un remboursement, les frais de
            retour seront déduits de celui-ci.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            En fonction de l’endroit où vous vivez, le délai nécessaire pour
            recevoir votre produit échangé peut varier.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            <span>
              Pour nous contacter, envoyez seulement un email à{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </span>
            <span>
              ou par téléphone au:{' '}
              <a
                href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}
              </a>{' '}
              , notre équipe se fera un plaisir de vous répondre du lundi au
              vendredi de 8h à 18h (UTC+1).{' '}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <ul className="list-disc list-inside text-sm space-y-1 pl-6">
            <li>Société : {import.meta.env.VITE_COMPANY_NAME}</li>
            <li>SIREN : 30337622200053</li>
            <li>Adresse : {import.meta.env.VITE_COMPANY_ADDRESS}</li>
            <li>
              Email:{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              Téléphone:{' '}
              <a
                href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
