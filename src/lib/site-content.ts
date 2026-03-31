import { cache } from 'react';
import { getPayload } from 'payload';
import config from '@/payload.config';
import { projects as seededProjects } from '@/data/projects';
import { reelsData as seededReels } from '@/data/reels';

export const categoryLabels = {
  'san-vuon-ho-koi': 'Sân Vườn & Hồ Koi',
  'farm-du-lich-nghi-duong': 'Farm & Du Lịch Nghỉ Dưỡng',
  'da-nhan-tao-nghe-thuat': 'Đá Nhân Tạo Nghệ Thuật'
} as const;

export const defaultSiteContent = {
  header: {
    logoUrl: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426297/farm/images/branding/u9s3pfkvpu63s8luvrtq.png',
    logoAlt: 'Son Hai Landscape logo',
    mobileMenuTitle: 'MAIN MENU',
    contactPhone: '0888220044',
    contactLabel: '(+84) 888.22.00.44',
    navLinks: [
      { name: 'Trang chủ', href: '/' },
      { name: 'Chúng tôi', href: '/chung-toi' },
      { name: 'Dự án', href: '/project', dropdown: true },
      { name: 'Videos', href: '/reels' },
      { name: 'Báo giá ngay', href: '/bao-gia-thiet-ke-farm' }
    ],
    projectLinks: [
      { name: 'Sân Vườn & Hồ Koi', href: '/project/san-vuon-ho-koi' },
      { name: 'Farm & Du Lịch Nghỉ Dưỡng', href: '/project/farm-du-lich-nghi-duong' },
      { name: 'Đá Nhân Tạo Nghệ Thuật', href: '/project/da-nhan-tao-nghe-thuat' }
    ]
  },
  footer: {
    logoUrl: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426297/farm/images/branding/u9s3pfkvpu63s8luvrtq.png',
    logoAlt: 'Son Hai Landscape logo',
    description:
      'Son Hai Landscape kiến tạo nên những không gian nghỉ dưỡng đẳng cấp, chuẩn mực trong từng nét vẽ quy hoạch Farmstay hàng đầu Việt Nam.',
    officeTitle: 'Văn phòng',
    officeAddress: '02 Đỗ Quang, Phường Thanh Khê, Thành phố Đà Nẵng',
    contactTitle: 'Liên hệ',
    contactLines: ['Thứ 2 – Thứ 7: 8h00-17h00', 'Email: vohuuhai2018@gmail.com', 'Hotline/Zalo: 0888.22.00.44'],
    menuTitle: 'Menu',
    menuLinks: [
      { name: 'Trang chủ', href: '/' },
      { name: 'Chúng tôi', href: '/chung-toi' },
      { name: 'Dự án', href: '/project' },
      { name: 'Báo giá ngay', href: '/bao-gia-thiet-ke-farm' }
    ],
    socialLinks: [
      { label: 'Facebook', href: 'https://facebook.com/oakfarm.vn', className: 'is-facebook', type: 'facebook' },
      { label: 'Zalo', href: 'https://zalo.me/0888220044', className: 'is-zalo', type: 'image', imageUrl: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426323/farm/images/icons/v6zrrayw9uxpxonxjxyi.png' },
      { label: 'Instagram', href: 'https://instagram.com', className: 'is-instagram', type: 'instagram' }
    ],
    copyright: '© 2025 Son Hai Landscape . All Rights Reserved'
  },
  mobileContact: {
    zaloHref: 'https://zalo.me/0888220044',
    zaloIconUrl: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426323/farm/images/icons/v6zrrayw9uxpxonxjxyi.png',
    phoneHref: 'tel:0888220044'
  },
  consultationPopup: {
    title: 'ĐĂNG KÝ NHẬN TƯ VẤN',
    submitLabel: 'TƯ VẤN NGAY',
    successMessage: 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong thời gian sớm nhất.',
    footerBadges: ['✓ Hoàn toàn miễn phí', '✓ Phản hồi nhanh chóng'],
    propertyTypeOptions: [
      { value: 'san_vuon', label: 'Sân vườn biệt thự' },
      { value: 'ho_koi', label: 'Hồ cá Koi' },
      { value: 'farm', label: 'Farm & Khu Nghỉ Dưỡng' },
      { value: 'quan_ca_phe', label: 'Quán cà phê' },
      { value: 'da_nhan_tao', label: 'Đá nhân tạo nghệ thuật' },
      { value: 'khac', label: 'Khác' }
    ],
    investmentOptions: [
      { value: 'duoi_500', label: 'Dưới 500 triệu' },
      { value: '500_1000', label: '500 triệu - 1 tỷ' },
      { value: '1000_3000', label: '1 tỷ - 3 tỷ' },
      { value: 'tren_3000', label: 'Trên 3 tỷ' }
    ]
  },
  quoteForm: {
    title: 'ĐĂNG KÝ NHẬN TƯ VẤN',
    description: 'Hãy để lại thông tin, kiến trúc sư của chúng tôi sẽ liên hệ tư vấn giải pháp tối ưu nhất cho anh chị.',
    submitLabel: 'GỬI YÊU CẦU TƯ VẤN NGAY',
    successMessage: 'Cảm ơn bạn đã đăng ký! Sơn Hải Landscape sẽ liên hệ tư vấn trong vòng 15-30 phút tới.',
    safetyBadges: ['🛡️ Bảo mật thông tin', '⚡ Phản hồi trong 15p'],
    propertyTypeOptions: [
      { value: 'san_vuon', label: 'Sân vườn biệt thự' },
      { value: 'ho_koi', label: 'Hồ cá Koi nghệ thuật' },
      { value: 'farm', label: 'Farmstay & Khu Nghỉ Dưỡng' },
      { value: 'quan_ca_phe', label: 'Quán cà phê' },
      { value: 'da_nhan_tao', label: 'Đá nhân tạo nghệ thuật' },
      { value: 'khac', label: 'Yêu cầu khác' }
    ],
    investmentOptions: [
      { value: 'duoi_500', label: 'Dưới 500 triệu' },
      { value: '500_1000', label: 'Từ 500 triệu - 1 tỷ' },
      { value: '1000_3000', label: 'Từ 1 tỷ - 3 tỷ' },
      { value: 'tren_3000', label: 'Trên 3 tỷ' }
    ]
  },
  pricingPage: {
    pill: 'TƯ VẤN CHUYÊN SÂU 1:1',
    titleLines: ['Khởi tạo', 'không gian', 'bền vững'],
    titleAccent: '#00c689',
    description:
      'Chúng tôi không chỉ thi công, chúng tôi cùng anh chị kiến tạo giải pháp quy hoạch tổng thể mang đậm dấu ấn cá nhân và tôn trọng thiên nhiên.',
    benefits: [
      {
        title: 'Giải pháp quy hoạch 4.0',
        description: 'Tối ưu hóa công năng trên từng mét vuông diện tích.',
        icon: 'info'
      },
      {
        title: 'Thực tế & Bền vững',
        description: 'Cam kết sử dụng vật liệu tự nhiên, hệ sinh thái tự cân bằng.',
        icon: 'home'
      }
    ],
    support: {
      label: 'Đội ngũ KTS trực tuyến',
      phoneLabel: '0888.22.00.44',
      phoneHref: 'tel:0888220044',
      avatars: [
        'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426595/farm/images/projects/nymwhku7vdxhge1isoly.jpg',
        'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426462/farm/images/projects/h2kf73vgyvthd3lxzsbq.jpg'
      ]
    }
  },
  reelsPage: {
    title: 'Videos',
    intro: 'Short-form videos showcasing our landscape construction process, garden tours, and project reveals.'
  },
  home: {
    hero: {
      eyebrow: 'Architecture & Landscape',
      titleLine1: 'Slow thinking.',
      titleLine2: 'Timeless design.',
      description:
        'Sơn Hải Landscape cung cấp dịch vụ tư vấn, thiết kế và thi công cảnh quan chuyên nghiệp, bao gồm sân vườn, hồ koi, farm, homestay và công viên. Chúng tôi kiến tạo những không gian hài hòa giữa thẩm mỹ và công năng, đảm bảo chất lượng thi công và giá trị bền vững cho từng dự án.',
      primaryCta: { label: 'Nhận Báo Giá', href: '/bao-gia-thiet-ke-farm' },
      secondaryCta: { label: 'Xem dự án', href: '/project' },
      foregroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426303/farm/images/home/jhfe2t09sjur4xnj1ui1.png',
      slides: [
        'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426277/farm/images/beforeafter/tw93p66rxwxqgzp19i9s.png',
        'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426280/farm/images/beforeafter/vngvkvqvm1zhvq00zaog.jpg',
        'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426276/farm/images/beforeafter/wvhc6pdkyp248tytrmko.png'
      ]
    },
    highlights: [
      { title: 'Bảo Hành 10 Năm', desc: 'Cam kết chất lượng dài hạn', icon: 'shield' },
      { title: 'Công Nghệ Tiên Tiến', desc: 'Hệ thống lọc nước hiện đại', icon: 'spark' },
      { title: '15+ Năm Kinh Nghiệm', desc: '200+ công trình hoàn thành', icon: 'people' }
    ],
    services: {
      eyebrow: 'Dịch vụ Son Hai Landscape',
      title: 'Dịch vụ Chuyên nghiệp',
      description: 'Chúng tôi kiến tạo những không gian hài hòa giữa thẩm mỹ và công năng, đảm bảo chất lượng cho từng dự án.',
      items: [
        {
          title: 'Sân Vườn - Hồ Koi',
          desc: 'Chuyên thiết kế, thi công và vận hành – bảo trì hồ cá Koi cùng cảnh quan sân vườn trên toàn quốc.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426311/farm/images/home/ef1xlo8bmxyhzywabywq.jpg',
          href: '/project/san-vuon-ho-koi'
        },
        {
          title: 'Farm & Du Lịch',
          desc: 'Chuyên tư vấn, thiết kế và thi công farm nghỉ dưỡng, khu du lịch sinh thái và cảnh quan đồng bộ.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426312/farm/images/home/og0lbibbyepj00simsjx.jpg',
          href: '/project/farm-du-lich-nghi-duong'
        },
        {
          title: 'Đá Nhân Tạo & Tiểu cảnh',
          desc: 'Chuyên thiết kế, thi công đá nhân tạo nghệ thuật và tiểu cảnh, tạo điểm nhấn thẩm mỹ cho không gian cảnh quan.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426313/farm/images/home/btqwh4ldz8nrg3ijlrno.jpg',
          href: '/project/da-nhan-tao-nghe-thuat'
        }
      ]
    },
    mission: {
      eyebrow: 'Giới thiệu về Sơn Hải Landscape',
      titleHtml: 'Chuyên nghiệp. <br/>Bền vững. Chiều sâu.',
      description:
        'Sơn Hải Landscape là đơn vị tư vấn, thiết kế và thi công cảnh quan theo định hướng chuyên nghiệp và bền vững. Chúng tôi áp dụng tư duy thiết kế "slow thinking", ưu tiên nghiên cứu chiều sâu và giải pháp phù hợp trong dài hạn cho từng dự án. Mỗi công trình được phát triển theo nguyên tắc "timeless design", hướng đến giá trị thẩm mỹ ổn định, hài hòa giữa công năng và bối cảnh tự nhiên. Sứ mệnh của chúng tôi là kiến tạo những không gian có giá trị bền vững, gia tăng chất lượng sống theo thời gian.',
      features: [
        {
          title: 'Quản trị rủi ro',
          description: 'Hạn chế sai sót trong xây dựng và tối ưu chi phí vận hành sau này.',
          icon: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426317/farm/images/icons/xbcpud1rwcre6oprnuae.png'
        },
        {
          title: 'Thẩm mỹ riêng biệt',
          description: 'Mỗi dự án là một câu chuyện độc bản, mang hơi thở của đất và người.',
          icon: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426316/farm/images/icons/weraoflu7t86ft9p1kso.png'
        }
      ],
      cta: {
        title: 'Tư vấn quy hoạch ngay',
        subtitle: 'Sẵn sàng lắng nghe 24/7',
        phoneLabel: '0888.22.00.44',
        phoneHref: 'tel:0888220044'
      },
      image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774593042/farm/images/home/lhphzwv32dkgzrplpge1.jpg',
      imageAlt: '20 Phút biết làm hồ Koi chuẩn'
    },
    featuredProjects: {
      badge: '🌿 Dự Án Tiêu Biểu',
      titleHtml: 'Những công trình <br />đầy tâm huyết',
      description:
        'Sơn Hải Landscape tự hào được đồng hành cùng các chủ đầu tư để kiến tạo nên những không gian sống và nghỉ dưỡng mang đậm bản sắc riêng. Dưới đây là những dự án tiêu biểu phản ánh tư duy "Timeless Design" của chúng tôi.',
      cta: { label: 'Khám Phá Thêm Dự Án', href: '/project' },
      items: [
        {
          slug: 'vuon-thien-nhien',
          title: 'Vườn thiên nhiên',
          location: 'Hồ Tràm, Xuyên Mộc',
          description: 'Tọa lạc tại Hồ Tràm, Xuyên Mộc, dự án là một farmstay rộng 1000m2 kết hợp vườn cây ăn trái và không gian cảnh quan thư giãn.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426305/farm/images/home/jyus2a8osiab88cnjf7c.jpg',
          href: '/project'
        }
      ]
    },
    beforeAfter: {
      eyebrow: 'Hiện trạng & Quy hoạch',
      title: 'Hành trình biến đổi',
      description: 'Sử dụng thanh trượt để so sánh trực quan sự thay đổi từ hiện trạng đến quy hoạch chi tiết.',
      items: [
        {
          name: 'Thiết kế Sân Vườn Biệt Thự',
          location: 'Dự án thực tế 2025',
          before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426281/farm/images/beforeafter/safynyrs2dtzxlewmeux.jpg',
          after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426280/farm/images/beforeafter/vngvkvqvm1zhvq00zaog.jpg'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Khách hàng nói gì',
      title: 'Niềm tin gửi trao',
      items: [
        {
          author: 'Ms. Lan Anh',
          role: 'Chủ đầu tư - Lâm Đồng',
          project: 'Dự án Farmstay bản địa',
          content: 'Son Hai Landscape đã giúp tôi hiện thực hóa ý tưởng về một Farmstay mang hơi thở bản địa.'
        }
      ]
    },
    companion: {
      eyebrow: 'Tận tâm phục vụ',
      title: 'Đồng hành trên mọi phương diện',
      description: 'Luôn bên cạnh chủ đầu tư trong từng bước hình thành dự án.',
      intro: 'Để hoàn thành được một dự án thiết kế Farm, đều phải trải qua các bước cơ bản nhất là khảo sát, thiết kế và thi công.',
      items: [
        { num: '01', title: 'Khảo sát', desc: 'Từ bước đầu tiên là khảo sát kỹ lưỡng thực tế...', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426343/farm/images/other/baentyl6pxjdhxdgxmvc.jpg' }
      ]
    }
  },
  about: {
    hero: {
      backgroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426305/farm/images/home/jyus2a8osiab88cnjf7c.jpg',
      eyebrow: 'VỀ CHÚNG TÔI',
      title: 'Sơn Hải Landscape',
      description: 'Đơn vị dẫn đầu trong lĩnh vực thiết kế và thi công cảnh quan...'
    },
    philosophy: '"Chúng tôi tin rằng kiến trúc thực thụ phải bắt nguồn từ sự thấu hiểu sâu sắc..."',
    team: {
      backgroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426308/farm/images/home/d0fm45pnqx6b5cmege6l.png',
      eyebrow: 'ĐỘI NGŨ CỦA CHÚNG TÔI',
      title: 'Gặp gỡ những chuyên gia kiến tạo',
      members: []
    }
  },
  projectPages: {
    categoryEyebrow: 'DỰ ÁN THEO CHUYÊN MỤC',
    categoryDescriptionTemplate: 'Khám phá tuyển tập các dự án tiêu biểu thuộc lĩnh vực {{category}} do Son Hai Landscape kiến tạo.',
    catalog: {
      imageSection: { pill: 'Hình Ảnh Công Trình', title: 'Hình Ảnh Công Trình Thực Tế', description: 'Những dự án tiêu biểu đã được Son Hai Landscape hoàn thành' },
      stickyNav: { image: 'Hình Ảnh', video: 'Video Thực Tế', threeD: 'Phối Cảnh 3D' },
      allCategoryLabel: 'Tất Cả Dự Án'
    },
    detail: {
      categoryBadge: 'ARCHITECTURE & LANDSCAPE',
      galleryEyebrow: 'Visual Story',
      galleryTitle: 'Hành trình kiến tạo',
      ctaTitle: 'Bạn muốn kiến tạo không gian riêng?',
      ctaDescription: 'Liên hệ Sơn Hải Landscape để được tư vấn...',
      primaryCta: { label: '0888 22 00 44', href: 'tel:0888220044' },
      secondaryCta: { label: 'Xem dự án khác', href: '/project' },
      infoLabels: {
        scale: 'QUY MÔ',
        location: 'ĐỊA ĐIỂM',
        completedYear: 'NĂM HOÀN THÀNH',
        designConsulting: 'TƯ VẤN THIẾT KẾ'
      }
    }
  }
};

export type SiteContent = typeof defaultSiteContent;

export type ProjectItem = {
  id?: string;
  slug: string;
  title: string;
  meta_description: string;
  image: string;
  category: string;
  gallery?: string[];
  info?: {
    scale?: string;
    location?: string;
    completedYear?: string;
    designConsulting?: string;
  };
};

export type ReelItem = {
  id?: string;
  category: string;
  title: string;
  duration: string;
  thumbnail: string;
  videoUrl?: string;
};

const getUrl = (val: any) => {
    if (!val) return '';
    if (typeof val === 'string') return val;
    if (val.url) return val.url;
    return '';
};

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  const payload = await getPayload({ config });
  const doc = await payload.findGlobal({
    slug: 'site-content',
    depth: 1
  });

  if (!doc) return defaultSiteContent as SiteContent;

  return {
    ...defaultSiteContent,
    header: {
      ...defaultSiteContent.header,
      logoUrl: getUrl(doc.header?.logo) || defaultSiteContent.header.logoUrl,
      logoAlt: doc.header?.logoAlt || defaultSiteContent.header.logoAlt,
      navLinks: doc.header?.navLinks || defaultSiteContent.header.navLinks,
      projectLinks: doc.header?.projectLinks || defaultSiteContent.header.projectLinks,
      contactPhone: doc.header?.contactPhone || defaultSiteContent.header.contactPhone,
      contactLabel: doc.header?.contactLabel || defaultSiteContent.header.contactLabel,
    },
    footer: {
      ...defaultSiteContent.footer,
      logoUrl: getUrl(doc.footer?.logo) || defaultSiteContent.footer.logoUrl,
      logoAlt: doc.footer?.logoAlt || defaultSiteContent.footer.logoAlt,
      description: doc.footer?.description || defaultSiteContent.footer.description,
      copyright: doc.footer?.copyright || defaultSiteContent.footer.copyright,
      contactLines: doc.footer?.contactLines?.map((l: any) => l.line) || defaultSiteContent.footer.contactLines,
    },
    home: {
      ...defaultSiteContent.home,
      hero: {
          ...defaultSiteContent.home.hero,
          eyebrow: (doc.home as any)?.hero?.eyebrow || defaultSiteContent.home.hero.eyebrow,
          titleLine1: (doc.home as any)?.hero?.titleLine1 || defaultSiteContent.home.hero.titleLine1,
          titleLine2: (doc.home as any)?.hero?.titleLine2 || defaultSiteContent.home.hero.titleLine2,
          description: (doc.home as any)?.hero?.description || defaultSiteContent.home.hero.description,
          foregroundImage: getUrl((doc.home as any)?.hero?.foregroundImage) || defaultSiteContent.home.hero.foregroundImage,
          slides: (doc.home as any)?.hero?.slides?.map((s: any) => getUrl(s.image)).filter(Boolean) || defaultSiteContent.home.hero.slides,
      },
      highlights: (doc.home as any)?.highlights || defaultSiteContent.home.highlights,
      services: (doc.home as any)?.services || defaultSiteContent.home.services,
      mission: (doc.home as any)?.mission || defaultSiteContent.home.mission,
      featuredProjects: (doc.home as any)?.featuredProjects || defaultSiteContent.home.featuredProjects,
    }
  } as SiteContent;
});

export const getProjects = cache(async (): Promise<ProjectItem[]> => {
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'projects',
    limit: 100,
    sort: 'createdAt',
    depth: 1
  });
  
  return docs.docs.map(doc => ({
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    meta_description: doc.meta_description || '',
    image: (doc.image as any)?.url || '',
    category: doc.category,
    gallery: doc.gallery?.map((g: any) => (g.image as any)?.url).filter(Boolean) || [],
    info: doc.info
  })) as ProjectItem[];
});

export const getProjectBySlugFromDb = cache(async (slug: string): Promise<ProjectItem | null> => {
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
    depth: 1
  });

  if (docs.docs.length === 0) return null;
  const doc = docs.docs[0];

  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    meta_description: doc.meta_description || '',
    image: (doc.image as any)?.url || '',
    category: doc.category,
    gallery: doc.gallery?.map((g: any) => (g.image as any)?.url).filter(Boolean) || [],
    info: doc.info
  } as ProjectItem;
});

export const getReels = cache(async (): Promise<ReelItem[]> => {
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'reels',
    limit: 100,
    sort: 'createdAt',
  });

  return docs.docs.map(doc => ({
    id: doc.id,
    category: doc.category,
    title: doc.title,
    duration: doc.duration,
    thumbnail: doc.thumbnail,
    videoUrl: doc.videoUrl
  })) as ReelItem[];
});

export const ensureSeededPayload = cache(async () => {
});
