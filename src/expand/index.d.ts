import * as React from 'react';
import './style.styl';
interface IProps extends React.Props<any> {
    title: string;
    className?: string;
    style?: React.CSSProperties;
}
export declare function Expand(props: IProps): JSX.Element;
export {};
