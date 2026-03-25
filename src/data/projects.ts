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
  }
];

export const projects: ProjectItem[] = baseProjects.map((project) => ({
  ...project,
  gallery: [project.image, project.image, project.image]
}));

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
