import React from 'react';

export default function GeneralConditionsPage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">
          Conditions générales de vente
        </p>

        <p className="!text-sm leading-6 sm:leading-7">APERÇU</p>

        {/* Introduction */}
        <div className="flex flex-col gap-4">
          <p className="!text-sm leading-6 sm:leading-7">
            Ce site web est exploité par {import.meta.env.VITE_DOMAIN_NAME}.
            Partout sur le site, nous employons les termes « nous », « notre »
            et « nos » en référence à {import.meta.env.VITE_DOMAIN_NAME}. Ce
            site web, y compris l’ensemble des informations, outils et services
            auquel il donne accès, est offert par{' '}
            {import.meta.env.VITE_DOMAIN_NAME} à l’utilisateur que vous êtes, à
            condition que vous acceptiez la totalité des modalités, conditions,
            politiques et avis stipulés ici. Ce site respecte et est régi par la
            loi britannique.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            En visitant notre site et/ou en achetant quelque chose auprès de
            notre entreprise, vous prenez part à notre « Service » et acceptez
            d’être lié(e) par les modalités et conditions suivantes («
            Conditions générales », « Conditions d’utilisation »), y compris par
            les modalités, conditions et politiques mentionnées aux présentes
            et/ou accessibles en hyperlien. Les présentes Conditions
            d’utilisation s’appliquent à tous les utilisateurs du Site, y
            compris, sans s’y limiter, aux individus qui sont des visiteurs, des
            fournisseurs, des clients, des marchands et/ou des fournisseurs de
            contenu.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Veuillez lire attentivement les présentes Conditions d’utilisation
            avant d’accéder à notre site web et de l’utiliser. En accédant à une
            quelconque partie du Site ou en l’utilisant, vous acceptez d’être
            lié(e) par les présentes Conditions d’utilisation. Si vous
            n’acceptez pas la totalité des modalités et conditions du présent
            accord, vous ne pourrez peut-être pas accéder au site web ou
            utiliser ses services. Si les présentes Conditions d’utilisation
            sont considérées comme une offre, leur acceptation se limite
            expressément à elles.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Chacun des nouveaux outils ou fonctionnalités qui sont ajoutés à la
            présente boutique est également assujetti aux Conditions
            d’utilisation. Vous pouvez consulter la version la plus récente des
            Conditions d’utilisation à tout moment sur cette page. Nous nous
            réservons le droit de mettre à jour, modifier ou remplacer n’importe
            quelle partie des présentes Conditions d’utilisation en publiant
            lesdites mises à jour et/ou modifications sur notre site web. Il
            vous incombe de vérifier cette page de temps à autre pour voir si
            des changements y ont été apportés. En continuant à accéder au site
            web ou à l’utiliser après la publication des modifications, vous
            acceptez celles-ci.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Notre boutique est hébergée sur Shopify Inc., qui nous fournit la
            plateforme e-commerce en ligne permettant de vous vendre nos
            produits et services.
          </p>
        </div>

        {/* SECTION 1 – CONDITIONS D’UTILISATION DE LA BOUTIQUE EN LIGNE */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 1 - Conditions d’utilisation de la boutique en ligne
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En acceptant les présentes Conditions d’utilisation, vous déclarez
            avoir atteint ou dépassé l’âge de la majorité dans votre région,
            province ou État et nous avoir donné l’autorisation de permettre à
            toute personne mineure à votre charge d’utiliser ce site.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous ne devez en aucune façon utiliser nos produits à des fins
            illégales ou non autorisées, ni violer des lois de votre juridiction
            lorsque vous utilisez le Service (y compris, sans toutefois s’y
            limiter, les lois relatives aux droits d’auteur).
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous ne devez pas transmettre de vers informatique, de virus ou tout
            code de nature destructrice.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Une infraction ou une violation de n’importe laquelle des Conditions
            entraînera la résiliation immédiate de vos Services.
          </p>
        </div>

        {/* SECTION 2 – CONDITIONS GÉNÉRALES */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 2 - Conditions générales
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit de refuser de servir toute personne en
            cas de tentative de fraude, comportement abusif ou non-respect des
            présentes conditions générales de vente.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous comprenez que votre contenu (à l’exception des informations
            relatives à votre carte de crédit) peut être transféré sans
            chiffrement et que cela comprend :
            <ul className="list-disc list-inside text-sm space-y-1 mt-2">
              <li>des transmissions sur plusieurs réseaux ;</li>
              <li>
                des changements effectués dans le but de se conformer et de
                s’adapter aux exigences techniques de la connexion de réseaux ou
                d’appareils.
              </li>
            </ul>
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les informations de votre carte de crédit sont toujours chiffrées
            lors de leur transfert sur les réseaux. Toutes les données
            personnelles seront traitées conformément au Règlement Général sur
            la Protection des Données (RGPD).
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous acceptez de ne pas reproduire, dupliquer, copier, vendre,
            revendre ou exploiter toute partie du Service, toute utilisation du
            Service ou tout accès au Service, ou encore tout contact sur le site
            web à travers lequel le Service est fourni, sans notre autorisation
            écrite expresse.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les titres utilisés dans le présent accord sont inclus à titre
            indicatif uniquement et ne limiteront ni n’affecteront aucunement
            ces Conditions.
          </p>
        </div>

        {/* SECTION 3 – EXACTITUDE, EXHAUSTIVITÉ ET ACTUALITÉ DES INFORMATIONS */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 3 - Exactitude, exhaustivité et actualité des informations
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne saurions être tenus responsables si les informations
            proposées sur ce site sont inexactes, incomplètes ou caduques. Le
            contenu de ce site est fourni à titre d’information générale
            uniquement et ne doit pas être considéré ou utilisé comme seule base
            pour la prise de décisions sans consulter des sources d’information
            plus importantes, plus exactes, plus complètes ou plus actuelles. Si
            vous vous fiez au contenu de ce site, vous le faites à vos propres
            risques.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Ce site peut contenir certaines données historiques. Par définition,
            les données historiques ne sont pas actuelles et sont fournies
            uniquement à titre de référence. Nous nous réservons le droit de
            modifier les contenus de ce site à tout moment, mais nous n’avons
            aucune obligation de mettre à jour les informations qu’il contient.
            Vous reconnaissez qu’il vous incombe de surveiller les changements
            apportés à notre site.
          </p>
        </div>

        {/* SECTION 4 – MODIFICATIONS DU SERVICE ET DES PRIX */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            SECTION 4 – MODIFICATIONS DU SERVICE ET DES PRIX
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les prix de nos produits sont modifiables sans préavis.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit de modifier ou de mettre fin au Service
            (ou à une quelconque partie de celui-ci) à tout moment et sans
            préavis. En cas de modification, nous informerons les clients par
            email au moins 30 jours avant l’entrée en vigueur des nouvelles
            conditions. Les clients auront la possibilité de résilier le contrat
            s’ils n’acceptent pas les nouvelles conditions.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne pourrons être tenus responsables envers vous ou tout tiers
            de tout changement de prix, ou encore de toute modification,
            suspension ou interruption du Service.
          </p>
        </div>

        {/* SECTION 5 – PRODUITS OU SERVICES */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal">
            SECTION 5 – PRODUITS OU SERVICES (le cas échéant)
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Il est possible que certains produits ou services ne soient
            disponibles qu’en ligne à travers le site web. Il se peut que les
            quantités de ces produits ou services soient limitées et que leur
            retour ou leur échange soit strictement assujetti à notre Politique
            de retour.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous sommes efforcés de présenter aussi précisément que
            possible les couleurs et images des produits figurant sur la
            boutique. Nous ne pouvons cependant pas garantir la précision
            d’affichage des couleurs sur l’écran de votre ordinateur.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit, sans toutefois y être obligés, de
            limiter la vente de nos produits ou services à n’importe quelle
            personne, région géographique ou juridiction donnée. Nous nous
            autorisons à exercer ce droit au cas par cas.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit de limiter les quantités des produits
            ou services que nous offrons. Toutes les descriptions des produits
            et leur tarification sont modifiables à tout moment, sans préavis et
            à notre entière discrétion. Nous nous réservons le droit
            d’interrompre la vente d’un produit à tout moment.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toute offre de produit ou service sur ce site est nulle là où la loi
            l’interdit.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne garantissons pas que la qualité des produits, services,
            informations ou autres matériels que vous achetez ou obtenez
            répondra à vos attentes.
          </p>
        </div>

        {/* SECTION 6 – EXACTITUDE DE LA FACTURATION ET DES INFORMATIONS DE COMPTE */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 6 - Exactitude de la facturation et des informations de
            compte
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit de refuser toute commande que vous
            passez auprès de nous. Nous pouvons, à notre seule discrétion,
            limiter ou annuler les quantités achetées par personne, par foyer ou
            par commande. Ces restrictions peuvent inclure les commandes passées
            par ou sur le même compte client, la même carte de crédit et/ou des
            commandes utilisant la même adresse de facturation et/ou
            d&apos;expédition. Si nous modifions ou annuler une commande, il se
            peut que nous tentions de vous en aviser en vous contactant au moyen
            de l&apos;adresse e-mail et/ou de l&apos;adresse de facturation ou
            du numéro de téléphone fournis au moment de la commande. Nous nous
            réservons le droit de limiter ou d&apos;interdire les commandes qui,
            selon nous, semblent avoir été passées par des négociants, des
            revendeurs ou des distributeurs.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous acceptez de fournir des informations d&apos;achat et de compte
            actuelles, complètes et exactes pour tous les achats effectués dans
            notre boutique. Vous acceptez de mettre rapidement à jour votre
            compte et toute autre information, y compris votre adresse e-mail et
            vos numéros de cartes de crédit et leurs dates d&apos;expiration,
            afin que nous puissions finaliser vos transactions et vous contacter
            en cas de besoin.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour plus d&apos;informations, veuillez consulter notre Politique de
            retour.
          </p>
        </div>

        {/* SECTION 7 – OUTILS FACULTATIFS */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 7 - Outils facultatifs
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous sommes susceptibles de vous fournir l&apos;accès à des outils
            tiers que nous ne surveillons, ne contrôlons et ne gérons pas.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous reconnaissez et acceptez que nous vous fournissons l&apos;accès
            à ces outils « tels quels » et « sous réserve de disponibilité »,
            sans garantie, représentation ou condition d&apos;aucune sorte et
            sans la moindre approbation. Nous ne saurions être tenus
            responsables de quoi que ce soit à l&apos;égard de ce qui pourrait
            résulter de ou être relié à votre utilisation des outils facultatifs
            tiers.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toute utilisation par vous des outils facultatifs proposés par le
            biais du site est entièrement à votre discrétion et à vos propres
            risques. En outre, il vous appartient de vous renseigner sur les
            conditions dans lesquelles ces outils sont fournis par le(s)
            fournisseur(s) tiers concerné(s) et accepter ces conditions.
          </p>
        </div>

        {/* SECTION 8 – LIENS DE TIERS */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 8 - Liens de tiers
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Certains contenus, produits et services accessibles via notre
            Service peuvent inclure des éléments provenant de tiers.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les liens de tiers sur ce site peuvent vous rediriger vers des sites
            web de tiers qui ne sont pas affiliés à nous. Nous ne sommes pas
            tenus d’examiner ou d’évaluer leur contenu ou leur exactitude, de
            même que nous ne garantissons pas et n’assumons aucune
            responsabilité quant aux contenus ou sites web, ou aux autres
            contenus, produits ou services de sources tierces.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne sommes pas responsables des préjudices ou dommages liés à
            l’achat ou à l’utilisation de biens, services, ressources, contenus
            ou de toute autre transaction reliée à ces sites web tiers. Veuillez
            lire attentivement les politiques et pratiques de ces tiers et
            assurez-vous de bien les comprendre avant de vous engager dans une
            transaction. Les plaintes, réclamations, préoccupations ou questions
            concernant les produits de tiers doivent être adressées à ces mêmes
            tiers.
          </p>
        </div>

        {/* SECTION 9 – COMMENTAIRES, RETOURS D'EXPÉRIENCE ET AUTRES SOUMISSIONS */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 9 - Commentaires, retours d&apos;expérience et autres
            soumissions
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Si, à notre demande, vous soumettez des contenus spécifiques (par
            exemple, dans le cadre de votre participation à des concours), ou
            si, sans demande de notre part, vous envoyez des idées créatives,
            des suggestions, des propositions, des plans ou d’autres éléments,
            que ce soit en ligne, par e-mail, par courrier ou autrement
            (collectivement, « commentaires »), vous nous accordez le droit, à
            tout moment et sans restriction, de modifier, copier, publier,
            distribuer, traduire et utiliser dans quelque média que ce soit tous
            les commentaires que vous nous transmettez. Nous ne sommes pas et ne
            devrons en aucun cas être tenus (1) de maintenir la confidentialité
            des commentaires ; (2) de dédommager qui que ce soit pour tout
            commentaire fourni ; ou (3) de répondre aux commentaires.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous pouvons, mais nous n&apos;en avons pas l&apos;obligation,
            supprimer le contenu et les comptes contenant du contenu que nous
            jugeons, à notre seule discrétion, illégal, offensant, menaçant,
            diffamatoire, pornographique, obscène ou autrement répréhensible ou
            qui viole la propriété intellectuelle d&apos;une partie ou les
            présentes Conditions d&apos;utilisation.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous convenez que vos commentaires ne doivent en aucun cas porter
            atteinte aux droits de tiers, y compris aux droits d&apos;auteur,
            aux marques de commerce, à la vie privée, à la personnalité ou à
            tout autre droit personnel ou de propriété intellectuelle. Vous
            convenez en outre que vos commentaires ne devront contenir aucun
            élément illégal, injurieux ou obscène, ni aucun virus informatique
            ou autre logiciel malveillant susceptible d&apos;affecter d&apos;une
            quelconque façon le fonctionnement du Service ou de tout site web
            connexe. Vous ne pouvez pas utiliser de fausse adresse e-mail,
            prétendre être quelqu&rsquo;un que vous n&rsquo;êtes pas, ou essayer
            de nous induire, nous ou les tiers, en erreur quant à l’origine des
            commentaires. Vous êtes entièrement responsable de tous les
            commentaires que vous émettez ainsi que de leur exactitude. Nous
            déclinons toute responsabilité à l&apos;égard des commentaires
            publiés par vous ou un tiers.
          </p>
        </div>

        {/* SECTION 10 – INFORMATIONS PERSONNELLES */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 10 - Informations personnelles
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            La transmission de vos informations personnelles sur notre boutique est régie par notre Politique de confidentialité. Cliquez ici pour consulter notre Politique de Confidentialité.{' '}
          </p>
        </div>

        {/* SECTION 11 – ERREURS, INEXACTITUDES ET OMISSIONS */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 11 - Erreurs, inexactitudes et omissions
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Il se peut qu&apos;il y ait parfois, sur notre site ou dans le
            Service, des informations contenant des erreurs typographiques, des
            inexactitudes ou des omissions reliées aux descriptions, aux prix,
            aux promotions, aux offres, aux frais d’expédition, aux délais
            d&apos;acheminement et à la disponibilité des produits. Nous nous
            réservons le droit de corriger toute erreur, inexactitude ou
            omission, et de changer ou d&apos;actualiser des informations, voire
            d&rsquo;annuler des commandes si une quelconque information dans le
            Service ou sur tout site web connexe est inexacte, et ce, à tout
            moment et sans préavis (y compris après que vous ayez passé votre
            commande).
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne sommes pas tenus d&apos;actualiser, de modifier ou de
            clarifier les informations indiquées dans le Service ou sur tout
            site web connexe, y compris mais sans s&apos;y limiter, les
            informations sur les prix, sauf si la loi l&apos;exige. Aucune date
            précise de mise à jour ou d&rsquo;actualisation appliquée au Service
            ou à tout site web connexe ne saurait être définie pour indiquer que
            l&apos;ensemble des informations offertes dans le Service ou sur
            tout site web connexe ont été modifiées ou mises à jour.
          </p>
        </div>

        {/* SECTION 12 – UTILISATIONS INTERDITES */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 12 - Utilisations interdites
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En plus des autres interdictions énoncées dans les Conditions
            d’utilisation, il vous est interdit d’utiliser le site ou son
            contenu : (a) à des fins illégales ; (b) pour inciter des tiers à
            réaliser des actes illégaux ou à y prendre part ; (c) pour
            enfreindre toute ordonnance locale ou toute réglementation, règle ou
            loi internationale, fédérale, provinciale ou étatique ; (d) pour
            transgresser ou violer nos droits de propriété intellectuelle ou
            ceux de tiers ; (e) pour harceler, maltraiter, insulter, blesser,
            diffamer, calomnier, dénigrer, intimider ou discriminer quiconque en
            fonction du sexe, de l’orientation sexuelle, de la religion, de
            l’origine ethnique, de la race, de l’âge, de l’origine nationale ou
            d’un handicap ; (f) pour soumettre des renseignements faux ou
            trompeurs ; (g) pour mettre en ligne ou transmettre des virus ou
            tout autre type de code malveillant qui sera ou pourrait être
            utilisé en vue de compromettre la fonctionnalité ou le
            fonctionnement du Service ou de tout site web connexe, ainsi que
            d&apos;autres sites web ou d’Internet ; (h) pour recueillir ou
            suivre les renseignements personnels d’autrui ; (i) pour spammer,
            hameçonner, détourner un domaine, extorquer des informations,
            parcourir, explorer ou balayer le web ; (j) à des fins obscènes ou
            immorales ; ou (k) pour perturber ou contourner les mesures de
            sécurité du Service ou de tout site connexe, ainsi que d&apos;autres
            sites web ou d&rsquo;Internet. Nous nous réservons le droit de
            mettre fin à votre utilisation du Service ou de tout site web
            connexe pour avoir enfreint les interdits en matière
            d&apos;utilisation.
          </p>
        </div>

        {/* SECTION 13 – EXCLUSION DE GARANTIES ET LIMITATION DE RESPONSABILITÉ */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 13 - Exclusion de garanties et limitation de responsabilité
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne garantissons, certifions ou déclarons en aucun cas que votre
            utilisation de notre Service sera ininterrompue, sécurisée, sans
            délai ou sans erreur.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous ne garantissons pas que les résultats qui pourraient être
            obtenus en utilisant le Service seront exacts ou fiables.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous acceptez que, de temps à autre, nous puissions retirer le
            Service pour des périodes indéterminées ou l&apos;annuler à tout
            moment et sans préavis.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous convenez expressément que votre utilisation du Service, ou
            votre incapacité à utiliser celui-ci, est à votre seul risque. Le
            Service ainsi que tous les produits et services qui vous sont
            fournis par le biais de celui-ci sont (sauf mention expresse de
            notre part) fournis « tels quels » et « sous réserve de
            disponibilité » pour votre utilisation, et ce, sans représentation,
            garanties ou conditions d&apos;aucune sorte, soit expresses soit
            implicites, y compris toutes les garanties ou conditions implicites
            de commercialisation ou de qualité marchande, d’adaptation à un
            usage particulier, de durabilité, de titre et d’absence de
            contrefaçon.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            {import.meta.env.VITE_STORE_TITLE}, nos directeurs, responsables,
            employés, sociétés affiliées, agents, contractants, stagiaires,
            fournisseurs, prestataires de services et concédants ne peuvent en
            aucun cas être tenus responsables de toute blessure, perte,
            réclamation, ou de quelconques dommages directs, indirects,
            accessoires, punitifs, spéciaux ou consécutifs, y compris mais sans
            s&apos;y limiter, de la perte de profits, revenus, économies ou
            données, de coûts de remplacement ou autres dommages similaires,
            qu’ils soient contractuels, délictuels (même en cas de négligence),
            de responsabilité stricte ou autre, résultant de votre utilisation
            du Service ou de tout service ou produit recourant à celui-ci, ou de
            toute autre réclamation liée de quelque manière que ce soit à votre
            utilisation du Service ou de tout produit, y compris mais sans
            s&apos;y limiter, à des erreurs ou omissions dans un contenu, ou à
            de quelconques pertes ou dommages découlant de l’utilisation du
            Service ou d&apos;un contenu (ou produit) publié, transmis ou rendu
            accessible par le biais du Service, et ce, même si vous avez été
            averti(e) de la possibilité qu’ils surviennent.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Du fait que certains États ou juridictions ne permettent pas
            d’exclure ou de limiter la responsabilité quant aux dommages
            consécutifs ou accessoires, notre responsabilité dans ces États ou
            juridictions sera limitée dans la mesure maximale permise par la
            loi. Notre responsabilité ne saurait être limitée en cas de
            non-respect des obligations légales essentielles, telles que les
            garanties légales de conformité et les vices cachés.
          </p>
        </div>

        {/* SECTION 14 – INDEMNISATION */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 14 - Indemnisation
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous acceptez d’indemniser, de défendre et de tenir{' '}
            {import.meta.env.VITE_STORE_TITLE} et notre société mère, nos
            filiales, sociétés affiliées, partenaires, responsables, directeurs,
            agents, contractants, concédants, prestataires de services,
            sous-traitants, fournisseurs, stagiaires et employés, quittes de
            toute réclamation ou demande, y compris d&apos;honoraires
            raisonnables d’avocat, émise par un quelconque tiers à cause de ou
            consécutivement à votre violation des présentes Conditions
            d’utilisation ou des documents auxquels elles font référence, ou à
            votre violation de quelconques lois ou droits d’un tiers.
            L&apos;indemnisation ne sera pas disproportionnée par rapport à la
            faute commise par le client.
          </p>
        </div>

        {/* SECTION 15 – DISSOCIABILITÉ */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 15 - Dissociabilité
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Dans le cas où une quelconque disposition des présentes Conditions
            d’utilisation est jugée illégale, nulle ou inapplicable, cette
            disposition sera néanmoins applicable dans la pleine mesure permise
            par la loi, et la partie non applicable sera considérée comme étant
            dissociée de ces Conditions d’utilisation, sans que ce jugement
            n&apos;affecte la validité et l’applicabilité des autres
            dispositions.
          </p>
        </div>

        {/* SECTION 16 – RÉSILIATION */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 16 - Résiliation
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les obligations et responsabilités engagées par les parties avant la
            date de résiliation resteront en vigueur après la résiliation de cet
            accord, et ce, à toutes fins.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les présentes Conditions d’utilisation resteront en vigueur, à moins
            et jusqu’à ce qu’elles soient résiliées par vous ou par nous. Vous
            pouvez résilier ces Conditions d’utilisation à tout moment en nous
            avisant que vous ne souhaitez plus utiliser nos Services, ou lorsque
            vous cessez d’utiliser notre site.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Si nous jugeons ou suspectons, à notre seule discrétion, que vous ne
            respectez pas ou que vous n&apos;avez pas respecté une quelconque
            modalité ou disposition des présentes Conditions d’utilisation, nous
            pouvons également résilier cet accord à tout moment et sans préavis.
            Vous demeurerez alors responsable de toutes les sommes redevables
            jusqu’à la date de résiliation (incluse), en conséquence de quoi
            nous pouvons vous refuser l’accès à nos Services (ou à une partie de
            ceux-ci).
          </p>
        </div>

        {/* SECTION 17 – INTÉGRALITÉ DE L’ACCORD */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 17 - Intégralité de l’accord
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Tout manquement de notre part à l’exercice ou à l’application
            d&apos;un droit ou d&apos;une disposition des présentes Conditions
            d’utilisation ne constitue pas une renonciation à ce droit ou à
            cette disposition.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les présentes Conditions d’utilisation ou toute autre politique ou
            règle d’exploitation que nous publions sur ce site ou qui concernent
            le Service constituent l’intégralité de l’entente et de l’accord
            entre vous et nous, et régissent votre utilisation du Service. Elles
            remplacent l&apos;ensemble des accords, communications et
            propositions antérieurs et actuels, oraux ou écrits, entre vous et
            nous (y compris, mais sans s&apos;y limiter, toute version
            antérieure des Conditions d’utilisation).
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toute ambiguïté quant à l&rsquo;interprétation de ces Conditions
            d’utilisation ne doit pas être interprétée en défaveur de la partie
            rédactrice.
          </p>
        </div>

        {/* SECTION 18 – LOI APPLICABLE */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 18 - Loi applicable
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les présentes Conditions d’utilisation, ainsi que tout accord
            distinct par lequel nous vous fournissons les Services sont régis et
            interprétés en vertu des lois de France.
          </p>
        </div>

        {/* SECTION 19 – MODIFICATIONS APPORTÉES AUX CONDITIONS D’UTILISATION */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 19 - Modifications apportées aux conditions d’utilisation
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Vous pouvez consulter la version la plus récente des Conditions
            d’utilisation à tout moment sur cette page.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous nous réservons le droit, à notre seule discrétion, de mettre à
            jour, modifier ou remplacer toute partie des présentes Conditions
            d&apos;utilisation en publiant lesdites mises à jour et/or
            modifications sur notre site web. Il vous incombe de vérifier notre
            site web de temps à autre pour voir si des changements y ont été
            apportés. En continuant à accéder à notre site web et au Service ou
            à les utiliser après la publication de modifications apportées aux
            présentes Conditions d&apos;utilisation, vous acceptez celles-ci.
          </p>
        </div>

        {/* SECTION 20 – COORDONNÉES */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base !font-normal uppercase">
            Section 20 - Coordonnées
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Les questions relatives aux Conditions d’utilisation doivent nous
            être envoyées à{' '}
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


