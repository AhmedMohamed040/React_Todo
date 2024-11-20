
import {Stack, Button, Dialog, DialogTitle, DialogActions, TextField } from '@mui/material';
import { TodoItem } from '../../types/todo';
import React, { useCallback, useState } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  todo?: TodoItem;
  handleTodo:(item:{title:string, content:string}) => void;
};

export default function NewEditTodoDialog({ open, onClose, todo,handleTodo }: Props) {
  const [title, setTitle] = useState<string>(todo?.title || '');
  const [content, setContent] = useState<string>(todo?.content || '');
  const handleTitle = (event:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const handleContent = (event:React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };
  const handleSubmit = () => {
   const item ={
    title,
    content
   };
   handleTodo(item);
  };
  return (
    <Dialog transitionDuration={{appear:700}} PaperProps={{ sx: { borderRadius: 4} }} fullWidth maxWidth="xs" open={open} onClose={() => onClose()}>
      <DialogTitle sx={{ pb: 0 }}>
        {todo ? 'Edit Package' : 'Add New Package'}
      </DialogTitle>

        <Stack spacing={2} sx={{ p: 3 }}>
          <TextField
              label="Title"
              fullWidth
              name="title"
              value={title}
              onChange={handleTitle }
              sx={{ mb: 3 }}
              InputProps={{ sx: { borderRadius: 3 } }}
              placeholder="title..."
            />
             <TextField
              label="Content"
              name="content"
              value={content}
              onChange={handleContent}
              fullWidth
              sx={{ mb: 3 }}
              InputProps={{ sx: { borderRadius: 3 } }}
              placeholder="content..."
            />
        </Stack>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button variant="outlined" onClick={onClose} sx={{borderRadius: 2}}>
            {'Cancel'}
          </Button>
          <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" sx={{borderRadius: 2}}>
            {todo ? 'Edit' : 'Save'}
          </Button>
        </DialogActions>
    </Dialog>
  );
}
