function Hero(){
    const hero = false
    return (
        <div className='container'>
            {hero && <h1>title</h1>}
            {!hero && <h2>title</h2>}
        </div>
    )
}
export default Hero