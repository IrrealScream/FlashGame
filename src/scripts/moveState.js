const LEFT=Symbol(0);
const RIGHT= Symbol(1);
const UP=Symbol(2);
const DOWN=Symbol(3);
const STOP=Symbol(4);

export default class MoveState{
    static get LEFT(){return LEFT};
    static get RIGHT(){return RIGHT};
    static get UP(){return UP};
    static get DOWN(){return DOWN};
    static get STOP(){return STOP};
}