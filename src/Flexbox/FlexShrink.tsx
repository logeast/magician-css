import React, { useCallback, useState } from 'react';
import { Card, Form, InputNumber } from 'antd';
import classNames from 'classnames';

type Props = {
    colorData: {
        label: number;
        value: string;
    }[];
};

function FlexShrink({ colorData }: Props) {
    let tem = new Array();
    tem.length = colorData.length;
    const [value, setValue] = useState<any>(0);

    return (
        <div className="control">
            <h4>
                <span>flex-shrink</span>
                <small>(property of the flex items)</small>
            </h4>
            <div className="radio">
                {/* <Form layout="inline">
                    {colorData.map((item) => (
                        <Form.Item
                            key={item.label}
                            label={`item ${item.label}`}
                        >
                            <InputNumber
                                min={0}
                                onChange={(val) => {
                                    handleChange(val, item.label);
                                }}
                            />
                        </Form.Item>
                    ))}
                </Form> */}
                {colorData.map((item) => (
                    <InputNumber
                        min={0}
                        onChange={(val: any) => setValue(val)}
                    />
                ))}
            </div>
            <div>{value}</div>
            <div className="flex-container">
                {colorData.map((item) => {
                    return (
                        <Card
                            key={item.label}
                            className="item"
                            bordered={false}
                            style={{
                                background: item.value,
                                flexShrink: value,
                            }}
                        >
                            {value}
                        </Card>
                    );
                })}
            </div>
        </div>
    );
}

export default FlexShrink;
