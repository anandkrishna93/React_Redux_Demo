import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';
import { MainHeader } from '../_components';
import DrawerMenuBar from '../_components/DrawerMenuBar';

import { Layout, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        localStorage.getItem('user')
            ? 
            <div className="demo-big-content">
                <Layout>
                    <MainHeader />

                    <DrawerMenuBar />
                    
                    <Content>
                        <div className="page-content">
                            <Component {...props} />
                        </div>
                    </Content>

                    <Footer size="mini" className="main_footer_style">
                        <FooterSection type="left">
                            <FooterLinkList>
                                <i>@Copyright 2020</i>
                                <a>Customer Relationship Management</a>
                            </FooterLinkList>
                        </FooterSection>
                        
                        <FooterSection type="right">
                            <FooterLinkList>
                                <i>Powered by</i>
                                <a href="https://www.google.com/" target="_blank">Barkha Pvt. Ltd.</a>
                            </FooterLinkList>
                        </FooterSection>
                    </Footer>
                </Layout>
            </div>
            : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)