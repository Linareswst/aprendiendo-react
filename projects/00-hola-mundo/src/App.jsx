import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
       <TwitterFollowCard isFollowing userName={"linareswst"} name={"Alejandro Linares"}/>
       <TwitterFollowCard isFollowing={false} userName={"midudev"} name={"Miguel Durán"}/>
       <TwitterFollowCard isFollowing userName={"elonmusk"} name={"Elon Musk"}/>
       <TwitterFollowCard isFollowing userName={"elxokas"} name={"El Xokas"}/>
       </section>
    )
}