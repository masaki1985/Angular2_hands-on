import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const heroes = [
      { id: 0,  name: 'Zero' },
      { id: 1, name: 'Spider-Man'},
      { id: 2, name: 'Captain Marvel'},
      { id: 3, name: 'Hulk'},
      { id: 4, name: 'Thor'},
      { id: 5, name: 'Iron Man'},
      { id: 6, name: 'Luke Cage'},
      { id: 7, name: 'Black Widow'},
      { id: 8, name: 'Daredevil'},
      { id: 9, name: 'Captain America'},
      { id: 10, name: 'Wolverine'},
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
    return {heroes};
  }
}
