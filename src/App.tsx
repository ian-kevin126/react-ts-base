import React, {Suspense} from 'react';
import SuspendFallbackLoading from "@/pages/layout/SuspendFallbackLoading";
import {BrowserRouter} from "react-router-dom";
import RenderRouter from "@/routes";

function App() {
    return (
        <Suspense fallback={
            <SuspendFallbackLoading
                message="Alert message title"
                description="Further details about the context of this alert."
            />
        }>
            <BrowserRouter>
                <RenderRouter />
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
