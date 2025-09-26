import React from 'react';
import FaqSection from '~/components/FaqSection';
import Form from '~/components/Form';
 
const sections = [
  {
    title: 'Livraison & Retours',
    faqs: [
      {
        question: 'Quel est mon numéro de commande ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Il se peut que votre e-mail de confirmation de commande soit
              arrivé dans vos courriers indésirables (spams). Nous vous invitons
              donc à vérifier vos courriers indésirables.
            </p>
            <p>
              Si après vérification, vous ne trouvez pas l’e-mail de
              confirmation comprenant votre numéro de commande, veuillez nous
              contacter à l’adresse suivante :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="hover:text-blue-300 transition-colors !text-white underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
              . Mentionnez l’objet de l’e-mail : “Mon numéro de commande”.
            </p>
            <p>Nous répondons dans les 24 heures ouvrables.</p>
          </div>
        ),
      },
      {
        question: 'Comment annuler ma commande ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Il vous est possible d’annuler votre commande jusqu’à 24 heures
              après achat sur notre boutique {import.meta.env.VITE_DOMAIN_NAME}.
            </p>
            <p>
              Si vous êtes dans ce délai, contactez le service client à
              l’adresse suivante :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="hover:text-blue-300 transition-colors !text-white underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </p>
            <p>
              Mentionnez l’objet de l’e-mail : “Annulation de commande” et le
              numéro de la commande à annuler. Nos équipes se chargeront
              d’annuler votre commande et procéderont ensuite à un remboursement
              intégral.
            </p>
            <p>
              Si votre colis a déjà été expédié, nous ne pouvons rien faire
              jusqu’à ce que vous receviez votre commande, après quoi nous
              pourrons procéder à un remboursement si nécessaire, après retour
              de l’article vers nos entrepôts.
            </p>
            <p>Nous répondons dans les 24 heures ouvrables.</p>
          </div>
        ),
      },
      {
        question: 'Quels sont les délais de livraison ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Lorsque vous passez une commande sur notre boutique{' '}
              {import.meta.env.VITE_DOMAIN_NAME}, celle-ci est traitée par notre
              centre d’exécution sous 1 jour ouvrable.
            </p>
            <p>
              La livraison prend en moyenne 2 à 4 jours. Dans des cas très
              exceptionnels (grève de la poste, fêtes de fin d’année, etc.),
              cela peut être un peu plus long.
            </p>
          </div>
        ),
      },
      {
        question: 'Ou se trouve ma commande ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Pour savoir où se trouve votre colis / suivre votre colis, nous
              vous invitons à vous rendre sur la page “Suivi commande” et d’y
              entrer les informations suivantes :
            </p>
            <ul className="list-disc ml-6">
              <li>Votre numéro de commande</li>
              <li>L’adresse e-mail utilisée lors de l’achat</li>
            </ul>
            <p>
              Si vous désirez des informations complémentaires sur le statut de
              votre commande, n’hésitez pas à contacter le service client à
              l’adresse suivante :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="hover:text-blue-300 transition-colors !text-white underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </p>
            <p>
              Mentionnez l’objet de l’e-mail : “Statut de ma commande” et le
              numéro de votre commande. Nous répondons dans les 24 heures
              ouvrables.
            </p>
          </div>
        ),
      },
      {
        question: 'Comment effectuer un retour et obtenir un remboursement ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Nous sommes désolés si vous avez rencontré un problème avec votre
              commande.
            </p>
            <p>
              Si vous avez reçu un article endommagé, non conforme ou que vous
              n’êtes pas satisfait de votre commande, contactez le service
              client à l’adresse :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="hover:text-blue-300 transition-colors !text-white underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
            </p>
            <p>
              Mentionnez l’objet de l’e-mail : “Demande de retour/remboursement”
              et le numéro de votre commande.
            </p>
            <p>Nous vous répondrons dans les 24 heures ouvrables.</p>
          </div>
        ),
      },
      {
        question: 'Est-il possible de modifier ma commande ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Il vous est possible de modifier votre commande (couleur, taille,
              modèle) jusqu’à 24 heures après achat sur notre boutique{' '}
              {import.meta.env.VITE_DOMAIN_NAME}.
            </p>
            <p>
              Si vous êtes dans ce délai, contactez le service client à
              l’adresse suivante :{' '}
              <a
                href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                className="hover:text-blue-300 transition-colors !text-white underline underline-offset-4"
              >
                {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
              </a>
              . Mentionnez l’objet de l’e-mail : “Modification de ma commande”
              et le numéro de votre commande.
            </p>
            <p>
              Si votre colis a déjà été expédié, nous ne pouvons rien faire
              jusqu’à ce que vous receviez votre commande, après quoi nous
              pourrons procéder à un nouvel envoi, après retour de l’article
              vers nos entrepôts.
            </p>
          </div>
        ),
      },
      {
        question: "Livrez-vous à l'international ?",
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Votre boutique expédie tous les jours de nombreux produits et ce
              dans les 4 coins du globe.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'Traçabilité',
    faqs: [
      {
        question: 'Mon numéro de suivi (tracking) ne fonctionne pas',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Votre numéro de suivi ne fonctionne pas directement à la réception
              du mail de confirmation d'envoi. Il sera actif dans les 7 jours
              ouvrables.
            </p>
            <p>
              Ne vous inquiétiez pas, votre commande a bien été expédiée et sera
              livrée à votre domicile.
            </p>
          </div>
        ),
      },
      {
        question: 'Mes informations sont-elles securisees ?',
        answer: (
          <div className="flex flex-col gap-4">
            <p>
              Notre site est totalement sécurisé et hébergé par un serveur HTTPS
              qui garantit votre protection et celle de l'ensemble de vos
              données personnelles.
            </p>
            <p>
              Nous collaborons entre-autre avec VISA, Mastercard et American
              Express qui sont des leaders mondiaux qui ne permettraient pas la
              viabilité d'une boutique telle que la nôtre si le taux de clients
              insatisfaits était important.
            </p>
          </div>
        ),
      },
    ],
  },
  {
    title: 'À propos de nous',
    faqs: [
      {
        question: 'Possédez-vous un formulaire de contact ?',
        answer: (
          <p>
            Oui tout a fait, vous pouvez nous contacter par formulaire en allant
            en bas de cette page.
          </p>
        ),
      },
      {
        question: 'Puis-je vous contacter ou repondre par SMS ?',
        answer: (
          <p>
            Malheureusement, non. Si vous avez reçu un SMS de notre part, sachez
            que celui-ci est automatisé est que nous ne recevrons jamais votre
            réponse. Merci de nous contacter par e-mail.
          </p>
        ),
      },
    ],
  },
];
 
export default function FAQPage() {
  return (
    <div>
      <h1 className="text-center !text-3xl font-bold !py-4">
        Foire aux questions
      </h1>
      <FaqSection sections={sections} />
      <div>
        <Form />
      </div>
    </div>
  );
}
 
 