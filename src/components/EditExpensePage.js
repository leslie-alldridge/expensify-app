import React from 'react';

const EditExpensePage = (props) => (
    <div>This is from my edit expense component with an ID of: {props.match.params.id}</div>
);

export default EditExpensePage