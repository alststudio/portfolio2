/**
 * All copy lives here. NAÏADE is a placeholder concept brand for this demo —
 * the pieces, prices and specs are invented.
 */

export const brand = {
  name: 'NAÏADE',
  collection: 'The Deep End',
  tagline: 'Perhiasan istimewa untuk momen setelah senja',
};

export const nav = ['Koleksi', 'Atelier', 'The Deep End', 'Jurnal'];

export const hero = {
  // Headline lines: roman parts render as capitals, italic parts stay lower-case.
  headline: [
    [{t: 'Terlahir', i: true}, {t: ' dari'}],
    [{t: 'air yang tenang.'}],
    [{t: 'Dikenakan '}, {t: 'setelah', i: true}, {t: ' senja.'}],
  ],
  line: 'Turmalin Paraíba potongan pear, dirangkai dalam emas putih 18 karat.',
};

export type Product = {
  id: string;
  index: string;
  eyebrow: string;
  name: [string, string];
  material: string;
  description: string;
  image: string;
  specs: [label: string, value: string][];
  price: number;
};

const media = (f: string) => `${import.meta.env.BASE_URL}media/${f}`;

export const products: Product[] = [
  {
    id: 'undertow-drops',
    index: '01',
    eyebrow: 'Anting eksklusif',
    name: ['Undertow', 'Drops'],
    material: 'Emas putih 18 karat & turmalin Paraíba',
    description:
      'Sepasang batu Paraíba potongan pear yang menjuntai dari anting berlian bundar dengan sambungan tersembunyi, menciptakan gerakan lembut yang mengikuti setiap langkah.',
    image: media('earrings.webp'),
    specs: [
      ['Paraíba', '2 × 2.05 ct'],
      ['Berlian', '0,42 ct, D–F'],
      ['Panjang', '28 mm'],
    ],
    price: 12400000,
  },
  {
    id: 'deep-end-pendant',
    index: '02',
    eyebrow: 'Kalung liontin',
    name: ['Deep End', 'Pendant'],
    material: 'Emas putih 18 karat & turmalin Paraíba',
    description:
      'Satu batu Paraíba 3,1 ct potongan pear dengan empat cakar pengikat, satu berlian pada pengait liontin, serta rantai halus yang menyatu elegan dengan kulit.',
    image: media('pendant.webp'),
    specs: [
      ['Paraíba', '3.10 ct'],
      ['Panjang rantai', '42 + 3 cm'],
      ['Logam', 'Emas putih 18 karat'],
    ],
    price: 9600000,
  },
  {
    id: 'night-swim-ring',
    index: '03',
    eyebrow: 'Cincin statement',
    name: ['Night Swim', 'Ring'],
    material: 'Emas putih 18 karat, Paraíba & taburan berlian pavé',
    description:
      'Batu Paraíba potongan pear dikelilingi lingkaran berlian mikro pavé yang dipasang dengan tangan, bertumpu pada rangka cincin ramping yang nyaman dikenakan.',
    image: media('ring.webp'),
    specs: [
      ['Paraíba', '3.40 ct'],
      ['Berlian halo', '28 × 0,01 ct'],
      ['Lebar rangka', '1,8 mm'],
    ],
    price: 16200000,
  },
];

export const outro = {
  line1: 'Tiga perhiasan.',
  line2: ['Dalam satu ', 'nuansa malam.'],
};

export const closing = {
  eyebrow: 'Koleksi lengkap',
  title: ['Miliki seluruh', 'koleksi ini'],
  body: 'Anting, kalung liontin, dan cincin dibuat dari batu pilihan dalam satu kelompok yang memiliki keselarasan warna di setiap pencahayaan. Dikemas dalam satu kotak eksklusif dan disempurnakan melalui pengerjaan tangan di atelier kami.',
  setNote: 'Paket tiga perhiasan',
};

export const footer = {
  columns: [
    ['Belanja', ['The Deep End', 'Anting', 'Kalung', 'Cincin']],
    ['Atelier', ['Batu pilihan', 'Desain khusus', 'Perawatan & perbaikan', 'Jadwalkan kunjungan']],
    ['Informasi', ['Jurnal', 'Lokasi butik', 'Kontak', 'Karier']],
  ] as [string, string[]][],
  concept: 'NAÏADE adalah merek konseptual untuk studi desain. Produk, harga, dan visual yang ditampilkan merupakan konten simulasi.',
};

export const formatPrice = (n: number) =>
  new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR', maximumFractionDigits: 0}).format(n);
