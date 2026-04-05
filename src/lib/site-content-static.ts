export const categoryLabels = {
  'san-vuon-ho-koi': 'Sân Vườn & Hồ Koi',
  'da-nhan-tao-nghe-thuat': 'Đá Nhân Tạo Nghệ Thuật',
  'farm-du-lich-nghi-duong': 'Farm & Du Lịch Nghỉ Dưỡng'
} as const;

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
      { name: 'Đá Nhân Tạo Nghệ Thuật', href: '/project/da-nhan-tao-nghe-thuat' },
      { name: 'Farm & Du Lịch Nghỉ Dưỡng', href: '/project/farm-du-lich-nghi-duong' }
    ]
  },
  footer: {
    logoUrl: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426297/farm/images/branding/u9s3pfkvpu63s8luvrtq.png',
    logoAlt: 'Son Hai Landscape logo',
    description:
      'Son Hai Landscape kiến tạo nên những không gian nghỉ dưỡng đẳng cấp, chuẩn mực trong từng nét vẽ quy hoạch Farmstay hàng đầu Việt Nam.',
    officeTitle: 'Văn phòng',
    officeAddress: 'VP HCM: 403A Nguyễn Duy Trinh, P. Bình Trưng Đông, Thủ Đức | VP HN: Số 2, ngõ 95/29 phố Việt Hưng, P. Việt Hưng, Q. Long Biên',
    contactTitle: 'Liên hệ',
    contactLines: ['Hotline: 0888 22 00 44', 'Sáng: 7h30 - 11h30 | Chiều: 13h - 17h', 'MST: 0314350615', 'Email: vohuuhai2018@gmail.com'],
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
    copyright: '© 2025 CÔNG TY TNHH THIẾT KẾ VÀ XÂY DỰNG SÂN VƯỜN NON BỘ SƠN HẢI. All Rights Reserved'
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
      { value: 'da_nhan_tao', label: 'Đá nhân tạo nghệ thuật' },
      { value: 'farm', label: 'Farm & Khu Nghỉ Dưỡng' },
      { value: 'quan_ca_phe', label: 'Quán cà phê' },
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
      { value: 'da_nhan_tao', label: 'Đá nhân tạo nghệ thuật' },
      { value: 'farm', label: 'Farmstay & Khu Nghỉ Dưỡng' },
      { value: 'quan_ca_phe', label: 'Quán cà phê' },
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
        'Sơn Hải Landscape chuyên thiết kế và thi công <strong>hồ koi sân vườn</strong>, đồng thời nổi bật với giải pháp <strong>đá nhân tạo</strong> và <strong>quy hoạch farm</strong>. Chúng tôi mang đến các công trình cảnh quan hài hòa giữa thẩm mỹ và công năng, đảm bảo chất lượng thi công và giá trị bền vững.',
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
          image: '/sanvuonhokoi.png',
          href: '/project/san-vuon-ho-koi'
        },
        {
          title: 'Đá Nhân Tạo & Tiểu cảnh',
          desc: 'Chuyên thiết kế, thi công đá nhân tạo nghệ thuật và tiểu cảnh, tạo điểm nhấn thẩm mỹ cho không gian cảnh quan.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775309154/farm/images/beforeafter/custom/isk7sbrhkjkbq1qzfgqx.jpg',
          href: '/project/da-nhan-tao-nghe-thuat'
        },
        {
          title: 'Farm & Du Lịch',
          desc: 'Chuyên tư vấn, thiết kế và thi công farm nghỉ dưỡng, khu du lịch sinh thái và cảnh quan đồng bộ.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426312/farm/images/home/og0lbibbyepj00simsjx.jpg',
          href: '/project/farm-du-lich-nghi-duong'
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
          slug: 'san-vuon-nha-lan',
          title: 'Sân vườn nhà Lan',
          location: 'Bình Trưng, Hồ Chí Minh',
          description: 'Dự án là sân vườn nhà phố thiết kế theo phong cách vườn Nhật hiện đại. Không gian tổ chức khéo léo với lối dạo stepping stone, sỏi rải, cụm đá tự nhiên và đèn đá truyền thống, kết hợp cây bonsai tinh tế.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775304993/farm/images/projects/custom/2/0_yfpw0r.jpg',
          href: '/project/san-vuon-nha-lan'
        },
        {
          slug: 'ca-phe-thi',
          title: 'Cà phê Thị',
          location: 'Nhơn Trạch, Đồng Nai',
          description: 'Không gian cà phê sân vườn uốn lượn tự nhiên, kết hợp giữa khu ngồi ngoài trời và cảnh quan mặt nước. Hồ cá trung tâm đóng vai trò điểm nhấn, liên kết các khu vực bàn ngồi và lối dạo xung quanh.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775305018/farm/images/projects/custom/3/20260129_1652_Photorealistic_Courtyard_Transformation_remix_01kg4jmhfpf1z9tvjvck1jgjaa_moaowp.jpg',
          href: '/project/ca-phe-thi'
        },
        {
          slug: 'ho-koi-tri-lam',
          title: 'Hồ Koi Trí Lâm',
          location: 'Tp Buôn Ma Thuột',
          description: 'Thiết kế theo phong cách vườn Nhật hiện đại, tập trung vào sự tinh giản và cân bằng không gian. Hồ koi kết hợp thác đá tự nhiên, đèn đá truyền thống và hệ cây bonsai mang đến không gian thư giãn tinh tế.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775305038/farm/images/projects/custom/4/ChatGPT_Image_19_42_50_16_thg_3_2026_obtza5.png',
          href: '/project/ho-koi-tri-lam'
        },
        {
          slug: 'vuon-thien-nhien',
          title: 'Vườn thiên nhiên',
          location: 'Hồ Tràm, Xuyên Mộc',
          description: 'Tọa lạc tại Hồ Tràm, Xuyên Mộc, dự án là một farmstay rộng 1000m2 kết hợp vườn cây ăn trái và không gian cảnh quan thư giãn. Thiết kế hướng đến sự gần gũi tự nhiên với suối đá, hồ nước và hệ thực vật nhiệt đới phong phú.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775304947/farm/images/projects/custom/1/ChatGPT_Image_09_15_50_12_thg_3_2026_t3yneh.jpg',
          href: '/project/vuon-thien-nhien'
        }
      ]
    },
    beforeAfter: {
      eyebrow: 'Hiện trạng & Quy hoạch',
      title: 'Hành trình biến đổi',
      description: 'Sử dụng thanh trượt để so sánh trực quan sự thay đổi từ hiện trạng đến quy hoạch chi tiết.',
      items: [
        {
          name: 'Đá nhân tạo',
          location: 'Dự án thực tế 2025',
          before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775309153/farm/images/beforeafter/custom/ea2kgwofn1h6zlne6bqu.png',
          after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775309154/farm/images/beforeafter/custom/isk7sbrhkjkbq1qzfgqx.jpg'
        },
        {
          name: 'Cảnh quan Hồ Koi & Đá Nghệ Thuật',
          location: 'Công trình tiêu biểu',
          before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426275/farm/images/beforeafter/hc9vsxfqvlsnerqzvtfh.png',
          after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426276/farm/images/beforeafter/wvhc6pdkyp248tytrmko.png'
        },
        {
          name: 'Quy hoạch Farmstay Nghỉ Dưỡng',
          location: 'Sơn Hải Landscape Execution',
          before: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426279/farm/images/beforeafter/n4mehqwtzql491dt2uyx.png',
          after: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426277/farm/images/beforeafter/tw93p66rxwxqgzp19i9s.png'
        }
      ]
    },
    testimonials: {
      eyebrow: 'Khách hàng nói gì',
      title: 'Niềm tin gửi trao',
      items: [
        {
          author: 'Ms. Hương',
          role: 'Chủ đầu tư - Vũng Tàu',
          project: 'Dự án vườn thiên nhiên',
          content: 'Sơn Hải thi công rất tâm huyết, cảm ơn vì đã làm cho tôi một mảnh sân vườn hồ koi tuyệt vời'
        },
        {
          author: 'Ms. Lan Anh',
          role: 'Chủ đầu tư - Lâm Đồng',
          project: 'Dự án Farmstay bản địa',
          content: 'Son Hai Landscape đã giúp tôi hiện thực hóa ý tưởng về một Farmstay mang hơi thở bản địa. Quy trình làm việc rất chuyên nghiệp và thấu hiểu khách hàng.'
        },
        {
          author: 'Mr. David Smith',
          role: 'Project Manager - Thailand',
          project: 'Dự án nghỉ dưỡng đồi dốc',
          content: 'Professional landscape planning. They understand the terrain and elevation challenges very well, then translate everything into a clear and workable master plan.'
        },
        {
          author: 'Mr. Hoàng Nam',
          role: 'Chủ đầu tư - Đồng Nai',
          project: 'Dự án quy hoạch nông trại',
          content: 'Hồ sơ kỹ thuật chi tiết và dễ hiểu cho đội thi công. Son Hai Landscape giúp tôi tiết kiệm nhiều chi phí phát sinh, đồng thời giữ được tính thẩm mỹ cho toàn bộ dự án.'
        }
      ]
    },
    companion: {
      eyebrow: 'Tận tâm phục vụ',
      title: 'Đồng hành trọn vẹn trong từng công trình',
      description: 'Luôn sát cánh cùng chủ đầu tư trong suốt quá trình hình thành dự án.',
      intro: 'Để hoàn thiện một dự án cảnh quan, cần trải qua 3 giai đoạn cốt lõi: khảo sát, thiết kế và thi công. Ở mỗi giai đoạn, Sơn Hải Landscape luôn đồng hành chặt chẽ cùng CĐT và xem đó là trách nhiệm xuyên suốt của mình.',
      items: [
        { num: '01', title: 'Khảo sát', desc: 'Từ bước đầu, Sơn Hải Landscape tiến hành khảo sát thực tế kỹ lưỡng, đánh giá hiện trạng và lắng nghe nhu cầu của CĐT nhằm định hướng giải pháp phù hợp cho từng công trình.', image: '/Đồng hành/1.png' },
        { num: '02', title: 'Thiết kế', desc: 'Trong quá trình thiết kế, đội ngũ luôn trao đổi liên tục với CĐT để hoàn thiện phương án tối ưu về thẩm mỹ và công năng, đảm bảo tính khả thi và hiệu quả lâu dài.', image: '/Đồng hành/2.png' },
        { num: '03', title: 'Thi công', desc: 'Sơn Hải Landscape trực tiếp triển khai và đồng hành cùng CĐT từ giai đoạn trao đổi đến giám sát chi tiết tại công trình, đảm bảo chất lượng thi công và tiến độ hoàn thiện.', image: '/Đồng hành/3.png' }
      ]
    }
  },
  about: {
    hero: {
      backgroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426305/farm/images/home/jyus2a8osiab88cnjf7c.jpg',
      eyebrow: 'VỀ CHÚNG TÔI',
      title: 'Sơn Hải Landscape',
      description: 'Đơn vị dẫn đầu trong lĩnh vực thiết kế và thi công cảnh quan, kiến tạo những không gian sống xanh bền vững và đậm chất nghệ thuật.'
    },
    philosophy: '"Chúng tôi tin rằng kiến trúc thực thụ phải bắt nguồn từ sự thấu hiểu sâu sắc về <strong>Đất, Người và Thời điểm</strong>. Mỗi dự án của Sơn Hải Landscape là một lời giải độc bản cho bài toán cân bằng giữa công năng và cảm xúc."',
 team: {
      backgroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426308/farm/images/home/d0fm45pnqx6b5cmege6l.png',
      eyebrow: 'ĐỘI NGŨ CỦA CHÚNG TÔI',
      title: 'Gặp gỡ những chuyên gia kiến tạo',
      members: [
        { name: 'Võ Hữu Hải', role: 'Founder / CEO', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775382528/farm/team/v278flnpczwwlmrphwf6.png', desc: 'Chuyên gia quy hoạch và kiến trúc cảnh quan với hơn 10 năm kinh nghiệm.' },
        { name: 'Lương Khải Hoàn', role: 'Project Manager', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775382526/farm/team/pargvytbsqjhnlpi8y7o.png', desc: 'Điều hành và đảm bảo tiến độ, chất lượng cho mọi dự án tại Sơn Hải.' },
        { name: 'Trần Minh Hoài', role: 'Lead Architect', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775382530/farm/team/j6npsmoju7mald4aheoo.png', desc: 'Người thổi hồn vào các bản vẽ thiết kế kiến trúc và không gian xanh.' },
        { name: 'Trần Thị Hương', role: 'Finance & Admin', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775382524/farm/team/rijfnp8u5ukldnwyq2mp.png', desc: 'Quản lý vận hành và hỗ trợ tối đa cho đội ngũ kỹ thuật.' }
      ]
    },
    vision: {
      backgroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426308/farm/images/home/d0fm45pnqx6b5cmege6l.png',
      eyebrow: 'TẦM NHÌN & SỨ MỆNH',
      title: 'Kiến tạo sự cân bằng giữa Con người & Thiên nhiên',
      description: 'Chúng tôi không chỉ phối phối cảnh, chúng tôi quy hoạch những giá trị sống dài hạn. Sứ mệnh của Sơn Hải Landscape là mang thiên nhiên vào từng nhịp sống hiện đại qua những giải pháp thiết kế "Slow Thinking".',
      stats: [
        { value: '10+', label: 'Năm kinh nghiệm' },
        { value: '50+', label: 'Dự án hoàn thiện' }
      ]
    },
    values: {
      eyebrow: 'OUR VALUES',
      title: 'Giá Trị Làm Nên Khác Biệt',
      ctaLabel: 'Khám phá phong cách thiết kế',
      ctaHref: '/project',
      items: [
        { icon: '📐', title: 'Tư vấn Chuyên sâu', desc: 'Đội ngũ kiến trúc sư Sơn Hải Landscape luôn sẵn sàng lắng nghe, thấu hiểu để đưa ra giải pháp quy hoạch tối ưu nhất cho khu đất của bạn.' },
        { icon: '⛰️', title: 'Đọc vị Địa hình', desc: 'Mỗi dự án đều được khảo sát thực tế để ghi nhận địa hình, hướng nắng, gió và đặc thù thổ nhưỡng, đảm bảo thiết kế thuận tự nhiên.' },
        { icon: '📜', title: 'Hồ sơ Chi tiết', desc: 'Chúng tôi cung cấp bộ hồ sơ thiết kế kỹ thuật hoàn chỉnh, từ quy hoạch tổng thể đến chi tiết cấu tạo, giúp thi công chính xác nhất.' },
        { icon: '✨', title: 'Bản sắc Độc bản', desc: 'Không sao chép, không rập khuôn. Mỗi công trình là một tác phẩm nghệ thuật mang đậm dấu ấn cá nhân của chủ sở hữu.' }
      ]
    },
    faq: {
      eyebrow: 'Q&A',
      titleHtml: 'Bạn còn <br/> thắc mắc?',
      description: 'Chúng tôi luôn minh bạch trong quy trình làm việc để khách hàng hoàn toàn yên tâm khi đồng hành.',
      items: [
        { question: 'Sơn Hải Landscape có nhận dự án ở các tỉnh xa không?', answer: 'Chúng tôi có trụ sở tại Đà Nẵng nhưng hoạt động trên toàn quốc. Đội ngũ sẵn sàng di chuyển đến trực tiếp khu đất để khảo sát và làm việc.' },
        { question: 'Quy trình tư vấn thiết kế tại đây như thế nào?', answer: 'Quy trình gồm 7 giai đoạn: Tiếp nhận thông tin -> Khảo sát thực tế -> Ý tưởng sơ phác -> Quy hoạch 1/500 -> Thiết kế kiến trúc -> Thiết kế cảnh quan -> Bàn giao hồ sơ.' },
        { question: 'Chi phí khảo sát được tính như thế nào?', answer: 'Chi phí này phụ thuộc vào vị trí và quy mô khu đất. Chúng tôi sẽ báo giá minh bạch trước khi thực hiện để quý khách chủ động ngân sách.' }
      ]
    },
    cta: {
      backgroundImage: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426309/farm/images/home/ms7wepswrge3qodzefez.png',
      title: 'Bắt đầu hành trình kiến tạo không gian của bạn',
      description: 'Liên hệ với các chuyên gia của chúng tôi để được tư vấn quy hoạch và thiết kế chi tiết.',
      primaryCta: { label: 'Nhận Báo Giá', href: '/bao-gia-thiet-ke-farm' },
      secondaryCta: { label: '(+84) 888.22.00.44', href: 'tel:0888220044' }
    }
  },
  projectPages: {
    categoryEyebrow: 'DỰ ÁN THEO CHUYÊN MỤC',
    categoryDescriptionTemplate: 'Khám phá tuyển tập các dự án tiêu biểu thuộc lĩnh vực {{category}} do Son Hai Landscape kiến tạo.',
    catalog: {
      imageSection: { pill: 'Hình Ảnh Công Trình', title: 'Hình Ảnh Công Trình Thực Tế', description: 'Những dự án tiêu biểu đã được Son Hai Landscape hoàn thành' },
      videoSection: { pill: 'Video Thi Công', title: 'Video Thi Công & Thực Tế', description: 'Xem quy trình thi công thực tế các dự án đã hoàn thành' },
      threeDSection: { pill: 'Mô Hình 3D', title: 'Mẫu đá 3D', description: 'Xem trước thiết kế qua mô hình chân thực trước khi thi công', duration: '3:20', titleSuffix: ' (Bản vẽ 3D)' },
      stickyNav: { image: 'Hình Ảnh', video: 'Video Thực Tế', threeD: 'Phối Cảnh 3D' },
      allCategoryLabel: 'Tất Cả Dự Án'
    },
    detail: {
      categoryBadge: 'ARCHITECTURE & LANDSCAPE',
      galleryEyebrow: 'Visual Story',
      galleryTitle: 'Hành trình kiến tạo',
      ctaTitle: 'Bạn muốn kiến tạo không gian riêng?',
      ctaDescription: 'Liên hệ Sơn Hải Landscape để được tư vấn quy hoạch và thiết kế kiến trúc theo định hướng "Timeless Design".',
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
