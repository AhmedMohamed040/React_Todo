import {Stack, Button, Dialog, DialogTitle, DialogActions, Typography } from '@mui/material';
import { TodoItem } from '../../types/todo';

interface Props {
  open: boolean;
  onClose: () => void;
  todo: TodoItem;
}

export default function ViewTodoDialog({ open, onClose, todo }: Props) {
  return (
    <Dialog transitionDuration={{appear:700}} PaperProps={{ sx: { borderRadius: 4} }} fullWidth maxWidth="sm" open={open} onClose={() => onClose()}>
      <DialogTitle sx={{ pb: 0 }}>
      <Typography variant="h6" color="primary.main">
           {todo?.title}
          </Typography>
      </DialogTitle>

        <Stack spacing={2} sx={{ p: 3 }}>
      
          <Typography variant="body1" color="primary.light">
           {todo?.content}
          </Typography>
        </Stack>

        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button variant="outlined" onClick={onClose} sx={{borderRadius: 2}}> 
            {'Cancel'}
          </Button>
        </DialogActions>
    </Dialog>
  );
}
