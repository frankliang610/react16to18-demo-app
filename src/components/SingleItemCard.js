import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItemsCard from './ListItemsCard';

import itemsJson from './items.json';

const itemsArray = itemsJson.map((item) => ({
  ...item,
  description: faker.lorem.paragraph(),
}));

const fetchItems = (title) => {
  return new Promise((res) => {
    setTimeout(() => {
      if (!title) {
        return res(itemsArray);
      }

      return res(itemsArray.filter((item) => item.title.includes(title)));
    }, 1000);
  });
};

const SingleItemCard = ({ searchQuery }) => {
  const [items, setItems] = useState();

  useEffect(() => {
    fetchItems(searchQuery).then((res) => {
      setItems(res);
    });
  }, [searchQuery]);

  const data = items?.map((i) => ({
    key: i.id,
    name: i.title,
    description: i.description,
  }));

  return (
    <ListItemsCard data={data} icon={<AccountCircleIcon color='primary' />} />
  );
};

export default React.memo(SingleItemCard);
