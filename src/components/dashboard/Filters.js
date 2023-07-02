import React from 'react';

import Select from 'react-select';


const Filter = (props) => {
	return <Select
    isMulti
    name="filter"
    options={props.data}
    className="basic-multi-select"
	placeholder={props.holder}
    classNamePrefix="select" />
};
export default Filter;