import React, { useState } from 'react';
import './App.css';

function Grid() {
    const [gridSize, setGridSize] = useState(1); // Default to 1 image

    const image = 'https://images.unsplash.com/photo-1520022974279-a96d1e249eab?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8NTAwfGVufDB8fDB8fHww'; // Single image to repeat

    const handleGridChange = (size) => {
        setGridSize(size);
    };

    return (
        <div className="App">
            <div className="button-container">
                <button className='btn' onClick={() => handleGridChange(1)}>Normal</button>
                <button className='btn' onClick={() => handleGridChange(2)}>2d-grid</button>
                <button className='btn' onClick={() => handleGridChange(4)}>4d-grid</button>
                <button className='btn' onClick={() => handleGridChange(8)}>8d-grid</button>
            </div>
            <div className={`image-grid grid-${gridSize}`}>
                {Array.from({ length: gridSize }).map((_, index) => (
                    <img key={index} src={image} alt={`img-${index + 1}`} />
                ))}
            </div>
        </div>
    );
}

export default Grid;

