import Card from '~/components/Card';
import React from 'react';
import {
  FaHeadset,
  FaLock,
  FaShippingFast,
  FaUndo,
  FaGlobe,
} from 'react-icons/fa';
import { RxGlobe, RxRocket } from 'react-icons/rx';
import { FiLock } from 'react-icons/fi';
import { VscSend } from 'react-icons/vsc';

const cardData = [
  {
    icon: <RxGlobe />,
    title: 'Service Client Français',
    description: (
      <>
        Notre équipe est à votre disposition pour toute question sur nos
        articles ou votre commande.
      </>
    ),
  },
  {
    icon: <FiLock strokeWidth={1.5} />,
    title: 'Paiements Sécurisés',
    description: <>La gestion de nos paiements en ligne sont 100% sécurisés.</>,
  },
  {
    icon: <VscSend />,
    title: 'Livraison Gratuite',
    description: <>Nos délais de livraison sont de 2 à 4 jours.</>,
  },
  {
    icon: <RxRocket />,
    title: 'Satisfait ou Remboursé',
    description: (
      <>
        Nous proposons le Satisfait ou Remboursé pendant 30 jours après
        réception des articles
      </>
    ),
  },
];

export default function CardSection() {
  return (
    <section className="py-10">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-1 md:gap-2 px-4">
        {cardData.map((card, idx) => (
          <Card
            key={idx}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
