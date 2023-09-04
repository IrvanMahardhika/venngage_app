import React, { useCallback, useState } from 'react';
import './App.css';

function App() {
	const [squareState, setSquareState] = useState({
		isDragging: false,
		position: { x: 20, y: 50 },
		startDraggingPoint: { x: 0, y: 0 },
	});

	const handleSquareDragStart = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const startDraggingPoint = {
				x: clientX,
				y: clientY,
			};
			setSquareState((state) => ({
				...state,
				startDraggingPoint,
				isDragging: true,
			}));
		},
		[],
	);

	const handleSquareDrag = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const position = {
				x: clientX - squareState.startDraggingPoint.x + squareState.position.x,
				y: clientY - squareState.startDraggingPoint.y + squareState.position.y,
			};
			setSquareState((state) => ({ ...state, position }));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[squareState.startDraggingPoint.x, squareState.startDraggingPoint.y],
	);

	const handleSquareDragEnd = useCallback(() => {
		setSquareState((state) => ({
			...state,
			isDragging: false,
		}));
	}, []);

	return (
		<div className='App'>
			<div className='kanvas'>
				<div
					draggable={true}
					className='square'
					style={{
						cursor: squareState.isDragging ? 'grabbing' : 'grab',
						left: squareState.position.x,
						top: squareState.position.y,
					}}
					onDragStart={handleSquareDragStart}
					onDrag={handleSquareDrag}
					onDragEnd={handleSquareDragEnd}
				/>
			</div>
		</div>
	);
}

export default App;
