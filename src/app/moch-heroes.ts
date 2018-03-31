import { Hero } from './hero';
import { Company } from './company';
import { Group } from './group';
export const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];



export const COMPANY: Company[] = [
  { id: 1, name: 'Allianz', group_id: 1 },
  { id: 2, name: 'NationWide', group_id: 3  },
  { id: 3, name: 'National security', group_id: 2 },
];

export const GROUP: Group[] = [
  { id: 1, name: 'Allianz Group' },
  { id: 2, name: 'NationWide Group' },
  { id: 3, name: 'National security Group' },
];