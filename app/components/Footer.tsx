import {Image} from '@shopify/hydrogen';
import {Link} from 'react-router';
import CardSection from './CardSection';
import {useState} from 'react';

export function Footer() {
  const [isFooterNewsletterSubmitted, setIsFooterNewsletterSubmitted] =
    useState(false);

  const handleFooterNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsFooterNewsletterSubmitted(true);

    const form = e.target as HTMLFormElement;
    form.reset();
  };
  const logo = ` ${import.meta.env.VITE_LOGO}`;
  return (
    <footer>
      <CardSection />
      <svg
        className="-mb-0.5"
        viewBox="0 0 1440 110"
        style={{fill: 'var(--color-2)'}}
      >
        <path d="M0,22L1440,88L2880,22L4320,88L5760,44L7200,22L8640,11L10080,44L11520,77L12960,77L14400,55L15840,0L17280,33L18720,22L20160,11L21600,22L23040,22L24480,55L25920,33L27360,99L28800,33L30240,88L31680,11L33120,88L34560,22L34560,110L33120,110L31680,110L30240,110L28800,110L27360,110L25920,110L24480,110L23040,110L21600,110L20160,110L18720,110L17280,110L15840,110L14400,110L12960,110L11520,110L10080,110L8640,110L7200,110L5760,110L4320,110L2880,110L1440,110L0,110Z"></path>
      </svg>

      <div className="footer text-white">
        <div className="container !max-w-[75rem] mx-auto px-10 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            {/* About Us */}
            <div>
              <div className="flex w-full items-center justify-center md:items-start md:justify-start pb-6">
                <Image
                  src={logo}
                  alt="Logo de la boutique"
                  className="!h-14 !w-auto shrink-0"
                />
              </div>
              <h3 className="text-lg font-bold mb-2.5">Qui sommes-nous ?</h3>
              <div className="flex flex-col gap-4">
                <p className="text-sm leading-relaxed">
                Chez {import.meta.env.VITE_STORE_TITLE} , chaque animal est plus qu’un simple compagnon : il est un membre de la famille.
                </p>
                <p className="!text-sm leading-relaxed">
                C’est pourquoi nous avons créé une boutique dédiée à leur confort, leur bonheur et leur bien-être au quotidien. Notre mission est de vous proposer des produits de qualité, utiles, doux et adorables, pour chouchouter votre fidèle compagnon comme il le mérite.
                </p>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-semibold mb-4">Contact</h3>
              <div className="space-y-4 text-sm">
                <div>
                  Besoin d’assistance ou avez-vous des questions ? Notre équipe
                  est là pour vous aider ! Pour nous contacter, envoyez
                  simplement un e-mail à{' '}
                  <a
                    href="/contact"
                    className=" hover:text-blue-300 transition-colors !text-white underline underline-offset-4"
                  >
                    nous contacter
                  </a>
                  .
                </div>
                {/* Gap, then Customer Service Hours */}
                <div>
                  <div className="font-semibold">
                    Horaires du service client :
                  </div>
                  <div>Du lundi au vendredi de 8h à 18h</div>
                </div>

                {/* Bullet points */}
                <ul className="!list-disc !list-outside !pl-5 space-y-1 mt-2 !text-sm">
                  <li className="break-words">
                    <strong>Société :</strong>{' '}
                    {import.meta.env.VITE_COMPANY_NAME}
                  </li>
                  <li className="break-words">
                    <strong>SIREN :</strong> {import.meta.env.VITE_SIREN_NUMBER}
                  </li>
                  <li className="break-words">
                    <strong>Adresse :</strong>{' '}
                    {import.meta.env.VITE_COMPANY_ADDRESS}
                  </li>
                  <li className="break-words">
                    <strong>Mail :</strong>{' '}
                    <a
                      href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                      className="hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4 break-all"
                    >
                      {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
                    </a>
                  </li>
                  <li>
                    <strong>Tel :</strong>{' '}
                    <a href={`tel:${import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}`} 
                      className="hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4">{import.meta.env.VITE_CUSTOMER_SERVICE_PHONE}</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Useful Links Section */}
            <div className="space-y-4 lg:space-y-3">
              <h3 className="text-base lg:text-lg font-semibold text-white mb-4">
                Liens rapides
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/research"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Recherche
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/about"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  🏁 À propos de {import.meta.env.VITE_STORE_TITLE}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/faq"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Foire aux questions
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/contact"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Contact
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/payment"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Conditions de Paiement
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/shipping"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Politiques de livraison
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/returns"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Politiques de remboursements
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/legal"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Mentions légales
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/general-conditions"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Conditions générales de vente
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/privacy"
                  className="group relative inline-block text-sm !text-white transition-colors w-fit"
                >
                  Politiques de confidentialité
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </nav>
            </div>

            {/* Sign Up for Our Emails Section */}
            <div className="space-y-4">
              <h3 className="!text-base font-semibold text-white mb-4">
                S'abonner à nos e-mails
              </h3>

              <div className="space-y-3">
                <div className='overflow-hidden'>
                  <h4 className="text-white font-medium text-sm mb-2">
                    Besoin d’assistance ou avez-vous des questions ?
                    Notre équipe est là pour vous aider ! Pour nous contacter,
                    envoyez simplement un e-mail à{' '}
                    </h4>
                    <a
                   href={`mailto:${import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}`}
                      className="text-sm hover:text-blue-300 transition-colors !text-[var(--color-footer)] underline underline-offset-4 text-wrap"
                    >
                      {import.meta.env.VITE_CUSTOMER_SUPPORT_EMAIL}
                    </a>
                </div>

                <form
                  onSubmit={handleFooterNewsletterSubmit}
                  className="space-y-3"
                >
                  <div>
                    <div className="relative">
                      <input
                        required
                        type="email"
                        placeholder="E-mail"
                        className="w-full text-sm px-4 py-3 bg-[var(--color-2)] border !border-white text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all !rounded-full"
                      />
                      <button
                        type="submit"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2  text-white p-2 rounded-md transition-colors"
                        aria-label="S'abonner"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </button>
                    </div>
                    {isFooterNewsletterSubmitted && (
                      <div className="w-full mt-3 text-center sm:text-left">
                        <div className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3">
                          <svg
                            aria-hidden="true"
                            focusable="false"
                            role="presentation"
                            className="icon icon-success flex-shrink-0 w-4 h-4 "
                            viewBox="0 0 13 13"
                          >
                            <path
                              d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
                              fill="#428445"
                              stroke="white"
                              strokeWidth="0.7"
                            ></path>
                            <path
                              d="M5.53271 8.66357L9.25213 4.68197"
                              stroke="white"
                            ></path>
                            <path
                              d="M4.10645 6.7688L6.13766 8.62553"
                              stroke="white"
                            ></path>
                          </svg>
                          <span className="font-semibold text-sm text-white">
                            Merci de votre inscription
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Payment Methods and Copyright */}
          <div className="mt-12 pt-8">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-4  lg:space-y-0">
              {/* Payment Methods */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <div className=" bg-white rounded flex items-center justify-center">
                    <Image
                      src="./Visa_Logo.svg"
                      width={24}
                      height={25}
                      className="w-12 h-6"
                    />
                  </div>
                  <div className=" bg-white rounded flex items-center justify-center">
                    <Image
                      src="./masterCard_Logo.svg"
                      width={24}
                      height={25}
                      className="w-12 h-6"
                    />
                  </div>
                  <div className=" bg-white rounded flex items-center justify-center">
                    <Image
                      src="./apple_Logo.svg"
                      width={24}
                      height={25}
                      className="w-12 h-6"
                    />
                  </div>
                  <div className=" bg-white rounded flex items-center justify-center">
                    <Image
                      src="./American-Express_Logo.svg"
                      width={24}
                      height={25}
                      className="w-12 h-6"
                    />
                  </div>
                </div>
                <br />
              </div>
            </div>
            {/* Copyright */}
            <div className="text-center mt-4">
              <p className="text-white !text-sm">
                © 2025, {import.meta.env.VITE_STORE_TITLE}®
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
