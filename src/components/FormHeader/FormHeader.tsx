import { FC } from 'react';
import { Typography } from '@mui/material';

interface FormHeaderProps {
  title: string;
  content: string;
}

export const FormHeader: FC<FormHeaderProps> = ({ title, content }) => {
  return (
    <div>
      <Typography variant='h3'>{title}</Typography>
      <Typography variant='body1' color='gray'>
        {content}
      </Typography>
    </div>
  );
};
