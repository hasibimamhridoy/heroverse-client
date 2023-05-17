import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallary() {
  return (
    <div className='mb-10'>
        <h1 className='lg:text-4xl lg:my-16 my-10 text-purple-400 text-center font-semibold'>Featured Gallary</h1>
        <ImageList
      sx={{ width:"100%", height: "100%" }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
            className='p-1 border border-purple-400'
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}




const itemData = [
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2023/03/9f306334-79ce-43a0-9888-07b8bafda760.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 1,
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/10/a3ed8520-ba69-400c-a451-a5c872f87f7b.jpg',
    title: 'Burger',
    
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2022/09/b0acfc1d-9200-4004-b877-fab4512b9014.jpg',
    title: 'Camera',
    
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2022/08/d5bf50f5-6cde-4bde-930f-9bdb33245e8a.jpg',
    title: 'Coffee',
    
    
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/05/45aa1f6e-9119-4305-a046-1a45f005331c.jpg',
    title: 'Hats',
    cols: 2,
   
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/10/a3ed8520-ba69-400c-a451-a5c872f87f7b.jpg',
    title: 'Burger',
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2022/09/1611a3b5-3f7b-4130-b4dd-ff3b81fbfc91.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 3,
    cols: 1,
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/10/03828c5d-5873-4d45-a2d2-8ed5089a33a8.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/10/a3ed8520-ba69-400c-a451-a5c872f87f7b.jpg',
    title: 'Burger',
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/05/fd17adbf-e2ca-4e9e-a42c-e4bb57cb7bfb.jpg',
    title: 'Fern',
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2023/04/7e425f8b-41e5-4efd-9b2a-598c94e674a6.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 3,
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/12/2abecd99-deb4-4188-b461-bcb1534725e5.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2022/04/ac5fc4bf-59b8-4450-ad6f-5f26223496c6.jpg',
    title: 'Sea star',
  },
  
  {
    img: 'https://bbts1.azureedge.net/site-images/p/2021/04/5a22c4b4-2b64-474b-88f2-8a3562d8415a.jpg',
    title: 'Bike',
    cols: 2,
  },

  
];