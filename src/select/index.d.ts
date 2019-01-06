import * as React from 'react';
import './style.styl';
interface IProps extends React.Props<any> {
    value: string;
    style?: React.CSSProperties;
    className?: string;
    onChange: (value: string) => void;
}
interface IOptProps extends React.Props<any> {
    value: string;
    style?: React.CSSProperties;
    className?: string;
}
export declare const Select: {
    (props: IProps): JSX.Element;
    Option: typeof Option;
};
declare function Option(_props: IOptProps): null;
export {};
