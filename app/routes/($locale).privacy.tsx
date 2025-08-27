import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5 [&_ul]:-indent-[1.3em]">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Politiques de confidentialités
        </p>
        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">
            ARTICLE 1 – RENSEIGNEMENTS PERSONNELS RECUEILLIS
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Lorsque vous effectuez un achat sur notre boutique, dans le cadre de
            notre processus d’achat et de vente, nous recueillons les
            renseignements personnels que vous nous fournissez, tels que votre
            nom, votre adresse et votre adresse e-mail.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Lorsque vous naviguez sur notre boutique, nous recevons également
            automatiquement l’adresse de protocole Internet (adresse IP) de
            votre ordinateur, ce qui nous permet d’obtenir plus de détails sur
            le navigateur et le système d’exploitation que vous utilisez.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Marketing par e-mail (le cas échéant) : Avec votre permission, nous
            pourrions vous envoyer des e-mails au sujet de notre boutique, de
            nouveaux produits et d’autres mises à jour.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">ARTICLE 2 – CONSENTEMENT</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Comment obtenez-vous mon consentement ? Lorsque vous nous fournissez
            vos renseignements personnels pour conclure une transaction,
            vérifier votre carte de crédit, passer une commande, planifier une
            livraison ou retourner un achat, nous vous demandons directement
            votre consentement explicite pour les collecter et les utiliser à
            cette fin uniquement.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Si nous vous demandons de nous fournir vos renseignements personnels
            pour une autre raison, à des fins de marketing par exemple, nous
            vous demanderons directement votre consentement explicite, ou nous
            vous donnerons la possibilité de refuser.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Comment puis-je retirer mon consentement ? Si après nous avoir donné
            votre consentement, vous changez d’avis et ne consentez plus à ce
            que nous puissions vous contacter ou recueillir vos renseignements,
            vous pouvez nous en aviser en nous contactant à{' '}
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
          <h2 className="!text-sm">ARTICLE 3 – DIVULGATION</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous pouvons divulguer vos renseignements personnels si la loi nous
            oblige à le faire ou si vous violez nos Conditions Générales de
            Vente et d’Utilisation.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">ARTICLE 4 – SHOPIFY</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre boutique est hébergée sur Shopify Inc. Ils nous fournissent la
            plateforme e-commerce en ligne qui nous permet de vous vendre nos
            services et produits. Vos données sont stockées dans le système de
            stockage de données et les bases de données de Shopify, et dans
            l’application générale de Shopify. Vos données sont conservées sur
            un serveur sécurisé protégé par un pare-feu.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Paiement : Si vous réalisez votre achat par le biais d’une
            passerelle de paiement direct, dans ce cas Shopify stockera vos
            renseignements de carte de crédit. Ces renseignements sont chiffrés
            conformément à la norme de sécurité des données établie par
            l’industrie des cartes de paiement (norme PCI-DSS). Les
            renseignements relatifs à votre transaction d’achat sont conservés
            aussi longtemps que nécessaire pour finaliser votre commande. Une
            fois votre commande finalisée, les renseignements relatifs à la
            transaction d’achat sont supprimés.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toutes les passerelles de paiement direct respectent la norme
            PCI-DSS, gérée par le conseil des normes de sécurité PCI, qui
            résulte de l’effort conjoint d’entreprises telles que Visa,
            MasterCard, American Express et Discover.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les exigences de la norme PCI-DSS permettent d’assurer le traitement
            sécurisé des données de cartes de crédit par notre boutique et par
            ses prestataires de services.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour plus d’informations, veuillez consulter les{' '}
            <a
              href="https://www.shopify.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ici
            </a>{' '}
            ou la{' '}
            <a
              href="https://www.shopify.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              ici
            </a>
            .
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">
            ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            De manière générale, les fournisseurs tiers que nous utilisons vont
            uniquement recueillir, utiliser vos renseignements dans la mesure du
            nécessaire pour pouvoir réaliser les services qu’ils nous
            fournissent.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Cependant, certains tiers fournisseurs de services, comme les
            passerelles de paiement et autres processeurs de transactions de
            paiement, possèdent leurs propres politiques de confidentialité
            quant aux renseignements que nous sommes tenus de leur fournir pour
            vos transactions d’achat.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            En ce qui concerne ces fournisseurs, nous vous recommandons de lire
            attentivement leurs politiques de confidentialité pour que vous
            puissiez comprendre la manière dont ils traiteront vos
            renseignements personnels.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Il ne faut pas oublier que certains fournisseurs peuvent être situés
            ou avoir des installations situées dans une juridiction différente
            de la vôtre ou de la nôtre. Donc si vous décidez de poursuivre une
            transaction qui requiert les services d’un fournisseur tiers, vos
            renseignements pourraient alors être régis par les lois de la
            juridiction dans laquelle ce fournisseur se situe ou celles de la
            juridiction dans laquelle ses installations sont situées.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            À titre d’exemple, si vous êtes situé au Canada et que votre
            transaction est traitée par une passerelle de paiement située aux
            États-Unis, les renseignements vous appartenant qui ont été utilisés
            pour conclure la transaction pourraient être divulgués en vertu de
            la législation des États-Unis, y compris le Patriot Act.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Une fois que vous quittez le site de notre boutique ou que vous êtes
            redirigé vers le site web ou l’application d’un tiers, vous n’êtes
            plus régi par la présente Politique de Confidentialité ni par les
            Conditions Générales de Vente et d’Utilisation de notre site web.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">ARTICLE 6 – SÉCURITÉ</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour protéger vos données personnelles, nous prenons des précautions
            raisonnables et suivons les meilleures pratiques de l’industrie pour
            nous assurer qu’elles ne soient pas perdues, détournées, consultées,
            divulguées, modifiées ou détruites de manière inappropriée.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Si vous nous fournissez vos informations de carte de crédit, elles
            seront chiffrées par le biais de l’utilisation du protocole de
            sécurisation SSL et conservées avec un chiffrement de type AES-256.
            Bien qu’aucune méthode de transmission sur Internet ou de stockage
            électronique ne soit sûre à 100 %, nous suivons toutes les exigences
            de la norme PCI-DSS et mettons en œuvre des normes supplémentaires
            généralement reconnues par l’industrie.
          </p>
          <h2 className="!text-sm">FICHIERS TÉMOINS (COOKIES)</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Voici une liste de fichiers témoins que nous utilisons. Nous les
            avons énumérés ici pour que vous ayez la possibilité de choisir si
            vous souhaitez les autoriser ou non.
          </p>
          <ul className="!list-disc !list-inside space-y-2 !text-sm !pl-6 lg:!pl-8">
            <li>
              _session_id : identificateur unique de session pour stocker des
              informations relatives à votre session.
            </li>
            <li>
              _shopify_visit : utilisé pour enregistrer le nombre de visites
              (durée 30 minutes).
            </li>
            <li>
              _shopify_uniq : calcule le nombre de visites par client unique
              (expire à minuit).
            </li>
            <li>
              cart : identificateur unique pour votre panier (2 semaines).
            </li>
            <li>
              _secure_session_id : identificateur unique de session sécurisée.
            </li>
            <li>
              storefront_digest : utilisé pour contrôler l’accès si la boutique
              a un mot de passe.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">ARTICLE 7 – ÂGE DE CONSENTEMENT</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En utilisant ce site, vous déclarez que vous avez au moins l’âge de
            la majorité dans votre État ou province de résidence, et que vous
            nous avez donné votre consentement pour permettre à toute personne
            d’âge mineur à votre charge d’utiliser ce site web.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">
            ARTICLE 8 – MODIFICATIONS APPORTÉES À LA PRÉSENTE POLITIQUE DE
            CONFIDENTIALITÉ
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit de modifier la présente politique de
            confidentialité à tout moment, donc veuillez s’il vous plaît la
            consulter fréquemment. Les changements et les clarifications
            prendront effet immédiatement après leur publication sur le site
            web. Si nous apportons des changements au contenu de cette
            politique, nous vous aviserons ici qu’elle a été mise à jour, pour
            que vous sachiez quels renseignements nous recueillons, la manière
            dont nous les utilisons, et dans quelles circonstances nous les
            divulguons, s’il y a lieu de le faire.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Si notre boutique fait l’objet d’une acquisition par ou d’une fusion
            avec une autre entreprise, vos renseignements pourraient être
            transférés aux nouveaux propriétaires pour que nous puissions
            continuer à vous vendre des produits.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            CONDITIONS GENERALES DU MARKETING TEXTUEL
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous utilisons une plateforme de messagerie textuelle, qui est
            soumise aux conditions générales suivantes. En saisissant votre
            numéro de téléphone à la caisse et en initialisant un achat, en vous
            abonnant via notre formulaire d&apos;abonnement ou un mot-clé, vous
            acceptez que nous puissions vous envoyer des notifications par SMS
            (pour votre commande, y compris les rappels de panier abandonné) et
            des offres de marketing par SMS. Votre numéro de téléphone, votre
            nom et les informations relatives à votre achat seront partagés avec
            notre plateforme SMS &quot;SMSBump Inc, une société de l&apos;Union
            européenne ayant son siège à Sofia, Bulgarie, UE. Ces données seront
            utilisées pour vous envoyer des messages marketing ciblés et des
            notifications. Si vous souhaitez vous désabonner de la réception de
            messages marketing et de notifications par SMS, répondez par STOP à
            tout message mobile envoyé par nous ou utilisez le lien de
            désabonnement que nous vous avons fourni dans l&apos;un de nos
            messages. Vous comprenez et acceptez que les méthodes alternatives
            de désinscription, telles que l&apos;utilisation de mots ou de
            demandes alternatives, ne seront pas considérées comme un moyen
            raisonnable de désinscription. Les tarifs des messages et des
            données peuvent s&apos;appliquer. Pour toute question, veuillez
            envoyer &quot;HELP&quot; par SMS au numéro qui vous a envoyé les
            messages. Vous pouvez également nous contacter pour plus
            d&apos;informations. Si vous souhaitez vous désabonner, veuillez
            suivre les procédures ci-dessus.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous accordons une grande importance à votre vie privée et aux
            informations que vous consentez à partager dans le cadre de notre
            service de marketing par SMS. Nous utilisons ces informations pour
            vous envoyer des notifications par SMS (pour votre commande, y
            compris des rappels de panier abandonné), des offres de marketing
            par SMS et des textes transactionnels, y compris des demandes
            d&apos;évaluation de notre part.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre site web utilise des cookies pour garder une trace des
            articles que vous avez mis dans votre panier, y compris lorsque vous
            avez abandonné votre commande. Ces informations sont utilisées pour
            déterminer quand envoyer des messages de rappel de panier par SMS.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">ARTICLE 9 – DROITS DES UTILISATEURS</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Conformément au Règlement Général sur la Protection des Données
            (RGPD), vous disposez des droits suivants concernant vos données
            personnelles :
          </p>
          <ul className="!list-disc !list-inside space-y-2 !text-sm !pl-6 lg:!pl-8">
            <li>
              Accès : Vous avez le droit de demander l&apos;accès aux données
              personnelles que nous détenons à votre sujet.
            </li>
            <li>
              Rectification : Vous avez le droit de demander la correction des
              données inexactes ou incomplètes
            </li>
            <li>
              Suppression : Vous avez le droit de demander la suppression de vos
              données personnelles.
            </li>
            <li>
              Opposition : Vous avez le droit de vous opposer au traitement de
              vos données personnelles pour des raisons légitimes.
            </li>
            <li>
              Portabilité : Vous avez le droit de recevoir les données
              personnelles que vous avez fournies dans un format structuré,
              couramment utilisé et lisible par machine, et de les transmettre à
              un autre responsable du traitement.
            </li>
          </ul>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour exercer ces droits, contactez-nous à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>{' '}
            en joignant une copie de votre pièce d’identité.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">
            ARTICLE 10 – DURÉE DE CONSERVATION DES DONNÉES
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous conservons vos données personnelles uniquement le temps
            nécessaire pour accomplir les objectifs pour lesquels elles ont été
            collectées, notamment pour satisfaire à nos obligations légales,
            comptables ou de reporting.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">ARTICLE 11 – SÉCURITÉ DES DONNÉES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous mettons en œuvre des mesures techniques et organisationnelles
            appropriées pour protéger vos données personnelles contre la
            destruction, la perte, l&apos;altération, la divulgation non
            autorisée ou l&apos;accès non autorisé. Ces mesures incluent
            l&apos;utilisation de technologies de chiffrement telles que SSL et
            AES-256 pour les informations sensibles.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">ARTICLE 12 – UTILISATION DES COOKIES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre site {import.meta.env.VITE_DOMAIN_NAME} utilise des cookies
            pour améliorer l’expérience utilisateur et analyser l’audience. Vous
            pouvez gérer et refuser l’utilisation des cookies via les paramètres
            de votre navigateur. Les types de cookies utilisés sur notre site
            incluent :
          </p>
          <ul className="!list-disc !list-inside space-y-2 !text-sm !pl-6 lg:!pl-8">
            <li>Cookies nécessaires : pour le fonctionnement du site.</li>
            <li>
              Cookies de performance : pour analyser l’utilisation du site et
              améliorer ses performances.
            </li>
            <li>
              Cookies de fonctionnalité : pour mémoriser vos choix et vous
              offrir des fonctionnalités personnalisées.
            </li>
            <li>
              Cookies publicitaires : pour afficher des publicités pertinentes
              en fonction de vos intérêts.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="!text-sm">
            ARTICLE 13 – PARTAGE DES DONNÉES AVEC DES TIERS
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Vos données personnelles peuvent être partagées avec les tiers
            suivants :
          </p>
          <ul className="!list-disc !list-inside space-y-2 !text-sm !pl-6 lg:!pl-8">
            <li>
              Prestataires de services : pour l’exécution des services proposés
              sur notre site (hébergement, passerelles de paiement, etc.).
            </li>
            <li>
              Autorités légales : en cas de nécessité pour se conformer à la
              loi.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="!text-sm">
            ARTICLE 14 – MISES À JOUR DE LA POLITIQUE DE CONFIDENTIALITÉ
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Cette politique de confidentialité peut être mise à jour
            périodiquement. Les utilisateurs seront informés de toute
            modification par email. Nous invitons les utilisateurs à consulter
            régulièrement cette page pour rester informés des modifications
            éventuelles.
          </p>
        </div>
        <div>
          <h2 className="!text-base font-semibold">QUESTIONS ET COORDONNÉES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Si vous souhaitez accéder à, corriger, modifier ou supprimer toute
            information personnelle que nous avons à votre sujet, déposer une
            plainte, ou si vous souhaitez simplement avoir plus d’informations,
            contactez notre agent responsable des normes de confidentialité à{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
