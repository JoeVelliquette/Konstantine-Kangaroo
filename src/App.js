import './App.less';

import React from 'react';
import { Layout } from 'antd';
import YouTube from 'react-youtube';
import {playerOpt, SNOWFLAKE_COUNT} from "./util/Constants";
import Snowfall from 'react-snowfall';

const { Header, Footer, Content } = Layout;

function App() {
    return (
        <Layout>
            <Header className='header'>

            </Header>
            <Content className='content'>
                <Snowfall
                    style={{backgroundColor: '#001529'}}
                    snowflakeCount={SNOWFLAKE_COUNT}
                />
            </Content>
            <Footer className='footer'>
                <YouTube videoId="Z0ajuTaHBtM" opts={playerOpt} />
            </Footer>
        </Layout>
    );
}

export default App;
