import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import classNames from 'classnames';
import './index.css';

type Props = {
    colorData: {
        label: string;
        value: string;
    }[];
};

function FlexWrap({ colorData }: Props) {
    const [value, setValue] = useState('nowrap');
    const RadioOptions = [
        { label: 'nowrap', value: 'nowrap' },
        { label: 'wrap', value: 'wrap' },
        { label: 'wrap-reverse', value: 'wrap-reverse' },
    ];

    return (
        <div className="control">
            <h4>
                <span>flex-wrap</span>
                <small>(property of the flex container)</small>
            </h4>
            <div className="radio">
                <Radio.Group
                    options={RadioOptions}
                    value={value}
                    onChange={(e: any) => {
                        setValue(e.target.value);
                    }}
                />
            </div>
            <div className={classNames('flex-container', value)}>
                {colorData.map((item) => {
                    return (
                        <Card
                            key={item.label}
                            className="item"
                            bordered={false}
                            style={{ background: item.value }}
                        >
                            {item.label}
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default FlexWrap;
