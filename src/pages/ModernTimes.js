import React from 'react';
import {Card, Typography} from "antd";
import Snowfall from "react-snowfall";
import {SNOWFLAKE_COUNT} from "../util/Constants";

const {Text, Paragraph, Title} = Typography;

function ModernTimes() {
    return (
        <div>
            <Snowfall snowflakeCount={SNOWFLAKE_COUNT}/>
            <div className='container-content'>
                <Card
                    cover={<img alt="" src="https://notesfromcamelidcountry.files.wordpress.com/2017/02/img_1116.jpg" />}
                >
                    <Title level={5}>
                        Modern Times
                    </Title>
                    <Paragraph>
                        The character has remained a centerpiece of the holiday season in the northern English region,
                        particularly around the Manchester and Sheffield cities. Konstantine’s popularity in these
                        regions is most commonly compared to that of Rudolph the red nose reindeer in the United States.
                    </Paragraph>
                    <Paragraph>
                        Unfortunately, the legend has died out in most other regions; however, Hallmark
                        is planning to release a short video series on Konstantine and his adventures,
                        set to debut around the 2021 holiday season.
                    </Paragraph>
                    <Paragraph>
                        Above is a statue in Sheffield that they have resurrected of Konstantine leading his
                        two Kangaroo companions Eoj and Tap.
                    </Paragraph>
                    <Text>
                        Marvel is considered adopting Konstantine into the next Avenger’s movie.
                    </Text>
                </Card>
            </div>
        </div>
    );
}

export default ModernTimes;
