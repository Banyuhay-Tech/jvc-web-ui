export interface SurgeryCaseImage {
  src: string;
  alt: string;
  patient?: string;
}

export interface SurgeryCase {
  id: string;
  name: string;
  patients: readonly string[];
  /** Clinical photos when available. */
  images?: readonly SurgeryCaseImage[];
  /** Number of placeholder slots when no images are set. */
  placeholderCount?: number;
}

export interface SurgeryCategory {
  id: string;
  title: string;
  cases: readonly SurgeryCase[];
}

export interface CaseMediaSlot {
  src?: string;
  alt: string;
  patient?: string;
  isPlaceholder: boolean;
}

export const DEFAULT_PLACEHOLDER_COUNT = 3;

const PYOMETRA_DIR = '/images/Surgery Cases/Pyometra Surgery';
const CESAREAN_DIR = '/images/Surgery Cases/Cesarean Section (CS  Spay)';
const OVH_DIR = '/images/Surgery Cases/Routine Ovariohysterectomy';
const TUMOR_DIR = '/images/Surgery Cases/Tumor  Mass Removal & Mastectomy';
const SPLENECTOMY_DIR = '/images/Surgery Cases/Splenectomy';
const DENTAL_DIR = '/images/Surgery Cases/Dental Prophylaxis';
const POLYP_DIR = '/images/Surgery Cases/Aural Polyp Removal';
const TAIL_DIR = '/images/Surgery Cases/Tail Amputation';

export const SURGERY_CASES_CONTENT = {
  title: 'Surgery Cases',
  intro:
    'Featured surgical cases and patient recoveries from Jamir Veterinary Clinic.',
  clinicalNotice:
    'Clinical photographs for educational purposes. Images may depict surgical procedures and may be sensitive for some viewers.',
  categories: [
    {
      id: 'reproductive-obstetric',
      title: 'Reproductive & Obstetric Surgeries',
      cases: [
        {
          id: 'pyometra',
          name: 'Pyometra Surgery',
          patients: ['Zhina', 'Cindy', 'Jessie'],
          images: [
            {
              src: `${PYOMETRA_DIR}/Zhina.jpg`,
              alt: 'Pyometra Surgery clinical photo — patient Zhina',
              patient: 'Zhina',
            },
            {
              src: `${PYOMETRA_DIR}/Cindy.jpg`,
              alt: 'Pyometra Surgery clinical photo — patient Cindy',
              patient: 'Cindy',
            },
            {
              src: `${PYOMETRA_DIR}/Jessie.png`,
              alt: 'Pyometra Surgery clinical photo — patient Jessie',
              patient: 'Jessie',
            },
          ],
        },
        {
          id: 'cesarean',
          name: 'Cesarean Section (CS / Spay)',
          patients: ['Luna', 'Amy', 'Yuki', 'Athena'],
          images: [
            {
              src: `${CESAREAN_DIR}/Luna.jpg`,
              alt: 'Cesarean Section clinical photo — patient Luna',
              patient: 'Luna',
            },
            {
              src: `${CESAREAN_DIR}/Amy.jpg`,
              alt: 'Cesarean Section clinical photo — patient Amy',
              patient: 'Amy',
            },
            {
              src: `${CESAREAN_DIR}/Yuki.jpg`,
              alt: 'Cesarean Section clinical photo — patient Yuki',
              patient: 'Yuki',
            },
          ],
        },
        {
          id: 'ovariohysterectomy',
          name: 'Routine Ovariohysterectomy (Spay)',
          patients: ['Bella', 'Stormi', 'Coffee', 'Scarlet', 'Luna'],
          images: [
            {
              src: `${OVH_DIR}/Bella.jpg`,
              alt: 'Routine Ovariohysterectomy clinical photo — patient Bella',
              patient: 'Bella',
            },
            {
              src: `${OVH_DIR}/Stormi.jpg`,
              alt: 'Routine Ovariohysterectomy clinical photo — patient Stormi',
              patient: 'Stormi',
            },
            {
              src: `${OVH_DIR}/Scarlet.png`,
              alt: 'Routine Ovariohysterectomy clinical photo — patient Scarlet',
              patient: 'Scarlet',
            },
          ],
        },
      ],
    },
    {
      id: 'soft-tissue-oncological',
      title: 'Soft Tissue & Oncological Surgeries',
      cases: [
        {
          id: 'tumor-mastectomy',
          name: 'Tumor Removal',
          patients: ['Cookie', 'Scarlet'],
          images: [
            {
              src: `${TUMOR_DIR}/Cookie.jpg`,
              alt: 'Tumor Removal clinical photo — patient Cookie',
              patient: 'Cookie',
            },
            {
              src: `${TUMOR_DIR}/Cookie 2.jpg`,
              alt: 'Tumor Removal clinical photo — patient Cookie',
              patient: 'Cookie',
            },
            {
              src: `${TUMOR_DIR}/Scarlet.jpg`,
              alt: 'Tumor Removal clinical photo — patient Scarlet',
              patient: 'Scarlet',
            },
          ],
        },
        {
          id: 'splenectomy',
          name: 'Splenectomy',
          patients: ['Fudge'],
          images: [
            {
              src: `${SPLENECTOMY_DIR}/Fudge 1.jpg`,
              alt: 'Splenectomy clinical photo — patient Fudge',
              patient: 'Fudge',
            },
            {
              src: `${SPLENECTOMY_DIR}/Fudge 2.jpg`,
              alt: 'Splenectomy clinical photo — patient Fudge',
              patient: 'Fudge',
            },
            {
              src: `${SPLENECTOMY_DIR}/Fudge 3.jpg`,
              alt: 'Splenectomy clinical photo — patient Fudge',
              patient: 'Fudge',
            },
          ],
        },
      ],
    },
    {
      id: 'dental-ear',
      title: 'Dental & Ear Procedures (ENT)',
      cases: [
        {
          id: 'dental-extraction',
          name: 'Dental Extraction',
          patients: ['Cholo', 'Kisses', 'Harith', 'Mimi', 'Meera', 'Moja'],
          images: [
            {
              src: `${DENTAL_DIR}/Kisses.jpg`,
              alt: 'Dental Extraction clinical photo — patient Kisses',
              patient: 'Kisses',
            },
            {
              src: `${DENTAL_DIR}/Harith.jpg`,
              alt: 'Dental Extraction clinical photo — patient Harith',
              patient: 'Harith',
            },
            {
              src: `${DENTAL_DIR}/Moja.jpg`,
              alt: 'Dental Extraction clinical photo — patient Moja',
              patient: 'Moja',
            },
          ],
        },
        {
          id: 'aural-polyp',
          name: 'Aural Polyp Removal',
          patients: ['Chichay'],
          images: [
            {
              src: `${POLYP_DIR}/Chichay 1.jpg`,
              alt: 'Aural Polyp Removal clinical photo — patient Chichay',
              patient: 'Chichay',
            },
            {
              src: `${POLYP_DIR}/Chichay 2.jpg`,
              alt: 'Aural Polyp Removal clinical photo — patient Chichay',
              patient: 'Chichay',
            },
            {
              src: `${POLYP_DIR}/Chichay 3.jpg`,
              alt: 'Aural Polyp Removal clinical photo — patient Chichay',
              patient: 'Chichay',
            },
          ],
        },
      ],
    },
    {
      id: 'orthopedic-specialty',
      title: 'Orthopedic / Specialty',
      cases: [
        {
          id: 'tail-amputation',
          name: 'Tail Amputation',
          patients: ['Atlas'],
          images: [
            {
              src: `${TAIL_DIR}/Atlas.jpg`,
              alt: 'Tail Amputation clinical photo — patient Atlas',
              patient: 'Atlas',
            },
            {
              src: `${TAIL_DIR}/Atlas 2.jpg`,
              alt: 'Tail Amputation clinical photo — patient Atlas',
              patient: 'Atlas',
            },
            {
              src: `${TAIL_DIR}/Atlas 3.jpg`,
              alt: 'Tail Amputation clinical photo — patient Atlas',
              patient: 'Atlas',
            },
          ],
        },
      ],
    },
  ] as const satisfies readonly SurgeryCategory[],
};

export function getPlaceholderCount(surgeryCase: SurgeryCase): number {
  return surgeryCase.placeholderCount ?? DEFAULT_PLACEHOLDER_COUNT;
}

export function getCaseMediaSlots(surgeryCase: SurgeryCase): CaseMediaSlot[] {
  if (surgeryCase.images && surgeryCase.images.length > 0) {
    return surgeryCase.images.map((image) => ({
      src: image.src,
      alt: image.alt,
      patient: image.patient,
      isPlaceholder: false,
    }));
  }

  const count = getPlaceholderCount(surgeryCase);
  return Array.from({ length: count }, (_, i) => ({
    alt: `Placeholder photo ${i + 1} for ${surgeryCase.name}`,
    isPlaceholder: true,
  }));
}
