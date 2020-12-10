import React from 'react';
import {Card, Typography} from "antd";
import Snowfall from "react-snowfall";
import {SNOWFLAKE_COUNT} from "../util/Constants";

const {Text, Paragraph, Title} = Typography;

function Story() {
    return (
        <div>
            <Snowfall snowflakeCount={SNOWFLAKE_COUNT}/>
            <div className='container-content'>
                <Card>
                    <Title level={5}>
                        Story of Konstantine
                    </Title>
                    <Paragraph>
                        The main fable is told as follows:
                    </Paragraph>
                    <Paragraph>
                        Late one Christmas Eve, Santa Claus was set to drop off gifts to all the houses of the good
                        boys and girls. As he rode out of London on his sleigh, he spotted the Vikings planning a
                        sneak attack at midnight on the city. Santa unfortunately had to deliver presents to other
                        cities or else Christmas would be ruined.
                    </Paragraph>
                    <Paragraph>
                        He tried to find anyone awake; however, everyone was asleep as they were eagerly
                        awaiting their presents in the morning… everyone that is, except Konstantine the Kangaroo.
                        At the time, he was the mayor of the London zoo and was awake tending to some of the other animals.
                    </Paragraph>
                    <Text>
                        As he hopped up over one of the fence of the Elephants, he spotted Santa who alerted his
                        attention to the attacks. Konstantine heroically hopped through the city all the way to
                        the Big Ben tower where he was able to get the attention of the entire city and help strategize
                        a defense against the Vikings. Thanks to Konstantine, Christmas was saved.
                    </Text>
                </Card>
            </div>
        </div>
    );
}

export default Story;
