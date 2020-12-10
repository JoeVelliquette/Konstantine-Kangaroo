import React from 'react';
import {Menu, Row, Col} from "antd";
import { useHistory, withRouter } from "react-router-dom";

function AppHeader() {
    let history = useHistory();

    return (
        <Row justify='space-between'>
            <Col>
                <img width={25} alt='' src='https://images.vexels.com/media/users/3/209377/isolated/lists/08fffb35c645b7f55656372a5fc7506c-cute-kangaroo-drawing.png'/>
            </Col>
            <Col>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[window.location.pathname]}
                    onSelect={(item) => history.push(item.key)}
                >
                    <Menu.Item key="/">
                        Main
                    </Menu.Item>
                    <Menu.Item key="/story">
                        Story
                    </Menu.Item>
                    <Menu.Item key="/modern">
                        Modern Times
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
}

export default withRouter(AppHeader);
