import React from 'react';
import PropTypes from 'prop-types';
import { Select } from "antd";

const AutoComplete = ({options, onSearch, onChange}) => {
    return (
        <>
            <div className="ac">
                <Select
                    allowClear
                    showSearch
                    style={{width: "100%"}}
                    placeholder="Please select category"
                    options={options}
                    filterOption={false}
                    onSearch={(value) => onSearch(value)}
                    onChange={(value) => onChange(value)}
                    onBlur={() => onSearch()}
                    onClear={() => onSearch()}
                ></Select>
            </div>
        </>
    );
}

AutoComplete.propTypes = {
    options: PropTypes.array,
    onSearch: PropTypes.func,
    onChange: PropTypes.func
}

export default AutoComplete;