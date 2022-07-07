import { Typography } from '@mui/material';
import { FC } from 'react';

type PageTitleProps = {
  text: string;
};

const PageTitle: FC<PageTitleProps> = ({ text }) => (
  <Typography
    component="p"
    variant="h6"
    fontWeight="bold"
    textAlign="center"
    mb="8px"
  >
    {text}
  </Typography>
);

export default PageTitle;
