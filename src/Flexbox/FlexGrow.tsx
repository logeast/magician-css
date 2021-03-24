import React, { useState } from 'react';
import { Card, Form, InputNumber } from 'antd';
import classNames from 'classnames';

type Props = {
    colorData: {
        label: number;
        value: string;
    }[];
};

function FlexGrow({ colorData }: Props) {

    return (
        <div className="control">
            <h4>
                <span>flex-grow</span>
                <small>(property of the flex container)</small>
            </h4>
            <div className="radio">
                <Form layout="inline">
                    <Form.Item label="Field A">
                        <InputNumber min={1} max={10} defaultValue={3} onChange={value => value} />
                    </Form.Item>
                </Form>
            </div>
            <div className={classNames('flex-container')} style={{
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

export default FlexGrow;
