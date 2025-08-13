import React, { useState } from 'react';

interface Faq {
    question: string;
    answer: React.ReactNode;
}

interface FaqSectionType {
    title: string;
    faqs: Faq[];
}

function CheckIcon() {
    return (
        <svg
            className="inline-block mr-2 text-white"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <rect x="1.5" y="1.5" width="17" height="17" rx="2.5" stroke="white" />
            <path
                d="M5 10.5L8.5 14L15 7.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
function CaretIcon() {
    return (
        <svg
            className="ml-2 text-white"
            width="16"
            height="10"
            viewBox="0 0 10 6"
            fill="none"
        >
            <path
                d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"
                fill="white"
            />
        </svg>
    );
}

interface FaqSectionProps {
    sections: FaqSectionType[];
    showNewsletter?: boolean;
    rounded?: boolean;
    heading?:string;
    incline?:boolean;
    description?:string;
}

export default function FaqSection({
    sections,
    showNewsletter = false,
    rounded,
    heading,
    incline,
    description
}: FaqSectionProps) {
    const [isNewsletterSubmitted, setIsNewsletterSubmitted] = useState(false);

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsNewsletterSubmitted(true);

        // Reset form after submission
        const form = e.target as HTMLFormElement;
        form.reset();

        // Success message will persist until page reload
    };

    return (
        <section className="relative bg-[var(--color-2)] text-white my-20">
            {/* Top Wave */}
      {incline && (
        <div className="absolute top-4 left-0 w-full overflow-hidden leading-none rotate-0 -translate-y-full z-0">
          <svg
            id="wave_custom-template--19722524491999__custom_border_tdVWeM"
            viewBox="0 0 1440 110"
            className="w-full h-[110px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,88L1440,0L2880,88L4320,99L5760,77L7200,0L8640,0L10080,11L11520,99L12960,99L14400,77L15840,44L17280,33L18720,77L20160,88L21600,77L23040,22L24480,55L25920,33L27360,55L28800,33L30240,88L31680,22L33120,33L34560,88L34560,110L33120,110L31680,110L30240,110L28800,110L27360,110L25920,110L24480,110L23040,110L21600,110L20160,110L18720,110L17280,110L15840,110L14400,110L12960,110L11520,110L10080,110L8640,110L7200,110L5760,110L4320,110L2880,110L1440,110L0,110Z"
              fill="var(--color-2)"
            />
          </svg>
        </div>
      )}

            {rounded && (
                <div className="absolute top-10 left-0 w-full overflow-hidden leading-none rotate-0 -translate-y-full z-0">
                    <svg
                        viewBox="0 0 1440 110"
                        className="w-full h-[110px]"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0,11L120,25.7C240,40,480,70,720,67.8C960,66,1200,33,1440,16.5V110H0Z"
                            fill="var(--color-2)"
                        />
                    </svg>
                </div>
            )}

            <div className="relative z-1 max-w-2xl mx-auto px-4">
                {sections.map((section) => (
                    <div key={section.title} className="pb-12">
                        <h1 className="text-4xl font-bold text-center pb-8">
                            {section.title}
                        </h1>
                        <div className="divide-y divide-white/10">
                            {section.faqs.map((faq) => (
                                <details key={faq.question} className="group bg-[var(--color-2)]">
                                    <summary className="flex items-center justify-between py-4 px-2 cursor-pointer text-base font-medium group-open:bg-[var(--color-2)] group-open:font-semibold transition-colors">
                                        <span className="flex items-center hover:underline">
                                            <CheckIcon />
                                            {faq.question}
                                        </span>
                                        <CaretIcon />
                                    </summary>
                                    <div className="accordion__content px-6 pb-4 pt-2 text-white text-sm">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                ))}
                {showNewsletter && (
                    <div className="text-center mt-8 px-4 sm:px-6">
                        <h3 className="text-2xl sm:text-3xl font-bold">S'abonner à nos {heading}</h3>
                        <p className="text-sm sm:text-base text-white !py-5 !leading-tight whitespace-wrap">
                        {description}
                        </p>

                        <form
                            onSubmit={handleNewsletterSubmit}
                            className="w-full max-w-md mx-auto relative mt-2"
                        >
                            <input
                                required
                                type="email"
                                placeholder="Email"
                                className="w-full px-6 py-3 border-2 !rounded-full !border-white text-white placeholder-white bg-[var(--color-2)] focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white p-2"
                                aria-label="Subscribe"
                            >
                                <svg
                                    className="w-4 h-4 sm:w-5 sm:h-5"
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
                        </form>
                        {isNewsletterSubmitted && (
                            <div className="w-full max-w-md mx-auto mt-2 px-2 sm:px-0 text-left lg:px-6 md:px-6">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <svg
                                        aria-hidden="true"
                                        focusable="false"
                                        role="presentation"
                                        className="icon icon-success flex-shrink-0 w-4 h-4"
                                        viewBox="0 0 13 13"
                                    >
                                        <path
                                            d="M6.5 12.35C9.73087 12.35 12.35 9.73086 12.35 6.5C12.35 3.26913 9.73087 0.65 6.5 0.65C3.26913 0.65 0.65 3.26913 0.65 6.5C0.65 9.73086 3.26913 12.35 6.5 12.35Z"
                                            fill="#428445"
                                            stroke="white"
                                            strokeWidth="0.7"
                                        ></path>
                                        <path d="M5.53271 8.66357L9.25213 4.68197" stroke="white"></path>
                                        <path d="M4.10645 6.7688L6.13766 8.62553" stroke="white"></path>
                                    </svg>
                                    <span className="font-semibold text-sm text-white">
                                        Merci de votre inscription
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
            {rounded && (
                <>
                    {/* Bottom Wave */}
                    <div className="absolute -bottom-20 left-0 w-full overflow-hidden leading-none z-0 rotate-180">
                        <svg
                            viewBox="0 0 1440 110"
                            className="w-full h-[110px]"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,11L120,25.7C240,40,480,70,720,67.8C960,66,1200,33,1440,16.5V110H0Z"
                                fill="var(--color-2)"
                            />
                        </svg>
                    </div>
                </>
            )}
      {incline && (
        <div className="absolute -bottom-26 left-0 w-full overflow-hidden leading-none z-0">
          <svg
            id="wave_custom-template--19722524491999__custom_border_fKaeDW"
            style={{ transform: 'rotate(180deg)', transition: '0.3s' }}
            viewBox="0 0 1440 110"
            className="w-full h-[110px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,22L1440,88L2880,22L4320,88L5760,44L7200,22L8640,11L10080,44L11520,77L12960,77L14400,55L15840,0L17280,33L18720,22L20160,11L21600,22L23040,22L24480,55L25920,33L27360,99L28800,33L30240,88L31680,11L33120,88L34560,22L34560,110L33120,110L31680,110L30240,110L28800,110L27360,110L25920,110L24480,110L23040,110L21600,110L20160,110L18720,110L17280,110L15840,110L14400,110L12960,110L11520,110L10080,110L8640,110L7200,110L5760,110L4320,110L2880,110L1440,110L0,110Z"
              fill="var(--color-2)"
            />
          </svg>
        </div>
      )}
        </section>
    );
}

