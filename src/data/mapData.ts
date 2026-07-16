/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface StateMapDetails {
  id: string; // State code (e.g. "IN-MH")
  name: string; // State name
  centerX: number; // custom relative X for visual placement (0-100)
  centerY: number; // custom relative Y for visual placement (0-100)
  historicalRole: string;
  freedomFighters: string[]; // Fighter IDs or names
  events: string[]; // Event IDs or names
  movements: string[]; // Movement IDs or names
}

export const stateMapData: StateMapDetails[] = [
  {
    id: "IN-GJ",
    name: "Gujarat",
    centerX: 28,
    centerY: 55,
    historicalRole: "Gujarat was a central crucible of the national struggle, serving as the home base of Mahatma Gandhi and Sardar Vallabhbhai Patel. Major non-violent mass campaigns, such as the Dandi Salt March, the Kheda Peasant Satyagraha, and the Bardoli Satyagraha, were launched here, establishing the blueprint of mass civic action.",
    freedomFighters: ["gandhi", "patel"],
    events: ["salt_march_event"],
    movements: ["salt_march", "bardoli_satyagraha"]
  },
  {
    id: "IN-MH",
    name: "Maharashtra",
    centerX: 35,
    centerY: 68,
    historicalRole: "Maharashtra was a powerhouse of intellectual and radical nationalism. Great leaders like Bal Gangadhar Tilak pioneered public festivals (Ganesh Utsav) as political forums. Bombay served as the birthplace of the Indian National Congress in 1885 and the launching pad of the intense Quit India Movement in 1942.",
    freedomFighters: ["Bal Gangadhar Tilak", "Sardar Patel", "Aruna Asaf Ali"],
    events: ["naval_mutiny"],
    movements: ["swadeshi", "quit_india"]
  },
  {
    id: "IN-PB",
    name: "Punjab",
    centerX: 38,
    centerY: 28,
    historicalRole: "Punjab was marked by incredible revolutionary zeal and massive sacrifice. From the early Ghadar Party activists to the intellectual resistance of Bhagat Singh and Sukhdev, Punjab stood at the forefront of militant defiance. The tragic Jallianwala Bagh massacre occurred in Amritsar in 1919.",
    freedomFighters: ["singh", "Lala Lajpat Rai", "Udham Singh"],
    events: ["jallianwala_bagh"],
    movements: ["revolutionary_struggle", "non_cooperation"]
  },
  {
    id: "IN-UP",
    name: "Uttar Pradesh",
    centerX: 52,
    centerY: 40,
    historicalRole: "Uttar Pradesh (then United Provinces) was a massive theatre of operations during the 1857 Uprising, with legendary siege defenses in Jhansi, Kanpur, and Lucknow. In the 20th century, it witnessed crucial events like the Chauri Chaura incident (1922) and was a major base of the Kakori revolutionary conspiracy.",
    freedomFighters: ["lakshmibai", "Chandra Shekhar Azad", "Jawaharlal Nehru"],
    events: ["chauri_chaura"],
    movements: ["revolt_1857", "non_cooperation"]
  },
  {
    id: "IN-TN",
    name: "Tamil Nadu",
    centerX: 48,
    centerY: 88,
    historicalRole: "Tamil Nadu has a long and proud history of early resistance to colonial expansions, pioneered by Rani Velu Nachiyar and Veerapandiya Kattabomman. In the 20th century, leaders like C. Rajagopalachari conducted the Vedaranyam Salt Satyagraha and Subramania Bharati inspired millions through intense patriotic poetry.",
    freedomFighters: ["nachiyar", "C. Rajagopalachari", "Subramania Bharati", "V. O. Chidambaram Pillai"],
    events: ["early_resistance"],
    movements: ["salt_march", "swadeshi"]
  },
  {
    id: "IN-WB",
    name: "West Bengal",
    centerX: 68,
    centerY: 50,
    historicalRole: "Bengal was the early administrative center of British rule, starting from the Battle of Plassey (1757). The partition of Bengal in 1905 sparked the nationwide Swadeshi movement. Bengal became a major nursery of revolutionary societies (Anushilan Samiti) and hosted outstanding intellectual leaders like Netaji Subhas Chandra Bose.",
    freedomFighters: ["bose", "Rabindranath Tagore", "Aurobindo Ghosh", "Rash Behari Bose"],
    events: ["battle_plassey"],
    movements: ["swadeshi", "ina_campaign"]
  },
  {
    id: "IN-JH",
    name: "Jharkhand",
    centerX: 60,
    centerY: 52,
    historicalRole: "Jharkhand was the epicentre of legendary tribal uprisings that predated or operated independently of mainstream urban campaigns. Tribal folk hero Birsa Munda spearheaded the 'Ulgulan' (Great Tumult) in 1899-1900, demonstrating courageous, direct tribal warfare against land-grabbing and forest laws.",
    freedomFighters: ["munda"],
    events: ["ulgulan_rebellion"],
    movements: ["ulgulan_rebellion"]
  },
  {
    id: "IN-DL",
    name: "Delhi",
    centerX: 45,
    centerY: 35,
    historicalRole: "Delhi was the symbolic capital of sovereignty for both the freedom fighters during the 1857 revolt (who declared Emperor Bahadur Shah Zafar as India's leader) and the British, who shifted their capital here in 1911. Delhi was the final stage for the proclamation of Indian Independence on August 15, 1947.",
    freedomFighters: ["gandhi", "Jawaharlal Nehru", "Abul Kalam Azad"],
    events: ["independence_day"],
    movements: ["quit_india"]
  }
];
