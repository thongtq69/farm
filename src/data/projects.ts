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
    image: '/images/projects/1-4-36e82318d518.jpg',
    category: 'da-nhan-tao-nghe-thuat'
  },
  {
    slug: 'rajamaha-country-club',
    title: 'Rajamaha Country Club',
    meta_description: 'Du an mang tinh bieu tuong, ket hop kien truc nghi duong va canh quan nhiet doi trong mot tong the sang trong.',
    image: '/images/projects/3-5-5c6de158d98d.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'hali-green',
    title: 'Hali Green',
    meta_description: 'Mo hinh farm sinh thai chu trong van hanh ben vung, bo cuc mat bang thong thoang va gan ket voi thien nhien.',
    image: '/images/projects/2-2-4018f1a799f1.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'pleiku-farm',
    title: 'Pleiku Farm',
    meta_description: 'Quy hoach farm quy mo lon voi tam nhin khai thac canh quan va phat trien trai nghiem nghi duong dac trung Tay Nguyen.',
    image: '/images/projects/2-1-674c891c1137.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'farmstay-nha-minh',
    title: 'Farmstay Nha Minh',
    meta_description: 'To hop farmstay am cung, de van hanh, can bang giua luu tru, vuon canh va trai nghiem song cham.',
    image: '/images/projects/1-4bbf0f0013c9.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'farm-together',
    title: 'Farm Together',
    meta_description: 'Khong gian nghi duong huong cong dong voi bo tri nhieu lop canh quan va cac diem dung chan trai nghiem.',
    image: '/images/projects/7-19eda8f21a5d.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'doi-de-trang',
    title: 'Doi De Trang',
    meta_description: 'Du an thiet ke canh quan tren dia hinh doi doc, toi uu tam nhin, giao thong va cac cum khong gian thuong mai.',
    image: '/images/projects/0-9-445003300584.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'hoa-phu-villa',
    title: 'Hoa Phu Villa',
    meta_description: 'Canh quan biet thu nghi duong voi ngon ngu thiet ke mem mai, vat lieu tu nhien va diem nhan mat nuoc tinh te.',
    image: '/images/projects/0-11-d3a399b2b6ab.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'an-binh-farm',
    title: 'An Binh Farm',
    meta_description: 'Mo hinh farm ket hop luu tru, trai nghiem nong nghiep va khong gian sinh hoat ngoai troi cho gia dinh.',
    image: '/images/projects/0-989a6d71f023.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'happy-life',
    title: 'Happy Life',
    meta_description: 'Tong the du an huong den doi song nghi duong nhe nhang voi he canh quan xung quanh cac cum luu tru.',
    image: '/images/projects/5b-90e168bf635f.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'haly-farm',
    title: 'Haly Farm',
    meta_description: 'Giai phap quy hoach farm can doi giua cong nang khai thac va gia tri canh quan ben vung theo thoi gian.',
    image: '/images/projects/7-2-7970ebe8c7a0.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'lang-van-hoa-cong-dong-thon-trlee',
    title: 'Lang Van Hoa Cong Dong Thon Trlee',
    meta_description: 'Du an cong dong ton vinh ban sac dia phuong thong qua kien truc canh quan va he thong khong gian chung.',
    image: '/images/projects/1-178fefd342ff.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'hien-garden',
    title: 'Hien Garden',
    meta_description: 'Vuon canh quan dan xen chat lieu tu nhien, mat nuoc va cay xanh de tao nen trai nghiem thu gian tinh te.',
    image: '/images/projects/4-6236408f513b.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'dai-farm',
    title: 'Dai Farm',
    meta_description: 'Quy hoach tong the cho farm du lich co nhieu phan khu, de dang phan ky dau tu va van hanh lau dai.',
    image: '/images/projects/coverr-oak-farm-2b0707e1d7e2.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'indochine-villa',
    title: 'Indochine Villa',
    meta_description: 'Khong gian biet thu dam chat Dong Duong voi san vuon, mat nuoc va ti le kien truc canh quan can bang.',
    image: '/images/projects/0-3-85a5d9147276.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'haos-homestay',
    title: 'Haos Homestay',
    meta_description: 'Mo hinh homestay giua thien nhien, toi uu giao thong noi bo va cac diem nghi chan cho du khach.',
    image: '/images/projects/1-6-7714047e284b.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'cam-ly-view-garder',
    title: 'Cam Ly View Garder',
    meta_description: 'Khong gian canh quan khai thac loi the dia hinh, tao ra tam nhin mo rong va trai nghiem luu tru doc dao.',
    image: '/images/projects/0-4b0689f75d23.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'holiday-village',
    title: 'Holiday Village',
    meta_description: 'Lang nghi duong ket hop luu tru va canh quan trai nghiem, mang lai gia tri khai thac linh hoat.',
    image: '/images/projects/1-4-1971866182c4.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'family-village',
    title: 'Family Village',
    meta_description: 'Tong the nghi duong huong gia dinh, chu trong khong gian sinh hoat chung va canh quan than thien.',
    image: '/images/projects/10-2-a8e76fdb3886.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'tructhuyvien',
    title: 'Truc Thuy Vien',
    meta_description: 'San vuon canh quan ket hop yeu to nuoc, da va cay xanh de tao nen nhung khoang nghi ngoi tinh lang.',
    image: '/images/projects/11-1-f0a059ce1fb5.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'ho-hon-co',
    title: 'Ho Hon Co',
    meta_description: 'Du an canh quan ton vinh mat nuoc va dia hinh tu nhien, tao ra he thong khong gian day cam xuc.',
    image: '/images/projects/12-1-35e8cb5f3861.jpg',
    category: 'san-vuon-ho-koi'
  },
  {
    slug: 'taste-of-issan-farm',
    title: 'Taste Of Issan Farm',
    meta_description: 'Farm trai nghiem am thuc va nghi duong, co cau khong gian mo va gan ket manh me voi canh quan.',
    image: '/images/projects/13-0ae900374403.jpg',
    category: 'farm-du-lich-nghi-duong'
  },
  {
    slug: 'ta-nung-homestay',
    title: 'Ta Nung Homestay',
    meta_description: 'Phuong an quy hoach homestay tren dia hinh doc, su dung view tu nhien nhu mot tai san trung tam.',
    image: '/images/projects/14-5ee1f3344f21.jpg',
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
