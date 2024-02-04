import React from 'react'
import ErrorMsg from './ErrorMsg'

const Parameter = ({ parameter, label, index, idPrefix, onChange, onFocus, onBlur, colClass = "col" }) => {
    return (
        <div className={`form-group mb-1 ${colClass}`}>
            <label className="fs-sm mb-1" htmlFor={`${idPrefix}-${index}`}>{label}</label>
            <input type="text" className={`form-control form-control-sm ${parameter.error ? "is-invalid" : ""}`} id={`${idPrefix}-${index}`}
                onChange={e => onChange(e.target.value)} 
                onBlur={e => onBlur(e.target.value)}
                onFocus={e => onFocus(e.target.value)}
                value={parameter.input} />
            <ErrorMsg error={parameter.error} input={parameter.input} />
        </div>
    );
}
export default Parameter
