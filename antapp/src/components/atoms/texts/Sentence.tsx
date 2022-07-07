import { Typography } from '@mui/material';
import { FC } from 'react';

type SentenceProps = {
  text: string;
};

const Sentence: FC<SentenceProps> = ({ text }) => (
  <Typography
    component="p"
    variant="caption"
    textAlign="start"
    style={{ whiteSpace: 'pre-wrap' }}
  >
    {text}
  </Typography>
);

export default Sentence;
