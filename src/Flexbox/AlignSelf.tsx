import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import classNames from 'classnames';

type Props = {
    colorData: {
        label: number;
        value: string;
    }[];
};

function AlignSelf({ colorData }: Props) {
    const [value, setValue] = useState('align-self-start');
    const RadioOptions = [
        { label: 'auto', value: 'align-self-auto' },
        { label: 'flex-start', value: 'align-self-start' },
        { label: 'flex-end', value: 'align-self-end' },
        { label: 'center', value: 'align-self-center' },
        { label: 'baseline', value: 'align-self-baseline' },
        { label: 'stretch', value: 'align-self-stretch' },
    ];

    return (
        <div className="control">
            <h4>
                <span>align-self</span> 
                <small>(property of the flex items)</small>
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
            <div className="flex-container align-items-center" style={{
                height: '300px'
            }}>
                {colorData.map((item) => {
                    return (
                        <Card
                            key={item.label}
                            className={classNames("item", value)}
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

export default AlignSelf;
