import './App.css'
import View from '../src/sections/main/view';
import { Box, Container } from '@mui/material';
function App() {

  return (
    <>
        <Box sx={{bgcolor:'primary.light', height:'100vh', overflowX:"hidden"}}>
          <Container >
            <View />
          </Container>
        </Box>
    </>
  )
}

export default App
