import React from 'react';
import {Card, Typography} from "antd";
import {SNOWFLAKE_COUNT} from "../util/Constants";
import Snowfall from "react-snowfall";

const {Text, Title} = Typography;

function Main() {
    return (
        <div>
            <Snowfall snowflakeCount={SNOWFLAKE_COUNT}/>
            <div className='container-content'>
                <Card>
                    <Title level={5}>
                        Konstantine the Christmas Kangaroo
                    </Title>
                    <Text>
                        Konstantine the Christmas Kangaroo originated in the Anglo-Saxon English era sometime in between the
                        7th and 11th centuries. He was the main protagonist in a series of fables centered around the protection
                        against the threat of Danish and Viking invasions.
                    </Text>
                </Card>
            </div>
        </div>
    );
}

export default Main;
