import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getVnExpressNews } from '../../apis';
import NewsCard from './components/NewsCard';
import CustomPagination from './components/CustomPagination';
import timeSince from '../../utils/timeSince';

function NewsPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getVnExpressNews(page).then((res) => {
      const data = res.data.data;
      const key = Object.keys(data)[0];
      const articles = data[key].data;
      setList(articles);
    });
  }, [page]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <Container style={{ marginTop: '12px' }}>
      <CustomPagination page={page} onPageChange={handleChangePage} />

      <Box marginY={2}>
        <Grid container spacing={2}>
          {list.map((article, idx) => (
            <Grid item key={idx} xs={12} sm={6} md={4} lg={3}>
              <NewsCard
                url={article.share_url}
                title={article.title}
                lead={article.lead}
                thumbnail={article.thumbnail_url}
                publishTime={timeSince(article.publish_time, 'vi')}
                source='VnExpress'
              />
            </Grid>
          ))}
        </Grid>
      </Box>

      <CustomPagination page={page} onPageChange={handleChangePage} />
    </Container>
  );
}

export default NewsPage;
