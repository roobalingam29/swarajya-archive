/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Researcher' | 'Viewer';
  permissions: string[];
}

export interface FreedomFighter {
  id: string;
  name: string;
  alternativeName?: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  state: string;
  district?: string;
  role: string;
  biography: string;
  keyContributions: string[];
  movementsLinked: string[]; // Movement IDs
  organizationsLinked: string[];
  image: string;
  citations: string[];
}

export interface HistoricalEvent {
  id: string;
  title: string;
  date: string;
  year: number;
  place: string;
  state: string;
  description: string;
  significance: string;
  fightersInvolved: string[]; // Fighter IDs
  movementLinked?: string; // Movement ID
  documentsLinked: string[]; // Document IDs
  media: string[];
}

export interface Movement {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  leaders: string[]; // Fighter IDs
  objectives: string[];
  keyOutcomes: string[];
  description: string;
  locations: string[]; // States/Places
}

export interface HistoricalDocument {
  id: string;
  title: string;
  type: 'Letter' | 'Manifesto' | 'Decree' | 'Newspaper' | 'Speech' | 'Treaty';
  date: string;
  author: string;
  language: string;
  summary: string;
  fullTextContent?: string;
  archiveSource: string;
  originalImage?: string;
  downloadUrl?: string;
  citations: string[];
}

export interface AuditLog {
  id: string;
  timestamp: string;
  user: string;
  action: string;
  module: string;
  details: string;
}

export interface TimelineItem {
  id: string;
  year: number;
  title: string;
  description: string;
  type: 'war' | 'movement' | 'treaty' | 'milestone';
  state?: string;
}
