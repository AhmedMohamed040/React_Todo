
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import { Box, Typography } from '@mui/material';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

import { ConfirmDialogProps } from './types';


export default function ConfirmDialog({
  title,
  content,
  buttonTitle,
  buttonColor,
  action,
  open,
  onClose,
  handleConfirmDelete,
  ...other
}: ConfirmDialogProps) {
  return (
    <Dialog transitionDuration={{appear:700}} PaperProps={{ sx: { p:1,borderRadius: 4} }} fullWidth maxWidth="xs" open={open} onClose={onClose} {...other}>
      
      <DialogTitle sx={{ pb: 0.5 }}>{title || 'Delete'}</DialogTitle>

      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box sx={{ py: 1 }}>
          {content ? (
            <Typography variant="body1"> {content} </Typography>
          ) : (
            <Typography variant="body1" color="disabled">
              {`Are you sure you want to delete this todo?`}
            </Typography>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button sx={{borderRadius:2}} variant="outlined" color="inherit" onClick={onClose}>
          {'Cancel'}
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={handleConfirmDelete}
          sx={{borderRadius:2, color: buttonColor === 'warning' ? 'white' : undefined }}
        >
          {typeof buttonTitle === 'string' ? buttonTitle : 'Delete'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
