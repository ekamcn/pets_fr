import React from 'react';

export default function TermsServicesPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-4xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">Conditions générales</p>
        <p className="!text-2xl sm:!text-3xl font-bold">
          Conditions de service
        </p>

        <div>
          <h2 className="!text-base font-semibold mt-4 sm:mt-6">
            Qui nous sommes
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            {import.meta.env.VITE_COMPANY_NAME} (« nous », « notre » ou « nos »)
            exploite le site web {import.meta.env.VITE_COMPANY_NAME}/ (le « Site
            »). Nous sommes dédiés à fournir des produits et services de
            commerce électronique de haute qualité. Ce document décrit les
            conditions générales régissant votre utilisation de notre Site.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Acceptation des conditions
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En accédant et en utilisant notre Site, vous confirmez que vous
            acceptez de respecter ces Conditions de service. Si vous n’acceptez
            pas ces conditions, veuillez ne pas utiliser notre Site. Nous nous
            réservons le droit de modifier ces conditions à tout moment, et
            l’utilisation continue du Site après de tels changements constituera
            votre acceptation des nouvelles conditions.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Licence d’utilisation de notre Site
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Sous réserve de votre respect de ces Conditions, nous vous accordons
            une licence révocable, non exclusive et non transférable pour
            accéder et utiliser notre Site à des fins personnelles et non
            commerciales.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Définitions</h2>
          <p className="!text-sm leading-6 sm:leading-7 !pb-4">
            Pour expliquer les choses aussi clairement que possible dans ces
            Conditions générales, chaque fois que l’un de ces termes est
            mentionné, il est strictement défini comme suit :
          </p>
          <ul className="!list-disc !list-inside !space-y-2 !text-gray-700 !text-sm !pl-6 !lg:pl-8">
            <li>
              Cookie : Une petite quantité de données générée par un site web et
              enregistrée par votre navigateur web. Il est utilisé pour
              identifier votre navigateur, fournir des analyses et mémoriser des
              informations vous concernant, telles que votre préférence
              linguistique ou vos informations de connexion.
            </li>
            <li>
              Entreprise : Lorsque cette politique mentionne « Entreprise », «
              nous », « notre » ou « nos », elle fait référence à{' '}
              {import.meta.env.VITE_COMPANY_NAME},{' '}
              {import.meta.env.VITE_COMPANY_ADDRESS}, qui est responsable de vos
              informations en vertu de ces Conditions générales.
            </li>
            <li>
              Pays : L’emplacement où {import.meta.env.VITE_COMPANY_NAME} ou les
              propriétaires/fondateurs de {import.meta.env.VITE_COMPANY_NAME}{' '}
              sont basés.
            </li>
            <li>
              Appareil : Tout appareil connecté à Internet, tel qu’un téléphone,
              une tablette, un ordinateur ou tout autre appareil pouvant être
              utilisé pour visiter {import.meta.env.VITE_COMPANY_NAME} et
              utiliser les services.
            </li>
            <li>
              Service : Fait référence aux services fournis par{' '}
              {import.meta.env.VITE_COMPANY_NAME} tels que décrits dans les
              conditions pertinentes (si disponibles) et sur cette plateforme.
            </li>
            <li>
              Service tiers : Fait référence aux annonceurs, sponsors de
              concours, partenaires promotionnels et marketing, et autres qui
              fournissent notre contenu ou dont les produits ou services
              pourraient vous intéresser.
            </li>
            <li>
              Site web : Le site de {import.meta.env.VITE_COMPANY_NAME},
              accessible via cette URL : {import.meta.env.VITE_COMPANY_NAME}/.
            </li>
            <li>
              Vous : Une personne ou une entité enregistrée auprès de{' '}
              {import.meta.env.VITE_COMPANY_NAME} pour utiliser les Services.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Responsabilités de l’utilisateur
          </h2>
          <p className="!text-sm leading-6 sm:leading-7 !pb-4">
            Vous acceptez de :
          </p>
          <ul className="!list-disc !list-inside !space-y-2 !text-gray-700 !text-sm !pl-6 !lg:pl-8">
            <li>
              Fournir des informations précises, actuelles et complètes lors de
              la création d’un compte ou de la passation d’une commande.
            </li>
            <li>
              Maintenir la sécurité de votre compte en protégeant votre mot de
              passe et en limitant l’accès à votre compte.
            </li>
            <li>
              Nous informer immédiatement de toute utilisation non autorisée de
              votre compte ou de toute autre violation de la sécurité.
            </li>
            <li>
              Accepter la responsabilité de toutes les activités qui se
              produisent sous votre compte.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Restrictions</h2>
          <p className="!text-sm leading-6 sm:leading-7 !pb-4">
            Vous acceptez de ne pas, et de ne pas permettre à d’autres de :
          </p>
          <ul className="!list-disc !list-inside !space-y-2 !text-gray-700 !text-sm !pl-6 !lg:pl-8">
            <li>
              Concéder une licence, vendre, louer, céder, distribuer,
              transmettre, héberger, externaliser, divulguer ou exploiter
              commercialement le site web ou rendre la plateforme disponible à
              un tiers.
            </li>
            <li>
              Modifier, créer des œuvres dérivées, désassembler, décrypter,
              décompiler ou effectuer une ingénierie inverse de toute partie du
              site web.
            </li>
            <li>
              Supprimer, modifier ou masquer tout avis de propriété (y compris
              tout avis de droit d’auteur ou de marque déposée) de{' '}
              {import.meta.env.VITE_COMPANY_NAME} ou de ses affiliés,
              partenaires, fournisseurs ou concédants de licence du site web.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Informations que nous collectons
          </h2>
          <p className="!text-sm leading-6 sm:leading-7 !pb-4">
            Nous pouvons collecter des informations personnelles lorsque vous :
          </p>
          <ul className="!list-disc !list-inside !space-y-2 !text-gray-700 !text-sm !pl-6 !lg:pl-8">
            <li>Créez un compte</li>
            <li>Passez une commande</li>
            <li>Vous abonnez à notre newsletter</li>
            <li>Contactez le service client</li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Types d’informations collectées
          </h2>
          <ul className="!list-disc !list-inside !space-y-2 !text-gray-700 !text-sm !pl-6 !lg:pl-8">
            <li>
              Informations d’identification personnelle : Nom, adresse e-mail,
              adresse postale et numéro de téléphone.
            </li>
            <li>
              Informations de paiement : Les détails de la carte de crédit sont
              traités de manière sécurisée via des processeurs de paiement
              tiers.
            </li>
            <li>
              Informations d’identification non personnelles : Type de
              navigateur, type d’appareil, adresse IP, pages visitées et temps
              passé sur le site.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Politique de retour et de remboursement
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Si vous n’êtes pas satisfait de votre achat, veuillez nous contacter
            via {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL} dans les 14 jours
            pour les retours ou les échanges. Les produits doivent être
            retournés dans leur état et emballage d’origine.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Limitation de responsabilité
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En aucun cas {import.meta.env.VITE_COMPANY_NAME} ne pourra être tenu
            responsable de tout dommage direct, indirect, accessoire, spécial ou
            consécutif résultant de votre utilisation du Site ou de tout produit
            acheté par son intermédiaire.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Indemnisation</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous acceptez d’indemniser, de défendre et de tenir{' '}
            {import.meta.env.VITE_COMPANY_NAME}, ses affiliés et employés
            indemnes de toute réclamation, perte, responsabilité, dommage ou
            frais (y compris les honoraires raisonnables d’avocat) découlant de
            votre utilisation du Site ou de la violation de ces Conditions.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Vos suggestions</h2>
          <div className="flex flex-col gap-4">
            <p className="!text-sm leading-6 sm:leading-7">
              Tout commentaire, idée, amélioration ou suggestion
              (collectivement, « Suggestions ») fourni par vous à{' '}
              {import.meta.env.VITE_COMPANY_NAME} concernant le site web restera
              la propriété exclusive de {import.meta.env.VITE_COMPANY_NAME}.
            </p>
            <p className="!text-sm leading-6 sm:leading-7">
              {import.meta.env.VITE_COMPANY_NAME} sera libre d’utiliser, copier,
              modifier, publier ou redistribuer les Suggestions à toute fin et
              de toute manière sans aucun crédit ou compensation pour vous.
            </p>
          </div>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Votre consentement</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous avons mis à jour nos Conditions générales pour vous offrir une
            transparence complète concernant ce qui est défini lorsque vous
            visitez notre site et comment il est utilisé. En utilisant notre
            site web, en créant un compte ou en effectuant un achat, vous
            consentez par la présente à nos Conditions générales.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Liens vers d’autres sites web
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Ces Conditions générales s’appliquent uniquement aux Services. Les
            Services peuvent contenir des liens vers d’autres sites web non
            exploités ou contrôlés par {import.meta.env.VITE_COMPANY_NAME}. Nous
            ne sommes pas responsables du contenu, de l’exactitude ou des
            opinions exprimées sur ces sites web, et ces sites ne sont pas
            vérifiés, surveillés ou contrôlés pour leur exactitude ou leur
            exhaustivité par nous. Veuillez noter que lorsque vous utilisez un
            lien pour passer des Services à un autre site web, nos Conditions
            générales ne sont plus en vigueur. Votre navigation et interaction
            sur tout autre site web, y compris ceux qui ont un lien sur notre
            plateforme, sont soumises aux propres règles et politiques de ce
            site web. Ces tiers peuvent utiliser leurs propres cookies ou
            d’autres méthodes pour collecter des informations vous concernant.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">COOKIES</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            {import.meta.env.VITE_COMPANY_NAME} utilise des « Cookies » pour
            identifier les zones de notre site web que vous avez visitées. Un
            Cookie est une petite quantité de données stockée sur votre
            ordinateur ou appareil mobile par votre navigateur web. Nous
            utilisons des Cookies pour améliorer les performances et les
            fonctionnalités de notre site web, mais ils ne sont pas essentiels à
            leur utilisation. Cependant, sans ces cookies, certaines
            fonctionnalités comme les vidéos peuvent devenir indisponibles, ou
            vous devrez entrer vos informations de connexion à chaque visite sur
            le site web, car nous ne pourrions pas nous souvenir que vous étiez
            connecté précédemment. La plupart des navigateurs web peuvent être
            configurés pour désactiver l’utilisation des Cookies. Cependant, si
            vous désactivez les Cookies, vous pourriez ne pas être en mesure
            d’accéder correctement ou pas du tout à certaines fonctionnalités de
            notre site web. Nous ne plaçons jamais d’informations
            personnellement identifiables dans les Cookies.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">
            Modifications de ces conditions
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous pouvons mettre à jour ces Conditions de service de temps à
            autre. Toute modification sera publiée sur cette page avec une date
            d’entrée en vigueur mise à jour. Nous vous encourageons à consulter
            ces Conditions périodiquement pour rester informé de vos droits et
            obligations.
          </p>
        </div>

        <div>
          <h2 className="!text-base font-semibold">Contactez-nous</h2>
          <p className="!text-sm leading-6 sm:leading-7 pb-4">
            Si vous avez des questions concernant ces Conditions de service,
            veuillez nous contacter à :
          </p>
          <p className="flex flex-col gap-2 !text-sm sm:!text-base">
            <span className="break-words">
              Email :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL || 'Email non défini'}`}
                className="underline underline-offset-4 break-all"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </span>
            <span>
              Téléphone :{' '}
              <a
                href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE || 'Téléphone non défini'}`}
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}
              </a>
            </span>
            <span className="break-words">
              Adresse : {import.meta.env.VITE_COMPANY_ADDRESS}
            </span>
            <span>
              Site web :{' '}
              <a
                href={
                  import.meta.env.VITE_DOMAIN_NAME.startsWith('http')
                    ? import.meta.env.VITE_DOMAIN_NAME
                    : `https://${import.meta.env.VITE_DOMAIN_NAME}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                {import.meta.env.VITE_DOMAIN_NAME}
              </a>
            </span>
            <span className="pt-4">Dernière mise à jour : 1-7-2025</span>
          </p>
        </div>
      </div>
    </div>
  );
}
