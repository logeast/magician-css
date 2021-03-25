/**
 * Flexbox Playground 基于 @Gabi 的 codepen 文件改造而来
 * https://codepen.io/enxaneta/pen/adLPwv
 */
import React from 'react';
import AlignContent from './AlignContent';
import AlignItems from './AlignItems';
import FlexDirection from './FlexDirection';
import FlexWrap from './FlexWrap';
import JustifyContent from './JustifyContent';
import './index.css';
import AlignSelf from './AlignSelf';
import FlexGrow from './FlexGrow';
import FlexShrink from './FlexShrink';

const globalColorData = [
    { label: 1, value: '#f5222d' },
    { label: 2, value: '#fa541c' },
    { label: 3, value: '#fa8c16' },
    { label: 4, value: '#faad14' },
    { label: 5, value: '#d4b106' },
    { label: 6, value: '#a0d911' },
    { label: 7, value: '#52c41a' },
    { label: 8, value: '#13c2c2' },
    { label: 9, value: '#1890ff' },
    { label: 10, value: '#2f54eb' },
    { label: 11, value: '#722ed1' },
    { label: 12, value: '#eb2f96' },
];

function doubleData(data: { label: number, value: string }[]) {
    let newdata = JSON.parse(JSON.stringify(data));
    newdata.map((item: { label: number; value: string; }) => {
        item.label = item.label + 12;
    });
    return [...data, ...newdata];
}

function Flexbox() {
    return (
        <div className="main">
            <h1>
                <span className="colorful-text">Flexbox Playground</span>
            </h1>
            <div className="row">
                <section className="principal">
                    <h2>Properties for the flex container</h2>
                    <FlexDirection colorData={globalColorData.slice(0, 5)} />
                    <FlexWrap colorData={globalColorData.slice(0, 8)} />
                    <AlignItems colorData={globalColorData.slice(0, 5)} />
                    <JustifyContent colorData={globalColorData.slice(0, 5)} />
                    <AlignContent colorData={doubleData(globalColorData)} />
                </section>
                <section className="principal">
                    <h2>Properties for the flex items</h2>
                    <AlignSelf colorData={globalColorData.slice(0, 5)} />
                    <FlexGrow colorData={globalColorData.slice(0, 5)} />
                    <FlexShrink colorData={globalColorData.slice(0, 5)} />
                </section>
            </div>
        </div>
    );
}

export default Flexbox;
