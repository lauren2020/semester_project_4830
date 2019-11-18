import React from "react"

const BaseDivider = ({
    color,
    thickness,
    orientation,
    length
}) => {
    const height = orientation && orientation == "veritcal"
        ?  length ? length : "100%"
        : thickness ? thickness : "2px"
    const width = !orientation || orientation == "horizontal"
        ?  length ? length : "100%"
        : thickness ? thickness : "2px"

    const styles = {
        backgroundColor: color ? color : "black",
        width,
        height,
    }
    return (
        <div style={styles}></div>
    )
}

export default BaseDivider;