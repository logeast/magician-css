import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import classNames from 'classnames';

type Props = {
    colorData: {
        label: number;
        value: string;
    }[];
};

function JustifyContent({ colorData }: Props) {
    const [value, setValue] = useState('justify-start');
    const RadioOptions = [
        { label: 'flex-start', value: 'justify-start' },
        { label: 'flex-end', value: 'justify-end' },
        { label: 'center', value: 'justify-center' },
        { label: 'space-between', value: 'justify-space-between' },
        { label: 'space-around', value: 'justify-space-around' },
    ];

    return (
        <div className="control">
            <h4>
                <span>justify-conent</span>
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
                            style={{
                                background: item.value,
                            }}
                        >
                            {item.label}
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default JustifyContent;
