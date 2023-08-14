import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
       <TwitterFollowCard userName={"linareswst"}>
            Alejandro Linares
       </TwitterFollowCard>
       <TwitterFollowCard userName={"midudev"}>
        Miguel Durán
       </TwitterFollowCard>
       </section>
    )
}