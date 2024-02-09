const menuBuilder = require('./menu-builder');

test('Return the value that was sent into the function', () => {
  const menuItems = [
    { id: 1, name: 'Company', parentId: null, isHidden: false },
    { id: 2, name: 'About Us', parentId: 1, isHidden: false },
    { id: 11, name: 'Contact', parentId: 1, isHidden: false },
    { id: 3, name: 'Mission', parentId: 1, isHidden: false },
    { id: 12, name: 'Goals', parentId: 3, isHidden: false },
    { id: 13, name: '2021', parentId: 12, isHidden: false },
    { id: 4, name: 'Team', parentId: 2, isHidden: false },
    { id: 5, name: 'Client 2', parentId: 10, isHidden: false },
    { id: 6, name: 'Client 1', parentId: 10, isHidden: false },
    { id: 7, name: 'Client 4', parentId: 10, isHidden: true },
    { id: 8, name: 'Client 5', parentId: 20, isHidden: false },
    { id: 10, name: 'References', parentId: null, isHidden: false },
    { id: 14, name: 'Prices', parentId: null, isHidden: false },
  ];
  const result = `. Company
  ... About Us
  ...... Team
  ... Contact
  ... Mission
  ...... Goals
  ......... 2021
  . Prices
  . References
  ... Client 1
  ... Client 2
  ... Client 4
  . Company
  ... About Us
  ...... Team
  ... Contact
  ... Mission
  ...... Goals
  ......... 2021
  . Prices
  . References
  ... Client 1
  ... Client 2
  ... Client 4
  
  `;
  expect(menuBuilder(menuItems)).toEqual(result);
});
