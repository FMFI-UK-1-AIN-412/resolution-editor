import React from 'react'
import Parameter from './ParamFormGroup';

const Renaming = ({renaming, index, onRenaming, onFocus, onBlur}) =>
    <Parameter
        parameter={renaming}
        label="Renaming"
        idPrefix="renaming"
        onChange={onRenaming}
        {...{ index, onFocus, onBlur }}
    />;

export default Renaming