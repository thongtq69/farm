'use client';

import Image from 'next/image';

export default function MobileContactButtons() {
  return (
    <div className="mobile-contact-stack" aria-label="Liên hệ nhanh">
      <a
        href="https://zalo.me/0888220044"
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-contact-fab zalo"
        aria-label="Liên hệ Zalo"
      >
        <Image
          src="https://res.cloudinary.com/dwalymiy3/image/upload/v1774426323/farm/images/icons/v6zrrayw9uxpxonxjxyi.png"
          alt="Zalo"
          width={28}
          height={28}
        />
      </a>
      <a
        href="tel:0888220044"
        className="mobile-contact-fab phone"
        aria-label="Gọi hotline"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.11.37 2.3.56 3.58.56a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.3 21 3 13.7 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.28.19 2.47.56 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z" fill="currentColor" />
        </svg>
      </a>
    </div>
  );
}
