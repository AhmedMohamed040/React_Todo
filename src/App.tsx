import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import theme from './theme/mui-theme';
import { Button, CssBaseline, Typography } from '@mui/material';

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Typography variant="h6" color="warning.light">
        cand u it
      </Typography>
      <Button variant="contained" color="primary">sdfsdf</Button>
      </ThemeProvider>
    </>
  )
}

export default App
