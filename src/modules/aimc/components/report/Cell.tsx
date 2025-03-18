import * as React from 'react';

interface IProps {
   className?: string;
   children?: React.ReactNode;
   width?: number | string;
   height?: number | string;
}

export default function Cell({
    className,
    children,
    width,
    height,
                            }: IProps) {
    return (
        <div
            className={`cell${className ? ' '+className : ''}`}
            style={{
                width: width,
                height: height,
            }}
        >
            {children}
        </div>
    );
}
