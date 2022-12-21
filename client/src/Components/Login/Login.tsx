import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const URL: string = 'http://localhost:8080/api/v1/auth';
    const navigate = useNavigate();
    const [username, setLogin] = useState("");
    const [password, setPassword] = useState("");
    let handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
    const body = JSON.stringify({
    username: username,
    password: password})
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set('Content-Type', 'application/json');
    console.log(JSON.stringify({
        username: username,
        password: password}))
    let res = await fetch(URL + "/login", {
        method: "POST",
        mode: "cors",
        headers: requestHeaders,
        body: body
    });
    console.log(res.text)
      // let resJson = await res.json();
    if (res.status === 200) {
        setLogin("");
        setPassword("");
        // var isAuth = true;
        // ProtectedRouts({isAuth})
        navigate("/home");
    } else {
    }
    } catch (err) {
      console.log(err);
    }};
    return (
        <>
            <form className="login-form" onSubmit={handleSubmit}>
                <input
                type="text"
                value={username}
                placeholder="username"
                onChange={(e) => setLogin(e.target.value)}
                />
                <input
                type="text"
                value={password}
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                />

                <button className="login" type="submit">Login</button>
            </form>
        </>
    )
}
export default Login;