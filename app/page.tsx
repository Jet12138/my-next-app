import Link from "next/link";
import appcss from "./app.module.css";
export default function Page(){
    return (
        <div>
            <h1 className="text-3xl font-bold text-center underline">Hello world!</h1>
            <p>This is next.js app !</p>
            <Link href={`/blog`} style={{color: appcss.color}}>  to /blog </Link>
            <br />
            <Link href={`/blog2`}>  to /blog2 </Link>
        </div>
    )
}
