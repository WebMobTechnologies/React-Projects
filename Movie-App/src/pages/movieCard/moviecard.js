import React, { Component } from 'react';
import { Row, Col, Divider, Card,Rate, Modal, Button } from 'antd';
//import styles from './movie.css';
import Styles from '../moviecard.css';

const { Meta } = Card;
class movie extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleCancel = e => {
    //console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          style={{ backgroundColor: '#1E1F33'}}
          onCancel={this.handleCancel}
          visible={this.state.visible}
          footer={null}
          destroyOnClose={true}

          width={900}

        >
        <Row style={{marginTop: '30px'}}>

          <Col lg={24}>
          <Col lg={12}>
            <img alt="example" style={{width: '100%',height:'300px',paddingRight:'15px'}} src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
          </Col>
          <Col lg={12}>

            <Meta style={{marginTop: '5px'}} title="Europe Street beat" description={
                <div>
                  <div className={Styles.movieTitle}>Action / Adventure / Comedy</div>
                  <Rate defaultValue={4} allowHalf count={10} disabled/>
                  <div className={Styles.movieDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </div>
                 <p className={Styles.movieTitle} style={{paddingTop:'5px'}}>Stars: <span className={Styles.movieContent}>Pedro Pascal, Carl Weathers</span></p>

                </div>
            } />
          </Col>      
          <Col lg={24}>

          <div className={Styles.additional}>
            <Col lg={12}>
            <Divider orientation="left" className={Styles.movieHeader} style={{fontWeight:'bold',padding:'5px'}}>Details</Divider>

               <p className={Styles.movieTitle}>Official Site: <span className={Styles.movieContent}>Official Facebook</span></p>
               <p className={Styles.movieTitle}>Author: <span className={Styles.movieContent}>USA</span></p>
               <p className={Styles.movieTitle}>Release Date: <span className={Styles.movieContent}>26 July 2021 (USA)</span></p>
               <p className={Styles.movieTitle}>Also Known As: <span className={Styles.movieContent}>The Boys</span></p>
               <p className={Styles.movieTitle}>Filming Locations: <span className={Styles.movieContent}> Hamilton, Ontario, Canada</span></p>
            </Col> 
            <Col lg={12}>
            <Divider orientation="left" className={Styles.movieHeader} style={{fontWeight:'bold',padding:'5px'}}>Technical Specs</Divider>

               <p className={Styles.movieTitle}>Runtime: <span className={Styles.movieContent}>60 min</span></p>
               <p className={Styles.movieTitle}>Sound Mix: <span className={Styles.movieContent}>Dolby Digital</span></p>
               <p className={Styles.movieTitle}>Color: <span className={Styles.movieContent}>color</span></p>
               <p className={Styles.movieTitle}>Aspect Ratio: <span className={Styles.movieContent}>2.39 : 1</span></p>
            </Col>
            <Col lg={24}>
            <Divider orientation="left" className={Styles.movieHeader} style={{fontWeight:'bold',padding:'5px'}}>Company Credits</Divider>

               <p className={Styles.movieTitle}>Production Co: <span className={Styles.movieContent}>Amazon Studios, Original Film, Point Grey Picture</span></p>
            </Col>

            </div>


          </Col>
          </Col>

        </Row>

        </Modal>
      </>

    );
  }
}

export default movie;