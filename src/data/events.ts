/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HistoricalEvent } from '../types.ts';

export const historicalEvents: HistoricalEvent[] = [
  {
    id: "battle_plassey",
    title: "Battle of Plassey",
    date: "1757-06-23",
    year: 1757,
    place: "Palashi",
    state: "West Bengal",
    description: "A decisive victory of the British East India Company over the Nawab of Bengal, Siraj-ud-Daulah, and his French allies. The victory was engineered through secret conspiracies with Mir Jafar, the Nawab's military chief.",
    significance: "Lays the political foundation of British East India Company supremacy in Bengal and subsequently across the Indian subcontinent.",
    fightersInvolved: ["Siraj-ud-Daulah", "Robert Clive", "Mir Jafar"],
    movementLinked: "early_resistance",
    documentsLinked: ["plassey_treaty"],
    media: ["https://images.unsplash.com/photo-1599583802241-119fe290a604?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: "jallianwala_bagh",
    title: "Jallianwala Bagh Massacre",
    date: "1919-04-13",
    year: 1919,
    place: "Amritsar",
    state: "Punjab",
    description: "On Baisakhi day, British troops under the command of Brigadier-General Reginald Dyer opened fire on a peaceful, unarmed gathering of men, women, and children inside an enclosed garden, blockading the single exit.",
    significance: "A horrific turning point in Indian history. It shattered any remaining faith in British justice, prompting Rabindranath Tagore to renounce his British Knighthood and Gandhi to initiate the Non-Cooperation Movement.",
    fightersInvolved: ["gandhi", "Saifuddin Kitchlew", "Dr. Satyapal", "Udham Singh"],
    movementLinked: "non_cooperation",
    documentsLinked: ["hunter_commission_report"],
    media: ["https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: "chauri_chaura",
    title: "Chauri Chaura Incident",
    date: "1922-02-04",
    year: 1922,
    place: "Chauri Chaura",
    state: "Uttar Pradesh",
    description: "During the Non-Cooperation Movement, a large crowd of protesters clashed with local colonial police, culminating in the setting on fire of a police station and the deaths of 22 policemen.",
    significance: "Deeply distressed by the outbreak of violence, Mahatma Gandhi immediately suspended the nationwide Non-Cooperation Movement, asserting that India was not yet fully prepared for absolute nonviolent Satyagraha.",
    fightersInvolved: ["gandhi"],
    movementLinked: "non_cooperation",
    documentsLinked: ["bardoli_resolution"],
    media: ["https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: "salt_march_event",
    title: "The Salt March (Dandi Satyagraha)",
    date: "1930-03-12",
    year: 1930,
    place: "Dandi",
    state: "Gujarat",
    description: "Mahatma Gandhi, along with 78 chosen satyagrahis, embarked on a 240-mile walking journey from Sabarmati Ashram to the coastal village of Dandi to break the colonial salt laws, inspiring millions to join along the way.",
    significance: "Became the defining global image of Indian peaceful resistance, showcasing the moral strength of the national movement and triggering nationwide civil disobedience.",
    fightersInvolved: ["gandhi", "patel", "Sarojini Naidu"],
    movementLinked: "salt_march",
    documentsLinked: ["gandhi_letter_irwin"],
    media: ["https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: "naval_mutiny",
    title: "Royal Indian Navy Mutiny",
    date: "1946-02-18",
    year: 1946,
    place: "Bombay",
    state: "Maharashtra",
    description: "An armed, extensive mutiny by Indian ratings (sailors) of the Royal Indian Navy on board ships and shore establishments, protesting racial discrimination, poor food, and British military actions.",
    significance: "Signaled to the British government that they could no longer rely on the military forces to police and control India, accelerating the negotiations for absolute independence.",
    fightersInvolved: ["bose", "M. S. Khan"],
    movementLinked: "ina_campaign",
    documentsLinked: ["mutiny_manifesto"],
    media: ["https://images.unsplash.com/photo-1599583802241-119fe290a604?auto=format&fit=crop&q=80&w=400"]
  },
  {
    id: "independence_day",
    title: "Proclamation of Indian Independence",
    date: "1947-08-15",
    year: 1947,
    place: "New Delhi",
    state: "Delhi",
    description: "The transfer of power from the British Empire to the newly sovereign Dominions of India and Pakistan, accompanied by partition and Jawaharlal Nehru's iconic 'Tryst with Destiny' speech at midnight.",
    significance: "The culmination of nearly two centuries of struggle, sacrifice, and resilience, giving birth to the world's largest sovereign democracy.",
    fightersInvolved: ["gandhi", "patel", "Jawaharlal Nehru", "B. R. Ambedkar"],
    movementLinked: "quit_india",
    documentsLinked: ["indian_independence_act"],
    media: ["https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=400"]
  }
];
