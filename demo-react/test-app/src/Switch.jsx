import './Switch.css';

function Switch({ isFlipped }) {
    const switchClass = isFlipped ? "switch-on" : "";
    
    return (
        <div className="switch__container">
        <div className={`switch ${switchClass}`}/>
        </div>
    );
}

export default Switch;