import Head from "next/head"
import Link from "next/link"
import Script from "next/script";

export default function FirstPost() {
    return (
        <div>
            <Head>
            <title>Bootstrap Example</title>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"> </Link>
            <Script href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
        </Head>
            <h1>My First Bootstrap Page</h1>
            <button type="button" className="btn">Basic</button>
            <button type="button" className="btn btn-primary">Primary</button>
            <p>This part is inside a .container class.</p> 
            <p>The .container class provides a responsive fixed width container.</p> 

            <form action="/api/form" method="post">
                <label for="first">First name:</label>
                <input type="text" id="first" name="first" />
                <label for="last">Last name:</label>
                <input type="text" id="last" name="last" />
                <button type="submit">Submit</button>
            </form>
        </div>
      
            
      
    );
}