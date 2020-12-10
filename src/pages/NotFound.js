import React from 'react';
import { Result, Button } from 'antd';

function NotFound(props) {
    return (
        <Result
            status="404"
            title="Looks like you traveled away from the mob."
            subTitle="Better get home before something back happens..."
            extra={<Button type="primary">Back Home</Button>}
        />
    );
}

export default NotFound;
