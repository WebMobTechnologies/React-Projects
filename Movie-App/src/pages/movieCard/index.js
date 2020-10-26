import React, { Component } from 'react';
import { Row, Col, Card, Rate, Spin, Button, Typography } from 'antd';
import { getMovies, IMAGE_PATH } from '@/api';

const { Meta } = Card;
const { Paragraph } = Typography;
export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
      loading: true,
      error: false,
    };
  }

  componentDidMount() {
    this.getMovieData();
  }

  getMovieData = () => {
    console.log('Clicked');
    getMovies()
      .then(data => {
        this.setState(
          {
            movieList: data,
            loading: false,
          },
          () => {
            console.log('Movies list from API ==>', this.state.movieList);
          },
        );
      })
      .catch(e => {
        this.setState({
          error: true,
          loading: false,
        });
        console.log('Error', e);
      });
  };

  render() {
    const { movieList, error, loading } = this.state;
    return (
      <div style={{ color: '#fff', maxWidth: '100vw' }}>
        <Row>
          <Col lg={24}>
            <Row type="flex" justify="center">
              <Col lg={24}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '28px',
                    marginTop: '20px',
                  }}
                >
                  Movies 2020
                </div>
              </Col>
            </Row>
            {loading && !error && (
              <Col
                lg={24}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                  width: '100%',
                }}
              >
                <div className="loader-wrapper">
                  <Spin />
                </div>
              </Col>
            )}
            {!loading && error && (
              <Col
                lg={24}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100vh',
                  width: '100%',
                  zIndex: 100,
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  Error getting the data from server!
                  <br />
                  <Button onClick={this.getMovieData} type="primary">
                    Retry
                  </Button>
                </div>
              </Col>
            )}
            <Row style={{ marginTop: '30px' }} gutter={[0, 48]}>

              {movieList.length > 0 &&
                movieList.map(movieItem => {
                  const { poster_path, title, vote_average, overview } = movieItem;
                  return (
                    <Col xs={24} sm={24} md={6} lg={6}>
                      <Card
                        onClick={() => {}}
                        style={{
                          marginLeft: '25px',
                          marginRight: '25px',
                          backgroundColor: '#292847',
                          borderColor: '#1E1F33',
                        }}
                        hoverable
                        cover={<img alt="example" src={`${IMAGE_PATH}${poster_path}`} />}
                      >
                        <Meta
                          style={{ color: '#fff' }}
                          title={title}
                          description={
                            <div>
                              <Rate defaultValue={vote_average} allowHalf count={10} disabled />
                              <Paragraph ellipsis={{ rows: 2 }}>{overview}</Paragraph>
                            </div>
                          }
                        />
                      </Card>
                    </Col>
                  );
                })}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default index;