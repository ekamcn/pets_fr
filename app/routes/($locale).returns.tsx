import React from 'react';

export default function RefundPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5 [&_ul]:-indent-[1.3em]">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Politiques de Remboursements
        </p>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            Durée de la Politique de Retours
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre politique de retour dure 30 jours. Si 30 jours se sont écoulés
            depuis votre achat, nous ne pouvons malheureusement pas vous offrir
            de remboursement ou d'échange, sauf dans les cas couverts par le
            droit de rétractation de 14 jours, tel que décrit ci-dessous.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">Conditions de Retour</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour être admissible à un retour, votre article doit être inutilisé
            et dans le même état que vous l'avez reçu. Il doit également être,
            de préférence, dans l'emballage d'origine. Si votre article est
            défectueux ou endommagé à la réception du colis, veuillez suivre la
            procédure décrite dans la partie concernant les échanges ci-dessous.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">Articles défectueux</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Le client doit renvoyer les articles neufs ou non consommés dans
            leur intégralité et dans leurs emballages d’origines, intacts,
            accompagnés de tous les accessoires éventuels, notices d’emploi et
            documentations (dans son emballage cellophane d’origine
            impérativement et avec la facture correspondante). Dans une telle
            situation, l’acheteur se doit d’envoyer la preuve du/des vice(s) à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>{' '}
            (description et photos/vidéos jointes).
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour effectuer un retour, vous devez également nous présenter un
            reçu ou une preuve d’achat.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Veuillez s’il vous plaît ne pas renvoyer votre achat chez le
            fabricant, nous vous indiquerons les démarches à suivre lorsque
            votre dossier sera accepté suivant nos conditions.
          </p>
          <ul className="!list-disc !list-inside space-y-2 !text-sm !pl-6 lg:!pl-8">
            <li>
              Tout article qui n’est pas dans son état d’origine, qui est
              endommagé ou qui présente certaines pièces manquantes pour des
              raisons qui ne sont pas dues à une erreur de notre part.
            </li>
            <li>
              Tout article qui est retourné plus de 30 jours après la livraison.
              Droit de Rétractation
            </li>
          </ul>

          <p className="!text-sm leading-6 sm:leading-7">
            Conformément à la législation européenne, vous disposez d'un droit
            de rétractation de 30 jours à compter de la réception de votre
            commande. Pendant cette période, vous pouvez retourner le produit
            sans avoir à justifier de motifs ni à payer de pénalités. Pour
            exercer ce droit, veuillez nous contacter par email à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">Frais de Retour</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les frais de retour sont pris en charge par notre société avec nos
            bordereaux de retour.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les frais de retour sont à la charge de notre société, veuillez nous
            contacter pour organiser le retour sans frais supplémentaires.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">Délais de Remboursement</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Une fois votre retour reçu et inspecté, nous vous enverrons un
            e-mail pour vous informer que nous avons reçu votre article
            retourné. Nous vous informerons également de l'approbation ou du
            rejet de votre remboursement. Si votre demande est approuvée, alors
            votre remboursement sera traité, et un crédit sera automatiquement
            appliqué à votre carte de crédit ou à votre méthode originale de
            paiement, dans un délai de 5 jours ouvrés.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            Décrire le Processus de Retour
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour initier un retour, veuillez contacter notre service client par
            email à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            . Dans votre email, veuillez inclure votre numéro de commande, une
            copie de la facture, et une description du problème (le cas
            échéant).
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour retourner un produit, envoyez-nous un email à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            , puis l’envoyer par la poste à :{' '}
            {import.meta.env.VITE_COMPANY_ADDRESS}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            Remboursements (le cas échéant)
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Une fois que nous aurons reçu et inspecté l’article retourné, nous
            vous enverrons un e-mail pour vous confirmer que nous l’avons bien
            reçu. Nous vous informerons également de notre décision quant à
            l’approbation ou au rejet de votre demande de remboursement. Si
            votre demande est approuvée, alors votre remboursement sera traité,
            et un crédit sera automatiquement appliqué à votre carte de crédit
            ou à votre méthode originale de paiement, dans un délai d’un certain
            nombre de jours.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            Remboursements tardifs ou manquants (le cas échéant)
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Si vous n’avez pas encore reçu de remboursement, vérifiez à nouveau
            votre compte bancaire. Ensuite, contactez votre compagnie de carte
            de crédit, cela peut prendre un certain temps avant que votre
            remboursement soit officiellement publié. Ensuite, contactez votre
            banque. Il y a souvent du temps de traitement avant qu'un
            remboursement ne soit posté. Si vous avez fait tout cela et que vous
            n'avez toujours pas reçu votre remboursement, veuillez nous
            contacter à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            Articles de vente (le cas échéant)
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Seuls les articles à prix régulier peuvent être remboursés.
            Malheureusement, les articles en solde ne peuvent être remboursés.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">Échange (le cas échéant)</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne remplaçons les articles que s'ils sont défectueux et/ou
            endommagés. Si vous devez l'échanger contre le même article,
            envoyez-nous un e-mail à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            . Dans cet e-mail, nous vous invitons à nous joindre le numéro de
            commande (ou une copie de la facture) et un justificatif (une photo
            ou une vidéo des éléments défectueux et/ou endommagés) et envoyez
            votre article à l’adresse indiquée sur l'emballage de votre colis
          </p>

          <div>
            <p className="!text-sm">
              Pour nous contacter, envoyez seulement un email à{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline decoration-2"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>{' '}
              ou par téléphone au{' '}
              <a
                href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`}
                className="underline decoration-2"
              >
                {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}
              </a>{' '}
              notre équipe se fera un plaisir de vous répondre du lundi au
              vendredi de 8h à 18h (UTC+1).
            </p>
          </div>
        </div>

        <div>
          <ul className="!list-disc !list-inside space-y-2 !text-sm !pl-6 lg:!pl-8">
            <li>Société : {import.meta.env.VITE_COMPANY_NAME}</li>
            <li>SIREN : 30337622200053</li>
            <li>Adresse : {import.meta.env.VITE_COMPANY_ADDRESS}</li>
            <li>
              Email :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </li>
            <li>
              Téléphone :{' '}
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
