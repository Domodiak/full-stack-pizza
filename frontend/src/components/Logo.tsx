import { Link } from "react-router-dom"

function Logo({ size, link, ...props }: { size: 16 | 32 | 192 | 512, link?: boolean, [key: string]: any }) {
    return link ?
        <Link to="/"><img src={`/icon${size}.png`} alt="FullStackPizza logo" {...props} /></Link> :
        <img src={`/icon${size}.png`} alt="FullStackPizza logo" {...props} />
}

export default Logo