export function MacButtons({ maximize, minimize }: { maximize: () => void, minimize: () => void }) {
    return (
        <>
            <div className="mac-buttons">
                <div className="mac-button mac-close-button"></div>
                <div className="mac-button mac-minimize-button" onClick={() => minimize()}></div>
                <div className="mac-button mac-maximize-button" onClick={() => maximize()}></div>
            </div>
        </>
    )
}