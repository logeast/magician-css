import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import classNames from 'classnames';

type Props = {
    colorData: {
        label: number;
        value: string;
    }[];
};

function FlexDirection({ colorData }: Props) {
    const [value, setValue] = useState('row');
    const RadioOptions = [
        { label: 'row', value: 'row' },
        { label: 'row-reverse', value: 'row-reverse' },
        { label: 'column', value: 'column' },
        { label: 'column-reverse', value: 'column-reverse' },
    ];

    return (
        <div className="control">
            <h4>
                <span>flex-direction</span>
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

export default FlexDirection;
