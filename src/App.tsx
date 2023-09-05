import React, { useCallback, useState, useRef } from 'react';
import './App.css';

function App() {
	const [horizontalAlignPosition, setHorizontalAlignPosition] = useState<
		number | undefined
	>();
	const [verticalAlignPosition, setVerticalAlignPosition] = useState<
		number | undefined
	>();

	const squareNodeRef = useRef<HTMLInputElement>(null);
	const circleNodeRef = useRef<HTMLInputElement>(null);
	const rectangleNodeRef = useRef<HTMLInputElement>(null);
	const ellipseNodeRef = useRef<HTMLInputElement>(null);
	const canvasRef = useRef<HTMLInputElement>(null);
	const canvasRect = canvasRef.current?.getBoundingClientRect();

	const checkHorizontalAlignToOtherNodes = () => {
		const squareNodeRect = squareNodeRef.current?.getBoundingClientRect();
		const circleNodeRect = circleNodeRef.current?.getBoundingClientRect();
		const rectangleNodeRect = rectangleNodeRef.current?.getBoundingClientRect();
		const ellipseNodeRect = ellipseNodeRef.current?.getBoundingClientRect();

		switch (true) {
			case squareNodeRect?.left === circleNodeRect?.left:
			case squareNodeRect?.left === rectangleNodeRect?.left:
			case squareNodeRect?.left === ellipseNodeRect?.left:
				setHorizontalAlignPosition(squareNodeRect?.left);
				break;
			case squareNodeRect?.left === circleNodeRect?.right:
			case squareNodeRect?.left === rectangleNodeRect?.right:
			case squareNodeRect?.left === ellipseNodeRect?.right:
				setHorizontalAlignPosition(squareNodeRect?.left);
				break;
			case squareNodeRect?.right === circleNodeRect?.left:
			case squareNodeRect?.right === rectangleNodeRect?.left:
			case squareNodeRect?.right === ellipseNodeRect?.left:
				setHorizontalAlignPosition(squareNodeRect?.right);
				break;
			case squareNodeRect?.right === circleNodeRect?.right:
			case squareNodeRect?.right === rectangleNodeRect?.right:
			case squareNodeRect?.right === ellipseNodeRect?.right:
				setHorizontalAlignPosition(squareNodeRect?.right);
				break;
			case circleNodeRect?.left === rectangleNodeRect?.left:
			case circleNodeRect?.left === ellipseNodeRect?.left:
				setHorizontalAlignPosition(circleNodeRect?.left);
				break;
			case circleNodeRect?.left === rectangleNodeRect?.right:
			case circleNodeRect?.left === ellipseNodeRect?.right:
				setHorizontalAlignPosition(circleNodeRect?.left);
				break;
			case circleNodeRect?.right === rectangleNodeRect?.left:
			case circleNodeRect?.right === ellipseNodeRect?.left:
				setHorizontalAlignPosition(circleNodeRect?.right);
				break;
			case circleNodeRect?.right === rectangleNodeRect?.right:
			case circleNodeRect?.right === ellipseNodeRect?.right:
				setHorizontalAlignPosition(circleNodeRect?.right);
				break;
			case rectangleNodeRect?.left === ellipseNodeRect?.left:
				setHorizontalAlignPosition(rectangleNodeRect?.left);
				break;
			case rectangleNodeRect?.left === ellipseNodeRect?.right:
				setHorizontalAlignPosition(rectangleNodeRect?.left);
				break;
			case rectangleNodeRect?.right === ellipseNodeRect?.left:
				setHorizontalAlignPosition(rectangleNodeRect?.right);
				break;
			case rectangleNodeRect?.right === ellipseNodeRect?.right:
				setHorizontalAlignPosition(rectangleNodeRect?.right);
				break;
			default:
				setHorizontalAlignPosition(undefined);
				break;
		}
	};

	const checkVerticalAlignToOtherNodes = () => {
		const squareNodeRect = squareNodeRef.current?.getBoundingClientRect();
		const circleNodeRect = circleNodeRef.current?.getBoundingClientRect();
		const rectangleNodeRect = rectangleNodeRef.current?.getBoundingClientRect();
		const ellipseNodeRect = ellipseNodeRef.current?.getBoundingClientRect();

		switch (true) {
			case squareNodeRect?.top === circleNodeRect?.top:
			case squareNodeRect?.top === rectangleNodeRect?.top:
			case squareNodeRect?.top === ellipseNodeRect?.top:
				setVerticalAlignPosition(squareNodeRect?.top);
				break;
			case squareNodeRect?.top === circleNodeRect?.bottom:
			case squareNodeRect?.top === rectangleNodeRect?.bottom:
			case squareNodeRect?.top === ellipseNodeRect?.bottom:
				setVerticalAlignPosition(squareNodeRect?.top);
				break;
			case squareNodeRect?.bottom === circleNodeRect?.top:
			case squareNodeRect?.bottom === rectangleNodeRect?.top:
			case squareNodeRect?.bottom === ellipseNodeRect?.top:
				console.log(squareNodeRect?.bottom);
				setVerticalAlignPosition(squareNodeRect?.bottom);
				break;
			case squareNodeRect?.bottom === circleNodeRect?.bottom:
			case squareNodeRect?.bottom === rectangleNodeRect?.bottom:
			case squareNodeRect?.bottom === ellipseNodeRect?.bottom:
				setVerticalAlignPosition(squareNodeRect?.bottom);
				break;
			case circleNodeRect?.top === rectangleNodeRect?.top:
			case circleNodeRect?.top === ellipseNodeRect?.top:
				setVerticalAlignPosition(circleNodeRect?.top);
				break;
			case circleNodeRect?.top === rectangleNodeRect?.bottom:
			case circleNodeRect?.top === ellipseNodeRect?.bottom:
				setVerticalAlignPosition(circleNodeRect?.top);
				break;
			case circleNodeRect?.bottom === rectangleNodeRect?.top:
			case circleNodeRect?.bottom === ellipseNodeRect?.top:
				setVerticalAlignPosition(circleNodeRect?.bottom);
				break;
			case circleNodeRect?.bottom === rectangleNodeRect?.bottom:
			case circleNodeRect?.bottom === ellipseNodeRect?.bottom:
				setVerticalAlignPosition(circleNodeRect?.bottom);
				break;
			case rectangleNodeRect?.top === ellipseNodeRect?.top:
				setVerticalAlignPosition(rectangleNodeRect?.top);
				break;
			case rectangleNodeRect?.top === ellipseNodeRect?.bottom:
				setVerticalAlignPosition(rectangleNodeRect?.top);
				break;
			case rectangleNodeRect?.bottom === ellipseNodeRect?.top:
				setVerticalAlignPosition(rectangleNodeRect?.bottom);
				break;
			case rectangleNodeRect?.bottom === ellipseNodeRect?.bottom:
				setVerticalAlignPosition(rectangleNodeRect?.bottom);
				break;
			default:
				setVerticalAlignPosition(undefined);
				break;
		}
	};

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
			checkHorizontalAlignToOtherNodes();
			checkVerticalAlignToOtherNodes();
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
			checkHorizontalAlignToOtherNodes();
			checkVerticalAlignToOtherNodes();
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
			checkHorizontalAlignToOtherNodes();
			checkVerticalAlignToOtherNodes();
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
			checkHorizontalAlignToOtherNodes();
			checkVerticalAlignToOtherNodes();
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
			<div ref={canvasRef} className='canvas'>
				<div
					ref={squareNodeRef}
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
					ref={circleNodeRef}
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
					ref={rectangleNodeRef}
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
					ref={ellipseNodeRef}
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
				<div
					className='verticalLine'
					style={{
						left: horizontalAlignPosition
							? horizontalAlignPosition - canvasRect?.left!
							: horizontalAlignPosition,
						top: 0,
					}}
				/>
				<div
					className='horozontalLine'
					style={{
						left: 0,
						top: verticalAlignPosition
							? verticalAlignPosition - canvasRect?.top!
							: verticalAlignPosition,
					}}
				/>
			</div>
		</div>
	);
}

export default App;
