export type ProjectItem = {
  slug: string;
  title: string;
  meta_description: string;
  image: string;
  category: 'san-vuon-ho-koi' | 'farm-du-lich-nghi-duong' | 'da-nhan-tao-nghe-thuat';
  gallery?: string[];
};

export const categorySlugs = [
  'san-vuon-ho-koi',
  'farm-du-lich-nghi-duong',
  'da-nhan-tao-nghe-thuat'
] as const;

const baseProjects: ProjectItem[] = [
  {
    slug: 'palm-hotel',
    title: 'Palm Hotel',
    meta_description: 'Phuong an kien truc canh quan nghi duong cao cap voi duong net hien dai va trai nghiem thu gian tron ven.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426387/farm/images/projects/ymh1agucvmogwrbldwgo.jpg',
    category: 'da-nhan-tao-nghe-thuat'
  },
  {
    slug: 'rajamaha-country-club',
    title: 'Rajamaha Country Club',
    meta_description: 'Du an mang tinh bieu tuong, ket hop kien truc nghi duong va canh quan nhiet doi trong mot tong the sang trong.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426595/farm/images/projects/nymwhku7vdxhge1isoly.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'hali-green',
    title: 'Hali Green',
    meta_description: 'Mo hinh farm sinh thai chu trong van hanh ben vung, bo cuc mat bang thong thoang va gan ket voi thien nhien.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426462/farm/images/projects/h2kf73vgyvthd3lxzsbq.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'pleiku-farm',
    title: 'Pleiku Farm',
    meta_description: 'Quy hoach farm quy mo lon voi tam nhin khai thac canh quan va phat trien trai nghiem nghi duong dac trung Tay Nguyen.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426459/farm/images/projects/kh5v6ytdidftg84jrgy2.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'farmstay-nha-minh',
    title: 'Farmstay Nha Minh',
    meta_description: 'To hop farmstay am cung, de van hanh, can bang giua luu tru, vuon canh va trai nghiem song cham.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426390/farm/images/projects/sbve7kjpi7xfckibtpqh.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'farm-together',
    title: 'Farm Together',
    meta_description: 'Khong gian nghi duong huong cong dong voi bo tri nhieu lop canh quan va cac diem dung chan trai nghiem.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426700/farm/images/projects/qrwa4klvffldijjl3tyj.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'doi-de-trang',
    title: 'Doi De Trang',
    meta_description: 'Du an thiet ke canh quan tren dia hinh doi doc, toi uu tam nhin, giao thong va cac cum khong gian thuong mai.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426363/farm/images/projects/ahtfli06zhinykc7gyve.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'hoa-phu-villa',
    title: 'Hoa Phu Villa',
    meta_description: 'Canh quan biet thu nghi duong voi ngon ngu thiet ke mem mai, vat lieu tu nhien va diem nhan mat nuoc tinh te.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426353/farm/images/projects/lrswozgchjemtvdx2ii6.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'an-binh-farm',
    title: 'An Binh Farm',
    meta_description: 'Mo hinh farm ket hop luu tru, trai nghiem nong nghiep va khong gian sinh hoat ngoai troi cho gia dinh.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426365/farm/images/projects/pt1hoflmt4nimtddbsk9.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'happy-life',
    title: 'Happy Life',
    meta_description: 'Tong the du an huong den doi song nghi duong nhe nhang voi he canh quan xung quanh cac cum luu tru.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426658/farm/images/projects/mganysocgms47apzrg8y.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'haly-farm',
    title: 'Haly Farm',
    meta_description: 'Giai phap quy hoach farm can doi giua cong nang khai thac va gia tri canh quan ben vung theo thoi gian.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426702/farm/images/projects/wh5rtdydf7csnbgdnnz1.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'lang-van-hoa-cong-dong-thon-trlee',
    title: 'Lang Van Hoa Cong Dong Thon Trlee',
    meta_description: 'Du an cong dong ton vinh ban sac dia phuong thong qua kien truc canh quan va he thong khong gian chung.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426378/farm/images/projects/szyqxxuogbj1fkaeyeym.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'hien-garden',
    title: 'Hien Garden',
    meta_description: 'Vuon canh quan dan xen chat lieu tu nhien, mat nuoc va cay xanh de tao nen trai nghiem thu gian tinh te.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426623/farm/images/projects/fnyrliyzgymvh4ir2kkc.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'dai-farm',
    title: 'Dai Farm',
    meta_description: 'Quy hoach tong the cho farm du lich co nhieu phan khu, de dang phan ky dau tu va van hanh lau dai.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426773/farm/images/projects/molvc1tmfxfobqqhagnf.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'indochine-villa',
    title: 'Indochine Villa',
    meta_description: 'Khong gian biet thu dam chat Dong Duong voi san vuon, mat nuoc va ti le kien truc canh quan can bang.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426354/farm/images/projects/zjf710s044oocigwtity.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'haos-homestay',
    title: 'Haos Homestay',
    meta_description: 'Mo hinh homestay giua thien nhien, toi uu giao thong noi bo va cac diem nghi chan cho du khach.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426392/farm/images/projects/ls43tbeidlyvd5gsyvs1.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'cam-ly-view-garder',
    title: 'Cam Ly View Garder',
    meta_description: 'Khong gian canh quan khai thac loi the dia hinh, tao ra tam nhin mo rong va trai nghiem luu tru doc dao.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426357/farm/images/projects/xu0ripcddxagnqzkpeqr.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'holiday-village',
    title: 'Holiday Village',
    meta_description: 'Lang nghi duong ket hop luu tru va canh quan trai nghiem, mang lai gia tri khai thac linh hoat.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426385/farm/images/projects/jtmq1mdldocsvpvah4se.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'family-village',
    title: 'Family Village',
    meta_description: 'Tong the nghi duong huong gia dinh, chu trong khong gian sinh hoat chung va canh quan than thien.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426406/farm/images/projects/wmiwiuhc4x11b8drpnzf.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'tructhuyvien',
    title: 'Truc Thuy Vien',
    meta_description: 'San vuon canh quan ket hop yeu to nuoc, da va cay xanh de tao nen nhung khoang nghi ngoi tinh lang.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426420/farm/images/projects/w5supuvcup0zotcwmqfq.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'ho-hon-co',
    title: 'Ho Hon Co',
    meta_description: 'Du an canh quan ton vinh mat nuoc va dia hinh tu nhien, tao ra he thong khong gian day cam xuc.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426434/farm/images/projects/wkoqos54jrff2eeukkcv.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'taste-of-issan-farm',
    title: 'Taste Of Issan Farm',
    meta_description: 'Farm trai nghiem am thuc va nghi duong, co cau khong gian mo va gan ket manh me voi canh quan.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426444/farm/images/projects/klgijiuip5mextkz4g4o.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'ta-nung-homestay',
    title: 'Ta Nung Homestay',
    meta_description: 'Phuong an quy hoach homestay tren dia hinh doc, su dung view tu nhien nhu mot tai san trung tam.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1774426453/farm/images/projects/m935t2pe2hfcbjekowsa.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'vuon-thien-nhien',
    title: 'Vườn thiên nhiên',
    meta_description: 'Tọa lạc tại Hồ Tràm, Xuyên Mộc, dự án là một farmstay rộng 1000m2 kết hợp vườn cây ăn trái và không gian cảnh quan thư giãn.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775304947/farm/images/projects/custom/1/ChatGPT_Image_09_15_50_12_thg_3_2026_t3yneh.jpg',
    category: 'farm-du-lich-nghi-duong',
    gallery: [
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304947/farm/images/projects/custom/1/ChatGPT_Image_09_15_50_12_thg_3_2026_t3yneh.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304950/farm/images/projects/custom/1/ChatGPT_Image_09_15_57_12_thg_3_2026_spwovo.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304953/farm/images/projects/custom/1/ChatGPT_Image_09_18_30_12_thg_3_2026_twyku8.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304957/farm/images/projects/custom/1/ChatGPT_Image_09_19_58_12_thg_3_2026_z9mbcg.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304961/farm/images/projects/custom/1/ChatGPT_Image_09_21_46_12_thg_3_2026_z1ohze.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304965/farm/images/projects/custom/1/ChatGPT_Image_09_22_31_12_thg_3_2026_ckk2zn.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304969/farm/images/projects/custom/1/ChatGPT_Image_09_22_35_12_thg_3_2026_tat8os.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304974/farm/images/projects/custom/1/ChatGPT_Image_09_22_38_12_thg_3_2026_f1wsem.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304979/farm/images/projects/custom/1/ChatGPT_Image_09_23_26_12_thg_3_2026_zrwyyi.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304983/farm/images/projects/custom/1/ChatGPT_Image_09_24_35_12_thg_3_2026_b5rpmm.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304985/farm/images/projects/custom/1/ChatGPT_Image_09_25_13_12_thg_3_2026_f5pduf.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304987/farm/images/projects/custom/1/ChatGPT_Image_09_26_36_12_thg_3_2026_la3tot.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304988/farm/images/projects/custom/1/ChatGPT_Image_09_26_46_12_thg_3_2026_ypqlpe.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304990/farm/images/projects/custom/1/ChatGPT_Image_09_26_56_12_thg_3_2026_hkwdw5.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304991/farm/images/projects/custom/1/ChatGPT_Image_09_29_08_12_thg_3_2026_sbcaeu.jpg"
    ]
  },
  {
    slug: 'san-vuon-nha-lan',
    title: 'Sân vườn nhà Lan',
    meta_description: 'Dự án là sân vườn nhà phố thiết kế theo phong cách vườn Nhật hiện đại.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775304993/farm/images/projects/custom/2/0_yfpw0r.jpg',
    category: 'san-vuon-ho-koi',
    gallery: [
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304993/farm/images/projects/custom/2/0_yfpw0r.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304994/farm/images/projects/custom/2/1_ahaeqn.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304996/farm/images/projects/custom/2/2_fayp3j.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775304998/farm/images/projects/custom/2/3_jwmapr.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305000/farm/images/projects/custom/2/4_gxiekp.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305001/farm/images/projects/custom/2/5_vr9irn.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305003/farm/images/projects/custom/2/6_babns3.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305004/farm/images/projects/custom/2/ChatGPT_Image_12_17_34_9_thg_3_2026_pfhwlf.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305007/farm/images/projects/custom/2/ChatGPT_Image_12_17_42_9_thg_3_2026_hi8za3.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305009/farm/images/projects/custom/2/ChatGPT_Image_12_17_57_9_thg_3_2026_r0oypp.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305012/farm/images/projects/custom/2/ChatGPT_Image_12_32_25_9_thg_3_2026_tnoi6u.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305015/farm/images/projects/custom/2/ChatGPT_Image_12_32_29_9_thg_3_2026_sti1as.jpg"
    ]
  },
  {
    slug: 'ca-phe-thi',
    title: 'Cà phê Thị',
    meta_description: 'Không gian cà phê sân vườn uốn lượn tự nhiên, kết hợp giữa khu ngồi ngoài trời và cảnh quan mặt nước.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775305018/farm/images/projects/custom/3/20260129_1652_Photorealistic_Courtyard_Transformation_remix_01kg4jmhfpf1z9tvjvck1jgjaa_moaowp.jpg',
    category: 'san-vuon-ho-koi',
    gallery: [
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305018/farm/images/projects/custom/3/20260129_1652_Photorealistic_Courtyard_Transformation_remix_01kg4jmhfpf1z9tvjvck1jgjaa_moaowp.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305021/farm/images/projects/custom/3/20260129_1655_Outdoor_Dining_Terrace_remix_01kg4js65mfghapc21zqq9m5x6_mk7pah.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305023/farm/images/projects/custom/3/20260129_1656_Image_Generation_remix_01kg4jwky6f409nwvzb8t5h5a7_owltik.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305026/farm/images/projects/custom/3/20260129_1657_Image_Generation_remix_01kg4jx4pnfw3t3t5cx8d5w9g2_h46ofn.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305028/farm/images/projects/custom/3/20260129_1701_Ultra-Realistic_Courtyard_Scene_remix_01kg4k5aagfv8sqhb31tg8vte9_nntnb6.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305030/farm/images/projects/custom/3/20260129_1709_Image_Generation_remix_01kg4kkczyerprqt2vrs355trs_jnitcs.jpg",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305032/farm/images/projects/custom/3/20260129_1712_Image_Generation_remix_01kg4ks2q8ft7txms18hv1tcjv_g2gtlz.jpg"
    ]
  },
  {
    slug: 'ho-koi-tri-lam',
    title: 'Hồ Koi Trí Lâm',
    meta_description: 'Thiết kế theo phong cách vườn Nhật hiện đại, tập trung vào sự tinh giản và cân bằng không gian.',
    image: 'https://res.cloudinary.com/dwalymiy3/image/upload/v1775305038/farm/images/projects/custom/4/ChatGPT_Image_19_42_50_16_thg_3_2026_obtza5.png',
    category: 'san-vuon-ho-koi',
    gallery: [
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305038/farm/images/projects/custom/4/ChatGPT_Image_19_42_50_16_thg_3_2026_obtza5.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305041/farm/images/projects/custom/4/ChatGPT_Image_19_42_55_16_thg_3_2026_emligy.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305045/farm/images/projects/custom/4/ChatGPT_Image_19_43_04_16_thg_3_2026_atgtzo.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305050/farm/images/projects/custom/4/ChatGPT_Image_19_43_11_16_thg_3_2026_abx0pb.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305055/farm/images/projects/custom/4/ChatGPT_Image_19_43_23_16_thg_3_2026_le6xfk.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305060/farm/images/projects/custom/4/ChatGPT_Image_19_44_09_16_thg_3_2026_h0lenx.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305065/farm/images/projects/custom/4/ChatGPT_Image_19_45_10_16_thg_3_2026_rxxqlr.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305070/farm/images/projects/custom/4/ChatGPT_Image_19_46_26_16_thg_3_2026_jmo3m6.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305073/farm/images/projects/custom/4/ChatGPT_Image_19_47_51_16_thg_3_2026_lsvhjz.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305076/farm/images/projects/custom/4/ChatGPT_Image_19_47_56_16_thg_3_2026_uvjrg0.png",
      "https://res.cloudinary.com/dwalymiy3/image/upload/v1775305080/farm/images/projects/custom/4/ChatGPT_Image_19_48_00_16_thg_3_2026_c9acr7.png"
    ]
  }
];

export const projects: ProjectItem[] = baseProjects.map((project) => ({
  ...project,
  gallery: project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image, project.image, project.image]
}));

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
