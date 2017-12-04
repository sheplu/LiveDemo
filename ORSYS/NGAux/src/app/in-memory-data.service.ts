import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const users = [
      { id: 1, name: 'Jean'},
      { id: 2, name: 'Paul'},
      { id: 3, name: 'Gauthier'}
    ];

    const roles = [];

    return {users, roles};
  }
}
