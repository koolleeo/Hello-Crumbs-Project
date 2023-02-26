import Button from '@mui/material/Button';

function SubmitOptionsButton(props) {

    return (
        <Button 
            spacing={3} 
            sx={{margin: 2}} 
            variant="contained" 
            onClick={props.clickHandler}>Submit options
        </Button>
    )

    // TODO: apply custom css
}

export default SubmitOptionsButton;