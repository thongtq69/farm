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
          description: 'Tọa lạc tại Hồ Tràm, Xuyên Mộc, dự án là một farmstay rộng 1000m2 kết hợp vườn cây ăn trái và không gian cảnh quan thư giãn. Thiết kế hướng đến sự gần gũi tự nhiên với suối đá, hồ nước và hệ thực vật nhiệt đới phong phú.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426305/farm/images/home/jyus2a8osiab88cnjf7c.jpg',
          href: '/project'
        },
        {
          slug: 'san-vuon-nha-lan',
          title: 'Sân vườn nhà Lan',
          location: 'Bình Trưng, Hồ Chí Minh',
          description: 'Dự án là sân vườn nhà phố thiết kế theo phong cách vườn Nhật hiện đại. Không gian tổ chức khéo léo với lối dạo stepping stone, sỏi rải, cụm đá tự nhiên và đèn đá truyền thống, kết hợp cây bonsai tinh tế.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426306/farm/images/home/uvswzhekilaf4yzbuctc.jpg',
          href: '/project'
        },
        {
          slug: 'ca-phe-thi',
          title: 'Cà phê Thị',
          location: 'Nhơn Trạch, Đồng Nai',
          description: 'Không gian cà phê sân vườn uốn lượn tự nhiên, kết hợp giữa khu ngồi ngoài trời và cảnh quan mặt nước. Hồ cá trung tâm đóng vai trò điểm nhấn, liên kết các khu vực bàn ngồi và lối dạo xung quanh.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426308/farm/images/home/d0fm45pnqx6b5cmege6l.png',
          href: '/project'
        },
        {
          slug: 'ho-koi-tri-lam',
          title: 'Hồ Koi Trí Lâm',
          location: 'Tp Buôn Ma Thuột',
          description: 'Thiết kế theo phong cách vườn Nhật hiện đại, tập trung vào sự tinh giản và cân bằng không gian. Hồ koi kết hợp thác đá tự nhiên, đèn đá truyền thống và hệ cây bonsai mang đến không gian thư giãn tinh tế.',
          image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426309/farm/images/home/ms7wepswrge3qodzefez.png',
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
      title: 'Đồng hành trên mọi phương diện',
      description: 'Luôn bên cạnh chủ đầu tư trong từng bước hình thành dự án.',
      intro: 'Để hoàn thành được một dự án thiết kế Farm, đều phải trải qua các bước cơ bản nhất là khảo sát, thiết kế và thi công. Trong 3 bước cơ bản này, Son Hai Landscape luôn đồng hành cùng CĐT trên nhiều phương diện và luôn coi đó là trọng trách của chúng tôi.',
      items: [
        { num: '01', title: 'Khảo sát', desc: 'Từ bước đầu tiên là khảo sát kỹ lưỡng thực tế, Son Hai Landscape đã nắm rõ được diện mạo khu đất, gặp gỡ CĐT và hiểu hơn về mong muốn của CĐT về dự án để đời của họ.', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426343/farm/images/other/baentyl6pxjdhxdgxmvc.jpg' },
        { num: '02', title: 'Thiết kế', desc: 'Trong quá trình thiết kế Farm, các KTS và khách hàng luôn có sự trao đổi liền mạch và liên tục. Bất cứ sự thay đổi nào cũng được chúng tôi cập nhật để đi đến phương án tối ưu nhất.', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426347/farm/images/other/rwhhetrk6jcsheqsow6o.jpg' },
        { num: '03', title: 'Thi công', desc: 'Son Hai Landscape luôn đồng hành cùng CĐT trên mọi phương diện từ trao đổi online cho đến giám sát tác giả tại dự án cho đến khi dự án được hoàn thiện.', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426321/farm/images/icons/wkj2wrrqrudawumi7hrw.jpg' }
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
        { name: 'Võ Hữu Hải', role: 'Founder / CEO', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426798/farm/images/team/kn8jajqxkny8x8gzvgwc.png', desc: 'Chuyên gia quy hoạch và kiến trúc cảnh quan với hơn 10 năm kinh nghiệm.' },
        { name: 'Quản Lý Dự Án', role: 'Project Manager', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426800/farm/images/team/whaeefot3wjuvk7evmb1.png', desc: 'Điều hành và đảm bảo tiến độ, chất lượng cho mọi dự án tại Sơn Hải.' },
        { name: 'Kiến Trúc Sư', role: 'Lead Architect', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426797/farm/images/team/gpbvglcd3lba445isgim.png', desc: 'Người thổi hồn vào các bản vẽ thiết kế kiến trúc và không gian xanh.' },
        { name: 'Hành Chính', role: 'Finance & Admin', image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426796/farm/images/team/iyl2gm5vmy62xgn1pg9f.png', desc: 'Quản lý vận hành và hỗ trợ tối đa cho đội ngũ kỹ thuật.' }
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
      threeDSection: { pill: 'Mô Hình 3D', title: 'Phối Cảnh 3D & Quy Hoạch', description: 'Xem trước thiết kế qua mô hình chân thực trước khi thi công', duration: '3:20', titleSuffix: ' (Bản vẽ 3D)' },
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

function deepMerge<T>(base: T, override: any): T {
  if (Array.isArray(base)) {
    return (Array.isArray(override) ? override : base) as T;
  }

  if (base && typeof base === 'object') {
    const result: any = { ...base };
    const source = override && typeof override === 'object' ? override : {};

    for (const key of Object.keys(result)) {
      result[key] = deepMerge(result[key], source[key]);
    }

    for (const key of Object.keys(source)) {
      if (!(key in result)) {
        result[key] = source[key];
      }
    }

    return result;
  }

  return override ?? base;
}

let seeded = false;

export const ensureSeededPayload = cache(async () => {
  if (seeded) return;
  const payload = await getPayload({ config });

  try {
    // Seed Site Content
    const siteContent = await payload.findGlobal({
      slug: 'site-content',
    });

    if (!siteContent || Object.keys(siteContent).length <= 1) { 
      await payload.updateGlobal({
        slug: 'site-content',
        data: defaultSiteContent as any,
      });
    }

    // Seed Projects
    const projectCount = await payload.count({
      collection: 'projects',
    });

    if (projectCount.totalDocs === 0) {
      for (const project of seededProjects) {
        await payload.create({
          collection: 'projects',
          data: {
            ...project,
            gallery: project.gallery?.map(img => ({ url: img })) || [],
            info: {
               scale: 'Farmstay & Homestay',
               location: 'Viet Nam',
               completedYear: '2025',
               designConsulting: 'Son Hai Landscape'
            }
          } as any,
        });
      }
    }

    // Seed Reels
    const reelCount = await payload.count({
      collection: 'reels',
    });

    if (reelCount.totalDocs === 0) {
      for (const reel of seededReels) {
        await payload.create({
          collection: 'reels',
          data: reel as any,
        });
      }
    }
    
    seeded = true;
  } catch (err) {
    console.error('Seeding failed:', err);
  }
});

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const doc = await payload.findGlobal({
    slug: 'site-content',
  });
  const merged = deepMerge(defaultSiteContent, doc) as SiteContent;

  return {
    ...merged,
    header: {
      ...defaultSiteContent.header,
      ...merged.header,
      navLinks: merged.header?.navLinks?.length ? merged.header.navLinks : defaultSiteContent.header.navLinks,
      projectLinks: merged.header?.projectLinks?.length ? merged.header.projectLinks : defaultSiteContent.header.projectLinks,
    },
  };
});

export const getProjects = cache(async (): Promise<ProjectItem[]> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'projects',
    limit: 100,
    sort: 'createdAt',
  });
  
  return docs.docs.map(doc => ({
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    meta_description: doc.meta_description || '',
    image: doc.image,
    category: doc.category,
    gallery: doc.gallery?.map((g: any) => g.url) || [],
    info: doc.info
  })) as ProjectItem[];
});

export const getProjectBySlugFromDb = cache(async (slug: string): Promise<ProjectItem | null> => {
  await ensureSeededPayload();
  const payload = await getPayload({ config });
  const docs = await payload.find({
    collection: 'projects',
    where: {
      slug: {
        equals: slug,
      },
    },
    limit: 1,
  });

  if (docs.docs.length === 0) return null;
  const doc = docs.docs[0];

  return {
    id: doc.id,
    slug: doc.slug,
    title: doc.title,
    meta_description: doc.meta_description || '',
    image: doc.image,
    category: doc.category,
    gallery: doc.gallery?.map((g: any) => g.url) || [],
    info: doc.info
  } as ProjectItem;
});

export const getReels = cache(async (): Promise<ReelItem[]> => {
  await ensureSeededPayload();
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
