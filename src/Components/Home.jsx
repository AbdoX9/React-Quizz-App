import { Button } from "./Button";

export function Home() {
    const myStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }
      
    return (
        <>
        <div style={myStyle}>
        <div>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <Button text={"Start quiz"} pathing={"/answers"} />
        </div>
        </div>
        </>
    )
}