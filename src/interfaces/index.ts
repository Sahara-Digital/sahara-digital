import { History } from 'history';

export interface IPagesProps {
    history: History;
}

export interface IHeaderNavigation {
    history: History;
    children?: React.ReactNode;
    className?: string;
}

export interface ISVG {
    viewBox?: string;
    width?: string;
    height?: string;
    fill?: string;
    className?: string;
}

export interface IProps {
    isOpen: any;
    setOpen: any;
    className?: string;
}
