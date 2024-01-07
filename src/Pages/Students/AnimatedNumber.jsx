import {animated, useSpring} from "react-spring";
import React from "react";

const AnimatedNumber = ({value, text = ''}) => {
    const props = useSpring({
        from: {number: 0},
        to: {number: parseFloat(value)}, // Convert value to a float
        config: {duration: 1500},
    });

    return <animated.div>{props.number.interpolate((val) => `${val.toFixed(0)}${text}`)}</animated.div>;
};

export default AnimatedNumber