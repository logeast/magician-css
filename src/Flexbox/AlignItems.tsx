import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import classNames from 'classnames';

type Props = {
    colorData: {
        label: number;
        value: string;
    }[];
};

function AlignItems({ colorData }: Props) {
    const [value, setValue] = useState('align-items-start');
    const RadioOptions = [
        { label: 'flex-start', value: 'align-items-start' },
        { label: 'flex-end', value: 'align-items-end' },
        { label: 'center', value: 'align-items-center' },
        { label: 'baseline', value: 'align-items-baseline' },
        { label: 'stretch', value: 'align-items-stretch' },
    ];

    return (
        <div className="control">
            <h4>
                <span>align-items</span>
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
            <div className={classNames('flex-container', value)} style={{
                height: '300px'
            }}>
                {colorData.map((item) => {
                    return (
                        <Card
                            key={item.label}
                            className="item"
                            bordered={false}
                            style={{
                                background: item.value,
                                minHeight: item.label === 3 ? '150px' : undefined,
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

export default AlignItems;
