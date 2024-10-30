import { memo } from "react";

function Child() {
    console.log('Child is being re-rendered');
    return (
        <div>Child</div>
    );
}

export default memo(Child);
