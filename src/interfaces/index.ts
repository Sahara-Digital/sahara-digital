import { History } from 'history';

export interface IPagesProps {
    history: History;
}

export interface IHeaderNavigation {
    history: History;
    children?: React.ReactNode;
}

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
}

export interface IProps {
    open?: any;
    setOpen?: any;
}
