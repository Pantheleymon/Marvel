import { useState, useRef } from "react";

import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const MainPage = () => {

    const [selectedChar, setChar] = useState(null)

    const onCharSelected = (id) => {
        setChar(id);
    }

    const charInfoRef = useRef(null);

    function charInfoFocus() {
        charInfoRef.current && charInfoRef.current.focus()
    }

    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>

            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} 
                                charId={selectedChar}
                                charInfoFocus={charInfoFocus}
                                />
                </ErrorBoundary>

                <ErrorBoundary>
                    <CharInfo charId={selectedChar} charInfoRef={charInfoRef}/>
                </ErrorBoundary>
            </div>
        </>
    )
}

export default MainPage;