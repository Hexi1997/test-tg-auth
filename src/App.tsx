import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const key = 'auth-is-refreshed';
function App() {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const origin = encodeURIComponent(location.origin)
    const isRefreshed = !!localStorage.getItem(key);
    console.log('isRefreshed',isRefreshed);
    if(location.hash) return;
    if(isRefreshed) {
      localStorage.removeItem(key)
      location.href = `https://oauth.telegram.org/auth?bot_id=7076502228&origin=${origin}&request_access=write&return_to=${origin}`
    }else {
       //先进行一次页面重载，防止tg oauth 关闭标签页
       localStorage.setItem(key,"true")
       location.reload();
    }
  },[])

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
