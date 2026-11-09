import { EducationItem, SocialItem } from '../types';

export const SITE_METADATA = {
  name: 'Izyan Danish',
  domain: 'https://izyan.yyz.my.id',
  location: 'Bangkinang Kota, Riau',
  role: 'Pelajar SMKN 1 Bangkinang Kota & Web Developer',
  quote: '"Seperti sapuan tinta di atas kertas washi, setiap baris kode adalah dedikasi dan harmoni."'
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'tk',
    level: 'Jenjang TK',
    kanji: '幼稚園',
    school: 'TK Mutiara Bunda',
    subtitle: 'Pendidikan Anak Usia Dini'
  },
  {
    id: 'sd',
    level: 'Jenjang SD',
    kanji: '小学校',
    school: 'SDN 010 Siabu',
    subtitle: 'Sekolah Dasar Negeri'
  },
  {
    id: 'smp',
    level: 'Jenjang SMP',
    kanji: '中学校',
    school: 'SMPN 1 Bangkinang Kota',
    subtitle: 'Sekolah Menengah Pertama'
  },
  {
    id: 'smk',
    level: 'Jenjang SMK • Saat Ini',
    kanji: '実業高校',
    school: 'SMKN 1 Bangkinang Kota',
    subtitle: 'Sekolah Menengah Kejuruan',
    isCurrent: true
  }
];

export const SOCIAL_LINKS: SocialItem[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@m.izyan23',
    href: 'https://instagram.com/m.izyan23'
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@yyanzxd',
    href: 'https://tiktok.com/@yyanzxd'
  },
  {
    id: 'github',
    platform: 'GitHub',
    handle: 'TheyanzXD',
    href: 'https://github.com/TheyanzXD'
  },
  {
    id: 'email',
    platform: 'Email',
    handle: 'm.23.idanish@gmail.com',
    href: 'mailto:m.23.idanish@gmail.com',
    isEmail: true
  }
];
