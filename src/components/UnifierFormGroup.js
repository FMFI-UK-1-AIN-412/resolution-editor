import React from 'react'
import Parameter from './ParamFormGroup';

const Unifier = ({ unifier, index, onUnifier, onFocus, onBlur}) =>
    <Parameter
        parameter={unifier}
        label="Unifier"
        isPrefix="unifier"
        onChange={onUnifier}
        {...{ index, onFocus, onBlur }}
    />;

    export default Unifier