const buildMenu = require('./menu-builder');

describe('Menu Builder', () => {
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

  beforeEach(() => {});

  describe('log', () => {
    test('should log each item once', () => {
      // should log 12 out of 13 items as there's a hidden one.
      const consoleSpy = jest.spyOn(console, 'log');
      const totalItems = menuItems.length - 1;
      const hidden = 1;

      buildMenu(menuItems);

      expect(consoleSpy).toHaveBeenCalledWith('. Company');
      expect(consoleSpy).toHaveBeenCalledWith('...... Team');
      expect(consoleSpy).toHaveBeenCalledWith('. Prices');
      expect(consoleSpy).toHaveBeenCalledTimes(totalItems - hidden);
    });
  });
});
