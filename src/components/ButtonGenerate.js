// rfc
import React from 'react';
import { generateDataAction } from '../reduxFile/actions';
import { useDispatch } from 'react-redux';

const ButtonGenerate = () => {

    // 
    const dispatch = useDispatch();

    // RENDER - RETURN :
    return (
        <>
            <button type="button" className="btn btn-success" style={{marginLeft:'5px'}} onClick={() => { dispatch(generateDataAction()) }}>
                <span className="fa fa-plus mr-5" />GENERATE_DATA
            </button>
        </>
    );
}

export default ButtonGenerate;
