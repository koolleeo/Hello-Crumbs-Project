import Button from '@mui/material/Button';

function SubmitOptionsButton() {

    const clickHandler = () => {
        // TODO: replace with API call on submit
        alert('button pressed - update me');
    }

    return (
        <Button 
            spacing={3} 
            sx={{margin: 2}} 
            variant="contained" 
            onClick={clickHandler}>Submit options
        </Button>
    )

    // TODO: apply custom css
}

export default SubmitOptionsButton;