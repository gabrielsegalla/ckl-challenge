import React from 'react';

const Category = (props) => (
    <label class="btn btn-outline" style={{color: props.hex_color, borderColor: props.hex_color}}>
        <input type="checkbox" name="options" id="option1" autocomplete="off" value={props.id}/> {props.name}
    </label>
    
);

export default Category;