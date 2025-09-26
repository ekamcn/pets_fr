import React from 'react';

export default function LegalNoticePage() {
  return (
    <div className="bg-white min-h-screen py-8 sm:py-12 px-4 sm:px-5">
      <div className="max-w-3xl mx-auto flex flex-col gap-6 sm:gap-8 lg:gap-10 tracking-wider">
        <p className="!text-2xl sm:!text-3xl font-bold">Mentions légales</p>

        {/* 1. Présentation du site */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">1. Présentation du site</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour
            la confiance dans l’économie numérique, il est précisé aux
            utilisateurs du site {import.meta.env.VITE_DOMAIN_NAME} l’identité
            des différents intervenants dans le cadre de sa réalisation et de
            son suivi :
          </p>
          <ul className="!list-disc !list-inside !text-sm !space-y-1 !mt-2">
            <li>Propriétaire : {import.meta.env.VITE_STORE_TITLE}</li>
            <li>Raison Sociale : {import.meta.env.VITE_COMPANY_NAME}</li>
            <li>
              Forme juridique : Société à responsabilité limitée (SARL),
              immatriculée au RCS de {import.meta.env.VITE_COMPANY_CITY}
            </li>
            <li>
              Business registration : {import.meta.env.VITE_SIREN_NUMBER} RCS
              Paris
            </li>
            <li>Adresse : {import.meta.env.VITE_COMPANY_ADDRESS}</li>
            <li>Telephone : {import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</li>
            <li>Créateur : {import.meta.env.VITE_DOMAIN_NAME}</li>
            <li>
              Responsable publication : Xavier –{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="underline"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </li>
            <p className="!text-sm leading-6 sm:leading-7">
              Le responsable publication est une personne physique ou une
              personne morale.
            </p>
          </ul>
        </div>

        {/* 2. Conditions générales d’utilisation */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            2. Conditions générales d’utilisation du site et des services
            proposés
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            L’utilisation du site {import.meta.env.VITE_STORE_TITLE} implique
            l’acceptation pleine et entière des conditions générales
            d’utilisation ci-après décrites. Ces conditions d’utilisation sont
            susceptibles d’être modifiées ou complétées à tout moment, les
            utilisateurs du site {import.meta.env.VITE_DOMAIN_NAME} sont donc
            invités à les consulter de manière régulière.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Ce site est normalement accessible à tout moment aux utilisateurs.
            Une interruption pour raison de maintenance technique peut être
            toutefois décidée par {import.meta.env.VITE_DOMAIN_NAME}, qui
            s’efforcera alors de communiquer préalablement aux utilisateurs les
            dates et heures de l’intervention.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Le site {import.meta.env.VITE_DOMAIN_NAME} est mis à jour
            régulièrement par Bernard. De la même façon, les mentions légales
            peuvent être modifiées à tout moment : elles s’imposent néanmoins à
            l’utilisateur qui est invité à s’y référer le plus souvent possible
            afin d’en prendre connaissance.
          </p>
        </div>

        {/* 3. Description des services fournis */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            3. Description des services fournis
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Le site {import.meta.env.VITE_DOMAIN_NAME} a pour objet de fournir
            une information concernant l’ensemble des activités de la société.{' '}
            {import.meta.env.VITE_DOMAIN_NAME} s’efforce de fournir sur le site{' '}
            {import.meta.env.VITE_DOMAIN_NAME} des informations aussi précises
            que possible. Toutefois, elle ne pourra être tenue responsable des
            omissions, des inexactitudes et des carences dans la mise à jour,
            qu’elles soient de son fait ou du fait des tiers partenaires qui lui
            fournissent ces informations.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toutes les informations indiquées sur le site{' '}
            {import.meta.env.VITE_DOMAIN_NAME} sont données à titre indicatif,
            et sont susceptibles d’évoluer. Par ailleurs, les renseignements
            figurant sur le site {import.meta.env.VITE_DOMAIN_NAME} ne sont pas
            exhaustifs et sont donnés sous réserve de modifications ayant été
            apportées depuis leur mise en ligne.
          </p>
        </div>

        {/* 4. Limitations contractuelles sur les données techniques */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            4. Limitations contractuelles sur les données techniques
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Le site utilise la technologie JavaScript. Le site Internet ne
            pourra être tenu responsable de dommages matériels liés à
            l’utilisation du site. De plus, l’utilisateur du site s’engage à
            accéder au site en utilisant un matériel récent, ne contenant pas de
            virus et avec un navigateur de dernière génération mis à jour.
          </p>
        </div>

        {/* 5. Propriété intellectuelle et contrefaçons */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            5. Propriété intellectuelle et contrefaçons
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            {' '}
            {import.meta.env.VITE_DOMAIN_NAME} est propriétaire des droits de
            propriété intellectuelle ou détient les droits d’usage sur tous les
            éléments accessibles sur le site, notamment les textes, images,
            graphismes, logo, icônes, sons, logiciels.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Toute reproduction, représentation, modification, publication,
            adaptation de tout ou partie des éléments du site, quel que soit le
            moyen ou le procédé utilisé, est interdite, sauf autorisation écrite
            préalable de {import.meta.env.VITE_DOMAIN_NAME}. Toute exploitation
            non autorisée du site ou de l’un quelconque des éléments qu’il
            contient sera considérée comme constitutive d’une contrefaçon et
            poursuivie conformément aux dispositions des articles L.335-2 et
            suivants du Code de Propriété Intellectuelle.
          </p>
        </div>

        {/* 6. Limitations de responsabilité */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            6. Limitations de responsabilité
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            {' '}
            {import.meta.env.VITE_DOMAIN_NAME} ne pourra être tenue responsable
            des dommages directs et indirects causés au matériel de
            l’utilisateur, lors de l’accès au site{' '}
            {import.meta.env.VITE_DOMAIN_NAME}, et résultant soit de
            l’utilisation d’un matériel ne répondant pas aux spécifications
            indiquées au point 4, soit de l’apparition d’un bug ou d’une
            incompatibilité.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            {' '}
            {import.meta.env.VITE_DOMAIN_NAME} ne pourra également être tenue
            responsable des dommages indirects (tels par exemple qu’une perte de
            marché ou perte d’une chance) consécutifs à l’utilisation du site{' '}
            {import.meta.env.VITE_DOMAIN_NAME}.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Des espaces interactifs (possibilité de poser des questions dans
            l’espace contact) sont à la disposition des utilisateurs.{' '}
            {import.meta.env.VITE_DOMAIN_NAME} se réserve le droit de supprimer,
            sans mise en demeure préalable, tout contenu déposé dans cet espace
            qui contreviendrait à la législation applicable en France, en
            particulier aux dispositions relatives à la protection des données.
            Le cas échéant, {import.meta.env.VITE_DOMAIN_NAME} se réserve
            également la possibilité de mettre en cause la responsabilité civile
            et/ou pénale de l’utilisateur, notamment en cas de message à
            caractère raciste, injurieux, diffamant, ou pornographique, quel que
            soit le support utilisé (texte, photographie…).
          </p>
        </div>

        {/* 7. Gestion des données personnelles */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            7. Gestion des données personnelles
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En France, les données personnelles sont notamment protégées par la
            loi n° 78-87 du 6 janvier 1978, la loi n° 2004-801 du 6 août 2004,
            l’article L. 226-13 du Code pénal et la Directive Européenne du 24
            octobre 1995.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            À l’occasion de l’utilisation du site{' '}
            {import.meta.env.VITE_DOMAIN_NAME}, peuvent être recueillies : l’URL
            des liens par l’intermédiaire desquels l’utilisateur a accédé au
            site {import.meta.env.VITE_DOMAIN_NAME}, le fournisseur d’accès de
            l’utilisateur, l’adresse de protocole Internet (IP) de
            l’utilisateur.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            En tout état de cause, {import.meta.env.VITE_DOMAIN_NAME} ne
            collecte des informations personnelles relatives à l’utilisateur que
            pour le besoin de certains services proposés par le site{' '}
            {import.meta.env.VITE_DOMAIN_NAME}. L’utilisateur fournit ces
            informations en toute connaissance de cause, notamment lorsqu’il
            procède par lui-même à leur saisie. Il est alors précisé à
            l’utilisateur du site {import.meta.env.VITE_DOMAIN_NAME}{' '}
            l’obligation ou non de fournir ces informations.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Conformément aux dispositions des articles 38 et suivants de la loi
            78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et
            aux libertés, tout utilisateur dispose d’un droit d’accès, de
            rectification et d’opposition aux données personnelles le
            concernant, en effectuant sa demande écrite et signée, accompagnée
            d’une copie du titre d’identité avec signature du titulaire de la
            pièce, en précisant l’adresse à laquelle la réponse doit être
            envoyée.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Aucune information personnelle de l’utilisateur du site{' '}
            {import.meta.env.VITE_DOMAIN_NAME} n’est publiée à l’insu de
            l’utilisateur, échangée, transférée, cédée ou vendue sur un support
            quelconque à des tiers. Seule l’hypothèse du rachat de{' '}
            {import.meta.env.VITE_DOMAIN_NAME} et de ses droits permettrait la
            transmission des dites informations à l’éventuel acquéreur qui
            serait à son tour tenu de la même obligation de conservation et de
            modification des données vis-à-vis de l’utilisateur du site{' '}
            {import.meta.env.VITE_DOMAIN_NAME}.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Les bases de données sont protégées par les dispositions de la loi
            du 1er juillet 1998 transposant la directive 96/9 du 11 mars 1996
            relative à la protection juridique des bases de données.
          </p>
        </div>

        {/* 8. Liens hypertextes et cookies */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            8. Liens hypertextes et cookies
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Le site {import.meta.env.VITE_DOMAIN_NAME} contient un certain
            nombre de liens hypertextes vers d’autres sites, créés avec
            l’autorisation de {import.meta.env.VITE_DOMAIN_NAME}. Cependant,{' '}
            {import.meta.env.VITE_DOMAIN_NAME} n’a pas la possibilité de
            vérifier le contenu des sites ainsi visités, et n’assumera en
            conséquence aucune responsabilité de ce fait.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            La navigation sur le site {import.meta.env.VITE_DOMAIN_NAME} est
            susceptible de provoquer l’installation de cookie(s) sur
            l’ordinateur de l’utilisateur. Un cookie est un fichier de petite
            taille, qui ne permet pas d’identifier l’utilisateur, mais qui
            enregistre des informations relatives à la navigation d’un
            ordinateur sur un site. Les données ainsi obtenues visent à
            faciliter la navigation ultérieure sur le site, et ont également
            vocation à permettre diverses mesures de fréquentation.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Le refus d’installation d’un cookie peut entraîner l’impossibilité
            d’accéder à certains services. L’utilisateur peut cependant
            configurer son ordinateur de la manière suivante, pour refuser
            l’installation des cookies :
          </p>
          <ul className="!list-disc !list-inside !text-sm !space-y-1 !mt-2">
            <li>
              Sous Internet Explorer : Outils &gt; Options Internet &gt;
              Confidentialité &gt; Paramètres.
            </li>
            <li>
              Sous Firefox : Outils &gt; Options &gt; Vie privée &gt; Cookies.
            </li>
            <li>
              Sous Safari : Édition &gt; Préférences &gt; Confidentialité.
            </li>
            <li>
              Sous Chrome : Paramètres &gt; Paramètres avancés &gt;
              Confidentialité et sécurité &gt; Cookies.
            </li>
          </ul>
        </div>

        {/* 9. Droit applicable et attribution de juridiction */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            9. Droit applicable et attribution de juridiction
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Tout litige en relation avec l’utilisation du site{' '}
            {import.meta.env.VITE_DOMAIN_NAME} est soumis au droit français. Il
            est fait attribution exclusive de juridiction aux tribunaux
            compétents de Paris, en cas de litige.
          </p>
        </div>

        {/* 10. Modifications des mentions légales */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            10. Modifications des mentions légales
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            La société {import.meta.env.VITE_DOMAIN_NAME} se réserve le droit de
            modifier, à tout moment, ces mentions légales afin de se conformer à
            toute nouvelle législation ou réglementation, ou dans le but
            d’adapter ces mentions à l’évolution de son site. En cas de
            modification, les nouvelles mentions légales seront publiées sur
            cette page, et elles seront considérées comme ayant été acceptées
            par l’utilisateur en cas de consultation du site après la
            publication des modifications.
          </p>
        </div>

        {/* 11. Contact */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">11. Contact</h2>
          <p className="!text-sm leading-6 sm:leading-7">
            Pour toute question concernant ces mentions légales ou l’utilisation
            du site {import.meta.env.VITE_DOMAIN_NAME} vous pouvez nous
            contacter à l’adresse suivante :{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        {/* 12. Protection de l’environnement et développement durable */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            12. Protection de l’environnement et développement durable
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            {' '}
            {import.meta.env.VITE_DOMAIN_NAME} s’engage à promouvoir des
            pratiques respectueuses de l’environnement et du développement
            durable dans la gestion de ses activités. Nous encourageons nos
            utilisateurs à prendre des mesures pour réduire leur empreinte
            écologique, en particulier lors de l’utilisation de nos produits et
            services.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Nous mettons tout en œuvre pour garantir que nos produits sont
            obtenus, utilisés et traités d’une manière responsable et durable,
            dans le respect des réglementations en vigueur.
          </p>
        </div>

        {/* 13. Accessibilité du site */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            13. Accessibilité du site
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            {' '}
            {import.meta.env.VITE_DOMAIN_NAME} s’efforce de rendre son site
            accessible à tous les utilisateurs, y compris ceux en situation de
            handicap. Nous sommes constamment à la recherche de moyens
            d’améliorer l’expérience de navigation pour tous les visiteurs de
            notre site.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            Si vous rencontrez des difficultés d’accès ou avez des suggestions
            pour améliorer l’accessibilité du site, nous vous encourageons à
            nous en faire part par email à l’adresse :{' '}
            <a
              href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
              className="underline"
            >
              {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        {/* 14. Responsabilité des utilisateurs */}
        <div className="flex flex-col gap-4">
          <h2 className="!text-base font-semibold">
            14. Responsabilité des utilisateurs
          </h2>
          <p className="!text-sm leading-6 sm:leading-7">
            En utilisant le site {import.meta.env.VITE_DOMAIN_NAME},
            l’utilisateur s’engage à ne pas violer les droits de propriété
            intellectuelle de {import.meta.env.VITE_DOMAIN_NAME} ou de tiers.
            L’utilisateur doit également s’abstenir de toute utilisation abusive
            du site, notamment en soumettant des contenus illicites,
            inappropriés, ou portant atteinte à la sécurité et à l’intégrité du
            site.
          </p>
          <p className="!text-sm leading-6 sm:leading-7">
            L’utilisateur est responsable de l’usage qu’il fait du site, des
            informations qu’il y partage et des interactions avec d’autres
            utilisateurs. Toute utilisation frauduleuse ou malveillante du site
            pourra entraîner des sanctions, y compris la suppression de son
            compte utilisateur, sans préjudice des actions légales qui
            pourraient être prises.
          </p>
        </div>
      </div>
    </div>
  );
}
