import React from 'react'
import Parameter from './ParamFormGroup';

const Reference = ({reference, index, number, onReference, onFocus, onBlur}) =>
    <Parameter
        parameter={reference}
        label={`Premise ${number}`}
        idPrefix={`reference${number}`}
        onChange={onReference}
        colClass='col-2 col-lg-1'
        {...{ index, onFocus, onBlur }}
    />;

export default Reference