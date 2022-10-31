import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Filter from '../components/filter';
import Card from '../components/card';
import utilStyles from '../styles/utils.module.css';
import { useState, useEffect } from 'react';

const favoriteFood: object[] = [
  {
    id: 1,
    name: 'Adobo',
    imgsrc: '/images/adobo.png',
    description: 'Chicken Adobo.',
    rating: 1,
  },
  {
    id: 2,
    name: 'Lechon',
    imgsrc: '/images/lechon.jpg',
    description: 'Roasted Pig.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Egg',
    imgsrc: '/images/egg.jpg',
    description: 'Sunny side egg, favorite breakfast.',
    rating: 4,
  },
  {
    id: 4,
    name: 'Inihaw na Bangus',
    imgsrc:
      'https://i.pinimg.com/474x/d7/39/97/d739975107117b3cbc8fbe87240aeecc--filipino-recipes-filipino-food.jpg',
    description: 'Grilled Milk Fish',
    rating: 3,
  },
  {
    id: 5,
    name: 'Kinilaw',
    imgsrc:
      'https://i.pinimg.com/564x/23/87/c4/2387c4e7bad79978f61541d3704c513f.jpg',
    description: 'Raw fish dip with vinegar and some seasonings and herbs.',
    rating: 4,
  },
];

export default function Home() {
  const [foodData, setFoodData] = useState(favoriteFood);
  const [filter, setFilter] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const filterFood = async () => {
      if (filter !== '') {
        //Filter logic
        const result = favoriteFood.filter(
          (data) =>
            JSON.stringify(data.name)
              .toLowerCase()
              .indexOf(filter.toLowerCase()) !== -1
        );
        setFoodData(result);
      } else {
        setFoodData(favoriteFood);
      }
    };
    filterFood();
  }, [filter]);

  useEffect(() => {
    const sortFood = async () => {
      if (sortType !== '' && sortType === 'Ascending') {
        const temp = [...foodData]; //get the previous data
        temp.sort((a, b) => a.rating - b.rating);
        console.log(temp);
        setFoodData(temp);
      } else if (sortType !== '' && sortType === 'Descending') {
        const temp = [...foodData]; //get the previous data
        temp.sort((a, b) => b.rating - a.rating);
        setFoodData(temp);
      } else {
        setFoodData(favoriteFood);
      }
    };
    sortFood();
  }, [sortType]);

  const handleFilter = (f: string) => {
    setFilter(f);
  };

  const handleSort = (f: string) => {
    setSortType(f);
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Filter handleFilterChange={handleFilter} handleSortChange={handleSort} />
      <div className={`${utilStyles.mt3} ${utilStyles.columns}`}>
        {foodData.map((food: any) => (
          <div className={utilStyles.columnItem} key={food.id}>
            <Card
              img={food.imgsrc}
              name={food.name}
              description={food.description}
              rating={food.rating}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
}
