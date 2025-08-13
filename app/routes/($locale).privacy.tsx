import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5 ">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Politiques de Confidentialité
        </p>
        <div>
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
            automatiquement l’adresse IP de votre ordinateur, ce qui nous permet
            d’obtenir plus de détails sur le navigateur et le système
            d’exploitation que vous utilisez.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Marketing par e-mail (le cas échéant) : Avec votre permission, nous
            pourrions vous envoyer des e-mails au sujet de notre boutique, de
            nouveaux produits et d’autres mises à jour.
          </p>
        </div>

        <div>
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
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="!text-sm">ARTICLE 3 – DIVULGATION</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous pouvons divulguer vos renseignements personnels si la loi nous
            oblige à le faire ou si vous violez nos Conditions Générales de
            Vente et d’Utilisation.
          </p>
        </div>

        <div>
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
            passerelle de paiement direct, Shopify stockera vos renseignements
            de carte de crédit. Ces renseignements sont chiffrés conformément à
            la norme PCI-DSS. Les renseignements relatifs à votre transaction
            d’achat sont conservés aussi longtemps que nécessaire pour finaliser
            votre commande, puis supprimés.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toutes les passerelles de paiement direct respectent la norme
            PCI-DSS, gérée par le conseil des normes de sécurité PCI, assurant
            un traitement sécurisé des données.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour plus d’informations, veuillez consulter les{' '}
            <a
              href="https://www.shopify.com/legal/terms"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Conditions d’Utilisation de Shopify
            </a>{' '}
            et la{' '}
            <a
              href="https://www.shopify.com/legal/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Politique de Confidentialité de Shopify
            </a>
            .
          </p>
        </div>

        <div>
          <h2 className="!text-sm">
            ARTICLE 5 – SERVICES FOURNIS PAR DES TIERS
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Certains tiers fournisseurs de services, comme les passerelles de
            paiement, possèdent leurs propres politiques de confidentialité.
            Nous vous recommandons de lire leurs politiques pour comprendre
            comment ils traitent vos renseignements personnels.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vos renseignements pourraient être régis par les lois de la
            juridiction dans laquelle ces fournisseurs se situent.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Une fois que vous quittez notre site ou êtes redirigé vers un tiers,
            vous n’êtes plus régi par cette politique de confidentialité.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">ARTICLE 6 – SÉCURITÉ</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous prenons des précautions raisonnables et suivons les meilleures
            pratiques pour protéger vos données contre la perte, le
            détournement, la divulgation ou l’accès non autorisé.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les informations de carte de crédit sont chiffrées via SSL et
            AES-256. Bien qu’aucune méthode ne soit sûre à 100 %, nous
            respectons la norme PCI-DSS et les standards de l’industrie.
          </p>
          <p className="!text-sm leading-6 sm:leading-7 font-normal">
            Fichiers témoins (cookies) utilisés :
          </p>
          <ul className="!list-disc !list-inside space-y-1 pl-6 text-sm">
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

        <div>
          <h2 className="!text-sm">ARTICLE 7 – ÂGE DE CONSENTEMENT</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En utilisant ce site, vous déclarez avoir l’âge légal dans votre
            pays de résidence, et consentir à ce que des mineurs sous votre
            responsabilité puissent utiliser ce site.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">
            ARTICLE 8 – MODIFICATIONS DE LA POLITIQUE
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous pouvons modifier cette politique à tout moment. Les changements
            prendront effet immédiatement après leur publication. En cas
            d’acquisition ou fusion, vos données pourraient être transférées aux
            nouveaux propriétaires.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Conditions Générales du Marketing Textuel
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En fournissant votre numéro de téléphone, vous acceptez de recevoir
            des notifications et offres par SMS de la part de notre plateforme
            SMSBump Inc. Pour vous désabonner, répondez STOP à tout message ou
            utilisez le lien fourni. Les tarifs peuvent s’appliquer.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous utilisons des cookies pour suivre les paniers abandonnés afin
            d’envoyer des rappels marketing par SMS.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">ARTICLE 9 – DROITS DES UTILISATEURS</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Conformément au RGPD, vous avez les droits suivants :
          </p>
          <ul className="!list-disc !list-inside space-y-2 pl-6 text-sm">
            <li>Accès à vos données personnelles.</li>
            <li>Rectification des données inexactes ou incomplètes.</li>
            <li>Suppression de vos données personnelles.</li>
            <li>Opposition au traitement pour motifs légitimes.</li>
            <li>
              Portabilité de vos données dans un format structuré et lisible.
            </li>
          </ul>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour exercer ces droits, contactez-nous à{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`} className="underline">
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
            nécessaire pour les objectifs définis, y compris les obligations
            légales ou comptables.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">ARTICLE 11 – SÉCURITÉ DES DONNÉES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous utilisons des mesures techniques et organisationnelles pour
            protéger vos données, notamment le chiffrement SSL et AES-256.
          </p>
        </div>

        <div>
          <h2 className="!text-sm">ARTICLE 12 – UTILISATION DES COOKIES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre site utilise des cookies pour améliorer l’expérience
            utilisateur et analyser l’audience. Vous pouvez gérer les cookies
            via les paramètres de votre navigateur. Les types utilisés incluent
            :
          </p>
          <ul className="!list-disc !list-inside space-y-2 pl-6 text-sm">
            <li>Cookies nécessaires</li>
            <li>Cookies de performance</li>
            <li>Cookies de fonctionnalité</li>
            <li>Cookies publicitaires</li>
          </ul>
        </div>

        <div>
          <h2 className="!text-sm">
            ARTICLE 13 – PARTAGE DES DONNÉES AVEC DES TIERS
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Vos données peuvent être partagées avec :
          </p>
          <ul className="!list-disc !list-inside space-y-2 pl-6 text-sm">
            <li>Prestataires de services (hébergement, paiement, etc.)</li>
            <li>Autorités légales si nécessaire</li>
          </ul>
        </div>

        <div>
          <h2 className="!text-sm">
            ARTICLE 14 – MISES À JOUR DE LA POLITIQUE DE CONFIDENTIALITÉ
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Cette politique peut être mise à jour périodiquement. Les
            utilisateurs seront informés par email. Veuillez consulter
            régulièrement cette page.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">QUESTIONS ET COORDONNÉES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour accéder, modifier, supprimer vos données ou poser une question,
            contactez notre responsable confidentialité à{' '}
            <a href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}>
            {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
