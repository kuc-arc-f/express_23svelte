import * as React from 'react';

//
export function Csr() { 
    return (
    <html>
        <head>
        <title>welcome</title>
        </head>
        <div id="app"></div>
        {(process.env.NODE_ENV === "develop") ? (
            <script type="module" src="/static/main.js"></script>
        ): (
            <script type="module" src="/public/static/main.js"></script>
        )}
    </html>
    );
}
/*
        <script type="module" src="/public/static/main.js"></script>
*/
