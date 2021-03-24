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
    const [value, setValue] = useState([0, 0, 0, 0, 0]);

    const handleChange = (val: number, label: number) => {
        value[label - 1] = val;
        setValue(value);
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
                            <Form.Item key={item.label} label={`item ${item.label}`}>
                                <InputNumber min={0} onChange={(val) => handleChange(val, item.label)} />
                            </Form.Item>
                        ))
                    }
                </Form>
            </div>
            <div className={classNames('flex-container')}>
                {colorData.map((item) => {
                    console.log({value})
                    return (
                        <Card
                            key={item.label}
                            className="item"
                            bordered={false}
                            style={{
                                background: item.value,
                                flexGrow: value[item.label - 1],
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
