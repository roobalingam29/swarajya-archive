/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FreedomFighter } from '../types.ts';

export const freedomFighters: FreedomFighter[] = [
  {
    id: "gandhi",
    name: "Mohandas Karamchand Gandhi",
    alternativeName: "Mahatma Gandhi / Bapu",
    birthDate: "1869-10-02",
    deathDate: "1948-01-30",
    birthPlace: "Porbandar",
    state: "Gujarat",
    district: "Porbandar",
    role: "National Leader / Champion of Non-Violence",
    biography: "Known as the Father of the Nation, Gandhi pioneered Satyagraha—resistance to tyranny through mass nonviolent civil disobedience. He led major campaigns like the Salt March, Non-Cooperation, and Quit India movements, uniting millions of Indians across class and religious lines.",
    keyContributions: [
      "Pioneered the philosophy of Satyagraha (Truth-force) and Ahimsa (Non-violence).",
      "Led the 388 km Salt March (Dandi Satyagraha) in 1930 against the British salt monopoly.",
      "Spearheaded the Champaran and Kheda Satyagrahas, championing peasant rights."
    ],
    movementsLinked: ["non_cooperation", "salt_march", "quit_india"],
    organizationsLinked: ["Indian National Congress"],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400", // Representative dignified Indian architectural/heritage visual
    citations: [
      "National Archives of India, Private Papers Collection (M.K. Gandhi).",
      "Collected Works of Mahatma Gandhi, Publications Division, Government of India."
    ]
  },
  {
    id: "bose",
    name: "Subhas Chandra Bose",
    alternativeName: "Netaji",
    birthDate: "1897-01-23",
    deathDate: "1945-08-18",
    birthPlace: "Cuttack",
    state: "Odisha",
    district: "Cuttack",
    role: "Supreme Commander of Azad Hind Fauj",
    biography: "Netaji was a charismatic nationalist leader who believed that armed struggle was necessary to liberate India from British rule. He escaped British house arrest, traveled across continents, and organized the Indian National Army (INA) or Azad Hind Fauj to fight British forces on the northeastern frontier.",
    keyContributions: [
      "Reorganized and led the Indian National Army (Azad Hind Fauj) to wage active military campaign.",
      "Established the Provisional Government of Azad Hind in Singapore (1943).",
      "Coined the patriotic slogans 'Jai Hind' and 'Give me blood, and I shall give you freedom!'"
    ],
    movementsLinked: ["ina_campaign", "civil_disobedience"],
    organizationsLinked: ["Forward Bloc", "Indian National Army"],
    image: "https://images.unsplash.com/photo-1599583802241-119fe290a604?auto=format&fit=crop&q=80&w=400",
    citations: [
      "Netaji Research Bureau, Kolkata.",
      "British Library, India Office Records (IOR/L/PJ/12)."
    ]
  },
  {
    id: "singh",
    name: "Bhagat Singh",
    alternativeName: "Shaheed-e-Azam",
    birthDate: "1907-09-28",
    deathDate: "1931-03-23",
    birthPlace: "Banga",
    state: "Punjab",
    district: "Lyallpur (now in Pakistan)",
    role: "Revolutionary Socialist Leader",
    biography: "Bhagat Singh was a brilliant intellectual and revolutionary socialist whose execution at the age of 23 galvanized the entire Indian national movement. He challenged British imperialism through strategic acts of protest, emphasizing the power of ideas and social restructuring.",
    keyContributions: [
      "Founded the Naujawan Bharat Sabha in 1926 to foster socialist revolutionary youth action.",
      "Executed the Central Legislative Assembly Bomb Case (1929) to 'make the deaf hear' without causing casualties.",
      "Authored the famous essay 'Why I am an Atheist' while imprisoned in Lahore Central Jail."
    ],
    movementsLinked: ["revolutionary_struggle"],
    organizationsLinked: ["Hindustan Socialist Republican Association (HSRA)"],
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=400",
    citations: [
      "Trial Records of Lahore Conspiracy Case, Punjab State Archives.",
      "The Selected Writings of Bhagat Singh, edited by Shiv Verma."
    ]
  },
  {
    id: "lakshmibai",
    name: "Rani Lakshmibai",
    alternativeName: "Jhansi Ki Rani / Manikarnika",
    birthDate: "1828-11-19",
    deathDate: "1858-06-18",
    birthPlace: "Varanasi",
    state: "Uttar Pradesh",
    district: "Jhansi",
    role: "Leader of the 1857 Uprising",
    biography: "The Queen of the princely state of Jhansi, Rani Lakshmibai became one of the greatest symbols of resistance against British rule. Refusing to surrender Jhansi under the colonial 'Doctrine of Lapse', she armed her people, led her troops into battle with extraordinary courage, and died fighting on the battlefield.",
    keyContributions: [
      "Led the rebellion in Central India during the First War of Indian Independence (1857).",
      "Defended the Fort of Jhansi against General Hugh Rose's forces with outstanding military skill.",
      "Evaded capture and successfully captured the Gwalior Fort alongside Tatya Tope."
    ],
    movementsLinked: ["revolt_1857"],
    organizationsLinked: [],
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=400",
    citations: [
      "Historical Records of Central India, National Archives.",
      "Narrative of the Mutiny at Jhansi, Government Press, 1858."
    ]
  },
  {
    id: "patel",
    name: "Sardar Vallabhbhai Patel",
    alternativeName: "Iron Man of India",
    birthDate: "1875-10-31",
    deathDate: "1950-12-15",
    birthPlace: "Nadiad",
    state: "Gujarat",
    district: "Kheda",
    role: "Architect of Modern India's Integration",
    biography: "Sardar Patel was a towering statesman who played a vital role in organizing peasant satyagrahas in Kheda and Bardoli. As India's first Deputy Prime Minister and Home Minister, he spearheaded the monumental task of integrating 562 princely states into the Indian Union, ensuring a unified nation.",
    keyContributions: [
      "Led the Bardoli Satyagraha (1928), earning the title 'Sardar' (Leader) from Mahatma Gandhi.",
      "Secured the peaceful integration of over 500 princely states into independent India.",
      "Laid the foundations of the modern All India Services (civil services)."
    ],
    movementsLinked: ["bardoli_satyagraha", "quit_india"],
    organizationsLinked: ["Indian National Congress"],
    image: "https://images.unsplash.com/photo-1601342551528-769a6f3b0631?auto=format&fit=crop&q=80&w=400",
    citations: [
      "Sardar Patel's Correspondence 1945-50, edited by Durga Das.",
      "Ministry of Home Affairs Records on Princely State Integration."
    ]
  },
  {
    id: "nachiyar",
    name: "Rani Velu Nachiyar",
    alternativeName: "Veeramangai (Brave Woman)",
    birthDate: "1730-01-03",
    deathDate: "1796-12-25",
    birthPlace: "Ramanathapuram",
    state: "Tamil Nadu",
    district: "Sivaganga",
    role: "First Queen to fight British Colonialism",
    biography: "Velu Nachiyar was the queen of Sivaganga estate. She was the first queen to wage an active war against the British East India Company in India, defeating them with the help of Hyder Ali, the Maruthu Pandiyar brothers, and her female commander Kuyili, who executed the first human bomb attack in Indian history.",
    keyContributions: [
      "Successfully waged war against the East India Company and reclaimed the Sivaganga Kingdom (1780).",
      "Formed an alliance with Hyder Ali of Mysore and Tipu Sultan to counter British forces.",
      "Created the 'Udaiyal' brigade—an all-female army named after her adoptive daughter."
    ],
    movementsLinked: ["early_resistance"],
    organizationsLinked: [],
    image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?auto=format&fit=crop&q=80&w=400",
    citations: [
      "State Archives of Tamil Nadu, Sivaganga Manuscripts.",
      "Military Records of Madras Presidency (1772-1785)."
    ]
  },
  {
    id: "munda",
    name: "Birsa Munda",
    alternativeName: "Dharti Aba (Father of the Earth)",
    birthDate: "1875-11-15",
    deathDate: "1900-06-09",
    birthPlace: "Ulihatu",
    state: "Jharkhand",
    district: "Khunti",
    role: "Tribal Freedom Fighter and Folk Hero",
    biography: "Birsa Munda was a visionary tribal leader from the Munda tribe who spearheaded the 'Ulgulan' (Great Tumult)—the legendary tribal rebellion against British land-grabbing, forest laws, and exploitation by landlords. He advocated for indigenous land rights and cultural preservation.",
    keyContributions: [
      "Led the legendary 'Ulgulan' tribal movement (1899-1900) in the Chhotanagpur region.",
      "Mobilized thousands of tribal peasants to protest against forced labor and unfair taxes.",
      "Forced the British to enact the Chota Nagpur Tenancy Act of 1908, protecting tribal lands."
    ],
    movementsLinked: ["ulgulan_rebellion"],
    organizationsLinked: [],
    image: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=400",
    citations: [
      "Chhotanagpur Commissioner's Record Room, Ranchi.",
      "The Dust-Storm and the Hanging Mist: A Study of Birsa Munda and His Movement in Chhotanagpur, by K.S. Singh."
    ]
  }
];
