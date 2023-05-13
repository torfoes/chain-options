import React from 'react';

type NodeData = {
    id: string;
    type?: string;
    data: { label: string | JSX.Element };
    position: { x: number; y: number };
    style: { backgroundColor: string; color: string };
};

const nodes: NodeData[] = [
    {
        id: '1',
        type: 'input',
        data: { label: 'Input Node' },
        position: { x: 250, y: 25 },
        style: { backgroundColor: '#6ede87', color: 'white' },
    },

    {
        id: '2',
        data: { label: <div>Default Node</div> },
        position: { x: 100, y: 125 },
        style: { backgroundColor: '#ff0072', color: 'white' },
    },
    {
        id: '3',
        type: 'output',
        data: { label: 'Output Node' },
        position: { x: 250, y: 250 },
        style: { backgroundColor: '#6865A5', color: 'white' },
    },
];

export default nodes;
