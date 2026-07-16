/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Movement } from '../types.ts';

export const movements: Movement[] = [
  {
    id: "revolt_1857",
    name: "The Great Revolt of 1857",
    startDate: "1857-05-10",
    endDate: "1858-11-01",
    leaders: ["lakshmibai", "Mangal Pandey", "Bahadur Shah Zafar", "Tatya Tope"],
    objectives: [
      "Overthrow the British East India Company's oppressive rule.",
      "Reclaim sovereignty for local princely states.",
      "Defend cultural and religious autonomy against colonial interference."
    ],
    keyOutcomes: [
      "Dissolution of the British East India Company.",
      "Transfer of direct administration of India to the British Crown under the Government of India Act 1858.",
      "Restructuring of the colonial army and administrative policies."
    ],
    description: "Often hailed as the First War of Indian Independence, this was a massive, armed uprising that began as a mutiny of Indian soldiers (sepoys) in Meerut and quickly swept across Central and Northern India, uniting rulers, peasants, and soldiers in a historic challenge to foreign rule.",
    locations: ["Uttar Pradesh", "Delhi", "Madhya Pradesh", "Bihar"]
  },
  {
    id: "swadeshi",
    name: "Swadeshi Movement",
    startDate: "1905-08-07",
    endDate: "1911-12-12",
    leaders: ["Bal Gangadhar Tilak", "Lala Lajpat Rai", "Bipin Chandra Pal", "Aurobindo Ghosh"],
    objectives: [
      "Oppose the controversial Partition of Bengal (1905).",
      "Promote indigenous Indian industries (Swadeshi) and products.",
      "Boycott imported British goods to exert economic pressure on the empire."
    ],
    keyOutcomes: [
      "Annulment of the Partition of Bengal in 1911.",
      "Stupendous growth of domestic textile, steel, and soap factories.",
      "Fostered deep-seated national consciousness and mass mobilization."
    ],
    description: "The Swadeshi Movement was one of India's most successful pre-Gandhian campaigns. It turned economic boycott into a powerful political weapon, encouraging self-reliance, national education, and paving the way for radical, mainstream nationalism.",
    locations: ["West Bengal", "Maharashtra", "Tamil Nadu", "Punjab"]
  },
  {
    id: "non_cooperation",
    name: "Non-Cooperation Movement",
    startDate: "1920-09-04",
    endDate: "1922-02-12",
    leaders: ["gandhi", "Sardar Patel", "Jawaharlal Nehru", "Abul Kalam Azad"],
    objectives: [
      "Protest against the brutal Jallianwala Bagh Massacre and the Rowlatt Act.",
      "Support the Khilafat campaign for religious harmony.",
      "Attain Swaraj (Self-governance) through systemic non-cooperation."
    ],
    keyOutcomes: [
      "Transformed the national movement into an unprecedented mass struggle of millions.",
      "Extensive boycott of British courts, educational institutions, and titles.",
      "Withdrawn abruptly by Gandhi following the outbreak of violence at Chauri Chaura."
    ],
    description: "The Non-Cooperation Movement marked the first large-scale application of Gandhi's Satyagraha. Millions of citizens boycotted colonial systems, government jobs, and manufactured goods, shaking the institutional foundation of British authority.",
    locations: ["All India", "Uttar Pradesh", "Punjab", "Bihar", "Kerala"]
  },
  {
    id: "salt_march",
    name: "Salt Satyagraha (Civil Disobedience)",
    startDate: "1930-03-12",
    endDate: "1931-03-05",
    leaders: ["gandhi", "patel", "Sarojini Naidu", "C. Rajagopalachari"],
    objectives: [
      "Defy the oppressive salt tax laws that targeted the poorest citizens.",
      "Launch a nationwide campaign of complete civil disobedience.",
      "Demonstrate the power of peaceful resistance on a global stage."
    ],
    keyOutcomes: [
      "Imprisonment of over 60,000 freedom fighters.",
      "Signing of the Gandhi-Irwin Pact, allowing Indians to manufacture salt for personal use.",
      "Focused global press attention on the moral legitimacy of the Indian freedom struggle."
    ],
    description: "Beginning with the iconic 24-day march from Sabarmati Ashram to Dandi, this campaign involved millions of citizens illegally boiling sea water to manufacture salt. It became a historic symbol of peaceful defiance against imperial monopoly.",
    locations: ["Gujarat", "Maharashtra", "Tamil Nadu", "Karnataka", "Odisha"]
  },
  {
    id: "quit_india",
    name: "Quit India Movement",
    startDate: "1942-08-08",
    endDate: "1944-05-06",
    leaders: ["gandhi", "patel", "Aruna Asaf Ali", "Jayaprakash Narayan", "Ram Manohar Lohia"],
    objectives: [
      "Secure immediate and complete British withdrawal from India.",
      "Rally the nation under the definitive clarion call 'Do or Die' (Karo ya Maro).",
      "Form provisional independent governments in local districts."
    ],
    keyOutcomes: [
      "Widespread arrests of the entire senior Congress leadership within 24 hours.",
      "Outbreak of spontaneous, massive underground movements across the nation.",
      "Unmistakably demonstrated to the British government that India was no longer governable."
    ],
    description: "Launched during World War II, the Quit India Movement was the most intense and disruptive mass struggle of the independence campaign. Despite ruthless state suppression, it demonstrated the absolute resolve of the Indian populace to achieve freedom.",
    locations: ["All India", "Maharashtra", "Bihar", "West Bengal", "Uttar Pradesh"]
  },
  {
    id: "ina_campaign",
    name: "Azad Hind Fauj (INA) Campaign",
    startDate: "1943-07-21",
    endDate: "1945-08-18",
    leaders: ["bose", "Rash Behari Bose", "Shah Nawaz Khan", "Lakshmi Sahgal", "Gurbaksh Singh Dhillon"],
    objectives: [
      "Wrest control of India from British rule through external armed offensive.",
      "Establish an independent Indian government-in-exile.",
      "Inspire revolts and mutinies among Indian soldiers serving in the British Indian Army."
    ],
    keyOutcomes: [
      "Military engagement with Allied forces on the Indo-Burma border (Imphal and Kohima).",
      "Liberation and administrative control of Andaman and Nicobar Islands.",
      "Post-war INA trials in Red Fort sparked widespread nationalist protests and naval mutinies."
    ],
    description: "Led by Subhas Chandra Bose, the Indian National Army (INA) composed of Indian prisoners of war and expatriates in Southeast Asia. The INA launched a daring military invasion of British-controlled India, proving crucial in weakening colonial troop loyalty.",
    locations: ["Manipur", "Nagaland", "Andaman and Nicobar Islands", "Singapore"]
  }
];
