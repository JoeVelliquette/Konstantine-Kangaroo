import './App.less';

import React from 'react';
import { Layout } from 'antd';
import Routes from "./modules/Routes";
import AppHeader from "./components/AppHeader";
import {BrowserRouter as Router} from "react-router-dom";
import AppFooter from "./components/AppFooter";

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <Router className='routes'>
            <Layout>
                <Header className='header'>
                    <AppHeader/>
                </Header>
                <Content className='content'>
                    <Routes/>
                </Content>
                <Footer className='footer'>
                    <AppFooter/>
                </Footer>
            </Layout>
        </Router>
    );
}

export default App;
