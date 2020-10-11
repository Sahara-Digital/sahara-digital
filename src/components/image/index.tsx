import React from 'react';
import styled from 'styled-components';

interface IProps {
  img: string;
  alt: string;
  width?: string;
  children?: React.ReactNode;
  props?: any;
}

export const Image = ({ img, alt, width, children, props }: IProps) => {
  return (
    <>
      <Img width={width} src={img} alt={alt} {...props}  />
      {children}
    </>
  );
};

const Img = styled.img<{ width?: string }>`
  ${({ width }) => (width ? `width: ${width}` : `width: 100%`)};
`;
