import React from 'react';

interface IInputProps {
    value:string,
    onChange: (event: React.SyntheticEvent<HTMLInputElement>) => void
}

const Input:React.FunctionComponent<IInputProps> = ({value, onChange}) => (
    <input type="text" placeholder="Name" value={value} onChange={onChange}/>
)

interface IFormProps {
    onFormSubmit : (event:React.FormEvent) => void
}

const Form:React.FunctionComponent<IFormProps> = ({children,onFormSubmit}) => (
    <form onSubmit={onFormSubmit}>{children}</form>
)

export {Input, Form}