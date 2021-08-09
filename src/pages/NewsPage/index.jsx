import { Container, Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getVnExpressNews } from '../../apis';
import NewsCard from './components/NewsCard';

function NewsPage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getVnExpressNews().then((res) => {
      const key = Object.keys(res.data.data)[0];
      const data = res.data.data[key].data;
      setList(data);
    });
  }, []);

  return (
    <Container style={{ marginTop: '12px' }}>
      <Grid container spacing={2}>
        {list.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            {/* <p>{new Date(article.publish_time)}</p> */}
            <NewsCard
              url={article.share_url}
              title={article.title}
              lead={article.lead}
              thumbnail={article.thumbnail_url}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default NewsPage;
