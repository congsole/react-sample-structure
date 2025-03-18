import * as React from 'react';

interface IProps {
   className?: string;
   children?: React.ReactNode;
   width?: number | string;
   height?: number | string;
}

export default function Row({
    className,
    children,
    width = "100%",
    height,
                            }: IProps) {
    return (
        <div
            className={`row${className ? ' '+className : ''}`}
            style={{
                width: width,
                height: height,
            }}
        >
            {children}
        </div>
    );
}
