export type ProjectItem = {
  slug: string;
  title: string;
  meta_description: string;
  image: string;
  category: 'san-vuon-ho-koi' | 'farm-du-lich-nghi-duong' | 'da-nhan-tao-nghe-thuat' | 'mau-da-3d';
  gallery?: string[];
  isGalleryOnly?: boolean;
};

export const categorySlugs = [
  'san-vuon-ho-koi',
  'da-nhan-tao-nghe-thuat',
  'farm-du-lich-nghi-duong'
] as const;

const baseProjects: ProjectItem[] = [
  {
    "slug": "vuon-thien-nhien",
    "title": "Vườn thiên nhiên",
    "meta_description": "Không gian nghỉ dưỡng hòa quyện cùng thiên nhiên tại Hồ Tràm.",
    "image": "/images/projects/custom/1/1.jpg",
    "category": "farm-du-lich-nghi-duong",
    "gallery": [
      "/images/projects/custom/1/1.jpg",
      "/images/projects/custom/1/2.jpg",
      "/images/projects/custom/1/3.jpg",
      "/images/projects/custom/1/4.jpg",
      "/images/projects/custom/1/5.jpg",
      "/images/projects/custom/1/6.jpg",
      "/images/projects/custom/1/7.jpg",
      "/images/projects/custom/1/8.jpg",
      "/images/projects/custom/1/9.jpg",
      "/images/projects/custom/1/10.jpg",
      "/images/projects/custom/1/11.jpg",
      "/images/projects/custom/1/12.jpg",
      "/images/projects/custom/1/13.jpg",
      "/images/projects/custom/1/14.jpg",
      "/images/projects/custom/1/15.jpg"
    ]
  },
  {
    "slug": "san-vuon-nha-lan",
    "title": "Sân vườn nhà Lan",
    "meta_description": "Sân vườn biệt thự phong cách Nhật Bản hiện đại, tinh tế.",
    "image": "/images/projects/custom/2/1.jpg",
    "category": "san-vuon-ho-koi",
    "gallery": [
      "/images/projects/custom/2/0.jpg",
      "/images/projects/custom/2/1.jpg",
      "/images/projects/custom/2/2.jpg",
      "/images/projects/custom/2/3.jpg",
      "/images/projects/custom/2/4.jpg",
      "/images/projects/custom/2/5.jpg",
      "/images/projects/custom/2/7.jpg",
      "/images/projects/custom/2/8.jpg",
      "/images/projects/custom/2/9.jpg",
      "/images/projects/custom/2/10.jpg",
      "/images/projects/custom/2/11.jpg",
      "/images/projects/custom/2/12.jpg"
    ]
  },
  {
    "slug": "ca-phe-thi",
    "title": "Cà phê Thị",
    "meta_description": "Không gian cà phê sân vườn với điểm nhấn hồ cá Koi trung tâm.",
    "image": "/images/projects/custom/3/1.jpg",
    "category": "san-vuon-ho-koi",
    "gallery": [
      "/images/projects/custom/3/1.jpg",
      "/images/projects/custom/3/2.jpg",
      "/images/projects/custom/3/3.jpg",
      "/images/projects/custom/3/4.jpg",
      "/images/projects/custom/3/5.jpg",
      "/images/projects/custom/3/6.jpg",
      "/images/projects/custom/3/7.jpg"
    ]
  },
  {
    "slug": "ho-koi-tri-lam",
    "title": "Hồ Koi Trí Lâm",
    "meta_description": "Dự án hồ cá Koi nghệ thuật phong cách Nhật Bản tại Buôn Ma Thuột.",
    "image": "/images/projects/custom/4/1.png",
    "category": "san-vuon-ho-koi",
    "gallery": [
      "/images/projects/custom/4/1.png",
      "/images/projects/custom/4/2.png",
      "/images/projects/custom/4/3.png",
      "/images/projects/custom/4/4.png",
      "/images/projects/custom/4/5.png",
      "/images/projects/custom/4/6.png",
      "/images/projects/custom/4/7.png",
      "/images/projects/custom/4/8.png",
      "/images/projects/custom/4/9.png",
      "/images/projects/custom/4/10.png",
      "/images/projects/custom/4/11.png"
    ]
  },
  {
    "slug": "thuc-te-thi-cong-new-1",
    "title": "Hình ảnh thi công thực tế 1",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383017/farm/projects/san-vuon-ho-koi-new/bdkpmlijxteauzovpr39.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-2",
    "title": "Hình ảnh thi công thực tế 2",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383020/farm/projects/san-vuon-ho-koi-new/mmgwk4fb8czm94tf2rfk.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-3",
    "title": "Hình ảnh thi công thực tế 3",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383022/farm/projects/san-vuon-ho-koi-new/jr87vfyzeggndclczpo7.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-4",
    "title": "Hình ảnh thi công thực tế 4",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383023/farm/projects/san-vuon-ho-koi-new/vbj5mh8scdgthxokvttm.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-5",
    "title": "Hình ảnh thi công thực tế 5",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383025/farm/projects/san-vuon-ho-koi-new/aiqzv3xk1u6toedfcm8k.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-6",
    "title": "Hình ảnh thi công thực tế 6",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383026/farm/projects/san-vuon-ho-koi-new/ezmaiwbt0pgmkz4hexhk.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-7",
    "title": "Hình ảnh thi công thực tế 7",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383028/farm/projects/san-vuon-ho-koi-new/idedzwmwktntncu36u1b.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-8",
    "title": "Hình ảnh thi công thực tế 8",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383029/farm/projects/san-vuon-ho-koi-new/rlhoatugc8ubtbsqkrax.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-9",
    "title": "Hình ảnh thi công thực tế 9",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383030/farm/projects/san-vuon-ho-koi-new/a2tuu1wkw76dhacffzvo.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-10",
    "title": "Hình ảnh thi công thực tế 10",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383031/farm/projects/san-vuon-ho-koi-new/uizq10xjxzycj6g5squy.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-11",
    "title": "Hình ảnh thi công thực tế 11",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383033/farm/projects/san-vuon-ho-koi-new/pq5924x7pfy790l9wfgr.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-12",
    "title": "Hình ảnh thi công thực tế 12",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383034/farm/projects/san-vuon-ho-koi-new/srlamm8lktzax77tvlu7.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-13",
    "title": "Hình ảnh thi công thực tế 13",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383036/farm/projects/san-vuon-ho-koi-new/f32avyxmcguzkdsybrvi.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-14",
    "title": "Hình ảnh thi công thực tế 14",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383037/farm/projects/san-vuon-ho-koi-new/v0tuq1p4icsbubbnnix0.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-15",
    "title": "Hình ảnh thi công thực tế 15",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383038/farm/projects/san-vuon-ho-koi-new/hurydkeq8cpsbyxnq7ej.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-16",
    "title": "Hình ảnh thi công thực tế 16",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383039/farm/projects/san-vuon-ho-koi-new/wmvs5ei3cew4dmstxpui.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-17",
    "title": "Hình ảnh thi công thực tế 17",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383040/farm/projects/san-vuon-ho-koi-new/yczx7r8vimazvgjtf2qn.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-18",
    "title": "Hình ảnh thi công thực tế 18",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383041/farm/projects/san-vuon-ho-koi-new/k548ull5vwlf4ne4qnwn.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-19",
    "title": "Hình ảnh thi công thực tế 19",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383042/farm/projects/san-vuon-ho-koi-new/htyqjef2wfgpvgdopmw1.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-20",
    "title": "Hình ảnh thi công thực tế 20",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383044/farm/projects/san-vuon-ho-koi-new/gfepg1ggpoyz2wgdxy8d.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-21",
    "title": "Hình ảnh thi công thực tế 21",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383045/farm/projects/san-vuon-ho-koi-new/wfbdzqgjq7x5xwwg4pm0.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-22",
    "title": "Hình ảnh thi công thực tế 22",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383046/farm/projects/san-vuon-ho-koi-new/oo7sca0x8bc8vpqnc9ji.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-23",
    "title": "Hình ảnh thi công thực tế 23",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383047/farm/projects/san-vuon-ho-koi-new/fsip31rsbuihytyc2pfa.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-24",
    "title": "Hình ảnh thi công thực tế 24",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383048/farm/projects/san-vuon-ho-koi-new/huwbftqkitpys2dvop0m.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-25",
    "title": "Hình ảnh thi công thực tế 25",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383049/farm/projects/san-vuon-ho-koi-new/o6lx0os6qigqk5oi8fub.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-26",
    "title": "Hình ảnh thi công thực tế 26",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383051/farm/projects/san-vuon-ho-koi-new/cbwvcpccxe0axigavpwq.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-27",
    "title": "Hình ảnh thi công thực tế 27",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383052/farm/projects/san-vuon-ho-koi-new/lhrbnw1k6hfqrkuiw0l4.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-28",
    "title": "Hình ảnh thi công thực tế 28",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383053/farm/projects/san-vuon-ho-koi-new/dswjubpcjlkqxyvfozgj.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-29",
    "title": "Hình ảnh thi công thực tế 29",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383054/farm/projects/san-vuon-ho-koi-new/y1kaiddlsyhxzaa8nmbo.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-30",
    "title": "Hình ảnh thi công thực tế 30",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383055/farm/projects/san-vuon-ho-koi-new/f60rz4ynpkwcs4yw8oko.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-31",
    "title": "Hình ảnh thi công thực tế 31",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383056/farm/projects/san-vuon-ho-koi-new/authdbzhfz3xqglvuxbs.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-32",
    "title": "Hình ảnh thi công thực tế 32",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383057/farm/projects/san-vuon-ho-koi-new/c2ryuqfj2ngqdaloijtu.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-33",
    "title": "Hình ảnh thi công thực tế 33",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383058/farm/projects/san-vuon-ho-koi-new/wqth9ambsahyo5kyfv6w.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-34",
    "title": "Hình ảnh thi công thực tế 34",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383059/farm/projects/san-vuon-ho-koi-new/eknoo9rsrzavpowfhlxk.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-35",
    "title": "Hình ảnh thi công thực tế 35",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383060/farm/projects/san-vuon-ho-koi-new/ufk78zw1dutfb7bymyoo.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-36",
    "title": "Hình ảnh thi công thực tế 36",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383061/farm/projects/san-vuon-ho-koi-new/tlokxsihjrts1c4p8jpf.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-37",
    "title": "Hình ảnh thi công thực tế 37",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383063/farm/projects/san-vuon-ho-koi-new/swmvlaspmbjwlvstqbry.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-38",
    "title": "Hình ảnh thi công thực tế 38",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383064/farm/projects/san-vuon-ho-koi-new/nkwdbhcuy9kblex8kuzz.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-39",
    "title": "Hình ảnh thi công thực tế 39",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383065/farm/projects/san-vuon-ho-koi-new/db1lgpvi0l80uhmjipka.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "thuc-te-thi-cong-new-40",
    "title": "Hình ảnh thi công thực tế 40",
    "meta_description": "Hình ảnh thực tế từ công trường dự án Sơn Hải Landscape.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383066/farm/projects/san-vuon-ho-koi-new/iegpglmyhxukd1c8x1x1.jpg",
    "category": "san-vuon-ho-koi",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-1",
    "title": "Mẫu thác 3D 1",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383743/farm/3d-models/san-vuon-ho-koi/kkczuukaqehkvtwszjgq.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-2",
    "title": "Mẫu thác 3D 2",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383744/farm/3d-models/san-vuon-ho-koi/ahcgsdy8gus95t5bnklx.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-3",
    "title": "Mẫu thác 3D 3",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383745/farm/3d-models/san-vuon-ho-koi/oh6qqfjjl7nif177bvf6.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-4",
    "title": "Mẫu thác 3D 4",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383746/farm/3d-models/san-vuon-ho-koi/ug27ffypdcfmfppkmom0.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-5",
    "title": "Mẫu thác 3D 5",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383748/farm/3d-models/san-vuon-ho-koi/g0d0sbvrzle0ll2gerl6.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-6",
    "title": "Mẫu thác 3D 6",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383749/farm/3d-models/san-vuon-ho-koi/spdnypuk9gujileqx49g.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-7",
    "title": "Mẫu thác 3D 7",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383750/farm/3d-models/san-vuon-ho-koi/eoyvxugxze4abrnmt4nf.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-8",
    "title": "Mẫu thác 3D 8",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383751/farm/3d-models/san-vuon-ho-koi/ay6ftlstc5dwdadikuqp.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-9",
    "title": "Mẫu thác 3D 9",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383752/farm/3d-models/san-vuon-ho-koi/ri2dezolg9kisymoyayj.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-10",
    "title": "Mẫu thác 3D 10",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383753/farm/3d-models/san-vuon-ho-koi/nsumavi9jox0xwry2fu7.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-11",
    "title": "Mẫu thác 3D 11",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383754/farm/3d-models/san-vuon-ho-koi/qaaskog5myjlt9p6caso.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-12",
    "title": "Mẫu thác 3D 12",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383755/farm/3d-models/san-vuon-ho-koi/qntfrnuovh5idylnxpo7.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-13",
    "title": "Mẫu thác 3D 13",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383756/farm/3d-models/san-vuon-ho-koi/i3ovz82fdmp9jinh9ryt.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-14",
    "title": "Mẫu thác 3D 14",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383757/farm/3d-models/san-vuon-ho-koi/gcou8mcyzjaggwvti7ek.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-15",
    "title": "Mẫu thác 3D 15",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383758/farm/3d-models/san-vuon-ho-koi/hj9a1ojld0jfc7kfkprn.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-16",
    "title": "Mẫu thác 3D 16",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383759/farm/3d-models/san-vuon-ho-koi/meex7ed3yvr63fr4hoyr.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-17",
    "title": "Mẫu thác 3D 17",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383760/farm/3d-models/san-vuon-ho-koi/unlqws9ehtuqmq4dkeve.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-18",
    "title": "Mẫu thác 3D 18",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383761/farm/3d-models/san-vuon-ho-koi/ckjpmt0wuczye6dtlmnl.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-19",
    "title": "Mẫu thác 3D 19",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383763/farm/3d-models/san-vuon-ho-koi/xfmb2mudqnrauqwytqbq.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-20",
    "title": "Mẫu thác 3D 20",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383764/farm/3d-models/san-vuon-ho-koi/ybwzfukl4odchgccnync.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-21",
    "title": "Mẫu thác 3D 21",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383765/farm/3d-models/san-vuon-ho-koi/vq5okytetendxhy8tz9x.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-22",
    "title": "Mẫu thác 3D 22",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383766/farm/3d-models/san-vuon-ho-koi/ynkqpnvmqwmle4sitydx.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-23",
    "title": "Mẫu thác 3D 23",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383767/farm/3d-models/san-vuon-ho-koi/mcaxyvuleje4gnx5gjac.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-24",
    "title": "Mẫu thác 3D 24",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383768/farm/3d-models/san-vuon-ho-koi/lkv2jmd3olw9zrx9q5sd.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-25",
    "title": "Mẫu thác 3D 25",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383770/farm/3d-models/san-vuon-ho-koi/j6rsaeaa4wwcgbdp5qso.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-26",
    "title": "Mẫu thác 3D 26",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383771/farm/3d-models/san-vuon-ho-koi/thiuizpqoydzmylpl83f.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-27",
    "title": "Mẫu thác 3D 27",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383772/farm/3d-models/san-vuon-ho-koi/nihet01q19nkya4wv75a.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-28",
    "title": "Mẫu thác 3D 28",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383773/farm/3d-models/san-vuon-ho-koi/gjbqllyuwa53uqflcwls.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-29",
    "title": "Mẫu thác 3D 29",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383774/farm/3d-models/san-vuon-ho-koi/pxuq2pkqidunif9tsks9.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-30",
    "title": "Mẫu thác 3D 30",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383775/farm/3d-models/san-vuon-ho-koi/fzppknf3lgfogasok7b0.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-31",
    "title": "Mẫu thác 3D 31",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383776/farm/3d-models/san-vuon-ho-koi/yvnowadym07evjxd5arh.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-32",
    "title": "Mẫu thác 3D 32",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383778/farm/3d-models/san-vuon-ho-koi/ggw8xcdvhorcishpt8mx.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-33",
    "title": "Mẫu thác 3D 33",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383779/farm/3d-models/san-vuon-ho-koi/t6kfwk6y4yq3e1eg1mty.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-34",
    "title": "Mẫu thác 3D 34",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383780/farm/3d-models/san-vuon-ho-koi/ikadcqt9mhrxxlfwvn5y.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-thac-3d-new-35",
    "title": "Mẫu thác 3D 35",
    "meta_description": "Phối cảnh 3D mẫu thác nước nghệ thuật đá tự nhiên.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775383781/farm/3d-models/san-vuon-ho-koi/micioe1aefify392kggm.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-1",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 1",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388222/farm/projects/da-nhan-tao-new/aq2awysm6zczpulyofff.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-2",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 2",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388225/farm/projects/da-nhan-tao-new/li54ukpat5fq18z63riy.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-3",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 3",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388228/farm/projects/da-nhan-tao-new/wfhjet9jo152x2busu2l.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-4",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 4",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388229/farm/projects/da-nhan-tao-new/fzn6mn94bx48bqq2voeh.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-5",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 5",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388231/farm/projects/da-nhan-tao-new/qpomg1noudhq7ctdddtd.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-6",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 6",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388232/farm/projects/da-nhan-tao-new/mc2e7cqamsprhztba4ia.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-7",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 7",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388234/farm/projects/da-nhan-tao-new/gbsrveknufno0alixyyi.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-8",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 8",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388235/farm/projects/da-nhan-tao-new/b9hicnovq7baxrs4euyq.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-9",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 9",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388236/farm/projects/da-nhan-tao-new/nrz2of7bq70qowstbefd.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-10",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 10",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388238/farm/projects/da-nhan-tao-new/cdca0d6djhkgbk16vfx5.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-11",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 11",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388239/farm/projects/da-nhan-tao-new/fo9f3p9y2hmymqvkyyzc.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-12",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 12",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388240/farm/projects/da-nhan-tao-new/r11hlbni14qp9ngc8sjs.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-13",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 13",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388241/farm/projects/da-nhan-tao-new/nv4xrni8vnjypaoi2r1c.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-14",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 14",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388242/farm/projects/da-nhan-tao-new/ghodp87z0rblnhoiorio.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-15",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 15",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388243/farm/projects/da-nhan-tao-new/wpwbfwme4uvcbtxfliss.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-16",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 16",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388244/farm/projects/da-nhan-tao-new/n4yfk1gn3kl2nvimyknl.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-17",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 17",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388245/farm/projects/da-nhan-tao-new/no1nlmkgv3x2pp7s4xhi.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-18",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 18",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388246/farm/projects/da-nhan-tao-new/rqtg0hxcfi1xibonzmi0.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-19",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 19",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388248/farm/projects/da-nhan-tao-new/wxjbx4pp2koi2pe6og7u.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-20",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 20",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388249/farm/projects/da-nhan-tao-new/nwwyl8vi5tfdmjnz6uzg.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-21",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 21",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388250/farm/projects/da-nhan-tao-new/xkkzuk7l8iditmlwfuvp.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-22",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 22",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388251/farm/projects/da-nhan-tao-new/jnxrxe2ruxviwe6xwtps.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-23",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 23",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388252/farm/projects/da-nhan-tao-new/sw0pyrmrqbo9fzdukgl0.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-24",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 24",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388253/farm/projects/da-nhan-tao-new/wbi7vizmgfbinilyxlwv.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-25",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 25",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388254/farm/projects/da-nhan-tao-new/umybxgrg6wrnjrevkggn.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-26",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 26",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388255/farm/projects/da-nhan-tao-new/vzds5ndcejekkxgiqwbq.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-27",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 27",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388256/farm/projects/da-nhan-tao-new/dku0ausxcpe5gqvqcmbd.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-28",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 28",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388257/farm/projects/da-nhan-tao-new/wwwfmzjkl3qd9sypymh8.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-29",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 29",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388259/farm/projects/da-nhan-tao-new/yrtponlbdgjyw7dxoxwa.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-30",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 30",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388260/farm/projects/da-nhan-tao-new/rbzyz38efidzxa2aaaq8.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-31",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 31",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388261/farm/projects/da-nhan-tao-new/ydzagklhcyu34jpl5swc.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-32",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 32",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388262/farm/projects/da-nhan-tao-new/hiu6xgwoh6gtimbi6k01.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-33",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 33",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388263/farm/projects/da-nhan-tao-new/rohcomy9ylalruayw0ea.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-34",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 34",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388264/farm/projects/da-nhan-tao-new/cyn1ucjoj0a3rtmvzfb8.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-35",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 35",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388266/farm/projects/da-nhan-tao-new/rguybqve1doarqkpk9lb.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-36",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 36",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388267/farm/projects/da-nhan-tao-new/tgm350vkejiizmoyrppk.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-37",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 37",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388268/farm/projects/da-nhan-tao-new/ettnaythdtvjcdmrp1uf.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-38",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 38",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388269/farm/projects/da-nhan-tao-new/xhnecup316k1o8yg8k8e.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-39",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 39",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388270/farm/projects/da-nhan-tao-new/aqepryprhuo7jx693snt.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-40",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 40",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388271/farm/projects/da-nhan-tao-new/s9ycydz2fckoeqvl883c.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-41",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 41",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388272/farm/projects/da-nhan-tao-new/quca6egwb51rauzuc3ck.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-42",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 42",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388273/farm/projects/da-nhan-tao-new/lnh1dgkxloxwnbghxtsr.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-43",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 43",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388277/farm/projects/da-nhan-tao-new/migbgyolimkwqggvsmsn.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "da-nhan-tao-new-44",
    "title": "Hình ảnh đá nhân tạo nghệ thuật 44",
    "meta_description": "Công trình đá nhân tạo nghệ thuật thực tế do Sơn Hải Landscape thi công.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388281/farm/projects/da-nhan-tao-new/osgm2c46kdkq4zqogrs8.jpg",
    "category": "da-nhan-tao-nghe-thuat",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-1",
    "title": "Mẫu đá 3D nghệ thuật 1",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388364/farm/3d-models/da-nhan-tao/hc4nd5tq7vuraf11jrxl.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-2",
    "title": "Mẫu đá 3D nghệ thuật 2",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388366/farm/3d-models/da-nhan-tao/gwmibqvziu3adq2vnb6u.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-3",
    "title": "Mẫu đá 3D nghệ thuật 3",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388367/farm/3d-models/da-nhan-tao/dacx8runb2d3a3s6k9da.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-4",
    "title": "Mẫu đá 3D nghệ thuật 4",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388368/farm/3d-models/da-nhan-tao/t2kmg6llx4kpxtzlvuzm.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-5",
    "title": "Mẫu đá 3D nghệ thuật 5",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388369/farm/3d-models/da-nhan-tao/hr2ynhcoe9g203ztjido.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-6",
    "title": "Mẫu đá 3D nghệ thuật 6",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388370/farm/3d-models/da-nhan-tao/owtctsybba5fef3xwnkg.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-7",
    "title": "Mẫu đá 3D nghệ thuật 7",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388371/farm/3d-models/da-nhan-tao/xuzshuldbu3n9fgajnd7.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-8",
    "title": "Mẫu đá 3D nghệ thuật 8",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388372/farm/3d-models/da-nhan-tao/pf6llksiueklx3z4jxme.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-9",
    "title": "Mẫu đá 3D nghệ thuật 9",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388373/farm/3d-models/da-nhan-tao/lok9hb6rrt6d3evlpy1q.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-10",
    "title": "Map đá nghệ thuật 10",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388375/farm/3d-models/da-nhan-tao/wpg6wnuzvgby931idxtp.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-11",
    "title": "Mẫu đá 3D nghệ thuật 11",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388376/farm/3d-models/da-nhan-tao/reqzlktr2ypesuzvwxif.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-12",
    "title": "Mẫu đá 3D nghệ thuật 12",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388377/farm/3d-models/da-nhan-tao/cq1ajq7giriuaybwkr6y.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-13",
    "title": "Mẫu đá 3D nghệ thuật 13",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388378/farm/3d-models/da-nhan-tao/tswwwugsxwspzhun6n7x.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-14",
    "title": "Mẫu đá 3D nghệ thuật 14",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388379/farm/3d-models/da-nhan-tao/rt8z1dfiwe9tbbrcdfzn.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-15",
    "title": "Map đá nghệ thuật 15",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388380/farm/3d-models/da-nhan-tao/kybotwawd7ofh8aizeer.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-16",
    "title": "Mẫu đá 3D nghệ thuật 16",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388381/farm/3d-models/da-nhan-tao/cgu5ijxo9t7befdw5wrd.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-17",
    "title": "Mẫu đá 3D nghệ thuật 17",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388382/farm/3d-models/da-nhan-tao/avpedhlfwtt4twdxhuik.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-18",
    "title": "Mẫu đá 3D nghệ thuật 18",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388383/farm/3d-models/da-nhan-tao/zp3cfzym9attc0rhahci.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-19",
    "title": "Mẫu đá 3D nghệ thuật 19",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388384/farm/3d-models/da-nhan-tao/kcky85ibpdcscmf3xsde.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-20",
    "title": "Mẫu đá 3D nghệ thuật 20",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388385/farm/3d-models/da-nhan-tao/bcphlgle2rfbsrgu4u61.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-21",
    "title": "Mẫu đá 3D nghệ thuật 21",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388387/farm/3d-models/da-nhan-tao/zbieezdjqilwykrrswzo.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-22",
    "title": "Mẫu đá 3D nghệ thuật 22",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388388/farm/3d-models/da-nhan-tao/tnz0jwdwkplt5zrysyfk.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "mau-da-3d-da-nhan-tao-23",
    "title": "Mẫu đá 3D nghệ thuật 23",
    "meta_description": "Phối cảnh 3D mẫu đá nghệ thuật cho cảnh quan.",
    "image": "https://res.cloudinary.com/dwalymiy3/image/upload/v1775388389/farm/3d-models/da-nhan-tao/fksmfzdyz3onojestdnd.jpg",
    "category": "mau-da-3d",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-1",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 1",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-1.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-10",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 10",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-10.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-11",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 11",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-11.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-12",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 12",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-12.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-13",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 13",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-13.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-14",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 14",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-14.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-15",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 15",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-15.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-16",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 16",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-16.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-17",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 17",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-17.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-18",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 18",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-18.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-19",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 19",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-19.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-2",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 2",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-2.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-20",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 20",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-20.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-21",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 21",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-21.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-22",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 22",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-22.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-23",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 23",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-23.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-3",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 3",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-3.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-4",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 4",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-4.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-5",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 5",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-5.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-7",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 7",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-7.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-8",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 8",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-8.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  },
  {
    "slug": "farm-resort-img-9",
    "title": "Hình ảnh dự án Farm & Nghỉ dưỡng 9",
    "meta_description": "Không gian nghỉ dưỡng tại farm do Sơn Hải Landscape thi công.",
    "image": "/farm-resort/images/img-9.jpg",
    "category": "farm-du-lich-nghi-duong",
    "isGalleryOnly": true
  }
];

export const projects: ProjectItem[] = baseProjects.map((project) => ({
  ...project,
  gallery: project.gallery && project.gallery.length > 0 
    ? project.gallery 
    : [project.image, project.image, project.image],
  isGalleryOnly: (project as any).isGalleryOnly ?? false
}));

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
