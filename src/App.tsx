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
		[setSquareState],
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
	}, [setSquareState]);

	const [circleState, setCircleState] = useState({
		isDragging: false,
		position: { x: 120, y: 170 },
		startDraggingPoint: { x: 0, y: 0 },
	});

	const handleCircleDragStart = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const startDraggingPoint = {
				x: clientX,
				y: clientY,
			};
			setCircleState((state) => ({
				...state,
				startDraggingPoint,
				isDragging: true,
			}));
		},
		[setCircleState],
	);

	const handleCircleDrag = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const position = {
				x: clientX - circleState.startDraggingPoint.x + circleState.position.x,
				y: clientY - circleState.startDraggingPoint.y + circleState.position.y,
			};
			setCircleState((state) => ({ ...state, position }));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[circleState.startDraggingPoint.x, circleState.startDraggingPoint.y],
	);

	const handleCirleDragEnd = useCallback(() => {
		setCircleState((state) => ({
			...state,
			isDragging: false,
		}));
	}, [setCircleState]);

	const [reactangleState, setRectangleState] = useState({
		isDragging: false,
		position: { x: 310, y: 210 },
		startDraggingPoint: { x: 0, y: 0 },
	});

	const handleRectangleDragStart = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const startDraggingPoint = {
				x: clientX,
				y: clientY,
			};
			setRectangleState((state) => ({
				...state,
				startDraggingPoint,
				isDragging: true,
			}));
		},
		[setRectangleState],
	);

	const handleRectangleDrag = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const position = {
				x:
					clientX -
					reactangleState.startDraggingPoint.x +
					reactangleState.position.x,
				y:
					clientY -
					reactangleState.startDraggingPoint.y +
					reactangleState.position.y,
			};
			setRectangleState((state) => ({ ...state, position }));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[reactangleState.startDraggingPoint.x, reactangleState.startDraggingPoint.y],
	);

	const handleRectangleDragEnd = useCallback(() => {
		setRectangleState((state) => ({
			...state,
			isDragging: false,
		}));
	}, [setRectangleState]);

	const [ellipseState, setEllipseState] = useState({
		isDragging: false,
		position: { x: 540, y: 490 },
		startDraggingPoint: { x: 0, y: 0 },
	});

	const handleEllipseDragStart = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const startDraggingPoint = {
				x: clientX,
				y: clientY,
			};
			setEllipseState((state) => ({
				...state,
				startDraggingPoint,
				isDragging: true,
			}));
		},
		[setEllipseState],
	);

	const handleEllipseDrag = useCallback(
		({ clientX, clientY }: { clientX: number; clientY: number }) => {
			const position = {
				x: clientX - ellipseState.startDraggingPoint.x + ellipseState.position.x,
				y: clientY - ellipseState.startDraggingPoint.y + ellipseState.position.y,
			};
			setEllipseState((state) => ({ ...state, position }));
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[ellipseState.startDraggingPoint.x, ellipseState.startDraggingPoint.y],
	);

	const handleEllipseDragEnd = useCallback(() => {
		setEllipseState((state) => ({
			...state,
			isDragging: false,
		}));
	}, [setEllipseState]);

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
				<div
					draggable={true}
					className='circle'
					style={{
						cursor: circleState.isDragging ? 'grabbing' : 'grab',
						left: circleState.position.x,
						top: circleState.position.y,
					}}
					onDragStart={handleCircleDragStart}
					onDrag={handleCircleDrag}
					onDragEnd={handleCirleDragEnd}
				/>
				<div
					draggable={true}
					className='rectangle'
					style={{
						cursor: reactangleState.isDragging ? 'grabbing' : 'grab',
						left: reactangleState.position.x,
						top: reactangleState.position.y,
					}}
					onDragStart={handleRectangleDragStart}
					onDrag={handleRectangleDrag}
					onDragEnd={handleRectangleDragEnd}
				/>
				<div
					draggable={true}
					className='ellipse'
					style={{
						cursor: ellipseState.isDragging ? 'grabbing' : 'grab',
						left: ellipseState.position.x,
						top: ellipseState.position.y,
					}}
					onDragStart={handleEllipseDragStart}
					onDrag={handleEllipseDrag}
					onDragEnd={handleEllipseDragEnd}
				/>
			</div>
		</div>
	);
}

export default App;
