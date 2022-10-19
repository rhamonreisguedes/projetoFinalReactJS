import voldemort from '../../assets/img/voldemort.png'
import './not-found.css'

import {
    Grid,
    Stack,
} from '@mui/material';


const NotFound = () => {
    return <Grid container>
                <Grid item xs={12} style={{ textAlign: 'center'}}>
                    <img src={voldemort} className='photo-voldemort' alt="Voldemort"/>    
                </Grid>   
                <Grid item xs={12}>
                    <div className='stack-text'>
                            <h2 className='text'>Página não encontrada, trouxa.</h2>
                            <h2 className='text'>Avada Kedavra!</h2>
                    </div>
                </Grid>   
           </Grid>

}

export default NotFound;



