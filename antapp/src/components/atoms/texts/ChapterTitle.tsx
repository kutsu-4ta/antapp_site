import { Typography } from '@mui/material';
import { FC } from 'react';

type ChapterTitleProps = {
  text: string;
};

const ChapterTitle: FC<ChapterTitleProps> = ({ text }) => (
  <Typography
    component="p"
    variant="subtitle2"
    fontWeight="bold"
    textAlign="start"
  >
    {text}
  </Typography>
);

export default ChapterTitle;
