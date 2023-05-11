import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import styled from "@emotion/styled";

interface INoteProps {
    note:NoteObject,
    deleteNote:(id: number) => void
}

const StyledCard = styled(Card)`
  width:400px;
  margin:20px;
`
const Wrapper = styled(Button)`
   border: 1px solid #000;
   background: #fff;
   margin-top:5px;
`
const Note:React.FC<INoteProps>= ({note,deleteNote})=> {
    return(
        <StyledCard style={{backgroundColor: note.color}}>
          <CardContent>
            <Box>
                <Typography>{note.title}</Typography>
                <Typography>{note.details}</Typography>
                <Typography>{note.date}</Typography>
                <Wrapper variant="outlined"onClick={()=> deleteNote(note.id)}>Delete</Wrapper>
            </Box>
          </CardContent>
        </StyledCard>
    )
}
export default Note;