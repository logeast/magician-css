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
    const [value, setValue] = useState(['unset', 'unset', 'unset', 'unset']);

    const handleChange = (val: number, label: number) => {
        setValue(value.splice(label - 1, 1, val))
    }
    return (
        <div className="control">
            <h4>
                <span>flex-grow</span>
                <small>(property of the flex container)</small>
            </h4>
            <div className="radio">
                <Form layout="inline" >
                    {
                        colorData.map((item) => (
                            <Form.Item label={`item ${item.label}`}>
                                <InputNumber min={0} onChange={() => handleChange(value, item.label)} />
                            </Form.Item>
                        ))
                    }
                </Form>
            </div>
            <div className={classNames('flex-container')}>
                {colorData.map((item) => {
                    return (
                        <Card
                            key={item.label}
                            className="item"
                            bordered={false}
                            style={{
                                background: item.value,
                                flexGrow: value[item.label],
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
