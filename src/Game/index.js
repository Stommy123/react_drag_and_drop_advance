let knightPosition = [1, 7];
let observers = [];

const emitChange = _ => observers.forEach(observer => observer && observer(knightPosition));

export const observe = observedEvent => {
  observers.push(observedEvent);
  emitChange();
  return _ => (observers = observers.filter(observer => observer !== observedEvent));
};

export const canMoveKnight = (toX, toY) => {
  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;
  return (Math.abs(dx) === 2 && Math.abs(dy) === 1) || (Math.abs(dx) === 1 && Math.abs(dy) === 2);
};

export const moveKnight = (toX, toY) => {
  knightPosition = [toX, toY];
  emitChange();
};
