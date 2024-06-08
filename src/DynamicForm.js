import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { TextInput, DropdownSingle, CheckboxList, RadioList, DatePicker } from 'oolib';

const fetchFormConfig = async () => {
    const { data } = await axios.get('http://localhost:3001/api/form-config');
    return data;
};

const handleChange=(id,value)=>{
    console.log(`Value changed for ${id}: ${value}`);
}
const DynamicForm = () => {
    const { data, isLoading, error } = useQuery('formConfig', fetchFormConfig);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error fetching form configuration</div>;

    const renderComponent = (component) => {
        switch (component.comp) {
            case 'TextInput':
                return <TextInput key={component.props.id} {...component.props} onChange={handleChange}/>;
            case 'DropdownSingle':
                return <DropdownSingle key={component.props.id} {...component.props} onChange={handleChange}/>;
            case 'CheckboxList':
                return <CheckboxList key={component.props.id} {...component.props} onChange={handleChange}/>;
            case 'RadioList':
                return <RadioList key={component.props.id} {...component.props} onChange={handleChange} />;
            case 'DatePicker':
                return <DatePicker key={component.props.id} {...component.props} onChange={handleChange}/>;
            default:
                return null;
        }
    };

    return (
        <form >
            {data.map((component) => renderComponent(component))}
        </form>
    );
};

export default DynamicForm;
