import Stack from './stack';

let htmlString = '';

function buildMenuWithStack(menuItems) {
  const stack = new Stack();
  const parentMenus = menuItems.filter(
    (item) => item.parentId === null && !item.isHidden
  );

  parentMenus.sort((a, b) => a.name.localeCompare(b.name));

  parentMenus.reverse().forEach((item) => stack.push({ item, level: 0 }));

  while (!stack.isEmpty()) {
    const { item, level } = stack.pop();

    htmlString += `${addTags(level, item.name)}`;
    console.log(`${addDots(level)} ${item.name}`);

    const submenus = getSortedChildren(menuItems, item.id);

    for (let i = submenus.length - 1; i >= 0; i--) {
      stack.push({ item: submenus[i], level: level + 1 });
    }
  }

  return htmlString;
}

function addTags(level, name) {
  if (level === 0) {
    return `<ul class='menu'>${name}</ul>`;
  } else {
    return `<li class='submenu padding-${level}'>${name}</li>`;
  }
}

function addDots(level) {
  return level === 0 ? '.' : '.'.repeat(level * 3);
}

function getSortedChildren(submenu, id = null) {
  return submenu
    .filter((item) => {
      return item.parentId === id && item.isHidden === false;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export default buildMenuWithStack;
