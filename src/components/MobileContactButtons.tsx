'use client';

import Image from 'next/image';

type MobileContactButtonsProps = {
  content: {
    zaloHref: string;
    zaloIconUrl: string;
    phoneHref: string;
  };
};

export default function MobileContactButtons({ content }: MobileContactButtonsProps) {
  return (
    <div className="mobile-contact-stack" aria-label="Liên hệ nhanh">
      <a
        href={content.zaloHref}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-contact-fab zalo"
        aria-label="Liên hệ Zalo"
      >
        <Image src={content.zaloIconUrl} alt="Zalo" width={28} height={28} />
      </a>
      <a href={content.phoneHref} className="mobile-contact-fab phone" aria-label="Gọi hotline">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.19 2.47.56 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
