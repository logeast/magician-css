import React, { useState } from 'react';
import { Card, Radio } from 'antd';
import classNames from 'classnames';
import './index.css';

type Props = {
    colorData: {
        label: string | number;
        value: string;
    }[];
};

function AlignContent({ colorData }: Props) {
    const [value, setValue] = useState('align-content-start');
    const RadioOptions = [
        { label: 'flex-start', value: 'align-content-start' },
        { label: 'flex-end', value: 'align-content-end' },
        { label: 'center', value: 'align-content-center' },
        { label: 'space-between', value: 'align-content-space-between' },
        { label: 'space-around', value: 'align-content-space-around' },
        { label: 'stretch', value: 'align-content-stretch' },
    ];

    return (
        <div className="control">
            <h4>
                <span>align-content</span>
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
                flexWrap: 'wrap',
                height: '600px'
            }}>
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

export default AlignContent;
